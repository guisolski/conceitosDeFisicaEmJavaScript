var inputAtritoE, inputAtritoD, inputAcc, inputMass, inputVInicial, inputIncrementoF;
var buttonModo0, buttonModo1, buttonSimulate, buttonCancela;
var g = 9.8;
var modo = 0;
var SVinicial = 0
var Simulando = false;
var ForcaSimulate = 0, MaxAe = 0,xRec =600,xRec1 = 0, S_VIncial = 0,S_Desaceleracao = 0,S_Tempo= 0,S_Distancia=0,time = 0.0,S_velocidade = 0,anda = 0;
function setup() {
    createCanvas(1280,720);
    buttonModo0 = createButton("Atrito estático e dinâmico");
    buttonModo0.position(1000, 500);
    buttonModo0.style("width", "200px");
    buttonModo0.mousePressed(function(){mudarModo(0)});
    buttonModo1 = createButton("Desaceleração");
    buttonModo1.position(1000, 530);
    buttonModo1.style("width", "200px");
    buttonModo1.mousePressed(function(){mudarModo(1)});
    textAlign(CENTER);
    mudarModo(0);
}

function draw() {
    if(Simulando == false){
    background(123);
    if(modo == 0){
        modo0();
    }else if(modo == 1){
        modo1();
    }
   }
   else {
     background(123);
     if(modo ==0){
       var fsoma=0;
       text("Atrito Estático "  + MaxAe, 70, 20);
       text("Força "  + ForcaSimulate.toFixed(3), 70, 550-(ForcaSimulate*50));
       rect(xRec,500,100,50);
       if(anda ==0){
        strokeWeight(10);
        stroke(127,255,0);
        line(700,525,ForcaSimulate*10+(xRec+100),525);
        // multipliquei por nove para dar a impressão que é menor que a outra
        line(600,525,MaxAe*-9+xRec,525);
        stroke(0,0,0);
        strokeWeight(1);
       }
       else{
        strokeWeight(10);
        stroke(127,255,0);
        line(700+anda,525,ForcaSimulate*10+(xRec+100),525);
        // multipliquei por nove para dar a impressão que é menor que a outra
        line(600+anda,525,MaxAe*-9+xRec,525);
        stroke(0,0,0);
        strokeWeight(1);
       }
       if(ForcaSimulate < MaxAe){
          text("Taxa de incremento na força", 1150,650);
          if(isNaN(inputIncrementoF.value()) || inputIncrementoF.value() == ""){
              fsoma = 0;
            }else if(isNaN(inputIncrementoF.value()) || inputIncrementoF.value() != 0){
              fsoma = float(inputIncrementoF.value());
              inputIncrementoF.remove();
           }
           ForcaSimulate += fsoma;
       }
       else{
        anda++;
        xRec += ForcaSimulate/10;

        if(xRec>1280){
          Simulando = false;
          buttonModo0 = createButton("Atrito estático e dinâmico");
          buttonModo0.position(1000, 500);
          buttonModo0.style("width", "200px");
          buttonModo0.mousePressed(function(){mudarModo(0)});
          buttonModo1 = createButton("Desaceleração");
          buttonModo1.position(1000, 530);
          buttonModo1.style("width", "200px");
          buttonModo1.mousePressed(function(){mudarModo(1)});
          buttonSimulate = createButton("Simulação");
          buttonSimulate.position(10, 500);
          buttonSimulate.style("width", "200px");
          mudarModo(0);
         }
      }
     }
     else{
     if(time <= S_Tempo){
     rect(xRec1,500,100,50);
     text("Tempo: " + time.toFixed(2), 1150,30);
     time+=1;
     strokeWeight(3);
     line(0,600,1280,600);
     strokeWeight(1);
     textAlign(LEFT);
    for(var i = 0; i < 1300; i++){
        if(i%50==0){
            text(str(i), i+10, 615);
        }
     }
     if(S_velocidade> 0)
     {
     S_velocidade +=  S_Desaceleracao;
     xRec1 += S_velocidade;
    }
    }
    else{
     Simulando = false;
     buttonModo0 = createButton("Atrito estático e dinâmico");
     buttonModo0.position(1000, 500);
     buttonModo0.style("width", "200px");
     buttonModo0.mousePressed(function(){mudarModo(0)});
     buttonModo1 = createButton("Desaceleração");
     buttonModo1.position(1000, 530);
     buttonModo1.style("width", "200px");
     buttonModo1.mousePressed(function(){mudarModo(1)});
     buttonSimulate = createButton("Simulação");
     buttonSimulate.position(10, 500);
     buttonSimulate.style("width", "200px");
     mudarModo(1);
    }

   }
 }
}
function mudarModo(_modo){
    modo = _modo;
    ForcaSimulate = 0, MaxAe = 0,xRec = 600, soma = 0,xRec1 =0,anda = 0;
    if(inputAtritoE != null){
        inputAtritoE.remove();
    }
    if(inputAtritoD != null){
        inputAtritoD.remove();
    }
    if(inputAcc != null){
        inputAcc.remove();
    }
    if(inputMass != null){
        inputMass.remove();
    }
    if(inputVInicial != null){
        inputVInicial.remove();
    }

    if(modo == 0){
        inputAtritoE = createInput();
        inputAtritoE.position(370, 250);
        inputAtritoE.style("width", "100px");
        inputAtritoD = createInput();
        inputAtritoD.position(520, 250);
        inputAtritoD.style("width", "100px");
        inputAcc = createInput();
        inputAcc.position(670, 250);
        inputAcc.style("width", "100px");
        inputMass = createInput();
        inputMass.position(820, 250);
        inputMass.style("width", "100px");
        buttonSimulate = createButton("Simulação");
        buttonSimulate.position(10, 500);
        buttonSimulate.style("width", "200px");
        buttonSimulate.mousePressed(function(){simulation_button(modo)});
    }else if(modo == 1){
        inputVInicial = createInput();
        inputVInicial.position(515, 250);
        inputVInicial.style("width", "100px");
        inputAtritoD = createInput();
        inputAtritoD.position(665, 250);
        inputAtritoD.style("width", "100px");
        buttonSimulate.remove();
    }
}
function cancelarSimulacao(){
    Simulando = false;
    buttonModo0 = createButton("Atrito estático e dinâmico");
    buttonModo0.position(1000, 500);
    buttonModo0.style("width", "200px");
    buttonModo0.mousePressed(function(){mudarModo(0)});
    buttonModo1 = createButton("Desaceleração");
    buttonModo1.position(1000, 530);
    buttonModo1.style("width", "200px");
    buttonCancela.remove();
    mudarModo(0);
}
function simulation_button(_modo){
    modo = _modo;
    Simulando= true;
    S_velocidade = S_VIncial;
    buttonCancela = createButton("Cancelar e voltar");
    buttonCancela.position(200,600);
    buttonCancela.style("width","200px");
    buttonCancela.mousePressed(cancelarSimulacao);
    if(modo == 0){
    inputAtritoD.remove();
    inputAtritoE.remove();
    buttonSimulate.remove();
    inputAcc.remove();
    inputMass.remove();
    buttonModo0.remove();
    buttonModo1.remove();
    var ae, ad,massa, acc,fsoma;
    massa = float(inputMass.value());
    acc = float(inputAcc.value());
    ad = float(inputAtritoD.value());
    ae = float(inputAtritoE.value());
    ForcaSimulate = massa * acc; 
    MaxAe = ae * g;
   if(ForcaSimulate < MaxAe){
           inputIncrementoF = createInput();
           inputIncrementoF.position(1100, 680);
           inputIncrementoF.style("width", "100px");
   }
 }
 else{
    inputAtritoD.remove();
    buttonSimulate.remove();
    inputVInicial.remove();
    buttonModo0.remove();
    buttonModo1.remove();
 }
}
function modo0(){
    var fObjeto, ae, ad;
    var massa, acc;
    textSize(48);
    text("Atrito estático e dinâmico", 640, 100);
    textSize(18);
    text("Atrito Estático", 420, 220);
    text("Atrito Dinâmico", 570, 220);
    text("Aceleração", 720, 220);
    text("Massa", 870, 220);
   
    if(isNaN(inputMass.value()) || inputMass.value() == ""){
        massa = 0;
    }else{
        massa = float(inputMass.value());
    }
    if(isNaN(inputAcc.value()) || inputAcc.value() == ""){
        acc = 0;
    }else{
        acc = float(inputAcc.value());
    }
    if(isNaN(inputAtritoD.value()) || inputAtritoD.value() == ""){
        ad = 0;
    }else{
        ad = float(inputAtritoD.value());
    }
    if(isNaN(inputAtritoE.value()) || inputAtritoE.value() == ""){
        ae = 0;
    }else{
        ae = float(inputAtritoE.value());
    }
    
    fObjeto = massa * acc;
    plotGrafico0(ae,ad, fObjeto);   
    
    textSize(20);
    text("g = 9.8 m/s²", 200, 100);
    text("m * a < C(AtE) * g   -> F(AtE) = m * a", 200, 150);
    text("m * a > C(AtE) * g   -> F(AtD) = C(AtD) * g", 200, 200);
}
function modo1(){
    var vi, ad, mass, dist;
    var acc, tempo;
    textSize(48);
    text("Desaceleração", 640, 100);
    textSize(18);
    text("Vel. Inicial", 565, 220);
    text("Atrito Dinâmico", 715, 220);
   if(isNaN(inputVInicial.value()) || inputVInicial.value() == ""){
        vi = 0;
    }else{
        vi = float(inputVInicial.value());
    }
    if(isNaN(inputAtritoD.value()) || inputAtritoD.value() == ""){
        ad = 0;
    }else{
        ad = float(inputAtritoD.value());
    }
    
    acc = -g * ad;
    tempo = -vi/acc;
    dist = vi*tempo + (acc * tempo * tempo)/2;
    text("Desaceleração: " + str(acc.toFixed(2)) + "m/s²", 150, 300);
    text("Tempo até parada total: " + str(tempo.toFixed(2)) + "s", 550, 300);
    text("Distância total percorrida: " + str(dist.toFixed(2)) + "m",950,300);
    plotGrafico1(-acc, vi);
    S_VIncial = vi;
    S_Desaceleracao = acc;
    S_Tempo = tempo;
    S_Distancia = dist;
    
    
    textSize(20);
    text("g = 9.8 m/s²", 200, 100);
    text("a = -g * F(AtD)", 200, 150);
    text("t = -v0/a", 200, 200);
    
}
function plotGrafico0(ae, ad, fObj){
    fill(255);
    rect(375,335,350,350);
    fill(0);
    line(420,360, 420, 660);
    line(400,640, 700, 640);
    for(var i = 0; i < 100; i+=0.1){
        textSize(15);
        if(int(i*3)%30==0 && int(i*3) != 0){
            text(str(int(i/3)),420+i*3,660);
            text(str(int(i/5)), 400, 640-i*3);
        }
        if(ae * g * 3 > i){
            ellipse(420 + i*3, 640-i*5,2,2);
            if(Math.abs(i - fObj*3) <= 0.1){
                text("Força sobre o corpo", 420+i*3, 640-i*5-30);
                fill(255,0,0);
                stroke(255,0,0);
                ellipse(420+i*3, 640-i*5,5,5);
                stroke(0);
                fill(0);
            }
        }else if(Math.abs(ae * g * 3 - i) < 0.1){
            strokeWeight(2);
            line(420+i*3, 640-i*5, 420+i*3, 640-ad*g*15);
            strokeWeight(1);
        }else{
          ellipse(420 + i*3, 640 - ad*g*15, 2, 2);
          if(Math.abs(i - fObj*3) <= 0.1){
                text("Força sobre o corpo", 420+i*3, 640-ad*g*15-30);
                fill(255,0,0);
                stroke(255,0,0);
                ellipse(420+i*3, 640-ad*g*15,5,5);
                stroke(0);
                fill(0);
          }
        }
    }
}
function plotGrafico1(acc, vi){
    fill(255);
    rect(375,335,350,350);
    fill(0);
    line(420,360, 420, 660);
    line(400,640, 700, 640);
    
    for(var i = 0; i < 300; i+=1){
        textSize(15);
        if(i%30==0 && i != 0){
            text(str(i/30),420+i,660);
            text(str(i/2), 400, 640-i);
        }
        if((vi - (acc*(i/30))) < 0){
            continue;
        }
        ellipse(420 + i, 640 - (vi - (acc*(i/30)))*2, 2, 2);
    }
}
