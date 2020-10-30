var trex, trex_running, trex_collided;
var ground, invisibleGround, groundImage;
var cloud,cloudimage
var obstacle,obimage1,obimage2,obimage3,obimage4,obimage5,obimage6


function preload(){
  trex_running = loadAnimation("trex1.png","trex3.png","trex4.png");
  trex_collided = loadImage("trex_collided.png");
  obimage1=loadImage("obstacle1.png")
  obimage2=loadImage("obstacle2.png")
  obimage3=loadImage("obstacle3.png")
  obimage4=loadImage("obstacle4.png")
  obimage5=loadImage("obstacle5.png")
  obimage6=loadImage("obstacle6.png")
  
  
  groundImage = loadImage("ground2.png")
  cloudimage = loadImage("cloud.png")
}


function setup() {
  createCanvas(600, 200);
  
  trex = createSprite(50,180,20,50);
  trex.addAnimation("running", trex_running);
  trex.scale = 0.5;
  
  ground = createSprite(200,180,400,20);
  ground.addImage("ground",groundImage);
  ground.x = ground.width /2;
  ground.velocityX = -2;
  
  
  invisibleGround = createSprite(200,190,400,10);
  invisibleGround.visible = false;
}

function draw() {
  background(255);
   spawnClouds();
  spawnObstacles();
  
  if(keyDown("space")) {
    trex.velocityY = -10;
  }
  
  trex.velocityY = trex.velocityY + 0.8
  
  if (ground.x < 0){
    ground.x = ground.width/2;
  }
  
  trex.collide(invisibleGround);
  drawSprites();
}
function spawnClouds() {
  //write code here to spawn the clouds
  if (World.frameCount % 60 === 0) {
    var cloud = createSprite(500,150,40,10);
    cloud.y = random(0,150);
    cloud.addImage(cloudimage)
    
    
   // cloud.scale = 0.5;
    cloud.velocityX = -3;
    
     //assign lifetime to the variable
    cloud.lifetime = 134;
    
    //adjust the depth
    cloud.depth = trex.depth;
    trex.depth = trex.depth + 1;
    
    //add each cloud to the group
   // CloudsGroup.add(cloud);
  }
  
}
function spawnObstacles() {
  if(World.frameCount % 60 === 0) {
    var obstacle = createSprite(500,150,10,40);
    
    obstacle.velocityX = -6;
    
    //generate random obstacles
    var rand = Math.round(random (1,6));
    switch(rand){
      case 1 :obstacle.addImage(obimage1);
        break;
       case 2 :obstacle.addImage(obimage2);
        break;
        case 3 :obstacle.addImage(obimage3);
        break;
        case 4 :obstacle.addImage(obimage4);
        break;
        case 5 :obstacle.addImage(obimage5);
        break;
        case 6 :obstacle.addImage(obimage6);
        break;
        
    }
    
    
    //assign scale and lifetime to the obstacle           
    obstacle.scale = 0.5;
    obstacle.lifetime = 200;
    //add each obstacle to the group
   // ObstaclesGroup.add(obstacle);
  }
}
