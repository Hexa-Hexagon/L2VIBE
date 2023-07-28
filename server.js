const http = require('http');

const server = http.createServer();

server.listen(PORT, () => {
    console.log(`Server is running on ${PORT} port`);
})