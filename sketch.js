let dogs = [{
  name: "mia",
  color: "red"
}, {
  name: "apple",
  color: "blue"
}];

let randomIndex;

function setup() {
  createCanvas(600, 600);
  background(200);
  textSize(32);


}

function draw() {




}

function mousePressed() {

  background(random(200, 255));
  randomIndex = int(random(dogs.length));
  text(dogs[randomIndex].name, 50, 50);
  dogs.splice(randomIndex, 1);

}
