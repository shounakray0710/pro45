var bg,bgImg;
var player;


function preload(){
  bgImg = loadImage("assets/background.gif")
  playerImg = loadImage("assets/aeroplane.png")

}

function setup() {
  createCanvas(1200,600);

  bg = createSprite(width/2,height/2,width,height);
  bg.addImage(bgImg)
  bg.scale=1.5
  bg.velocityX=-1

  player = createSprite(140,80);
  player.addImage(playerImg)
  player.scale = 0.5
}

function draw() {
  background(0); 

  if(bg.x<width/2-85){
   bg.x=width/2
  }
  if (keyDown("up")) {
    player.y=player.y-1;
  }
  if (keyDown("down")) {
    player.y=player.y+1;
  }
  

drawSprites();

}
