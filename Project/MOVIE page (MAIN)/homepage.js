function signIn() {
  object.onclick = function () {
    "http://127.0.0.1:5500/Project/Sing-in/sign.html";
  };
}

function filterCategory(genre) {
  let g = document.getElementsByClassName("genre");
  for (let i = 0; i < g.length; i++) {
    g[i].classList.add("hidden");
  }
  document.getElementById(genre).classList.remove("hidden");
}
