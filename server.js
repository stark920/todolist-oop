const http = require('http');
const { PORT = 3000 } = process.env;
const requestListener = require('./route');

const server = http.createServer(requestListener);
server.listen(PORT);