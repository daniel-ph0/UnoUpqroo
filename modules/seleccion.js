// Comodin cambio de color
// comodin mas 4
// La carta que saco como jugador
// Decidir decir 1
const inquirer = require("inquirer");
function selectOption(options, message = "Selecciona una opción:") {
  return inquirer
    .prompt([
      {
        type: "list",
        name: "selectedOption",
        message,
        choices: options,
      },
    ])
    .then((answers) => answers.selectedOption);
}

function selectionUno(){
  switch (option) {
    case "CC":
      colorChange();
      break;
    case "C4":
      colorChange();
      break;
    case "CHOICE":
      break;
    case "UNO":
      break;
    default:
      break;
  }
}

function colorChange(colors){
  return selectOption(colors, "Selecciona un color:")
  .then((opcionSeleccionada) => {
    return opcionSeleccionada
  })
  .catch((error) => {
    console.error("Error:", error);
  });
}

module.exports = selectionUno;
