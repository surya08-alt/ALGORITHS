var fixedRect, movingRect;
var rect1,rect2;
function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(600, 400, 50, 80);
  fixedRect.shapeColor = "green";
  fixedRect.debug = true;
  movingRect = createSprite(400,400,80,30);
  movingRect.shapeColor = "green";
  movingRect.debug = true;
  movingRect.velocityX=1
  fixedRect.velocityX=-1
  rect1=createSprite(200,100,50,50)
  rect2=createSprite(400,100,50,50)
}

function draw() {
  background(0,0,0);  
  rect1.x = World.mouseX;
  rect1.y = World.mouseY;

  isTouching(rect2,rect1)
bounceoff()
  drawSprites();
}


function isTouching(movingRect,fixedRect){
  if (movingRect.x - fixedRect.x < fixedRect.width/2 + movingRect.width/2
    && fixedRect.x - movingRect.x < fixedRect.width/2 + movingRect.width/2
    && movingRect.y - fixedRect.y < fixedRect.height/2 + movingRect.height/2
    && fixedRect.y - movingRect.y < fixedRect.height/2 + movingRect.height/2) {
  movingRect.shapeColor = "red";
  fixedRect.shapeColor = "red";
}
else {
  movingRect.shapeColor = "green";
  fixedRect.shapeColor = "green";
}
}
function bounceoff(){ if(movingRect.x - fixedRect.x < fixedRect.width/2 + movingRect.width/2
  && fixedRect.x - movingRect.x < fixedRect.width/2 + movingRect.width/2){
    movingRect.velocityX=movingRect.velocityX*(-1)
    fixedRect.velocityX=fixedRect.velocityX*(-1)
  }
  if( movingRect.y - fixedRect.y < fixedRect.height/2 + movingRect.height/2
    && fixedRect.y - movingRect.y < fixedRect.height/2 + movingRect.height/2) {
      movingRect.velocityY=movingRect.velocityY*(-1)
      fixedRect.velocityY=fixedRect.velocityY*(-1)}}