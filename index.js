const net = require("net");

const server = net.createServer((socket) => {
     socket.on("data", data => {
          socket.write(data);
     });

     socket.on("error", () => {
          socket.end();
     });
});

server.listen(3001);