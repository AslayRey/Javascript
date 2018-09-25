var carte = getRandomArbitrary(min, max);
var min = 1;
var max = 10;
var count = 0;
var score = 0;
function getRandomArbitrary(min, max) {
    return carte = Math.random() * (max - min) + min; //crea un numero di carta random
}

function gira (){
    var a = getRandomArbitrary(min, max); //assegna ad a un numero random
    var b = getRandomArbitrary(min, max); //assegna ad b un numero random
    count = a+b;

    if(count > 15){ //se la somma delle due carte è maggiore di 15
        score = 0;
    } else {
        score = count; 
    }
    return score;
}

var risultato1 = gira(); //risultato banchiere
var risultato2 = gira(); //risultato player

function vincitore (){
    if(risultato1 >= risultato2){
        console.log("Banchiere ha vinto: " + risultato1);
    } else {
        console.log("Player ha vinto: " + risultato2);
    }
}

var vincitore = vincitore();