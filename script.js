const http = require('http');
const fs = require('fs');
const path = require('path');

const PORT = 3000;

const server = http.createServer((req, res) => {
  console.log('server req')

  res.setHeader('Content-Type', 'text/html')

  const createPath = (page) => path.resolve(__dirname, 'pages', `${page}.html`)
  const dataPath = (page) => path.resolve(__dirname, `${page}.json`)
  let basePath = ''


  switch (req.url) {
    case '/contact':
      basePath = createPath('contact')
      res.statusCode = 200
      break
    case '/about':
      basePath = createPath('about')
      res.statusCode = 200
      break
    case '/contact':
      basePath = createPath('contact')
      res.statusCode = 200
      break
    case '/database':
      basePath = dataPath('data')
      res.statusCode = 200
    break
    default:
      basePath = createPath('error')
      res.statusCode = 404
      break
  }

  fs.readFile(basePath, (err, data) => {
    if (err) {
      console.log(err)
      res.statusCode = 500
      res.end()
    }
    else {
      res.write(data)
      res.end()
    }
  })
})

server.listen(PORT, 'localhost', (error) => {
  error ? console.log(error) : console.log(`listening port ${PORT}`)
})