let drops = [];
let wind = 0;

function setup() {
  createCanvas(400, 400);
  for(let i = 0; i < 200; i++){
    drops[i] = new Drop();
  }
}

function draw() {
  background(170, 200, 255);
  for(let i = 0; i < drops.length; i++){
    drops[i].fall();
    drops[i].show();
  }
}

function mousePressed (){
  if(mouseX < width/2){
    wind = -1; //belok ke kiri
  } else {
    wind = 1; // belok ke kanan
  }
}

function mouseReleased(){
  wind = 0;
}
