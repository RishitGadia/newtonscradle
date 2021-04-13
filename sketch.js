const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

 var bobObject1, bobObject2, bobObject3, bobObject4, bobObject5, roof;
var rope1;
function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
  world = engine.world;
  bobDiameter = 30;
roof = new Roof(400, 150, 275, 10);
bobObject1 = new Bob(300, 350, 50);
bobObject2 = new Bob(350, 350, 50);
bobObject3 = new Bob(400, 350, 50);
bobObject4 = new Bob(450, 350, 50);
bobObject5 = new Bob(500, 350, 50);
/*var render = Render.create({
  element: document.body, 
  engine:engine. 
  options
})*/
rope1 = new Rope(bobObject1.body, roof.body, 0, 0);
rope2 = new Rope(bobObject2.body, roof.body, 0, 0);
rope3 = new Rope(bobObject3.body, roof.body, 0, 0);
rope4 = new Rope(bobObject4.body, roof.body, 0, 0);
rope5 = new Rope(bobObject5.body, roof.body, 0, 0);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("white");
  rope1.display();
  rope2.display();
  rope3.display();
  rope4.display();
  rope5.display();
  bobObject1.display();
  bobObject2.display();
  bobObject3.display();
  bobObject4.display();
  bobObject5.display();
  roof.display();

  drawSprites();
 
}