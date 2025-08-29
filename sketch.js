var x = 0;
var y = 0;
var canvas; 
/*var - cajita que varia su contenido, la cajita tiene que nombrarse sin espacios ni caracteres extraños
const - no me acuerdo
led - var pero en un contexto determinado, ahorra ram
= - para definir algo
== - señala algo que es igual a
!== - señala algo que es diferente a
aca declara la variable canvas var canvas y mas abajo la menciona
si estan arriba de todo el codigo son variables globales*/


function setup() {
  canvas = createCanvas(windowWidth, windowHeight);
  canvas.parent("cuerpo");
  /*cambia el canvas original
  canvas - dentro se dibuja con js*/
  canvas.position(0,0);
  canvas.style('z-index','-1');
  noStroke();
  /*frameRate(12);*/
}

function draw() {
  /*es un loop, se repite constantemente*/
  colorMode(HSB, 360, 100, 100);
  background(map(mouseX, 0, windowWidth, 0, 360), 100, map(mouseY, 0, windowHeight, 50, 100));
  /*el mapeo hace referencia al background al estar dentro de su parentesis
  map - */
  x = lerp(x, mouseX, 0.1);
  y = lerp(y, mouseY, 0.1);
  fill("white");
  /*textSize(random(100,200));*/
  textSize(100, 100);
  text("🐱",x,y);
}

function windowResized() {
  /*es para ajustar todo si se cambia el tamaño de la ventana*/
  resizeCanvas(windowWidth, windowHeight);
}