var vyo = [];
var vxo = [];
var x = 200;
var z = 350;
var dz = 0;
var dx = 0;
var vidas = 3;
var pontos = 0;
var nivel = 1;
var disparo = false;
var raioP = 25;
var raioO = 30;
var qtObjetos = 30;
function setup() {
  createCanvas(450, 450);
}
 for(var i = 0; i <qtObjetos; i++){
   vxo [i] = random(0,450);
   vyo [i] = random(0,450);
 }


function draw() {
  background(220);
  fill (0, 102,153);
  textSize(18);
  text("vidas: " +vidas, 10,30);
  text("pontos: " +pontos ,200,30);
  text("nivel: " +nivel, 370,30);
  for(var i = 0; i <qtObjetos; i++){
  rect(vxo [i], vyo[i] ,30 ,30);
  vyo =vyo + 4   
  if(vyo[i] > 400){
    vyo [i] = -random(1000);
  } 
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
  ellipse(x, z, 2*raioP, 2*raioP);
}
