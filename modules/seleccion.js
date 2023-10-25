// Comodin cambio de color
// comodin mas 4
// La carta que saco como jugador
// Decidir decir 1
const inquirer = require("inquirer");
async function selectOption(options, message = "Selecciona una opción:") {
  console.log(options);
  const result = await inquirer.prompt([
      {
        type: "list",
        name: "selectedOption",
        message,
        choices: options,
      },
    ])
    return result
}

function selectionUno(opciones, option){
  var seleccion = null;
  switch (option) {
    case "CC":
      colorChange();
      break;
    case "C4":
      colorChange();
      break;
    case "CHOICE":
      // Descomponer opciones
      ["8-red", "6-green", "R-yellow"]
        seleccion = selectOption(nuevaVarible, "Selecciona una carta:")
      break;
    case "UNO":
      break;
    default:
      break;
  }
  return seleccion
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
