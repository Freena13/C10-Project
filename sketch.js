var ship,ship_2;
var sea,sea_2;


function preload()
{
  ship_2 = loadAnimation("ship-1.png","ship-2.png","ship-3.png","ship-4.png");
  sea_2 = loadImage("sea.png");
}

function setup()
{
  createCanvas(400,400);
  sea = createSprite(200,200,50,50);
  sea.addImage(sea_2);
  sea.scale = 0.3;
  sea.velocityX = -2;
  if(sea.x<0)
  {
    sea.x = sea.width/2;
  }
  ship = createSprite(130,305,40,10);
  ship.addAnimation(ship_2);
}

function draw() {
  background("blue");
  drawSprites()
}