const server = require('pushstate-server');
const port = 9527;
server.start({
  port: port,
  directory: './build'
});

console.log(`listening on http://localhost:${port}`);