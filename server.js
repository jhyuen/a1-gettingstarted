const http = require('http'),
      fs   = require('fs'),
      port = 3000

const server = http.createServer( function( request,response ) {
  switch( request.url ) {
    case '/':
        sendFile( response, 'index.html' )
        break
    case '/index.html':
        sendFile( response, 'index.html' )
        break
    case '/style.css':
        sendFile(response, 'style.css')
          break
    case '/profilepic.png':
        sendFile(response, 'profilepic.png')
          break
      case '/bg.jpg':
        sendFile(response, 'bg.jpg')
          break
    default:
      response.end( '404 Error: File Not Found' )
  }
})

server.listen(process.env.PORT || port)
console.log('Application is running')

const sendFile = function( response, filename ) {
   fs.readFile( filename, function( err, content ) {
     file = content
     response.end( content, 'utf-8' )
   })
}