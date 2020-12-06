
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint= Matter.Constraint

var engine, world

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);
	engine = Engine.create();
	world = engine.world;

	bob1=new BOB(360,400,30);
	bob2=new BOB(380,410,30);
	bob3=new BOB(400,410,30);
	bob4=new BOB(420,410,30);
	bob5=new BOB(440,400,30);

	roof1=new ROOF(400,100,400,20);
	roof1.shapeColor=("Blue")

	rope1=new Rope(bob1.body,roof1.body,-120,0);
	rope2=new Rope(bob2.body,roof1.body,-60,0);
	rope3=new Rope(bob3.body,roof1.body,0,0);
	rope4=new Rope(bob4.body,roof1.body,60,0);
	rope5=new Rope(bob5.body,roof1.body,120,0);

	//Create the Bodies Here.
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(225);

  bob1.display();
  bob2.display();
  bob3.display();
  bob4.display();
  bob5.display();

  rope1.display();
  rope2.display();
  rope3.display();
  rope4.display();
  rope5.display();


  roof1.display();
  drawSprites();
 
}

function keyPressed(){
	if(keyCode==UP_ARROW){
		Matter.Body.applyForce(bob1.body, bob1.body.position,{x:-50,y:-50});
	}
}
