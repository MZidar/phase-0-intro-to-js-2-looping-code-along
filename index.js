for (let age = 30; age < 40; age++) {
    console.log(`I'm ${age} years old. Happy birthday to me!`);
    debugger;
} 

const gifts = ["teddy bear", "drone", "doll"];

function wrapGifts(gifts) {
  for (let i = 0; i < gifts.length; i++) {
    console.log(`Wrapped ${gifts[i]} and added a bow!`);
    debugger;
  }

  return gifts;
}

wrapGifts(gifts); 


const friends = ['Lisa', 'Kaitlin', 'Jan'];
const sur = "surprise";

function writeCards(friends, sur) {
    let message = [];
    for (let i = 0; i < friends.length; i++){
        message.push(`Thank you, ${friends[i]}, for the wonderful ${sur} gift!`);
         }
    return message;
}

console.log(writeCards(friends, sur))

let bringdown = 10;

function countDown(bringdown) {
    while (bringdown >= 0) {
        console.log(bringdown--);
      } 
}

countDown(bringdown);