const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var ground1, ground2;
var block1, block2, block3, block4, block5, block6, block7, block8,block9,block10;
var block11, block12, block13, block14, block15, block16, block17, block18, block19, block20;
var block21, block22, block23;
var polygon1, slingshot;

function setup(){
    var canvas = createCanvas(1200,700);
    engine = Engine.create();
    world = engine.world;


    ground1 = new Ground(540,550,280,20);
    ground2 = new Ground(1000, 350, 280, 20);
    
    block1 = new Box1(439,515,40,50);
    block2 = new Box1(479,515,40,50);
    block3 = new Box1(519,515,40,50);
    block4 = new Box1(559,515,40,50);
    block5 = new Box1(599,515,40,50);
    block6 = new Box1(639,515,40,50);
    block7 = new Box2(460,465,40,50);
    block8 = new Box2(500,465,40,50);
    block9 = new Box2(540,465,40,50);
    block10 = new Box2(580,465,40,50);
    block11 = new Box2(620,465,40,50);
    block12 = new Box3(500,415,40,50);
    block13 = new Box3(540,415,40,50);
    block14 = new Box3(580,415,40,50);
    block15 = new Box4(540,365,40,50);
    block16 = new Box1(910,315,60,50);
    block17 = new Box1(970,315,60,50);
    block18 = new Box1(1030,315,60,50);
    block19 = new Box1(1090,315,60,50);
    block20 = new Box2(940,265,60,50);
    block21 = new Box2(1000,265,60,50);
    block22 = new Box2(1060,265,60,50);
    block23 = new Box3(1000,215,60,50);
    
    polygon1 = Bodies.circle(400,450,60,30);

   // Matter.Bodies.polygon1(400,450,6,30);
    //polygon1 = Bodies.circle(50,200,20);
    World.add(world,polygon1);
    slingshot = new SlingShot(this.polygon, { x : 100  ,y : 200 } );
}

function draw(){
    background(89, 230, 255);
    Engine.update(engine);
   
    
    ground1.display();
    ground2.display();

   
    block1.display();
    block2.display();
    block3.display();
    block4.display();
    block5.display();
    block6.display();
    block7.display();
    block8.display();
    block9.display();
    block10.display();
    block11.display();
    block12.display();
    block13.display();
    block14.display();
    block15.display();
    block16.display();
    block17.display();
    block18.display();
    block19.display();
    block20.display();
    block21.display();
    block22.display();
    block23.display();
 
   slingshot.display();
   polygon1.display();
}
   

function mouseDragged(){
    Matter.Body.setPosition(polygon.body, {x: mouseX , y: mouseY});
}


function mouseReleased(){
    slingshot.fly();
}
