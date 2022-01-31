var box;

function setup() {
  createCanvas(400,400);
  box = createSprite(200,200,30,30);

}

function draw() 
{
   background(30);
  //movimentar box para direita 
  if (keyIsDown(RIGHT_ARROW)) 
  {
    //mudando a posição da box no eixo x para direita
    box.position.x = box.position.x +5;
  }
  //movimentar box para esquerda
  if (keyIsDown(LEFT_ARROW)) 
  {
    //mudando a posição da box no eixo x para esquerda
    box.position.x= box.position.x -5;
    
  }
  //movimentar box para cima 
  if (keyIsDown(UP_ARROW)) 
  {
    //mudando a posição da box no eixo y para cima
    box.position.y = box.position.y - 5;
   
  }
  //movimentar box para baixo
  if (keyIsDown(DOWN_ARROW)) 
  {
    //mudando a posição da box no eixo y para baixo
    box.position.y = box.position.y + 5;
  }

  drawSprites();
}




