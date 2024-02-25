import express from "express";
import http from "http";
import { Server } from "socket.io";
import cookieParser from "cookie-parser";
import cors from "cors"
import bodyParser from "body-parser";
import mongoose from "mongoose";
mongoose.connect("mongodb+srv://avishshiroya0:jD6zkMs9B9FVisMd@ecomm.n5pt8da.mongodb.net/socket?retryWrites=true&w=majority").then(()=>{
  console.log("db connect")
}).catch(err=>console.log(err))
const app = express();
app.use(cookieParser());
app.use(cors())
app.use(bodyParser.json());
const server = http.createServer(app);
const io = new Server(server);
import userRoutes from "./routes/user.routes.js";
app.use("/api/v1", userRoutes);
app.get("/", (req, res) => {
  res.status(200).send({
    success: true,
    message: "First Routes",
  });
});

io.on("connection", (socket) => {
  console.log("connected");

  socket.on("message", (msg) => {
    socket.broadcast.emit("message", msg);
  });

  socket.on("disconnect", () => {
    console.log("disconnected");
  });
});

// var users = 0;

// io.on("connection", (socket) => {
//   console.log("connected");
//   users++;
//new user
//   socket.emit("newUser", { message: "Hello,New User" });
//for all user who recieve how many user connected now

// socket.broadcast.emit("connectedUser",{message:users +" One new User Connected NOW"})

// setTimeout(()=>{
//    socket.emit('messageSend',{message:" message send from my side"})
// },500)
//   socket.on("send", (data) => {
// console.log(data);
//   });

//   socket.on("disconnect", () => {
// console.log("disconnected");
// users--;
// socket.broadcast.emit("connectedUser",{message:users +" One User disConnected NOW"})
//   });
// });

server.listen(5000, (err) => {
  if (err) {
    console.log(err);
  } else {
    console.log("Server Created on 5000 PORT");
  }
});
