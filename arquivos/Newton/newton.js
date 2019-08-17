var mode = 0;
var buttonMode0, buttonMode1, buttonMode2, buttonMode3;
var XPInput, XNInput, YPInput, YNInput, massInput;
var mass2Input, gInput;
var fPullInput, angleInput;
var polia;


function setup() {
    createCanvas(1280,720);
    
    buttonMode0 = createButton("Forças resultantes");
    buttonMode0.position(1050,500);
    buttonMode0.mousePressed(function(){changeMode(0)});
    buttonMode0.style("width", "175px");
    buttonMode1 = createButton("Polias");
    buttonMode1.position(1050,525);
    buttonMode1.mousePressed(function(){changeMode(1)});
    buttonMode1.style("width", "175px");
    buttonMode2 = createButton("Plano Inclinado");
    buttonMode2.position(1050,550);
    buttonMode2.mousePressed(function(){changeMode(2)});
    buttonMode2.style("width", "175px");
    buttonMode3 = createButton("Corpos aplicando forças");
    buttonMode3.position(1050,575);
    buttonMode3.mousePressed(function(){changeMode(3)});
    buttonMode3.style("width", "175px");
    changeMode(0);
	polia = loadImage("assets/polia.png");
}

function draw() {
    background(123);
    if(mode == 0){
        mode0();
    }else if(mode == 1){
        mode1();
    }else if(mode == 2){
        mode2();
    }else if(mode == 3){
        mode3();
    }
  
}
function changeMode(nextMode){
    mode = nextMode;
    if(XPInput != null){
        XPInput.remove();
    }
    if(XNInput != null){
        XNInput.remove();
    }
    if(YPInput != null){
        YPInput.remove();
    }
    if(YNInput != null){
        YNInput.remove();
    }
    if(massInput != null){
        massInput.remove();
    }
    if(gInput != null){
        gInput.remove();
    }
    if(mass2Input != null){
        mass2Input.remove();
    }
    if(fPullInput != null){
        fPullInput.remove();
    }
    if(angleInput != null){
        angleInput.remove();
    }
    if(mode == 0){
        XPInput = createInput();
        XPInput.position(400,300);
        XPInput.style("width", "100px");
        XNInput = createInput();
        XNInput.position(525,300);
        XNInput.style("width", "100px");
        YPInput = createInput();
        YPInput.position(650,300);
        YPInput.style("width", "100px");
        YNInput = createInput();
        YNInput.position(775,300);
        YNInput.style("width", "100px");
        massInput = createInput();
        massInput.position(590,360);
        massInput.style("width", "100px");
    }else if(mode == 1){
        gInput = createInput();
        gInput.position(475,300);
        gInput.style("width", "100px");
        massInput = createInput();
        massInput.position(600,300);
        massInput.style("width", "100px");
        mass2Input = createInput();
        mass2Input.position(725,300);
        mass2Input.style("width", "100px");
    }else if(mode == 2){
        fPullInput = createInput();
        fPullInput.position(400,300);
        fPullInput.style("width", "100px");
        gInput = createInput();
        gInput.position(525,300);
        gInput.style("width", "100px");
        angleInput = createInput();
        angleInput.position(650,300);
        angleInput.style("width", "100px");
        massInput = createInput();
        massInput.position(775,300);
        massInput.style("width", "100px");
    }else if(mode == 3){
        massInput = createInput();
        massInput.position(475,300);
        massInput.style("width", "100px");
        mass2Input = createInput();
        mass2Input.position(600,300);
        mass2Input.style("width", "100px");
        XPInput = createInput();
        XPInput.position(725,300);
        XPInput.style("width", "100px");
    }
}
function mode0(){
    var forceXP, forceXN, forceYP, forceYN, mass;
    var result, angle;
    
    textAlign(CENTER);
    textSize(48);
    fill(255);
    text("Forças resultantes",640, 100);
    fill(0);
    textSize(26);
    text("Fres = m * aRes", 200, 150);
    line(208,161,585,161);
    text("aRes = √(aX+   -   aX-)² + (aY+   -   aY-)²", 335, 185);
    text("ângulo = arctg[(aX+  -  aX-)/(aY+ - aY-)]", 325, 225);
    textSize(16);
    text("Aceleração X+", 450, 275);
    text("Aceleração X-", 575, 275);
    text("Aceleração Y+", 700, 275);
    text("Aceleração Y-", 825, 275);
    text("Massa do bloco", 640, 345);
    fill(0);
    rect(600,500,100,50);
    
    forceXP = float(XPInput.value());
    forceXN = float(XNInput.value());
    forceYP = float(YPInput.value());
    forceYN = float(YNInput.value());
    mass = float(massInput.value());
    
    if(isNaN(XPInput.value()) || XPInput.value() == ""){
      forceXP = 0;
    }
    if(isNaN(XNInput.value()) || XNInput.value() == ""){
      forceXN = 0;
    }
    if(isNaN(YPInput.value()) || YPInput.value() == ""){
      forceYP = 0;
    }
    if(isNaN(YNInput.value()) || YNInput.value() == ""){
      forceYN = 0;
    }
    if(isNaN(massInput.value()) || massInput.value() == ""){
      mass = 0;
    }
    
    
    result = Math.sqrt(Math.pow(forceXP - forceXN,2) + Math.pow(forceYP - forceYN,2))*mass;
    angle = Math.atan((forceYP - forceYN)/(forceXP - forceXN))*(180/Math.PI);
    if((forceXP - forceXN) < 0){
        angle += 180;
        console.log("A");
    }
    strokeWeight(10);
    stroke(127,255,0);
    line(650,525,650+result*Math.cos(angle*(Math.PI/180)),525-result*Math.sin(angle*(Math.PI/180)))
    stroke(0);
    strokeWeight(1);
    text("Força: " + str(result) + "N", 650,600);
    text("Direção: " + str(angle) + "º", 650,650);
}
function mode1(){
    var gravity, mass1, mass2;
    var result1, result2, angle1, angle2, acc;
    
    textSize(48);
    fill(255);
    text("Polias", 640,100);
    fill(0);
    textSize(26);
    text("m2 * g = (m1 + m2) * a", 200, 150);
    text("(m2 * g)/(m1 + m2) = a", 200, 185);
    textSize(16);
    text("Gravidade", 525, 275);
    text("Massa M1", 650, 275);
    text("Massa M2", 775, 275);
    
    gravity = float(gInput.value());
    mass1 = float(massInput.value());
    mass2 = float(mass2Input.value());
    
    acc = (mass2 * gravity)/(mass1 + mass2)
    result1 = mass1 * acc;
    result2 = mass2 * acc;
    angle1 = 0;
    angle2 = 90;
    
    text("Aceleração: " + str(acc) + "m/s²", 1000, 200);
    text("Força resultante no bloco 1: " + str(result1) + "N", 1000, 250);
    text("Força resultante no bloco 2: " + str(result2) + "N", 1000, 300);
    text("Ângulo do bloco 1:  " + str(angle1) + "º", 1000, 350);
    text("Ângulo do bloco 2: " + str(angle2) + "º", 1000, 400);
    
    image(polia,550,450);
    strokeWeight(6);
    stroke(127,255,0);
    line(610,515,610+result1,515);
    line(735,610,735,610-result2);
    stroke(0);
    strokeWeight(1);
  
  
}
function mode2(){
    var fPull, gravity, angle, mass;
    var result, acc;
    
    textSize(48);
    fill(255);
    text("Plano Inclinado", 640,100);
    fill(0);
    textSize(26);
    text("Fres = F0 - g*sen(Θ)", 200, 150);
    textSize(16);
    text("Força Inicial", 450, 275);
    text("Gravidade", 575, 275);
    text("Ângulo Inclinação", 700, 275);
    text("Massa do bloco", 825, 275);
    
    fPull = float(fPullInput.value() * 1.0);
    gravity = float(gInput.value() * 1.0);
    angle = float(angleInput.value()*(Math.PI/180));
    mass = float(massInput.value() * 1.0);
    
    result = fPull - (gravity * Math.sin(angle));
    acc = result / mass;
    
    text("Força resultante: " + str(result) + "N", 1100, 300);
    text("Aceleração: " + str(acc) + "m/s²", 1100, 350);
    
    strokeWeight(7);
    line(560,520,560+100*Math.cos(angle),520-100*Math.sin(angle));
    strokeWeight(1);
    ellipse(547+50*Math.cos(angle),507-50*Math.sin(angle), 25, 25);
    strokeWeight(4);
    stroke(127,255,0);
    line(547+50*Math.cos(angle), 507-50*Math.sin(angle), 547+(50+result)*Math.cos(angle) , 507-(50+result)*Math.sin(angle));
    stroke(0);
    strokeWeight(1);
}
function mode3(){
    var mass1, mass2, forceX;
    var acc, force1, force2;
    
    textSize(48);
    fill(255);
    text("Corpos aplicando forças entre si", 640,100);
    fill(0);
    textSize(26);
    text("a = F0 / (M1 + M2)", 200, 150);
    text("Força de A sobre B: a * m1", 200, 185);
    text("Força de B sobre A: a * m2", 200, 220);
    textSize(16);
    text("Massa M1", 525, 275);
    text("Massa M2", 650, 275);
    text("Força para a direita", 775, 275);
    
    mass1 = float(massInput.value());
    mass2 = float(mass2Input.value());
    forceX = float(XPInput.value());
    
    acc = forceX / (mass1 + mass2);
    force1 = acc * mass1;
    force2 = acc * mass2;
    
    text("Aceleração: " + str(acc) + "m/s²", 1100, 300);
    text("Força de A sobre B: " + str(force1) + "N", 1100, 350);
    text("Força de B sobre A: " + str(force2) + "N", 1100, 400);
    
    rect(600,450,50,60);
    fill(200);
    rect(650,420,50,90);
    fill(0);
    strokeWeight(7);
    stroke(127,255,0);
    line(625,475,625+force1*10,475);
    stroke(255,127,0);
    line(675,465,675-force2*10,465);
    stroke(0,63,255);
    line(650,525,650+forceX*10, 525);
    stroke(0);
    strokeWeight(1);
}
