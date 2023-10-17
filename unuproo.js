const rl = require("readline-sync");
const chalk = require("chalk");
//juego UNO
var deck = [];
var colors = ["Yellow","Blue", "Green", "Red"];
var types = ["Comun", "Especial","Comodin"];
var card = {
    color: null, // amarillo, azul , verde , rojo 
    number: null, // 0-9
    Type: null // comun, especiales y comodines
};

for (var cColor = 0; cColor < colors.length; cColor++ ){
    
    for (var cNumber = 0; cNumber < 10; cNumber++){
        
        deck.push({color: colors[cColor], number: cNumber, type: "comun"});
    }
    for (var cNumber1 = 1; cNumber < 10; cNumber1++){
        
    }
    deck.push({color: colors[cColor], number: "+2", type: "comun"});
    deck.push({color: colors[cColor], number: "+2", type: "comun"});
    deck.push({color: colors[cColor], number: "B", type: "comun"});
    deck.push({color: colors[cColor], number: "B", type: "comun"});
    deck.push({color: colors[cColor], number: "R", type: "comun"});
    deck.push({color: colors[cColor], number: "R", type: "comun"});

} 

deck.push({color: null, number: "+4", type: "comun"});
deck.push({color: null, number: "+4", type: "comun"});
deck.push({color: null, number: "+4", type: "comun"});
deck.push({color: null, number: "+4", type: "comun"});
deck.push({color: null, number: "CC", type: "comun"});
deck.push({color: null, number: "CC", type: "comun"});
deck.push({color: null, number: "CC", type: "comun"});
deck.push({color: null, number: "CC", type: "comun"});

const players = rl.question("¿cuantos jugadores seran?", {})
const totalcards = players * 7;
var cardsPlayers = {};

for(var cTcards = 0; cTcards < 7; cTcards++){
    for(var cPlayers = 0; cPlayers < players; cPlayers++) {
        if (!cardsPlayers["player_"+cPlayers]) {
            cardsPlayers["player_"+cPlayers] = [];
        }

        cardsPlayers["player_"+cPlayers].push(deck.shift());
        }
}
var trash = [];
trash.push(deck.shift());

function cardValidation(card) {
    console.log(card.number)
    //if (card.number == 2) llamar a numero y carta 
    if (card.number == trash[trash.length-1].number || card.color == trash[trash.length-1].color) {
        console.log("es igual");
    } else {console.log("no es igual")}
}

for(const player in cardsPlayers) {
    console.log(cardsPlayers[player])
    // npm i chalk@4.1.2
    // Primer player ponga una carta
    // PASO 1: Ver mis martas
    // PASO 2: Elejir carta
    // PASO 3: Validar carta
    // PASO 4: Poner carta (de mano jugador a trash)
    console.log(chalk.blue('Hello') + ' World' + chalk.red('!'))
}