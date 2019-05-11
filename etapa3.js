/*
Equipe
   Elza Beatriz Hermogenes de Farias
   Etapa 2
*/

var yo = 0;
var xo = 50;
var x = 200;
var z = 350;

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
  if (keyIsDown(UP_ARROW)){
     z = z - 3
  }
  if (keyIsDown(DOWN_ARROW)){
      z = z + 3
  }
  ellipse(x, z, 30, 50);
}
