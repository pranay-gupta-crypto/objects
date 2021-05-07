const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var hammer;
var stone;
var plane;
var rubber;
var iron;

function setup(){
    var canvas = createCanvas(1200,600);
    engine = Engine.create();
    world = engine.world;

    plane = new Plane(600,height,1200,20)
    hammer = new Hammer(10,100);
    stone = new Stone(600,100,50,50);
    rubber = new Rubber (70,100,50);
    iron = new Iron(500,100,80);


}

function draw(){
    background("lightBlue");
    Engine.update(engine);


   plane.display();
    hammer.display();
    stone.display();
    rubber.display();
    iron.display();
}