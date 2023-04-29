const http = require('http')
const fs = require('fs').promises
const path = require('path')

const users = {}

http.createServer(async (req, res) => {
    if (req.url === '/') {
        res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' })
        const data = await fs.readFile('./index.html')
        return res.end(data)
    }

}).listen(8080);

