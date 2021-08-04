var bgr, spc1, spc2, spc3, spc4, iss1, spcStation, iss, dock;
var spcI, spcII, spcIII, spcIV; 
var hasDocked = false;

function preload(){

  bgr = loadImage("spacebg.jpg");
  spc1 = loadImage("spacecraft1.png");
  spc2 = loadImage("spacecraft2.png");
  spc3 = loadImage("spacecraft3.png");
  spc4 = loadImage("spacecraft4.png");
  iss1 = loadImage("iss.png");

}



function setup() {
  createCanvas(600,350);

  //createSprite(400,200,20,20);

  dock = createSprite(285, 280);
  dock.addImage(spc2);
  dock.scale = 0.15;

  iss = createSprite(340,180);
  iss.addImage(iss1);
  iss.scale = 0.80;

}

function draw() {
  background(bgr); 
  
  dock.addImage(spc1);

if(!hasDocked){
  dock.x = dock.x+random(-1,1);

if(keyDown("LEFT_ARROW")){
  dock.addImage(spc4);
  dock.x = dock.x -1;
}

if(keyDown("RIGHT_ARROW")){
  dock.addImage(spc3);
  dock.x = dock.x +1;
}

if(keyDown("UP_ARROW")){
  //dock.addImage(spc2);
  dock.y = dock.y -2;
}

if(keyDown("DOWN_ARROW")){
  dock.addImage(spc1);
  //dock.y = dock.y +2;
}
}
if(dock.y <= (iss.y+60) && dock.x <= (iss.x-10)){
  hasDocked = true;
  textSize(25);
  fill("white")
  text("Docking Successful!", 200, 300);
}

  drawSprites();
}