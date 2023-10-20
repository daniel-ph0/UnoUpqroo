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

// Ejemplo de uso
const opciones = ['player1', 'player 2', 'player 3'];

selectOption(opciones, 'Elige una opción:')
  .then((opcionSeleccionada) => {
    console.log(`Seleccionaste: ${opcionSeleccionada}`);
  })
  .catch((error) => {
    console.error('Error:', error);
  });
  module.exports = selectOption