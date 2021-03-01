
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var ball;
function preload()
{
	var ball = loadImage("paper.png");
}

function setup() {
	createCanvas(800,600);


	engine = Engine.create();
	world = engine.world;
    ground = new Ground(400,height,800,20);
	//Create the Bodies Here.	
    block1 = new Catcher(600,550,100,PI/2);
	  block2 = new Catcher(700,550,100,PI/2);
    block3 = new Catchermain(650,600,75);
  ball1 = new Ball(200,400,40);
	Engine.run(engine); 
  
   // paper.addImage=ball;
    
}
function draw() {
  rectMode(CENTER);
  background("white");
  ground.display();
  block1.display();
  block2.display();
  block3.display();
  ball1.display(); 
    keyPressed();
  drawSprites();
}
function keyPressed(){
  if (keyCode === UP_ARROW){
    Matter.Body.applyForce(ball1.body,ball1.body.position,{x:5,y:-20});
  }
}



