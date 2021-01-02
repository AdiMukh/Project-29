const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var log1, log2, log3, log4, log5, log6, log7, log8, log9, log10, log11, log12, log13, log14, log15;

function setup() {
  var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;
  
    log1 = new Log(200, 200, 10, 10);
}

function draw() {
  background(255,255,255);  
  drawSprites();
}