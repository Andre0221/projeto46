var fundo, fundoImg;
var atirador, atiradorImg;
var edges;
var linha;
var ogro, ogroImg, ogros;

function preload(){

 fundoImg = loadImage("img/fundo2.png");
 atiradorImg = loadImage("img/personagem.png");
 ogroImg = loadImage("img/ogro.png");

}
function setup() {
  createCanvas(windowWidth,windowHeight);

  fundo = createSprite(displayWidth / 2 +160, displayHeight / 2 +35, 20,20);
  fundo.addImage(fundoImg);
  fundo.scale = 2.45;

  atirador = createSprite(displayWidth -1150, displayHeight -200, 10, 10);
  atirador.addImage(atiradorImg);
  atirador.scale = 0.5;
  atirador.setCollider("rectangle",0 ,90 ,250,350);
  atirador.debug = true;

  edges = createEdgeSprites();
  linha = createSprite(displayWidth -1150, displayHeight -450, 10000, 30);
  linha.visible = false;

  ogros = new Group();
}

function draw() {
  

  if (keyDown(UP_ARROW) || touches.length > 0 ){
    atirador.y = atirador.y -7;
  }

  if (keyDown(DOWN_ARROW) || touches.length > 0){
    atirador.y = atirador.y +7;
  }
  atirador.collide(edges[3]);
  atirador.collide(edges[2]);
  atirador.collide(linha);

  if (ogros.isTouching(atirador)){

    for (var i = 0; i <ogros.length; i += 1){

      if(ogros[i].isTouching(atirador)){

         ogros[i].destroy();
      }
    }
  }

  ogrocriacao();

  drawSprites();
}

function ogrocriacao(){

  if (frameCount % 70 === 0){
    ogro = createSprite(displayWidth +350, random(1150, 700), 40, 40);
    ogro.addImage(ogroImg);
    ogro.scale = 0.7;
    ogro.velocityX = -3.5;
    ogro.setCollider("rectangle", 0, 0, 100, 200);
    ogro.lifetime = 480 ;
    ogro.debug = true;
    ogros.add(ogro);
  }


}