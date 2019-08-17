var inputA, inputB, inputC;

function setup() {
    createCanvas(1100, 720);
    inputA = createInput();
	inputB = createInput();
	inputC = createInput();
	inputA.position(280,150);
	inputB.position(500,150);
	inputC.position(720,150);
}

function draw() {
  background(123);
  textAlign(CENTER);
  fill(255);
  textSize(20);
  text("Espaço/Velocidade/Aceleração com Derivadas",550,50);
  textSize(15);
  text("x² +", 475,167);
  text("x +", 695,167);
  text("Derivando Polinômios",125,75);
  text("d/dx (x^n) = nx^(n-1)",125,100);
  text("Exemplo: d/dx x² = 2x",125,125);
  text("Derivando a fórmula do MUV",125,150);
  text("d/dx v0t + at²/2 = 2(a/2)t + v0",125,175);
  text("v(t) = S'(t) = at + v0",125,200);
  text("a(t) = v'(t) = S''(t) = d/dx at + v0",125,225);
  text("a(t) = a",125,250);
  fill(0);
  textAlign(LEFT);
  mostrarCoords(170,500, "S(m)", "t(s)");
  mostrarCoords(540,500, "v(m/s)", "t(s)");
  mostrarCoordsA(900,500, "a(m/s²)", "t(s)");
  var a = parseFloat(inputA.value());
  var b = parseFloat(inputB.value());
  var c = parseFloat(inputC.value());
  if(inputA.value() == ""){
	  a = 0
  }
  if(inputB.value() == ""){
	  b = 0
  }
  if(inputC.value() == ""){
	  c = 0
  }
  plotGrafico1(a, b, c);
  var v = Derivar(a, b, 0);
  plotGrafico2(v[0],v[1]);
  var ac = Derivar(0, v[0], v[1]);
  plotGrafico3(ac[1]);
  textAlign(CENTER);
  fill(255);
  //text("S(t) = " + str(aSlider.value().toFixed(2)/2) + "t² + " + str(vSlider.value().toFixed(2)) + "t",170,690);
  //text("v(t) = " + str(v[0].toFixed(2)) + "t + " + str(v[1].toFixed(2)),540,690);
  text("v(t) = S'(t)",540,710);
  //text("a(t) = " + str(ac[1].toFixed(2)),900,690);
  text("a(t) = v'(t) = S''(t)",900,710);
  fill(0);
  textAlign(LEFT);
}

function plotGrafico1(a, b, c){
	var carai = 0
	if(Math.abs(a) >= 1){
		carai = Math.abs(a);
	}else{
		carai = Math.abs(1/(Math.abs(a)+1));
		
	}
    for(var i = 0; i < 300; i+=0.2/carai){
        var resultado = (a * ((i-150) * (i-150)) + b * (i-150)) + c;
        if(resultado > 150 || resultado < -150){
          continue;
        }
        fill(0);
        ellipse(20+i, 500-resultado, 5);
    }
}

function plotGrafico2(a, b){
  for(var i = 0; i < 300; i+=0.2){
        var resultado = a * (i-150) + b;
        if(resultado > 150 || resultado < -150){
          continue;
        }
        fill(0);
        ellipse(390+i, 500-resultado, 5);
    }
}

function plotGrafico3(a){
  for(var i = 0; i < 300; i+=0.2){
        fill(0);
        ellipse(750+i, 500-a, 5);
    }
}

function mostrarCoords(x, y, txtY, txtX){
    fill(255);
    rect(x-160,y-200,350,370);
    fill(0);
    line(x - 150, y, x + 150, y);
    line(x, y - 150, x, y + 150);
    for(var i = 0; i <= 150; i++){
        if(i%50==0){
            text(str(i), x + i, y);
            text(str(-i), x - i, y);
            text(str(i), x , y - i);
            text(str(-i), x, y + i);
        }
    }
    textAlign(CENTER);
    text(txtY, x, y-170);
    text(txtX, x+170, y+10);
    textAlign(LEFT);
}

function mostrarCoordsA(x, y, txtY, txtX){
    fill(255);
    rect(x-160,y-200,350,370);
    fill(0);
    line(x - 150, y, x + 150, y);
    line(x, y - 150, x, y + 150);
    for(var i = 0; i <= 150; i++){
		if(i%50==0){
            text(str(i), x + i, y);
            text(str(-i), x - i, y);
            text(str(i), x , y - i);
            text(str(-i), x, y + i);
		}
    }
    textAlign(CENTER);
    text(txtY, x, y-170);
    text(txtX, x+170, y+10);
    textAlign(LEFT);
}

function Derivar(a,b,c){
  var func = new Array();
  func[0] = 2 * a;
  func[1] = b;
  return func;
}
