#!/usr/bin/env python3
"""
MedLiaison AI - Server
Zero-dependency HTTP server with direct file serving and Gemini API support
"""

import http.server
import socketserver
import os
import json
import urllib.parse
from http import HTTPStatus

PORT = 8080
DIRECTORY = os.path.dirname(os.path.abspath(__file__))

class MedLiaisonHandler(http.server.BaseHTTPRequestHandler):
    def do_GET(self):
        url_path = urllib.parse.urlparse(self.path).path
        if url_path in ('/', ''):
            file_path = os.path.join(DIRECTORY, 'index.html')
        else:
            clean_path = url_path.lstrip('/')
            file_path = os.path.join(DIRECTORY, clean_path)

        # Basic security against path traversal
        if not os.path.abspath(file_path).startswith(DIRECTORY):
            self.send_response(HTTPStatus.FORBIDDEN)
            self.end_headers()
            self.wfile.write(b'Access Denied')
            return

        if os.path.exists(file_path) and os.path.isfile(file_path):
            self.send_response(HTTPStatus.OK)
            if file_path.endswith('.html'):
                self.send_header('Content-Type', 'text/html; charset=utf-8')
            elif file_path.endswith('.js'):
                self.send_header('Content-Type', 'application/javascript; charset=utf-8')
            elif file_path.endswith('.css'):
                self.send_header('Content-Type', 'text/css; charset=utf-8')
            elif file_path.endswith('.json'):
                self.send_header('Content-Type', 'application/json; charset=utf-8')
            elif file_path.endswith('.png'):
                self.send_header('Content-Type', 'image/png')
            elif file_path.endswith('.webp'):
                self.send_header('Content-Type', 'image/webp')
            elif file_path.endswith(('.jpg', '.jpeg')):
                self.send_header('Content-Type', 'image/jpeg')
            elif file_path.endswith('.svg'):
                self.send_header('Content-Type', 'image/svg+xml')
            else:
                self.send_header('Content-Type', 'application/octet-stream')
            
            self.send_header('Content-Length', str(os.path.getsize(file_path)))
            self.end_headers()
            with open(file_path, 'rb') as f:
                self.wfile.write(f.read())
        else:
            self.send_response(HTTPStatus.NOT_FOUND)
            self.end_headers()
            self.wfile.write(b'File Not Found')

    def do_POST(self):
        if self.path == '/api/generate':
            content_length = int(self.headers.get('Content-Length', 0))
            post_data = self.rfile.read(content_length)
            try:
                data = json.loads(post_data.decode('utf-8'))
                api_key = data.get('apiKey') or os.environ.get('GEMINI_API_KEY')
                
                if api_key:
                    try:
                        from google import genai
                        client = genai.Client(api_key=api_key)
                        prompt = f"""You are a senior International Medical Tourism Liaison Specialist for a premier JCI-accredited hospital in Bangkok.
Patient Inquiry Details:
- Category: {data.get('category')}
- Name: {data.get('patientName')}
- Target Market: {data.get('targetMarket')}
- Procedure: {data.get('medicalProcedure')}
- Stage: {data.get('inquiryStage')}
- Additional Context: {data.get('additionalContext', '')}

Write a tailored WhatsApp script and formal email for this exact patient."""
                        response = client.models.generate_content(
                            model="gemini-2.5-flash",
                            contents=prompt
                        )
                        self.send_response(HTTPStatus.OK)
                        self.send_header('Content-Type', 'application/json')
                        self.end_headers()
                        self.wfile.write(json.dumps({"status": "success", "raw": response.text}).encode('utf-8'))
                        return
                    except Exception as gemini_err:
                        print(f"Gemini call error: {gemini_err}")
                
                self.send_response(HTTPStatus.OK)
                self.send_header('Content-Type', 'application/json')
                self.end_headers()
                self.wfile.write(json.dumps({"status": "use_local_engine"}).encode('utf-8'))
            except Exception as e:
                self.send_response(HTTPStatus.INTERNAL_SERVER_ERROR)
                self.send_header('Content-Type', 'application/json')
                self.end_headers()
                self.wfile.write(json.dumps({"status": "error", "message": str(e)}).encode('utf-8'))
        else:
            self.send_response(HTTPStatus.NOT_FOUND)
            self.end_headers()

def main():
    socketserver.TCPServer.allow_reuse_address = True
    with socketserver.TCPServer(("", PORT), MedLiaisonHandler) as httpd:
        print(f"==================================================")
        print(f"🏥 MedLiaison AI Demo Server (5 Specialties Edition)")
        print(f"👉 Running at: http://localhost:{PORT}")
        print(f"👉 Local Path: {DIRECTORY}")
        print(f"Press Ctrl+C to stop.")
        print(f"==================================================")
        try:
            httpd.serve_forever()
        except KeyboardInterrupt:
            print("\nShutting down server.")

if __name__ == '__main__':
    main()
