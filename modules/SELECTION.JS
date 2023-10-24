//comodin cambio de color
//comodin mas cuatro
//la carta que voy a sacar como jugador 
//una estructura dw control es todo aquello que nos ayuda a tener un flujo en un algortimo
const inquirer = require('inquirer');
function selectOption(options, message = 'Selecciona una opción:') {
  return inquirer
    .prompt([
      {
        type: 'list',
        name: 'selectedOption',
        message,
        choices: options,
      },
    ])
    .then((answers) => answers.selectedOption);
}


selectOption(opciones, 'Elige una opción:')
  .then((opcionSeleccionada) => {
    console.log(`Seleccionaste: ${opcionSeleccionada}`);
  })
  .catch((error) => {
    console.error('Error:', error);
  });

function selectionUno(){

  switch (option) {

    case'CC':
    colorCHange();
      break;
    
    case "C4":
      break;
    
    case "CHOICE":
      break;
    
    case "UNO":
      default:
      break;
    }
}

function colorCHange(colors){
  selectOption(colors, 'Elige un color:')
  .then((opcionSeleccionada) => {
    console.log(`Seleccionaste: ${opcionSeleccionada}`);
  })
  .catch((error) => {
    console.error('Error:', error);
  });
}
  module.exports = selectOption