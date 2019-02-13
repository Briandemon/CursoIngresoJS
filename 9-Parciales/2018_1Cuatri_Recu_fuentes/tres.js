
//Bienvenidos. 
//Pedir por prompt el precio y el porcentaje de descuento, mostrar el precio final con descuento por id.




function mostrar()
{
var precio;
var porcentaje;
var descuento;


precio = prompt("ingrese un precio");

porcentaje = prompt("Ingrese un porcentaje");

descuento = (precio /100 * porcentaje  );
precFinal = precio - descuento;

document.getElementById("elPrecioFinal").value = precFinal ;



}
