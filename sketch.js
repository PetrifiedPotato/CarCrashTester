var speed, weight;
var car;
var wall;

function setup() {
  createCanvas(1500,400);
 
  speed=random(55,90)
  weight=random(400,1500)
  car=createSprite(50,200,70,40)
  wall=createSprite(1000,200,30,100)
  car.velocityX = speed;
}

function draw() {
  background(255,255,255);  
  drawSprites();
  

  if(wall.x-car<(car.width+wall.width)/2){

    car.velocityX = 0;
    if(deformation>=180){

      car.shapeColor=color(255,0,0);
    }
    if(deformation<180 && deformation>=100){

      car.shapeColor=color(230,0,0);
    }
    if(deformation<100){

      car.shapeColor=color(0,255,0);
    }

  }
  
}



