var inputPeso, inputAcc, inputDist;
var inputMass, inputTime;
var inputF1, inputA1, inputF2, inputA2, inputVel;
var inputiCaixa, inputiVento, inputjVento;
var buttonMode0, buttonMode1, buttonWork, buttonWork2, buttonGrav, buttonS;
var simulationState = 1;
var mode = -1;
var g = 9.8;
function setup(){
    createCanvas(1280, 720);
    buttonMode0 = createButton("Locomotiva");
    buttonMode0.position(1100,500);
    buttonMode0.style("width", "100px");
    buttonMode0.mousePressed(function(){changeMode(0)});
    buttonMode1 = createButton("Energia Cinética X Tempo");
    buttonMode1.position(1100,525);
    buttonMode1.style("width", "100px");
    buttonMode1.mousePressed(function(){changeMode(1)});
    buttonWork = createButton("Trabalho - Espiões");
    buttonWork.position(1100,585);
    buttonWork.style("width", "100px");
    buttonWork.mousePressed(function(){changeMode(3)});
    buttonWork2 = createButton("Trabalho - Caixote");
    buttonWork2.position(1100,630);
    buttonWork2.style("width", "100px");
    buttonWork2.mousePressed(function(){changeMode(5)}); 
    buttonGrav = createButton("Força Gravitacional");
    buttonGrav.position(1100,675);
    buttonGrav.style("width", "100px");
    buttonGrav.mousePressed(function(){changeMode(4)});
    
    changeMode(0);
}
function changeMode(_mode){
    mode = _mode;
    
    if(inputPeso != null){
        inputPeso.remove();
    }
    if(inputAcc != null){
        inputAcc.remove();
    }
    if(inputDist != null){
        inputDist.remove();
    }
    if(buttonS != null){
        buttonS.remove();
    }
    if(inputMass != null){
        inputMass.remove();
    }
    if(inputTime != null){
        inputTime.remove();
    }
    if(inputF1 != null){
        inputF1.remove();
    }
    if(inputA1 != null){
        inputA1.remove();
    }
    if(inputF2 != null){
        inputF2.remove();
    }
    if(inputA2 != null){
        inputA2.remove();
    }
    if(inputVel != null){
        inputVel.remove();
    }
    if(inputiCaixa != null){
        inputiCaixa.remove();
    }
    if(inputiVento != null){
        inputiVento.remove();
    }
    if(inputjVento != null){
        inputjVento.remove();
    }
    simulationState = 0;
    if(mode == 0){
        inputPeso = createInput();
        inputPeso.position(500,250);
        inputPeso.style("width", "100px");
        inputAcc = createInput();
        inputAcc.position(650,250);
        inputAcc.style("width", "100px");
        inputDist = createSlider(1,10000,1);
        inputDist.position(415,350);
        inputDist.style("width", "400px");
        buttonS = createButton("Simular");
        buttonS.position(575,600);
        buttonS.style("width", "100px");
        buttonS.mousePressed(function(){changeMode(2)});
    }else if(mode == 1){
        inputMass = createInput();
        inputMass.position(450,250);
        inputMass.style("width", "100px");
        inputAcc = createInput();
        inputAcc.position(600,250);
        inputAcc.style("width", "100px");
        inputTime = createInput();
        inputTime.position(750,250);
        inputTime.style("width", "100px");
    }else if(mode == 3){
        inputMass = createInput();
        inputMass.position(150,150);
        inputMass.style("width", "100px");
        inputDist = createInput();
        inputDist.position(150,225);
        inputDist.style("width", "100px");
        inputF1 = createInput();
        inputF1.position(150,300);
        inputF1.style("width", "100px");
        inputA1 = createInput();
        inputA1.position(150,375);
        inputA1.style("width", "100px");
        inputF2 = createInput();
        inputF2.position(150,450);
        inputF2.style("width", "100px");
        inputA2 = createInput();
        inputA2.position(150,525);
        inputA2.style("width", "100px");
    }else if(mode == 4){
        inputMass = createInput();
        inputMass.position(450,250);
        inputMass.style("width", "100px");
        inputDist = createInput();
        inputDist.position(650,250);
        inputDist.style("width", "100px");
        inputVel = createInput();
        inputVel.position(850,250);
        inputVel.style("width", "100px");
    }else if(mode == 5){
        inputiCaixa = createInput();
        inputiCaixa.position(1110,185);
        inputiCaixa.style("width", "100px");
        inputiVento = createInput();
        inputiVento.position(545,209);
        inputiVento.style("width", "100px");
        inputjVento = createInput();
        inputjVento.position(715,209);
        inputjVento.style("width", "100px");
    }
}
function draw(){
    background(200,198,155);
    textAlign(CENTER);
    if(mode == 0){
        mode0();
    }else if(mode == 1){
        mode1();
    }else if(mode == 2){
        mode2();
    }else if(mode == 3){
        work();
    }else if(mode == 4){
        grav();
    }else if(mode == 5){
        caixa();
    }
}
function caixa(){
    var iCaixa, iVento, jVento;
    var resultado;
    textSize(48);
    text("Trabalho - Caixote", 640, 100);
    textSize(18);
    textAlign(LEFT);
    text("Durante uma tempestade, um caixote desliza pelo eixo escorregadio de um estacionamento, sofrendo um deslocamento d = (                        m)î", 100, 200);
    text("enquanto é empurrado pelo vento com uma força F = (                       N) î + (                       N) j.", 100, 225);
    text("Qual é o trabalho realizado pelo vento sobre o caixote?", 100, 250);
    
    
    if(!isNaN(inputiCaixa.value())){
        iCaixa = inputiCaixa.value();
    }else{
        iCaixa = 0;
    }
    if(!isNaN(inputiVento.value())){
        iVento = inputiVento.value();
    }else{
        iVento = 0;
    }
    if(!isNaN(inputjVento.value())){
        jVento = inputjVento.value();
    }else{
        jVento = 0;
    }
    
    textAlign(CENTER);
    textSize(30);
    stroke(127,63,63);
    strokeWeight(1);
    text("W = F*d = (" + str(iVento) + "Nî + " + str(jVento) + "Nj) * " + str(iCaixa) + "Nî", 550, 400);
    text("W = (" + str(iVento) + " * " + str(iCaixa) + ")i*i + (" + str(jVento) + " * " + str(iCaixa) + ")j*i", 550, 425);
    resultado = iCaixa * iVento;
    stroke(0,255,0);
    textSize(36);
    text("W = " + str(resultado) + "J", 550, 600);
    stroke(0);
    strokeWeight(0);
    
}
function mode0(){
    var peso, acc, dist;
    var totalEnergy, mass, vel;
    textSize(48);
    text("Locomotiva", 640, 100);
    textSize(18);
    text("Peso das locomotivas", 550, 220);
    text("Aceleração", 700, 220);
    text("Distância", 620, 320);
    text(str(inputDist.value()), 430+Math.round(inputDist.value()*0.04), 395)
    
    if(!isNaN(inputPeso.value())){
        peso = inputPeso.value();
    }else{
        peso = 0;
    }
    if(!isNaN(inputAcc.value())){
        acc = inputAcc.value();
    }else{
        acc = 0;
    }
    dist = inputDist.value();
    mass = peso / g;
    vel = Math.sqrt(acc*dist);
    totalEnergy = mass*Math.pow(vel,2);
    textSize(30);
    text("K = (mv²)/2", 150, 100);
    text("Ktotal = mv²", 150, 140);
    text("v² = 2a*Ds", 150, 180);
    textSize(20);
    text("Velocidade das locomotivas no momento da colisão: " + str(vel.toFixed(2)) + " m/s", 575, 450);
    text("Energia cinética total no momento da colisão: " + str(totalEnergy.toFixed(2)) + " J", 575, 500);
}
function mode1(){
    var acc, mass, time;
    var totalEnergy, mass, vel;
    textSize(48);
    text("Energia Cinética X Tempo", 640, 100);
    textSize(18);
    text("Massa", 500, 220);
    text("Aceleração", 650, 220);
    text("Tempo", 800, 220);
    
    if(!isNaN(inputMass.value())){
        mass = inputMass.value();
    }else{
        mass = 0;
    }
    if(!isNaN(inputAcc.value())){
        acc = inputAcc.value();
    }else{
        acc = 0;
    }
    if(!isNaN(inputTime.value())){
        time = inputTime.value();
    }else{
        time = 0;
    }
    vel = acc*time;
    totalEnergy = mass*Math.pow(vel,2)/2;
    textSize(30);
    text("K = (mv²)/2", 150, 100);
    text("v = a*t", 150, 140);
    textSize(20);
    text("Velocidade das locomotiva aos: " + str(time) + "s: " + str(vel.toFixed(2)) + " m/s", 605, 400);
    text("Energia cinética total aos: " + str(time) + "s: " + str(totalEnergy.toFixed(2)) + " J", 605, 450);
}
function mode2(){
    createScale();
}
function createScale(){
    var dist = inputDist.value();
    var pixs = 800;
    var scale = dist/pixs;
    var acc;
    var peso;
    var totalEnergy, mass, vel;
    textSize(48);
    text("Colisão Locomotivas", 640, 100);
    textSize(20);
    
    if(!isNaN(inputPeso.value())){
        peso = inputPeso.value();
    }else{
        peso = 0;
    }
    if(!isNaN(inputAcc.value())){
        acc = inputAcc.value();
    }else{
        acc = 0;
    }
    dist = inputDist.value();
    mass = peso / g;
    vel = Math.sqrt(acc*dist);
    totalEnergy = mass*Math.pow(vel,2);
    strokeWeight(3);
    line(200,600,1000,600);
    strokeWeight(0);
    for(var i = 0; i <= 8; i++){
        text(str(i*100*scale), 200+i*100,630);
    }
    fill(0);
    rect(200+simulationState*simulationState*acc/(2*scale),500, 80, 40);
    rect(1000-simulationState*simulationState*acc/(2*scale),500, -80, 40);
    fill(255,0,0);
    if(200+simulationState*simulationState*acc/(2*scale) > 520){
        ellipse(600,520, totalEnergy/(peso), totalEnergy/(peso));
        fill(255);
        text(str(totalEnergy.toFixed(2)) + "J", 600,520);
        setTimeout(function(){changeMode(0)},2000);
    }else{
        simulationState+=1;
    }
    fill(0);
}
function work(){
    var mass, d, f1, angle1, f2, angle2;
    var ttlWork, work1, work2, vEnd;
    
    textSize(48);
    text("Trabalho - Espiões", 640, 100);
    textSize(18);
    text("Massa", 200, 125);
    text("Deslocamento", 200, 200);
    text("Força objeto 1", 200, 275);
    text("Ângulo objeto 1 (Graus, sentido horário)", 200, 350);
    text("Força objeto 2", 200, 425);
    text("Ângulo objeto 2 (Graus, sentido horário)", 200, 500);
    
    if(!isNaN(inputMass.value())){
        mass = inputMass.value();
    }else{
        mass = 0;
    }
    if(!isNaN(inputDist.value())){
        d = inputDist.value();
    }else{
        d = 0;
    }
    if(!isNaN(inputF1.value())){
        f1 = inputF1.value();
    }else{
        f1 = 0;
    }if(!isNaN(inputA1.value())){
        angle1 = inputA1.value();
    }else{
        angle1 = 0;
    }
    if(!isNaN(inputF2.value())){
        f2 = inputF2.value();
    }else{
        f2 = 0;
    }
    if(!isNaN(inputA2.value())){
        angle2 = inputA2.value();
    }else{
        angle2 = 0;
    }
    
    work1 = f1 * d * Math.cos((Math.PI/180)*angle1);
    work2 = f2 * d * Math.cos((Math.PI/180)*angle2);
    ttlWork = work1 + work2;
    vEnd = Math.sqrt((2 * ttlWork) / mass);
    
    text("Trabalho realizado pelo objeto 1: " + str(work1.toFixed(2)) + "N", 1000, 200);
    text("Trabalho realizado pelo objeto 2: " + str(work2.toFixed(2)) + "N", 1000, 250);
    text("Trabalho total realizado: " + str(ttlWork.toFixed(2)) + "N", 1000, 300);
    text("Velocidade após todo o deslocamento: " + str(vEnd.toFixed(2)) + "m/s", 1000, 350);
    
    fill(255);
    rect(550, 350, 100, 100);
    fill(0);
    text(str(mass) + "kg", 600, 400);
    strokeWeight(3);
    line(400, 500, 800, 500);
    stroke(255,0,0);
    line(600,425, 600+ f1*Math.cos((Math.PI/180)*angle1)*10, 425 + f1*Math.sin((Math.PI/180)*angle1)*10);
    stroke(0,0,255);
    line(600,425, 600- f2*Math.cos((Math.PI/180)*angle2)*10, 425 + f2*Math.sin((Math.PI/180)*angle2)*10);
    stroke(0);
    strokeWeight(0);
    text(str(d) + "m", 600, 525);
    
}
function grav(){
    var mass, d,vel, tGrav,tCorda,Kg,ace;
    textSize(48);
    fill(0);
    text("Trabalho Força Gravitacional", 640, 100);
    textSize(16);
    text("Massa", 500, 225);
    text("Distancia", 700, 225);
    text("Velocidade de queda", 900, 225);
    if(!isNaN(inputMass.value())){
        mass = inputMass.value();
    }else{
        mass = 0;
    }
    if(!isNaN(inputDist.value())){
        d = inputDist.value();
    }else{
        d = 0;
    }
    if(!isNaN(inputVel.value())){
        vel= inputVel.value();
    }else{
        vel = 0;
    }
    ace= g/5;
    tGrav = (mass*g*d*Math.cos(0))/1000;
    tCorda = (mass*(-1*ace+g)*d*Math.round(Math.cos(180)))/1000;
    Kg = (mass/2*(vel*vel)+(tGrav+tCorda)*1000)/1000;
    text("Formulario \n Wg = Massa*Gravidade*Distancia* cos 0 \n Wt = Massa*(-1*g/5+g)*Distancia*cos 180 \n Kg = Massa/2 *valocidade ^2 + (Wg+Wt)",800,500);
    text("Trabalho realizado sobre o elevador pela força gravitacional (Wg): " + str(Math.round(tGrav))+" Kj", 700, 320) ;
    text("Trabalho realizado sobre o elevador pela força T exercida pelo cabo durante a queda (Wt): " + str(Math.round(tCorda))+ " Kj", 800, 340);
    text("Energia cinetica do elevador no final da queda de "+str(d) +"m (Kg): " + str(Math.round(Kg))+ " Kj", 700, 360);
    line(126, 500, 126, 0);
    fill(255,255,255);
    rect(25,300,200,250);
    fill(0);
    if(553+float(tGrav) < 715){
      strokeWeight(10);
      line(126, 553, 126, 553+float(tGrav));
      strokeWeight(1);
      text("Trabalho G", 200, 553+float(tGrav));
    }
    else{
      strokeWeight(10);
      line(126, 553, 126, 715);
      strokeWeight(1);
      text("Trabalho G", 200, 715);
    }
    if(300+float(tCorda) > 138){
      strokeWeight(10);
      line(126, 300, 126, 300+float(tCorda));
      strokeWeight(1);
      text("Trabalho Corda", 200, 300+float(tCorda));
    }
    else{
      strokeWeight(10);
      line(126, 300, 126, 138);
      strokeWeight(1);
      text("Trabalho Corda", 200, 138);
    }
    strokeWeight(1);
}
