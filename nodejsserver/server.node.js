//copyright jensen leung 2025-9-17
const http = require('http');
const fs = require('fs');
const path = require('path');

const server = http.createServer((req, res) => {
    const filePath = path.join(__dirname, 'index.html');
    fs.readFile(filePath, (err, data) => {
        if (err) {
            res.writeHead(500);
            return res.end('Error loading index.html');
        }
        res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' });
        res.end(data);
    });
});

const PORT = 8080; //you can set a port for your website
server.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
