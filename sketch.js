const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;

var slingshot;

var polygon;

var platform;
var b8,b9,b10,b11,b12,b13,b14,b15,b16;

function setup()
{
    var canvas = createCanvas(1200,400);

    engine = Engine.create();
    world = engine.world;


    b8= new Box(630,235,30,40);
    b9 = new Box(660,235,30,40);
    b10 = new Box(690,235,30,40);
    b11= new Box(720,235,30,40);
    b12 = new Box(750,235,30,40);

    b13 = new Box(660,195,30,40);
    b14 = new Box(690,195,30,40);
    b15 = new Box(720,195,30,40);

    b16 = new Box(690,155,30,40);

    polygon = new polygons(200,235,30,40);

    platform = new ground(690,280,150,10);


    slingshot = new SlingShot(polygon.body,{x:200,y:150});
    
}

function draw()
{
    background(0);

    
    Engine.update(engine);
    
   
   

    b8.display();
    b9.display();
    b10.display();
    b11.display();
    b12.display();
    b13.display();
    b14.display();
    b15.display();
    b16.display();

    platform.display();

    polygon.display();

    slingshot.display();


    drawSprites();
  
}
function mouseDragged(){
    Matter.Body.setPosition(polygon.body, {x: mouseX , y: mouseY});
}


function mouseReleased(){
    slingshot.fly();
}
function keyPressed()
{
    if(keyCode === 32)
    {
        slingshot.attach(polygon.body);
    }
}

