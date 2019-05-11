var yo = 0;
var xo = 50;
var x = 200;
var z = 350;
var dz = 0;
var dx = 0;
var disparo = false;

function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(100);
  rect(xo, yo ,30 ,30);
  yo =yo + 4   
  if(yo > 400){
    yo = -random(1000);
  }
  if (keyIsDown(LEFT_ARROW)){
      x = x - 3
      }
  if (keyIsDown(RIGHT_ARROW)){
    x = x + 3
  }
  if (keyIsDown(UP_ARROW) && disparo == false){
     dx = x;
     dz = z;
   disparo = true;
  }
  if (disparo == true){
  ellipse (dx, dz,4,4);
    dz = dz - 10 ;
    if (dz < 0) {
      disparo = false;
    }
  }
  ellipse(x, z, 30, 50);
}
