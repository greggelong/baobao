let mary
let umbrel
let baobao
let cnv


function preload(){
  mary = loadImage("marynus.png")
  umbrel = loadImage("maryus.png")
  baobao = loadImage("baobaos.png")
}



function setup() {
  
  cnv = createCanvas(800, 800);
  let cx = floor((windowWidth - cnv.width) / 2);
  let cy = floor((windowHeight - cnv.height) / 2);
  cnv.position(cx, cy);
  baobao.resize(800,0)
  mary.resize(0,730)
  umbrel.resize(330,0)
  baobao.filter(POSTERIZE,5);
  imageMode(CENTER)
  angleMode(DEGREES)
}

function draw() {
  background(255);
  // ground
  fill(80);//fill(100,83,56)
  noStroke();
  
  quad(0,height- height/2.7, width, height-height/4.7, width, height, 0, height)
 
  
  //sky
  noStroke()
  fill(167,144,103)
  quad(0,0, width,0, width, height/2.5, 0, height-height/2.1)
 
  // sun
  let suny = map(sin(frameCount/5),-1,1,height/2.7,0)
  let sunr =  map(sin(frameCount/5),-1,1,90,60)
  fill(139,0,0, 140-sunr)
  
  ellipse(100,suny,sunr,sunr)
  
  // baobao
  image(baobao,width/2,height-height/2)
  
  // umbrella
  let ux =width-width/2.6
  let uy =height/6
  push()
  translate(ux,uy)
  let trans = map(sin(frameCount/5),-1,1,-40,10)
  
  rotate(trans)
  //tint(255,255)
  image(umbrel,0,0)
  pop()
  
  // mary
  image(mary,width-width/3,height/1.9)
   
}