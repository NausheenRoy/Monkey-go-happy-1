
var monkey , monkey_running
var banana ,bananaImage, obstacle, obstacleImage
var bananaGroup, obstacleGroup
var score

function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstaceImage = loadImage("obstacle.png");
 
}



function setup() {
    
createCanvas(800,400);
  
  //creating monkey
  monkey = createSprite(80,315,20,20);
  monkey.addAnimation("moving", monkey_running);
  monkey.scale=0.1;
  
  ground = createSprite(400,350,900,10);
  ground.velocityX=-4;
  ground.x=ground.width/2;
  console.log(ground.x);
  
   ObstaclesGroup = createGroup();
   bananaGroup = createGroup();
  

  
}


function draw() {
   background(180);
  
  
    if (ground.x < 0){
      ground.x = ground.width/2;
    }
  
  if(keyDown("space")) {
        monkey.velocityY = -13;
    }
   monkey.velocityY = monkey.velocityY + 0.8
  
  monkey.collide(ground);
  
  var survivalTime=0;
 
  
    stroke("black");
  textSize(20);
  fill("black");
  survivalTime=Math.ceil(frameCount/frameRate());
  text("Survival Time:"+survivalTime,100,50)

  
  
   drawSprites();
  



 obstacles();
  Banana();
  
  
  

  
}
function Banana (){
  //code to spawn bananas
  if (World.frameCount % 80 === 0) {
    var banana = createSprite(400,Math.round(random(120,200)),40,10);
    banana.addImage("Banana", bananaImage);
    banana.scale = 0.1;
    banana.velocityX = -3;
    bananaGroup.add(banana);
    
  }
}

function obstacles(){
   if(World.frameCount % 120 === 0) {
    var obstacle = createSprite(400,325,10,40);
    
    obstacle.velocityX = -3;
    obstacle.addImage("obstacle",obstacleImage);
    
    //assign scale and lifetime to the obstacle           
    obstacle.scale = 0.1;
    obstacle.lifetime = 134;
    //add each obstacle to the group
     ObstaclesGroup.add(obstacle);
  }
  
}








