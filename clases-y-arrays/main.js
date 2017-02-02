//Class definition of an object

class Pakiman {
  constructor(n, v, a)
  //it works the same as a function
  {
    //ex: alert("Hola")
    this.name = n;
    this.life = v;
    this.atack = a;
    this.tipo = "Tierra";
  }
  talk()
  {
    alert(this.name);
  }
}

var pig = new Pakiman("Piggles", 100 , 30);
//Objeto de una instancia de la clase Pakiman
var chicken = new Pakiman("Little chicken dos", 80, 50);
var cow = new Pakiman("Cow", 120, 40);
console.log(pig, chicken, cow);

chicken.talk()
