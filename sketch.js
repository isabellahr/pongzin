
let xBolinha = 100; //variavel da bolinha
let yBolinha = 200; //variavel da bolinha
let diametro = 20; //variavel da bolinha
let raio = diametro / 2; //variavel da bolinha


let xRaqueteOponente = 585; //variavel do oponente
let yRaqueteOponente = 150; //variavel do oponente


let velocidadeXBolinha = 6; //velocidade da bolinha
let velocidadeYBolinha = 6; //velocidade da bolinha


let xRaquete = 5; //variavel da raquete
let yRaquete = 150; //variavel da raquete
let raqueteComprimento = 10; //variavel da raquete
let raqueteAltura = 90; //variavel da raquete

//placar do jogo
let meusPontos = 0;
let pontosDoOponente = 0;


//sons do jogo
let raquetada;
let ponto;
let trilha;

let colidiu = false;

function setup() {  //configurações
  createCanvas(600, 400); //cria cenario
    trilha.loop(); //deixar em loop
}

function draw() { //desenhar
    background(0); //fundo
    mostraBolinha(); //mostra bolinha
    movimentaBolinha(); //movimenta bolinha
    verificaColisaoBorda(); //verifica colisão na borda
    mostraRaquete(xRaquete, yRaquete); //mostra a raquete x e y
    movimentaMinhaRaquete(); //movimento da raquete
    verificaColisaoRaquete(xRaquete, yRaquete);//verificação colisão das raquetes
    verificaColisaoRaquete(xRaqueteOponente, yRaqueteOponente); //verificação das raquetes do oponente
    mostraRaquete(xRaqueteOponente, yRaqueteOponente); //mostre a raquete x e y do oponente
    movimentaRaqueteOponente();//movimento da raquete oponente
    incluiPlacar()//incluir o placar 
    marcaPonto();//marca ponto
}
function mostraBolinha() {//mostra bolinha
  circle(xBolinha, yBolinha, diametro);
}

function movimentaBolinha() { //movimento bolinha
  xBolinha += velocidadeXBolinha;//velocidade da bolinha x
  yBolinha += velocidadeYBolinha; //velocidade da bolinha y
}

function verificaColisaoBorda() { //verifica colisao da borda
  if (xBolinha + raio > width || xBolinha - raio < 0) { //tamanho da bolinha
    velocidadeXBolinha *= -1; //velocidade da bolinha
  }
  if (yBolinha + raio > height || yBolinha - raio < 0) { //tamanho da bolinha y
    velocidadeYBolinha *= -1; //velocidade da bolinha y
  }
}

function mostraRaquete(x,y) {//mostra raquete
    rect(x, y, raqueteComprimento, raqueteAltura); //comprimento da raquete x e y
}

function movimentaMinhaRaquete() { //movimento da raquete
  if(keyIsDown(UP_ARROW)) { //a chave está para baixo
    yRaquete -= 10;
  }
  if(keyIsDown(DOWN_ARROW)) {//a chave estava para baixo
    yRaquete += 10;
  }
}

function verificaColisaoRaquete() { //verifique colisao da raquete
  if (xBolinha - raio < xRaquete + raqueteComprimento && yBolinha - raio < yRaquete + raqueteAltura && yBolinha + raio > yRaquete) { 
    velocidadeXBolinha *= -1; //velocidade da bolinhax
     raquetada.play();
  }
}

function verificaColisaoRaquete(x, y) { //verifica colisao da raquete
    colidiu = collideRectCircle(x, y, raqueteComprimento, raqueteAltura, xBolinha, yBolinha, raio);
    if (colidiu){ //se colidiu
        velocidadeXBolinha *= -1; //velocidade da bolinha x
        raquetada.play();
  }
}

function movimentaRaqueteOponente(){ //movimento da raquete do oponente
    if (keyIsDown(87)){ //a chave está para baixo
        yRaqueteOponente -= 10; 
    }
    if (keyIsDown(83)){
        yRaqueteOponente += 10;
    }
}


function incluiPlacar(){ //incluir placar
  stroke(255) //linha
    textAlign(CENTER); //texto alinhado ao centro
    textSize(16); //tamanho da palavra
    fill(color(255,140, 0)); //preencher com cor
    rect(150, 10, 40, 20); //
    fill(255);
    text(meusPontos, 170, 26); //meus pontos
    fill(color(255,140, 0)); //preencher cor
    rect(450, 10, 40, 20); 
    fill(255);
    text(pontosDoOponente, 470, 26); //pontos do oponente



}


function marcaPonto() { //marca ponto
    if (xBolinha > 590) {
        meusPontos += 1; //meus pontos
        ponto.play();
    }
    if (xBolinha < 10) { //se bolinha bater na area livre
        pontosDoOponente += 1; //ponto do oponente
        ponto.play();
    }
}


function preload(){ //pré carregamento
  trilha = loadSound("trilha.mp3");//carrega som
  ponto = loadSound("ponto.mp3"); //som do ponto
  raquetada = loadSound("raquetada.mp3");//som da raquete
}

