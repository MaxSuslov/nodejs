const http = require('http');
// const { parse } = require('path');

const server = http.createServer((req, res) => {
  const url = req.url;
  const method = req.method;
  if (url === '/') {
    res.setHeader('Content-Type', 'text/html');
    res.write('<html>');
    res.write('<head><title="Assignment 1"></title=></head>')
    res.write('<body><form action="/create-user" method="POST"><input type="text" name="username"><button type="submit">Send</button</form></body>');
    res.write('</html>');
    return res.end();
  }
  if (url === '/users') {
    res.setHeader('Content-Type', 'text/html');
    res.write('<html>');
    res.write('<head><title="Assignment 1"></title=></head>')
    res.write('<body><ul><li>User 1</li><li>User 2</li><li>User 3</li></ul></body>');
    res.write('</html>');
    return res.end();
  }
  // send a HTML response with some "Page not found" text - here comes code that would be executed after that if-statements.
  if (url === '/create-user' && method === 'POST') {
    const body = [];
    req.on('data', chunk => {
      body.push(chunk);
    });
    req.on('end', () => {
      const parsedBody = Buffer.concat(body).toString();
      console.log(parsedBody.split('=')[1]); // username=whateveruserentered;
    });
    res.statusCode = 302; // sending a redirection status code
    res.setHeader('Location', '/'); // redirecting to '/'
    res.end();
  }
})

server.listen(3000);