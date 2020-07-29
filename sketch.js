
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;
var blob1, blob2, blob3, blob4, blob5;
var roof
function preload()
{
	
}

function setup() {
	createCanvas(1600, 700);


	engine = Engine.create();
	world = engine.world;

	startBlobPositionX = width/2;
	startBlobPositionY = height/4+500;
	blobDiameter = 40
	blob1 = new Blob (startBlobPositionX-blobDiameter*2,startBlobPositionY,blobDiameter);
	blob2 = new Blob (startBlobPositionX-blobDiameter,startBlobPositionY,blobDiameter);
	blob3 = new Blob (startBlobPositionX,startBlobPositionY,blobDiameter);
	blob4 = new Blob (startBlobPositionX+blobDiameter,startBlobPositionY,blobDiameter);
	blob5 = new Blob (startBlobPositionX+blobDiameter*2,startBlobPositionY,blobDiameter);
	roof = new Roof(width/2, height/4, width/7, 20);
	rope1 = new Rope(blob1.body,roof.body,-blobDiameter*2, 0);
	rope2 = new Rope(blob2.body,roof.body,-blobDiameter, 0);
	rope3 = new Rope(blob3.body,roof.body, 0);
	rope4 = new Rope(blob4.body,roof.body,+blobDiameter, 0);
	rope5 = new Rope(blob5.body,roof.body,+blobDiameter*2, 0);
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("white");
  keyPressed();
  blob1.display();
  blob2.display();
  blob3.display();
  blob4.display();
  blob5.display();
  roof.display();
  rope1.display();
  rope2.display();
  rope3.display();
  rope4.display();
  rope5.display();
  drawSprites();
 
}

function keyPressed() {

}

