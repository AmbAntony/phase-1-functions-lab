// Code your solution in this file!

//function that returns the number of blocks from Scuber headquarters on 42nd Street

const HQ = 42;
const distFeet = 264;
function distanceFromHqInBlocks(a){
    let distanceBlocks = a - HQ;
    return (Math.abs(distanceBlocks)); 
}

console.log (distanceFromHqInBlocks(43))
console.log (distanceFromHqInBlocks(50))
console.log (distanceFromHqInBlocks(34))


//function that returns distance from HQ in feet


function distanceFromHqInFeet(distanceFeet){
    return distanceFromHqInBlocks(distanceFeet) * 264
}

console.log(distanceFromHqInFeet(43))
console.log(distanceFromHqInFeet(50))
console.log(distanceFromHqInFeet(34))

//function that return distance in feet

function distanceTravelledInFeet(startDestination, finalDestination){
let distanceTravelled = finalDestination - startDestination;
return (Math.abs(distanceTravelled*264));
}
console.log(distanceTravelledInFeet(43,48))
console.log(distanceTravelledInFeet(50,60))
console.log(distanceTravelledInFeet(34,28))

//function that calculates Fare price

function calculatesFarePrice(startDestination, finalDestination) {
    let distanceTravelled = distanceTravelledInFeet(startDestination, finalDestination);
    let price;
    if (distanceTravelled <= 400) {
        return price = 0;
    } else if ((distanceTravelled > 400) && (distanceTravelled <= 2000)) {
        return price = 2.56;
    } else if ((distanceTravelled > 2000) && (distanceTravelled<= 2500)) {
        return price = 25;
    } else {
        return price = `cannot travel that far`
    }
}

console.log (calculatesFarePrice(43,48))
console.log (calculatesFarePrice(50,60))
console.log (calculatesFarePrice(34,28))