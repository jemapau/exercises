var d = document.getElementById("draw");
var lienzo = d.getContext("2d");
var lineas = 30;
var l = 0;

function drawLine(color, xinicial, yinicial, xfinal, yfinal)
{
  lienzo.beginPath();
  lienzo.strokeStyle = color;
  lienzo.moveTo(xinicial, yinicial);
  lienzo.lineTo(xfinal, yfinal);
  lienzo.stroke();
  lienzo.closePath();
}

while(1 < lineas)
{
  drawLine("#AAF", 0, 0, 10, 300);
  l = l + 1;
}
