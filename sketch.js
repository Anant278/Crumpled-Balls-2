const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ground;
var dustbinBase, dustbinWall_1, dustbinWall_2;
var paperBall;

function setup() {
	var canvas = createCanvas(1500, 500);
	engine = Engine.create();
	world = engine.world;
	Engine.run(engine);

	//Ground
	ground = createSprite(700, 480, 1600, 30);
	ground.shapeColor = "white";

	//Dustbin
	dustbinBase = createSprite(1250, 450, 220, 30);
	dustbinWall_1 = createSprite(1150, 375, 30, 180);
	dustbinWall_2 = createSprite(1350, 375, 30, 180);

	dustbinBase.shapeColor = "blue";
	dustbinWall_1.shapeColor = "blue";
	dustbinWall_2.shapeColor = "blue";

	//Paper
	paperBall = new Bob(200, 425, 80, 80);
	paperBall.shapeColor = "red";
}

function draw() {
  rectMode(CENTER);
  background(0);

  paperBall.display();
  ballDrop();
  
  drawSprites();

}

function ballDrop(){
	if(keyCode === UP_ARROW){
		Matter.Body.applyForce(paperBall.body, paperBall.position, {x:85, y: -85});
	}
}