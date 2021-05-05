const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var ground0,ground1,ground2;
var box1,box2,box3,box4,box5,box6,box7,box8,box9,box10,box11,box12,box13,box14,box15,box16,box17,box18;
var polygon1,pimg;

var p ;

function preload(){
pimg=loadImage("polygon.png");

}


function setup(){
    createCanvas(1200,600);
    engine = Engine.create();
    world = engine.world;
ground0=new Ground(600,595,1200,10);
ground1=new Ground(700,400,330,10);
ground2=new Ground(1000,200,300,10);

polygon1=Bodies.circle(50,200,20);
World.add(world,polygon1);
 
p = new Rope(polygon1,{x:150,y:300});

//level1
//1
box1=new Box(640,380,40,40,"blue");
//2
box2=new Box(670,380,40,40,"blue");
//3
box3=new Box(700,380,40,40,"blue");
//4
box4=new Box(730,380,40,40,"blue");
//5
box5=new Box(760,380,40,40,"blue");

box6=new Box(670,360,40,40,"green");
box7=new Box(700,360,40,40,"green");
box8=new Box(730,360,40,40,"green");


box9=new Box(700,340,40,40,"red");






box10=new Box(940,180,40,40,"red");
//2
box11=new Box(970,180,40,40,"red");
//3
box12=new Box(1000,180,40,40,"red");
//4
box13=new Box(1030,180,40,40,"red");
//5
box14=new Box(1060,180,40,40,"red");

box15=new Box(970,160,40,40,"green");
box16=new Box(1000,160,40,40,"green");
box17=new Box(1030,160,40,40,"green");


box18=new Box(1000,140,40,40,"blue");

}

function draw() {
    background(30,30,30);
    Engine.update(engine);
textSize(18);
    text("Drag the hexagonal stone and release it, to launch it towards the blocks",200,30);

    imageMode(CENTER);
    image(pimg,polygon1.position.x,polygon1.position.y,40,40);
ground0.display();
ground1.display();
ground2.display();
box1.show();
box2.show();
box3.show();
box4.show();
box5.show();

box6.show();
box7.show();
box8.show();

box9.show();

box10.show();
box11.show();
box12.show();
box13.show();
box14.show();

box15.show();
box16.show();
box17.show();

box18.show();
//ellipseMode(RADIUS);
//ellipse(polygon1.position.x,polygon1.position.y,40,40);
p.asbv();



}

function mouseDragged(){
    Matter.Body.setPosition(polygon1,{x:mouseX , y:mouseY});
}

function mouseReleased(){
    slingshot.fly();
}

