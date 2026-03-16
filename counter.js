function loadVisits() {
  fetch("https://api.countapi.xyz/hit/schooluser982.github.io/visits")
    .then(res => res.json())
    .then(data => {
      document.getElementById("visitCount").innerText = data.value;
    })
    .catch(() => {
      document.getElementById("visitCount").innerText = "Error";
    });
}
