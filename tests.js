 //variavéis do jogo 
var vyo = [];
var vxo = [];
var  x = 200;
var z = 350;
var dz = 0;
var dx = 0;
var vidas = 3;
var pontos = 0;
var nivel = 1;
var disparo = false;
var raioP = 25;
var raioO = 30;
var qtObj = 20;
var vtamObj = [];

function setup(){
  createCanvas(450, 450);
for (var i= 0; i< qtObj; i++){ 
  vxo[i] = random(0, 450);
  vyo[i] = random (0,450);
  vtamObj[i] = random(5,30);
} 
}
function draw(){
  background(220);
  fill (0, 102,153);
  textSize(18);
  text("vidas: " +vidas, 10,30);
  text("pontos: " +pontos ,200,30);
  text("nivel: " +nivel, 370,30);
  for (var i= 0; i< qtObj; i++){  
  rect(vxo [i], vyo[i], vtamObj[i], vtamObj[i]);
   vyo[i] =vyo[i] + 5;  
  if(vyo [i] > 400){
    vyo [i]= -random(1000);
  }
  }   
  if (keyIsDown(LEFT_ARROW)){
      x = x - 5
      }
  if (keyIsDown(RIGHT_ARROW)){
    x = x + 5
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
   if ( dist(x, z, vxo[i], vyo[i]) < raioP + raioO){
  x = 200;
  z = 350;
     vidas--;
}
}
//////
//variavéis do jogo 
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
var qtObj = 20;
var vtamObj = [];

function setup(){
  createCanvas(450, 450);
for (var i= 0; i< qtObj; i++){ 
  vxo[i] = random(0, 450);
  vyo[i] = random (0,450);
  vtamObj[i] = random(10,30);
} 
}
function draw(){
  background(220);
  fill (0, 102,153);
  textSize(18);
  text("vidas: " +vidas, 10,30);
  text("pontos: " +pontos ,200,30);
  text("nivel: " +nivel, 370,30);
  for (var i= 0; i< qtObj; i++){  
  rect(vxo [i], vyo[i], vtamObj[i], vtamObj[i]);
   vyo[i] =vyo[i] + 5;  
  if(vyo [i] > 400){
    vyo [i]= -random(1000);
  }
  }   
  if (keyIsDown(LEFT_ARROW)){
      x = x - 5
      }
  if (keyIsDown(RIGHT_ARROW)){
    x = x + 5
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
     if ( dist(dx, dz, vxo[i], vyo[i]) < 8){
 pontos--;
     }
  }
  ellipse(x, z, 2*raioP, 2*raioP);
   if ( dist(x, z, vxo[i], vyo[i]) < raioP){
  x = 200;
  z = 350;
     vidas--;
     
}
  }
