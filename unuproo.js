const rl = require("readline-sync");
//define las 108 carta
var deck1 = [];
//define color 
var colors = ["amarillo", "blue", "green", "red"];
//define tipo de carta
var types = ["comun", "especial", "comodin"];
// define las cartas del 0 a 9
var card = {
    color: null, //amarillo, azul, verde y rojo.
    number: null, //0 al 9
    type: null,// comun, especial y comodin
};
for (var cColor = 0; cColor < colors.length; cColor++) {

    for (var cNumber = 0; cNumber < 10; cNumber++) {
        deck.push({ color: colors[cColor], number: cNumber, type: "comun" });
    }
    for (var cNumber1 = 1; cNumber1 < 10; cNumber1++) {
        deck.push({ color: colors[cColor], number: cNumber1, type: "comun" });

    }
    deck.push({ color: colors[cColor], number: "+2", type: "especial" })
    deck.push({ color: colors[cColor], number: "+2", type: "especial" })
    deck.push({ color: colors[cColor], number: "b", type: "especial" })
    deck.push({ color: colors[cColor], number: "b", type: "especial" })
    deck.push({ color: colors[cColor], number: "r", type: "especial" })
    deck.push({ color: colors[cColor], number: "r", type: "especial" })
}

deck.push({ color: null, number: "+4", type: "comodin" })
deck.push({ color: null, number: "+4", type: "comodin" })
deck.push({ color: null, number: "+4", type: "comodin" })
deck.push({ color: null, number: "+4", type: "comodin" })
deck.push({ color: null, number: "cc", type: "comodin" })
deck.push({ color: null, number: "cc", type: "comodin" })
deck.push({ color: null, number: "cc", type: "comodin" })
deck.push({ color: null, number: "cc", type: "comodin" })

//console.log(deck);

const players = rl.question("Cuantos jugadores seran?", {})


console.log(players)