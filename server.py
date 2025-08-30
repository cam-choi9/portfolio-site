#!/usr/bin/env python3
import http.server
import socketserver
import os
import socket
import mimetypes
from http.server import HTTPServer, SimpleHTTPRequestHandler

class MyHTTPRequestHandler(SimpleHTTPRequestHandler):
    def __init__(self, *args, **kwargs):
        # Add PDF mime type
        mimetypes.add_type('application/pdf', '.pdf')
        super().__init__(*args, **kwargs)
        
    def end_headers(self):
        self.send_header('Cache-Control', 'no-cache, no-store, must-revalidate')
        self.send_header('Pragma', 'no-cache')
        self.send_header('Expires', '0')
        super().end_headers()

    def do_GET(self):
        # Handle health check endpoint first
        if self.path == '/health':
            self.send_response(200)
            self.send_header('Content-type', 'text/plain')
            self.end_headers()
            self.wfile.write(b'OK')
            return
        
        # Handle root path
        if self.path == '/':
            self.path = '/index.html'
            
        return super().do_GET()

class ReuseAddressTCPServer(socketserver.TCPServer):
    allow_reuse_address = True

if __name__ == "__main__":
    PORT = 5000
    Handler = MyHTTPRequestHandler
    
    with ReuseAddressTCPServer(("0.0.0.0", PORT), Handler) as httpd:
        print(f"Server running at http://0.0.0.0:{PORT}")
        httpd.serve_forever()