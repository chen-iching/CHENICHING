const express = require("express");
const http = require("http");
const socketIo = require("socket.io");

const app = express();
const server = http.createServer(app);
const io = socketIo(server);

app.use(express.static("public")); // 把 public 資料夾當作遊戲的前端

// 聊天功能
io.on("connection", (socket) => {
  console.log("一位玩家連線");
  socket.on("chat message", (msg) => {
    io.emit("chat message", msg);
  });
});

server.listen(3000, () => {
  console.log("伺服器啟動：http://localhost:3000");
});

const loginModal = document.getElementById('loginModal');
const loginBtn = document.getElementById('loginBtn');
const usernameInput = document.getElementById('username');

loginBtn.onclick = () => {
  const name = usernameInput.value.trim();
  if(!name){ alert("請輸入名字"); return; }

  // 儲存名字
  localStorage.setItem('username', name);

  // 關閉 modal
  loginModal.style.display = 'none';

  // 初始化遊戲
  loadLayout();
};