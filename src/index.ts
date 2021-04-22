import express from "express";
import socketio from "socket.io";
import path from "path";
import http from "http";

const app = express();
const httpServer = http.createServer(app);
const io = new socketio.Server(httpServer);

app.use(express.static(path.resolve(__dirname, "..", "public")));

io.on("connection", (socket) => {
  console.log(`New connection: ${socket.id}`);

  socket.on("message", (message) => {
    console.log(message);
    socket.emit("received", `Received message ${message}`);
  });
});

httpServer.listen(3333);

// "Desacoplar" o servidor web do servidor socket.
// O servidor web utiliza o protocolo HTTP enquanto
// o servidor socket utiliza o WebSockets.
