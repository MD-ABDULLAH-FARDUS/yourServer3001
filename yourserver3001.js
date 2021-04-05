const http = require('http');
const port = 3001;
const localhost = '0.0.0.0';

exports.yourserver3001 =() => {return http.createServer((req, res) => res.end('Hello Sir')).listen(port, localhost, console.log(`your server is running successfully at http://${localhost}:${port}`))}
