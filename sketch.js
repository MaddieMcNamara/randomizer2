let places = [{
  where: "Paris",
  budget: "red"
}, {
  where: "Dubai",
  budget: "green"
}, {
  where: "Japan",
  budget: "blue"
}, {
  where: "New York",
  budget: "what"
}, {
  where: "Las Vegas",
  budget: "who"

}];

let randomIndex;
let animating = false;
let travels = [];
let imageCounter = 0;

function preload() {

  for (let i = 0; i <= 4; i++) {
    travels[i] = loadImage("assets/travel_" + (i + 1) + ".jpg");

  }
}
// let counter = 0;

function setup() {
  createCanvas(600, 600);
  background(200);
  textSize(32);
  imageMode(CENTER);
  frameRate(12);

button = createButton("Click Here");
button.mousePressed(buttonPressed);

  // setTimeout(changeBackground, 1000);

}

function draw() {

  if (animating == true) {
    background(255, 200);
    image(travels[imageCounter], width / 2, height / 2);

    if (imageCounter < travels.length) {
      imageCounter++;
      console.log(imageCounter);

    } else {

      imageCounter = 0;
    }
    // image(travels[0], width/2, height/2);

    if (imageCounter < travels.length - 1) {
      imageCounter++;
      console.log(imageCounter);
    } else {

      imageCounter = 0;
    }

  }

}

function randomizer() {


  animating = false;
  if (places[0]) {

    background(255, 200);
    randomIndex = int(random(places.length));
    text(places[randomIndex].where, width / 2.3, height / 5);
    image(random(travels), width / 2, height / 2);



    places.splice(randomIndex, 1);

  }

}

function buttonPressed() {
  animating = true;

  setTimeout(randomizer, 2000);




}
