let dogs = [{
  name: "mia",
  color: "red"
}, {
  name: "apple",
  color: "blue"
}];

let randomIndex;
let animating = false;
let trolls = [];
let imageCounter = 0;

function preload(){

  for (let i = 0; i <= 2; i++){
trolls[i] = loadImage('assets/travel_.jpg');

  }
}
// let counter = 0;

function setup() {
  createCanvas(600, 600);
  background(200);
  textSize(32);
  imageMode(CENTER);
  frameRate(12);

  console.log(trolls);

// setTimeout(changeBackground, 1000);

}

function draw() {

if(animating == true) {
  clear();
  image(trolls[imageCounter], width/2, height/2);
image(trolls[0], width/2, height/2);

if (imageCounter < trolls.length - 1){
imageCounter++;
console.log(imageCounter);
} else {

imageCounter = 0;
}

}

}
// function changeBackground() {
//
// if (counter <= 5) {
// counter++;
// console.log(counter)
//
//
//   background(random(255), random(255), random(255));
//   settimeout(changeBackground, 1000);
// }
function randomizer() {

  animating = false;
  if (dogs[0]); {

  clear(12);
    randomIndex = int(random(dogs.length));
    text(`${dogs[randomIndex].name}'s favorite color is
    ${dogs[randomIndex].color}`, width / 2, height - 25);
      image(random(trolls), width / 2, height / 2);


    // text(dogs[randomIndex].name + "'s favorite color is" 50, 50);
    // dogs[randomIndex].color, 50, 50);


    dogs.splice(randomIndex, 1);

  }

}

function mousePressed() {
  animating = true;

setTimeout(randomizer, 2000);




}
