(function autoReconnectAndKeepAlive() {
  const pingIntervalMs = 15000;
  const reconnectIntervalMs = 5000;

  let keepAliveInterval;
  let reconnectInterval;

  function startKeepAlive() {
    if (keepAliveInterval) clearInterval(keepAliveInterval);
    keepAliveInterval = setInterval(() => {
      if (typeof socket !== "undefined" && socket.connected) {
        socket.emit("keep alive", { username, room: currentRoom });
        console.log("Keep-alive ping sent");
      }
    }, pingIntervalMs);
  }

  function startReconnect() {
    if (reconnectInterval) clearInterval(reconnectInterval);
    reconnectInterval = setInterval(() => {
      if (!socket || !socket.connected) {
        console.log("Attempting reconnect...");
        if (socket) socket.connect();
      }
    }, reconnectIntervalMs);
  }

  socket.on("connect", () => {
    console.log("Connected/reconnected to server");

    startKeepAlive();

    const savedName = localStorage.getItem("username");
    if (savedName) {
      socket.emit("set username", { username: savedName }, (res) => {
        if (res && res.ok) {
          username = savedName;
          isAdmin = res.isAdmin;
          currentRoom = res.room || "public";
          document.getElementById("roomName").textContent = currentRoom;
          msgInput.disabled = false;
          sendBtn.disabled = false;
          document.getElementById("usernameBox").style.display = "none";
          console.log("Session restored successfully");
        } else {
          console.log("Failed to restore session");
          username = null;
          isAdmin = false;
          msgInput.disabled = true;
          sendBtn.disabled = true;
          document.getElementById("usernameBox").style.display = "flex";
        }
      });
    }
  });

  socket.on("disconnect", () => {
    console.log("Disconnected from server, trying to reconnect");
    startReconnect();
  });

  if (socket && socket.connected) startKeepAlive();
})();
