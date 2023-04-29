const http = require('http');

const server = http.createServer((req, res) => {
    // HTML이 아닌 문자열로 해석되는 경우가 있을 수 있다.
    res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' })
    res.write('<h1>Hello Node!</h1>')
    res.write('<p>hello server</p>')
    res.end('<p>hello deon</p>')
})
.listen(8080);

server.on('listening', () => {
    console.log('8080번 포트에서 서버 대기 중입니다.')
})

server.on('error', (error) => {
    console.error(error)
})



// 포트번호를 다르게 하면 이렇게 두 개를 동시에 돌릴 수 있다.
const server2 = http.createServer((req, res) => {
    res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' })
    res.write('<h1>Hello Node!</h1>')
    res.write('<p>hello server</p>')
    res.end('<p>hello deon</p>')
})
.listen(8081);

server2.on('listening', () => {
    console.log('8081번 포트에서 서버 대기 중입니다.')
})

server2.on('error', (error) => {
    console.error(error)
})