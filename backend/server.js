import http from "http";
import { Server } from "socket.io";

const app = http.createServer((req, res) => {
  res.end("Welcome to Chat app!");
});

const io = new Server(app, {
  cors: {
    origin: "http://localhost:5173",
    methods: ["GET", "POST"],
  },
});

io.on("connection", (socket) => {
  console.log("A user connected");

  socket.on("message", (message) => {
    io.emit("message", message);
  });

  socket.on("disconnect", () => {
    console.log("User disconnected");
  });
});

app.listen(1099, () => console.log("Server is running on port 1099"));
