var images = [];
images["Cow"] = "vaca.png";
images["Chicken"] = "pollo.png";
images["Pig"] = "cerdo.png";

var collection = [];
collection.push(new Animal("Cow", 100, 30) );
collection.push(new Animal("Chicken", 80, 50));
collection.push(new Animal("Pig", 120, 40));

for(var i of collection)
{
  i.show();
}

for(var x in collection[0])
{
  console.log(x);
}
