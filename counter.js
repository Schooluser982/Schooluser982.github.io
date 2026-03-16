function loadVisits() {
  fetch("https://api.countapi.xyz/hit/schooluser982.github.io/visits123")
    .then(res => res.json())
    .then(data => {
      const counter = document.getElementById("visitCount");
      if (counter) {
        counter.innerText = data.value;
      }
    })
    .catch(() => {
      const counter = document.getElementById("visitCount");
      if (counter) {
        counter.innerText = "Error";
      }
    });
}

document.addEventListener("DOMContentLoaded", loadVisits);
