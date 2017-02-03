
//Arrays con valores asociativos
var imagenes = [];
imagenes["pig"] = "vaca";
imagenes["chicken"] = "pollo";
imagenes["cow"] = "cerdo";

//Class definition of an object

class Animal
{
  constructor(n, v, a)
  {
    this.imagen = new Image();
    this.name = n;
    this.life = v;
    this.attack = a;

    this.imagen.src = imagenes[this.name];
  }
  talk()
  {
    alert(this.name);
  }
  show()
  {
    document.write("<p>");
    document.body.appendChild(this.imagen);
    document.write("<strong>" + this.name + "</strong>");
    document.write("Vida:" + this.life + "<br/>");
    document.write("Ataque:" + this.attack);
    document.write("</p>");
  }
}

var pig = new Animal("Piggles", 100 , 30);
//Objeto de una instancia de la clase Animal
var chicken = new Animal("Little chicken", 80, 50);
var cow = new Animal("Cow", 120, 40);
