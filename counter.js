document.addEventListener("DOMContentLoaded", () => {
  fetch("https://api.countapi.xyz/hit/schooluser982.github.io/site")
    .then(res => res.json())
    .then(data => {
      const el = document.getElementById("visitCount");
      if (el) el.innerText = data.value;
    })
    .catch(err => {
      const el = document.getElementById("visitCount");
      if (el) el.innerText = "Error";
      console.error("Visit counter error:", err);
    });
})
