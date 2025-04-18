console.log(2);//console.log() = afficher le message
console.log('test'.toUpperCase());//toUpperCase() c'est pour mettre le texte en MAJ
let changeMe = true; // let = déclarer variable 
changeMe = false;
console.log(changeMe);
const entree = 'Enchiladas'; //const = déclare variable mais change pas la variable
console.log(entree);

let levelUp = 10;
levelUp += 5;
console.log(levelUp);
let powerLevel = 9001;
powerLevel -= 100;
console.log(powerLevel);
let multiplyMe = 32;
multiplyMe *= 11;
console.log(multiplyMe);
let quarterMe = 1152;
quarterMe /= 4;
console.log(quarterMe);

let gainedDollar = 3;
gainedDollar++; //++ augmente la valeur de 1
console.log(gainedDollar)
let lostDollar = 50;
lostDollar--; //-- diminue la valeur de 1
console.log(lostDollar);
let favoriteAnimal = 'chats';
console.log('My favorite animal:'+ favoriteAnimal); //ce qui fait My favorite animal:chats

const myName = 'gaetan';
const myCity = 'Paris';
console.log(`My name is ${myName}. My favorite city is ${myCity}.`) // ` se ne sont pas des guillemets ce sont des backticks sur le 7 (ALTGR + 7) les guillemets ne marche pas

let newVariable = 'Playing around with typeof.';
console.log(typeof newVariable);

newVariable = 1;
console.log(typeof newVariable);

const monPrenom = 'gaetan';
console.log(`mon Prenom est ${monPrenom}.`);

let sale = true; // Déclaration avec la valeur initiale

sale = false; // Réaffectation, fonctionne car 'let' permet ce changement

if (sale) {
  console.log('Time to buy!');
} else {
  console.log('Time to wait for a sale');
}

let hungerLevel = 7;

if (hungerLevel > 7) {
  console.log('Time to eat!');
} else {
  console.log('We can eat later!');
}

let mood = 'sleepy';
let tirednessLevel = 6;

if (mood === 'sleepy' && tirednessLevel > 8){
  console.log('time to sleep');}
  else{
    console.log('not bed time yet');
  }

let excited = true;
console.log(!excited); // Prints false

let sleepy = false;
console.log(!sleepy); // Prints true

let wordCount = 5;

if (wordCount) {
  console.log("Great! You've started your work!");
} else {
  console.log('Better get to work!');
}

let favoritePhrase2 = '';

if (favoritePhrase2) {
  console.log("This string doesn't seem to be empty.");
} else {
  console.log('This string is definitely empty.');
}

let tool = ''; // ou mettre '' quelque chosse qui vas changer se qui vas changer dans console.log

let writingUtensil = tool || 'pen';

console.log(`The ${writingUtensil} is mightier than the sword.`);
let isLocked = false;

isLocked ? console.log('You will need a key to open the door.') :  console.log('You will not need a key to open the door.');

let isCorrect = true;

isCorrect ? console.log('Correct!') : console.log('Incorrect!');

let favoritePhrase = 'Love That!';

favoritePhrase === 'Love That!' ? console.log('I love that!') : console.log("I don't love that!");

let season = 'summer';

if (season === 'spring') {
  console.log('It\'s spring! The trees are budding!');
} else if (season === 'winter'){
  console.log('It\'s winter! Everything is covered in snow.')
}else if (season === 'fall'){
  console.log('It\'s fall! Leaves are falling!') 
}else if (season === 'summer'){
  console.log('It\'s sunny and warm because it\'s summer!')
} else {
  console.log('Invalid season.');
}