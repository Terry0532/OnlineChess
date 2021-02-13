const server = require("http").createServer();
const io = require("socket.io")(server, {
    cors: {
        credentials: true
    }
});
const PORT = 4444;
const HOST = "127.0.0.1";

server.listen(PORT, HOST);
console.log("listening to : " + HOST + ":" + PORT);

io.on("connection", client => {
    console.log("connected : " + client.id);
    client.emit("connected", { "id": client.id });
});