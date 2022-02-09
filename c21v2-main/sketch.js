const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var engine;
var world;

var chao,teto,paredeE,paredeD;
var paredeA,paredeB;
var bola;

var B1;
var B2;

function setup() {
  createCanvas(400,400);
  engine = Engine.create();
  
  world = engine.world;
  rectMode(CENTER);
  ellipseMode(RADIUS);
B1=createImg("right.png")
B2=createImg("up.png")
B1.position(220,30)
B2.position(20,30)
B1.size(50,50)
B2.size(50,50)
B1.mouseClicked(xforce)
B2.mouseClicked(yforce)
  var bola_options = {
    restitution: 0.9
  }

  bola = Bodies.circle(200,100,20,bola_options);
  World.add(world,bola);

  //criando novos chaos da classe Chao
  chao = new Chao(200,390,400,20);
  teto = new Chao(200,10,400,20);
  paredeE = new Chao(10,200,20,400);
  paredeD = new Chao(390,200,20,400);
  paredeA = new Chao(45,200,20,47);
  paredeB = new Chao(150,200,20,47);
}

function draw(){
  background(51);
  Engine.update(engine);

  //apenas a bola vai ficar amarela usando push e pop
  push();
  fill("gold");
  ellipse(bola.position.x,bola.position.y,20);
  pop();


  //mostra os objetos na tela
  chao.display();
  teto.display();
  paredeE.display();
  paredeD.display();
  paredeA.display();
  paredeB.display();
}

function xforce(){
Matter.Body.applyForce(bola,{x:0,y:0},{x:0.05,y:0})

}

function yforce(){
  Matter.Body.applyForce(bola,{x:0,y:0},{x:0,y:-0.05})
  
  }
