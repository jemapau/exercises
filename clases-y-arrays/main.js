class Animal
{
  constructor(n, v, a)
  {
    this.image = new Image();
    this.name = n;
    this.life = v;
    this.attack = a;

    this.image.src = images[this.name];
  }
  talk()
  {
    alert(this.name);
  }
  show()
  {
    document.body.appendChild(this.image);
    document.write("<br /><strong>" + this.name + "</strong><br />");
    document.write("Vida: " + this.life + "<br />");
    document.write("Ataque: " + this.attack + "<hr />");
  }
}
