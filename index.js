// console.log("hello world")

let backPack = [];
// backPack.push("sword");
// backPack.push("shield");
// backPack.push("food");

backPack.push("sword", "shield", "food");

// let sword = backPack.shift();
let sword = backPack.splice(0, 1);
// let swordNotArray = sword.shift();
// backPack.splice(0, 0, swordNotArray)
// backPack.unshift(sword[0]);

let furCoat = "furCoat"
backPack.push(furCoat);
backPack.pop()

backPack.push("flint", "blanket", "knife", "toothbrush")

// let backPack2 = backPack.splice(2, 3);

let itemCount = backPack.length;

// console.log(backPack, backPack2[0]);

// for(let i = 0; i < backPack.length; i++){
//     console.log(backPack[i]);
// }

// for(let i = 0; i < backPack2.length; i++){
//     console.log(backPack2[i]);
// }

// console.log(backPack)

// if(backPack.length >= 3){
//     for(let i = 0; i < 3; i++){
//         console.log(backPack[i]);
//     }
// } else {
//     for(let i = 0; i < 3; i ++){
//         console.log(backPack[i]);
//     }
// }

let guessMe = 54
let loop = 1;

while (guessMe < 100) {
    console.log(`***************** start of loop ${loop} *****************\n\n`)
    if (guessMe % 4 === 0 || guessMe % 5 === 0) {
        console.log(`if ${guessMe} % 4 && % 5 === 0`)
        guessMe += 25
        console.log(`guess me now = ${guessMe}`)
    } else if (guessMe % 3 === 0) {
        console.log(`if ${guessMe} % 3 === 0`)
        guessMe -= 27
        console.log(`guess me now = ${guessMe}`)
    } else {
        console.log("else")
        guessMe += 3
        console.log(`guess me now = ${guessMe}`)
    }
    console.log(`end of loop, guess me now = ${guessMe}`)
    console.log(`---------------------- end of loop ${loop}---------------------\n\n`)
    guessMe += 22
    loop++;
}

console.log(guessMe)







