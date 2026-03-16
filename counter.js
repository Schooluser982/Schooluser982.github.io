document.addEventListener("DOMContentLoaded", () => {
  fetch("https://hits.sh/schooluser982.github.io.json")
    .then(res => res.json())
    .then(data => {
      const el = document.getElementById("visitCount");
      if (el) el.innerText = data.hits;
    })
    .catch(err => {
      const el = document.getElementById("visitCount");
      if (el) el.innerText = "Error";
      console.error("Visit counter error:", err);
    });
});
