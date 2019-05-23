var pelis = [
  {
    Nombre: "El señor de los anillos",
    Genero: "Acción"
  },
  {
    Nombre: "Pretty Woman",
    Genero: "Amor"
  },
  {
    Nombre: "Regreso al Futuro",
    Genero: "Acción"
  },
  {
    Nombre: "Los increibles 2",
    Genero: "Animación"
  },
  {
    Nombre: "El señor de los anillos",
    Genero: "Acción"
  },
  {
    Nombre: "Regreso al Futuro",
    Genero: "Acción"
  },
  {
    Nombre: "Romeo y Julieta",
    Genero: "Amor"
  },
  {
    Nombre: "Los increibles 2",
    Genero: "Animación"
  }
];

var divObjetivo = document.querySelector("#targetDiv");
var action = "🔫";
var love = "💕";
var animation = "🤖";

pelis.forEach(function(element) {
  var pHijo = document.createElement("p");
  pHijo.textContent =
    element["Nombre"] +
    " " +
    (element["Genero"] === "Acción"
      ? action
      : element["Genero"] === "Animación"
      ? animation
      : element["Genero"] === "Amor"
      ? love
      : console.log(""));
  divObjetivo.appendChild(pHijo);
});
