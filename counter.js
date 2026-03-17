document.addEventListener("DOMContentLoaded", () => {
  fetch("https://raw.githubusercontent.com/Schooluser982/Schooluser982.github.io/main/visits.json")
    .then(res => res.json())
    .then(data => {
      const el = document.getElementById("visitCount");
      if (el) el.innerText = data.count;
    })
    .catch(err => {
      const el = document.getElementById("visitCount");
      if (el) el.innerText = "Error";
      console.error("Visit counter error:", err);
    });
});
