
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ball1

function preload()
{
	
}

function setup() {
	createCanvas(1000,450);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.

	Engine.run(engine);

	ball1 = new Ball (100,300,30,30);
	bin1 = new bin (750,height-75,10,90)
	bin2 = new bin (900,height-75,10,90)
	bin3 = new bin (825,height-30,150,10)
	ground1 = new Ground(750,height,1500,20)
}


function draw() {
  rectMode(CENTER);


  background(0);

  Engine.update(engine);

  ball1.display();
  bin1.display();
  bin2.display();
  bin3.display();
  console.log(ball1.position)

  drawSprites();

  keyArrow()

 
}
function keyArrow(){

	if(keyCode==UP_ARROW){

		Matter.Body.applyForce(ball1.body,ball1.body.position,{x:2,y:-9});

	}


}


