console.log('Cou cou!! 🐣');

var canvas = document.getElementById('ville');
var paper = canvas.getContext("2d");
var xini = aleatorio(0, 420);
var yini = aleatorio(0,420);
var velocity = 15

var teclas = { UP: 38, DOWN: 40, LEFT: 37, RIGHT: 39 };

var fondo = {
  url: "tile.png",
  cargaOk: false
}

var cow = {
  url: "vaca.png",
  cargaOK: false
}

var pig = {
  url: "cerdo.png",
  cargaOK: false,
  posX: xini,
  posY: yini
}

document.addEventListener('keydown', movimiento);

function movimiento(evt)
{
  switch (evt.keyCode) {
    case teclas.UP:
      if (pig.posY > 0) {
        pig.posY = pig.posY - velocity;
        clear();
        dibujar();
        console.log('arriba' + ' ' + ' ⬆️ ');
      }
      break;
    case teclas.DOWN:
      if (pig.posY < canvas.width - 80) {
        pig.posY = pig.posY + velocity;
        clear();
        dibujar();
        console.log('abajo' + ' ' + ' ⬇️ ');
      }
      break;
    case teclas.LEFT:
      if (pig.posX > 0) {
        pig.posX = pig.posX - velocity;
        clear();
        dibujar();
        console.log('izquierda' + ' ' + ' ⬅️ ');
      }
      break;
    case teclas.RIGHT:
      if(pig.posX < canvas.width - 80){
        pig.posX = pig.posX + velocity;
        clear();
        dibujar();
        console.log('derecha' + ' ' + ' ➡️ ');
      }
      break;
    default:
  }
}



fondo.imagen = new Image();
//Starts with Uppercase definition of an object, this is call as a Class
fondo.imagen.src = fondo.url;
fondo.imagen.addEventListener("load", cargarFondo);

cow.imagen = new Image();
cow.imagen.src = cow.url;
cow.imagen.addEventListener("load", cargarCows);

pig.imagen = new Image();
pig.imagen.src = pig.url;
pig.imagen.addEventListener("load", cargarPigs);
//pig.imagen.addEventListener("keyup", movePig);

function cargarFondo() {
  fondo.cargaOK = true;
  dibujar();
}

function cargarCows() {
  cow.cargaOK = true;
  dibujar();
}

function cargarPigs() {
  pig.cargaOK = true;
  dibujar();
}

function dibujar() {
if(fondo.cargaOK)
  {
    paper.drawImage(fondo.imagen, 0, 0);
  }
  if (cow.cargaOK)
  {
    var quantity = aleatorio(1, 30);
    console.log(quantity + '🐮');
    for(var v=0; v < quantity; v++)
    {
      var xC = aleatorio(0, 7);
      var yC = aleatorio(0, 7);
      var xC = xC * 60;
      var yC = yC * 60;
      paper.drawImage(cow.imagen, xC, yC);
    }
  } if (pig.cargaOK)
  {
    console.log(' ' + '🐷');
      paper.drawImage(pig.imagen, pig.posX, pig.posY);
  }
}


function aleatorio(min, maxi) {
  var resultado;
  resultado = Math.floor(Math.random() * (maxi - min + 1)) + min;
  return resultado;
}

// function clear(){
//     paper.clearRect(0, 0, canvas.width, canvas.height);
//     dibujar();
// }
