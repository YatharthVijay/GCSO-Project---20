var car;
var wall;
var speed, weight;

function setup() {
  createCanvas(1600,400);
  car =  createSprite(100, 200, 40, 20);
  car.shapeColor = "white";
  

  wall = createSprite(1300,200,20,height/2);
  wall.shapeColor = "grey";

speed = random(50,100);
weight = random(400,1500);
car.velocityX = speed;

}

function draw() {
  background("black");  

  

if(wall.x - car.x < wall.width/2 + car.width/2){

  car.velocityX = 0;
  var deformation = 0.5*weight*speed*speed/22500;

  if(deformation>180){
   car.shapeColor = "red";
 }

  if(deformation<180 && deformation>100){
    car.shapeColor = "yellow";
  }

  if(deformation<100){
    car.shapeColor = "green";
  }

  if(car.collide(wall)){
    car.velocityX = 0;
  }

}


  drawSprites();
}