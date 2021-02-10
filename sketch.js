const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var ground;
var viking;
var cave;
var gem1_image, gem2_image, gem3_image, gem4_image, gem5_image;

function preload(){
cave_image = loadImage("images/cave.png");
 viking_image = loadImage("images/vikinggirl2.png");
ground_image = loadImage("images/ground.png");
knife_image = loadImage("images/knife.png");
gem1_image = loadAnimation("images/gem1.gif");
gem2_image = loadImage("images/gem2.png");
gem3_image = loadAnimation("images/gem3.gif");
gem4_image = loadAnimation("images/gem4.gif");
gem5_image = loadImage("images/gem5.png");
}

function spawnKnives(){
if (frameCount % 130 === 0){
    var knife = createSprite( 30, 0, 20,20);
    knife.x = Math.round(random(0, displayWidth));
    knife.addImage("knife1", knife_image);
    knife.velocityY = 3
    knife.scale = 0.1


}
}

function spawnGems(){
if (frameCount % 90 === 0 ){
    var gems = createSprite( 30,0,20,20);
    gems.x = Math.round(random(0, displayWidth));
    gems.scale = 0.1
   
    gems.velocityY = 3


    var rand = Math.round(random(1,4));
    switch (rand) {
 case 1: gems.addAnimation(gem1_image);
        break;
case 2: gems.addImage(gem2_image);
        break;
case 3: gems.addAnimation(gem3_image);
        break;
case 4: gems.addAnimation(gem4_image);
        break;
 case 5: gems.addImage(gem5_image);
        break;


default: break;
    }
}

}


function setup(){
    createCanvas(displayWidth,displayHeight);
    cave = createSprite(displayWidth, displayHeight);
    cave.addImage("Cave1", cave_image)
    cave.scale = 7;
    ground = createSprite(displayWidth/2, displayHeight-30, 100, 20);
    ground.addImage("ground1", ground_image);
    viking = createSprite(displayWidth/2, displayHeight-148, 20, 80);
    viking.addImage("Viking1", viking_image);
    viking.scale = 0.2;

} 

function draw(){
    background ("white");
    edges = createEdgeSprites();


    if(keyDown(RIGHT_ARROW)) {
        viking.x = viking.x+5;
        ground.x  = ground.x +5;
      }
        
       if(keyDown(LEFT_ARROW)) {
         viking.x = viking.x -5;
         ground.x = ground.x -5;
       }
    
    ground.bounce (edges[0]);
    ground.bounce(edges[1]);
    viking.collide(edges[0]);
    viking.collide(edges[1]);


spawnKnives();
spawnGems();
    drawSprites();
}