import express from "express";
import http from "node:http";
import "dotenv/config"
import { Server } from "socket.io";

const app = express();
const server = http.createServer(app);

const port = process.env.CHAT_PORT;

const io = new Server(server);

app.get('/', (req, res) => {
  res.sendFile("index.html", { root: "./public" });
});

app.get('/*', (req, res) => {
  let wtf = req.path.split('/')[1];
  res.sendFile(wtf, { root: "./public" });
})

io.on('connection', (socket) => {
  socket.on('message', (msg) => {
    io.emit('message', msg);
  });
});

server.listen(port, () => console.log(`Chat aberto em http://localhost:${port}`));