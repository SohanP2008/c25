var paperballSprite, paperballSpriteImg;
var groundSprite;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload(){
	paperballSpriteImg = loadImage("paperIMG.png")
}
function setup() {
	createCanvas(800, 700);
	paperballSprite = createSprite(90, 350, 20, 20)
	paperballSprite.addImage(paperballSpriteImg)
	paperballSprite.scale = 0.2
	groundSprite = createSprite(width/2, height-35, width, 10)
	groundSprite.shapeColor = color("white")
	
	var options = {
		isStatic:false,
		restitution:0.3,
		friction:0.5,
		density:1.2
	  }
	
	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	paperBall = Bodies.circle(80, 550, 0.1, options)
	World.add(world, paperBall)
	ground = Bodies.rectangle(width/2,630, width, 10, {isStatic:true})
	World.add(world, ground)
	Engine.run(engine);
	
}


function draw() {
  rectMode(CENTER);
  background("black");
  text(mouseX+","+mouseY,mouseX,mouseY)
  paperballSprite.x = paperBall.position.x
  paperballSprite.y = paperBall.position.y
  keyPressed()
  drawSprites();
}

function keyPressed(){
	if (keyDown("up")){
		Matter.Body.applyForce(paperBall, {x: paperBall.position.x, y: paperBall.position.y}, {x:85,y:-85})
	}
}


