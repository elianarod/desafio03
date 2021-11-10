// Eliana Rodrigues, 10.11.2021
// Desafio 3 "sliding menu & chaining animation", FBAUP, WD2

console.log("it's alive");

// Check for page ready
$(document).ready(function () {
  init();
});

function init() {
  console.log("jQuery ready and document fully loaded");
}

// Através de jQuery alterar conteúdo (título h1)
titulo = $("h1");
titulo.on("click", mudaTitulo);
function mudaTitulo() {
  titulo.html("Jake Short");
}

// Através de jQuery alterar css dos títulos e parágrafos
// Seleciona todos os P e esconde-os
p1 = $("p");
console.log(p1);
p1.hide();
p1.css("color", "crimson");
p1.css("fontSize", "1em");

// Subtítulos H2
subtitulos = $("h2");
subtitulos.css("color", "crimson");

// Título H1
titulo.css("color", "crimson");

// Quando se clica num H2, o P imediatamente a seguir fica visível
subtitulos.on("click", toggleP);

function toggleP() {
  $(this).next().slideToggle(2000);
}

// Chaining
// Quando se clica no H1 os 3 parágrafos são revelados sequencialmente e depois escondidos
titulo.on("click", chain);

function chain() {
  p1.each(function (index, element) {
    console.log(index, element);
    $(this)
      .delay(index * 1500)
      .slideToggle(2000)
      .fadeToggle(2000)
      .delay(1000);
  });
}

// Através de jQuery adicionar nav
$("main").prepend("<nav><ul><li></li><li></li><li></li></ul></nav>");

// Adicionar âncoras
$("li:nth-child(1)").append("<a href='#background'>Background</a>");
$("li:nth-child(2)").append("<a href='#appearance'>Physical Appearance</a>");
$("li:nth-child(3)").append("<a href='#powers'>Powers and Abilities</a>");

// Sliding menu
navbar = $("nav");
navbar.css("backgroundColor", "crimson");
navbar.hide();

menu = $("button");
menu.on("click", toggleNav);

function toggleNav() {
  navbar.animate({ width: "toggle" }, 1000);
}
