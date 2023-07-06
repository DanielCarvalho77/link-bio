function toggleMode() {
  const html = document.documentElement;
  //Função toggle do JavaScript substitui o if abaixo.
  html.classList.toggle("light");

  const img = document.querySelector("#profile img");

  if (html.classList.contains("light")) {
    img.setAttribute("src", "./assets/avatar-light.png");
  } else {
    // html.classList.add('light');
    img.setAttribute("src", "./assets/avatar.png");
  }
  
}
