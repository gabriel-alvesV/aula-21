const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

let engine;
let world;

var direita, esquerda, cima, baixo;
var bola;
var right;
var up;

function setup() {
  createCanvas(400,400);
  engine = Engine.create();
  
  world = engine.world;
  rectMode(CENTER);
  ellipseMode(RADIUS);

  direita = new Parede(390,200,20,400);
  esquerda = new Parede(10,200,20,400);
  cima = new Parede(200,10,400,20);
  baixo = new Parede(200,390,400,20);
  
  var config={
    restitution:0.6
  }
  bola=Bodies.circle(200,100,20,config);
  World.add(world,bola);

  right=createImg('right.png');
  right.position(220,30);
  right.size(50,50);
  right.mouseClicked(forcax);

  up=createImg('up.png');
  up.position(150,30);
  up.size(50,50);
  up.mouseClicked(forcay);
}

function draw() 
{
  background("lightgrey");
  Engine.update(engine);

  direita.mostrar();
  esquerda.mostrar();
  cima.mostrar();
  baixo.mostrar();
  ellipse(bola.position.x,bola.position.y,20);
}

function forcax()
{
  Matter.Body.applyForce(bola,{x:0,y:0},{x:0.05,y:0});

}
function forcay()
{
  Matter.Body.applyForce(bola,{x:0,y:0},{x:0,y:-0.05});
}