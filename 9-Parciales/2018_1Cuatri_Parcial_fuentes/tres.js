//Bienvenidos. 
//Pedir por prompt el precio y el porcentaje de descuento, mostrar el precio final con descuento por id.




function mostrar()
{

var precio;
var descuento;
var preFinal;

precio = prompt(precio)
descuento = prompt(descuento);
preFinal= (precio /100 * descuento);

document.getElementById("elPrecioFinal").value=preFinal;


}
