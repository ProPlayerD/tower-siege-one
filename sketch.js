const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var ground, platform
var box
var polygon
var polygonImg
var Slingshot

function preload(){
 polygonImg = loadImage("polygon.png")

}

function setup(){
var canvas = createCanvas(1100,600);
engine = Engine.create();
world = engine.world;

//platforms
ground1 = new Ground(900,300,250,20);
ground2 = new Ground(500,500,350,20);

//Platform1,layer1
box1 = new Box(830,265,35,50);
box2 = new Box(865.5,265,35,50);
box3 = new Box(901,265,35,50);
box4 = new Box(936.5,265,35,50);
box5 = new Box(972,265,35,50);

//Platform1,layer2
box6 = new Box(865.5,215,35,50);
box7 = new Box(901,215,35,50);
box8 = new Box(936.5,215,35,50);

//Platform1,top
box9 = new Box(901,165,35,50);

//Platform2,layer1
box10 = new Box(385,465,35,50);
box11 = new Box(420.5,465,35,50);
box12 = new Box(456,465,35,50);
box13 = new Box(491.5,465,35,50);
box14 = new Box(527,465,35,50);
box15 = new Box(562.5,465,35,50);
box16 = new Box(598,465,35,50);

//Platform2,layer2
box17 = new Box(420.5,415,35,50);
box18 = new Box(456,415,35,50);
box19 = new Box(491.5,415,35,50);
box20 = new Box(527,415,35,50);
box21 = new Box(562.5,415,35,50);

//Platform2,layer2
box23 = new Box(456,365,35,50);
box24 = new Box(491.5,365,35,50);
box25 = new Box(527,365,35,50);

//Platform2,top
box26 = new Box(491.5,315,35,50);

polygon = Bodies.circle(100,250,20);
World.add(world,this.polygon)

Slingshot = new SlingShot(this.polygon,{x:100,y:200});

}


function draw(){
background("white")
    
ground1.display();
ground2.display();

box1.display("cyan");
box2.display("cyan");
box3.display("cyan");
box4.display("cyan");
box5.display("cyan");

box6.display("lime");
box7.display("lime");
box8.display("lime");

box9.display("pink");

box10.display("cyan");
box11.display("cyan");
box12.display("cyan");
box13.display("cyan");
box14.display("cyan");
box15.display("cyan");
box16.display("cyan");

box17.display("pink");
box18.display("pink");
box19.display("pink");
box20.display("pink");
box21.display("pink");

box23.display("lime");
box24.display("lime");
box25.display("lime");

box26.display("gray");

//polygon holder with slings

imageMode(CENTER);
image(polygonImg,polygon.position.x,polygon.position.y,40,40);

//ellipse(polygon.position.x,polygon.position.y,20);
Slingshot.display();

}

function mouseDragged(){
    Matter.Body.setPosition(this.polygon,{x:mouseX,y:mouseY});
}


function mouseReleased(){
    Slingshot.fly();
}






