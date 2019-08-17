var vSlider, aSlider, bola;
var botao;
var cena = 0; //0 = MRU, 1 = MUV
var mudar,simular;
var simulando = 0;//0 = null, 1 = MRU, 2 = MUV
var andaX = 800;
var img;
var tempo = 0;
var vel = 0;
var acc = 0;
function setup() {
   createCanvas(750, 430);
   vSlider = createSlider(0, 5, 0, 0);
   vSlider.position(120,360);
   vSlider.style('width', '295px');
   var v = vSlider.value();
   bola = new Bola(v);
   mudar = createButton("Mudar para MUV");
   mudar.position(600,370);
   mudar.mousePressed(change);
   simular = createButton("Simular Movimento");
   simular.position(600,400);
   simular.mousePressed(Simulacao);
}
function Simulacao(){
  if(cena == 0){
      mudar.remove();
      simular.remove();
      vel = vSlider.value();
      vSlider.remove();
      if(aSlider != null){
            aSlider.remove();
      }
      tempo = 0;
      cena = 2;
  }else if(cena == 1){
      mudar.remove();
      simular.remove();
      vel = vSlider.value();
      acc = aSlider.value();
      vSlider.remove();
      if(aSlider != null){
            aSlider.remove();
      }
      tempo = 0;
      cena = 3;
  }
}
function change(){
    if(cena == 0){
        cena = 1;
        mudar.remove();
        mudar = createButton("Mudar para MRU");
        mudar.position(600,370);
        mudar.mousePressed(change);
        aSlider = createSlider(-0.2,0.2,0,0);
        aSlider.position(120,400);
        aSlider.style('width', '295px');
    }else if(cena == 1){
        cena = 0;
        mudar.remove();
        mudar = createButton("Mudar para MUV");
        mudar.position(600,370);
        mudar.mousePressed(change);
        if(aSlider != null){
            aSlider.remove();
        }
    }

}
function draw() {
  if(cena == 0){
       background(123);
       desenhaCoords();
       desenhaNomes();
       bola = new Bola(vSlider.value());
       bola.ballMove();  
       textSize(32);
       fill(21323);
       text('MRU - Distância/Tempo', 180, 40);
   }else if(cena == 1){
       background(123);
       desenhaCoords();
       desenhaNomesMUV();
       bola = new Bola(vSlider.value());
       bola.a = aSlider.value();
       bola.ballMoveMUV();  
       textSize(32);
       fill(21323);
       text('MUV - Distância/Tempo', 180, 40);
   }else if(cena == 2){
       background(123);
       desenhaCoordsSim();
       strokeWeight(10);
       line(360+vel*tempo, 300, 360+vel*tempo + vel*20, 300);
       strokeWeight(1);
       ellipse(360 + vel*tempo,300,30,30);
       tempo+=1;
       text("t: " + str(tempo), 580,50);
       if(tempo >= 600){
           mudar = createButton("Mudar para MUV");
           mudar.position(600,370);
           mudar.mousePressed(change);
           vSlider = createSlider(0, 5, 0, 0);
           vSlider.position(120,360);
           vSlider.style('width', '295px');
           simular = createButton("Simular Movimento");
           simular.position(600,400);
           simular.mousePressed(Simulacao);
           cena = 0;
       }
   }else if(cena == 3){
       background(123);
       desenhaCoordsSim();
       var x = 360 + vel*tempo + (acc * (tempo * tempo))/2
       strokeWeight(10);
       line(x, 300, x + vel*20+(acc * tempo)*20, 300);
       strokeWeight(1);
       ellipse(x,300,30,30);
       if(tempo >= 600){
           mudar = createButton("Mudar para MRU");
           mudar.position(600,370);
           mudar.mousePressed(change);
           simular = createButton("Simular Movimento");
           simular.position(600,400);
           simular.mousePressed(Simulacao);
           vSlider = createSlider(0, 5, 0, 0);
           vSlider.position(120,360);
           vSlider.style('width', '295px');
           aSlider = createSlider(-0.2,0.2,0,0);
           aSlider.position(120,400);
           aSlider.style('width', '295px');
           cena = 1;
       }
       text("t: " + str(tempo), 580,50);
       tempo+=1;
   }
   
}
function desenhaCoordsSim(){
    textSize(16);
    textAlign();
    line(40,380,680,380);
    textAlign(CENTER);
    for(var i = 0; i <= 600; i++){
        if(i%50==0){
            text(str(i-300), i+60, 400);
        }
    }
    text("S(m)", 710,385);
}
function desenhaCoords(){
    textSize(16);
    textAlign(RIGHT);
    line(50,50,50,310);
    line(50,310,660,310);
    
    for(var i = 0; i < 300; i++){
        if(i%50==0){
            text(str(250-i), 40, 60+i);
        }
    }
    textAlign(LEFT);
    for(var i = 0; i < 600; i++){
        if(i%50==0){
            text(str(i), 60+i, 330);
        }
    }
    
    textAlign(LEFT);
    for(var i = 0; i < 260; i++){
        if(i%10==0){
            text(str(i), 800+i*4,330);
        }
    }
    
}
function desenhaNomes(){
    textAlign(CENTER);
    text("Velocidade", 60,375);
    text(str(vSlider.value().toFixed(2) + " m/s"), 460,373);
    text("t(s)", 680,330);
    text("S(m)", 30,30);
    textAlign(LEFT);
}

function desenhaNomesMUV(){
    textAlign(CENTER);
    text("Velocidade", 60,375);
    text("Aceleração", 60,410);
    text(str((vSlider.value()).toFixed(2) + " m/s"), 460,373);
    text(str((aSlider.value()).toFixed(2) + " m/s²"), 460,413);
    text("t(s)", 680,330);
    text("S(m)", 30,30);
    textAlign(LEFT);
}

function Bola(v){
  this.s;
  this.v = v;
  this.a = 0;
  this.ballMove = function(){
    if(v > 1){
        for(var i = 0; i < 250; i++){
    
            s = 0 + i/v;
            ellipse(60+s, 300-i, 10);
            fill(0);
         } 
    }else{
        for(var i = 0; i < 600; i++){
    
            s = 0 + v*i;
            if(s > 250){
                break;
            }
            ellipse(60+i, 300-s, 10);
            fill(0);
        } 
    }
  };
  
  this.ballMoveMUV = function(){
          for(var i = 0; i < 600; i+=0.1){
    
              s = abs(v*i +(this.a * (i * i))/2);
              if(s > 250){
                  continue;
              }
              ellipse(60+i, 300-s, 10);
              fill(0);
 
        }
  };
}
