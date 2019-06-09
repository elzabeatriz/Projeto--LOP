/* 
    Equipe: 
       ELZA BEATRIZ HERMOGENES DE FARIAS (SUBTURMA A) */

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
var qtObj = 6;
var cores = 0;
let img;
var crs = ["Vermelho","Verde","Azul"];
var barreiradeponto = 100;
var tela = 1;
let imgIn;
let imgfim;
 
function preload() {
    img = loadImage('fundo.jpg') 
    imgIn = loadImage('tela1.jpg')
    imgfim = loadImage('gameover.jpg')
     
}
    
function setup(){
   frameRate(30);
   createCanvas(450, 450);
  
    for (var i= 0; i< qtObj; i++){ 
     vxo[i] = random(0, 450);
     vyo[i] = random (0,450);
  } 
 }
function draw(){
  //tela 1 
  if (tela == 1){ 
      image(imgIn, 450, 450);
      background(imgIn);
      fill (255);
      textSize(38);
      text("BEM-VINDO", 120, 150);
      text("AO", 190,205);
      text("MUNDO DAS CORES", 40, 260);
      textSize(25);
      text("aperte ENTER para começar",85,340);
         if(keyIsDown(ENTER)){
            tela = 2;
         }
    }
 //tela 2
 if (tela == 2){ 
      image(imgIn, 450, 450);
      background(imgIn);
      fill (255);
      textSize(30);
      text("OBJETIVOS DO JOGO:" ,10, 120);
      text("# ATIRAR NAS BOLAS QUE", 35,205);
      text("TENHAM A COR PEDIDA", 60, 240);
      text("# ASSIMILANDO A COR COM", 35, 305);
      text("O NOME DA COR",60,340);
      text("aperte ALT e vamos brincar", 60,430)
        if(keyIsDown(ALT)){
          tela = 3;
       }
    }
 //tela do jogo (tela 3) //
 if (tela == 3){
     image(img, 450, 450);
     background(img);
     fill (270);
     textSize(18);
     text("vidas: " +vidas, 10,30);
     text("pontos: " +pontos ,200,30);
     text("nivel: " +nivel, 370,30);
     text("cor: " +crs[cores], 330,50);

       for (var i = 0; i< qtObj; i++){
           if(i%2==0){
             if(cores == 0){
                fill(255,0,0);
              }else if(cores == 1){
                fill (0,255,0)
              }else if(cores == 2){
                fill (0,0,255)
              }
           }else{
            if(cores == 0 ){
               fill(255,255,0);
            }else if(cores == 1){
               fill (255,0,0)
            }else if(cores == 2 ){
               fill (255,0,255)
           }
         }
        ellipse(vxo [i], vyo[i], 30, 30);
             vyo[i] =vyo[i] + 2.5;  
          if(vyo [i] > 450){
             vyo [i]= -random(1000);
          }
    }   
          if (keyIsDown(LEFT_ARROW)){
             x = x - 3.5;
          }
          if (keyIsDown(RIGHT_ARROW)){
             x = x + 3.5;
          }
          if ( keyIsDown(UP_ARROW)&& disparo == false){
            dx = x;
            dz = z;
            disparo = true;
          }
          if(cores == 0){
            fill(255,0,0);
          }else if(cores == 1){
            fill(0,255,0);
          }else if(cores == 2){
            fill(0,0,255);
          }
          if (disparo == true){
            ellipse (dx, dz,9,9); // tiro 
              dz = dz - 10 ;
              if (dz < 0) {
                disparo =false;
              }
              for ( i = 0; i < qtObj; i++) {
                if ( dist(dx, dz, vxo[i], vyo[i]) < 15 && disparo == true){
                  disparo = false;
                  dx=x;
                  dz=z;
                  vxo[i] = random(450);
                  vyo[i] = -random(450);
                    if(i%2==0){
                      pontos = pontos + 10
                    }else{
                      pontos = pontos - 10 
                    }
               }
             }
         }
     
      ellipse(x, z, 2*raioP, 2*raioP); // jogador  
         for ( i = 0; i < qtObj; i++) {
           if ( dist(x, z, vxo[i], vyo[i]) < 40){
           vxo[i] = random(450);
           vyo[i] = -random(450);
           x = 200;
           z = 350;
           vidas--;
           }
           if(pontos >= barreiradeponto){ 
            nivel++;
            cores++;
            vidas++;
            barreiradeponto =   barreiradeponto + 100;
           }
       }
     if (vidas == 0){ 
        tela = 4;
     }
     if (pontos == 300){ 
        tela = 5;
    }
  }
 //tela 4
 if (tela == 4){
     image(imgfim, 450, 450);
     background(imgfim);
 }
 //tela 5
 if (tela == 5){
     image(imgIn, 450, 450);
     background(imgIn);
     fill (400,200,200);
     textSize(38);
     text("PARABÉNS!!", 120, 160);
     text("VOCÊ ACERTOU TODAS", 07,240);
     text(" AS CORES.", 120,290);
  }
}
