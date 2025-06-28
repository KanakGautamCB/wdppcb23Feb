const express = require("express");
const { createServer } = require("http");
const path = require("path");
const { Server } = require("socket.io");

const app = express();
app.use(express.static(path.join(__dirname,'public')));
const httpServer = createServer(app);
const io = new Server(httpServer, { /* options */ });

let userMap={};

io.on("connection", (socket) => {

  socket.on("newuseradded",({username,socketId}) => {
    userMap[socketId] = username;
    io.emit("activeusers", { activeUsers: Object.values(userMap) });
  })

  socket.on("newmessage", ({ message, socketId }) => {
    const username = userMap[socketId];
    io.emit("messagereceived", {
      message,
      username,
      socketId,
    });
  })
  
});

httpServer.listen(3000);