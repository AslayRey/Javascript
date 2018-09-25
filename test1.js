const TAX_PERCENT   = 1000;
const CURRENCY      = "€";
const Component_1   = "Mouse";
const Component_2   = "Keyboard";
const Component_3   = "Monitor";
const Component_4   = "Cable";

// Variables
var money_in_the_poket  = 5000;

var BundleProductName   = "Personal Computer (Desktop)";
var BundleProduct       = Component_1 + Component_2 + Component_3 + (4 * Component_4);

let PriceComponent_1    = 10;
let PriceComponent_2    = 20;
let PriceComponent_3    = 80;
let PriceComponent_4    = 4.50;

let QuantityComponent_1 = 1;
let QuantityComponent_2 = 1;
let QuantityComponent_3 = 1;
let QuantityComponent_4 = 1;


let finalPrice = PriceComponent_1 * QuantityComponent_1 + PriceComponent_2 * QuantityComponent_2 + PriceComponent_3 * QuantityComponent_3 + PriceComponent_4 * (4 * QuantityComponent_4) + TAX_PERCENT;
let finalTax = (PriceComponent_1 * QuantityComponent_1 + PriceComponent_2 * QuantityComponent_2 + PriceComponent_3 * QuantityComponent_3 + PriceComponent_4 * (4 * QuantityComponent_4) + TAX_PERCENT)/100*(100+1000).toFixed(2);

console.log(finalPrice);
console.log(finalTax);
if ((QuantityComponent_1 && QuantityComponent_2 && QuantityComponent_3) > 0 && QuantityComponent_4 > 3){
    console.log("Tutti i pezzi disponibili in magazzino");

    let spese = 10;
    if (finalPrice > 99){
        finalPrice = finalPrice + 0;
    } else {
        finalPrice = finalPrice + spese;
    }

    console.log(finalPrice+CURRENCY);
    if ((money_in_the_poket - finalPrice) >= 0){
        console.log("Hai abbastanza soldi");
    } else {
        console.log(money_in_the_poket - finalPrice);
        console.log("Non hai abbastanza soldi");
    }
} else {
    console.log("Un pezzo non disponibile in magazzino");
}