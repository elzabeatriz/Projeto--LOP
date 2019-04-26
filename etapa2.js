/*
Equipe
   Elza Beatriz Hermogenes de Farias
   Etapa 2
*/

var xi = 200;
var x = 200;
var z = 350;

function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(100);
  rect(xi, 10 ,50 ,50)
  
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
