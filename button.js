function openGame(gameFile) {
  // Open a blank tab
  const newTab = window.open("about:blank", "_blank");

  // Fetch the game HTML file
  fetch(`/games/${gameFile}`)
    .then(response => response.text())
    .then(html => {
      newTab.document.open();
      newTab.document.write(html);
      newTab.document.close();
    })
    .catch(err => {
      newTab.document.write("<h1>Error loading game</h1>");
      console.error(err);
    });
}
