let http = require('http')
let port = process.argv[2] ? process[2] : 3000
let url = require('url')


let server = http.createServer((request, response) => {

    let parsedUrl = url.parse(request.url, true)
    let query = ''
    let path = request.url
    if (path.indexOf('?') >= 0) { query = path.substring(path.indexOf('?')) }
    let pathNoQuery = parsedUrl.pathname
    let queryObject = parsedUrl.query
    let method = request.method


    if (path === '/index.html') {
        response.statusCode = 200
        response.setHeader('Content-Type', 'text/html; charset=utf-8')
        response.write(`
        <!DOCTYPE html>
        <head><link rel="stylesheet" href="/style.css"></link></head>
        <body>
        <h1>Hello World</h1>
        <script src="/script.js"></script>
        </body>
        `)
        response.end()
    } else if (path === '/style.css') {
        response.statusCode = 200
        response.setHeader('Content-Type', 'text/css;chatset="utf-8"')
        response.write('body{background-color: #ddd;}h1{color: red;}')
        response.end()
    } else if (path === '/script.js') {
        response.statusCode = 200
        response.setHeader('Content-Type', 'text/javascript;chatset="utf-8"')
        response.write('console.log("done")')
        response.end()
    } else {

        response.statusCode = 404
        response.write('not found you need')
        response.end()

    }

})







server.listen(port)

console.log(`服务器正在监听${port}端口 请打开http://localhost:${port}`)