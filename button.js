function openGame(gameFile) {
  // Open a blank tab
  const newTab = window.open("about:blank", "_blank");

  // Fetch the game HTML file
  fetch(`/games/${gameFile}`)
    .then(response => response.text())
    .then(html => {
      newTab.document.open();
      newTab.document.write(html);

      // Inject Go Home button AFTER the game loads
      const homeButton = `
        <button onclick="window.location.href='../index.html'" 
        style="
          position: fixed;
          top: 20px;
          left: 20px;
          padding: 10px 20px;
          background: #00ff66;
          color: #111;
          border: none;
          border-radius: 8px;
          font-size: 18px;
          cursor: pointer;
          z-index: 999999;
        ">
          ⬅ Go Back Home
        </button>
      `;

      newTab.document.body.insertAdjacentHTML("afterbegin", homeButton);

      newTab.document.close();
    })
    .catch(err => {
      newTab.document.write("<h1>Error loading game</h1>");
      console.error(err);
    });
}

// Optional: still here if needed elsewhere
function goHome() {
  window.location.href = "../index.html";
}
