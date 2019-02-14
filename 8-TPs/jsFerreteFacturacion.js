/*1.	Para el departamento de facturación:
A.	Ingresar tres precios de productos y mostrar la suma de los mismos.
B.	Ingresar tres precios de productos y mostrar el promedio de los mismos.
C.	ingresar tres precios de productos  y mostrar precio final (más IVA 21%).
*/
function Sumar () 
{
    var preUno;
    var preDos;
    var preTres;
    var resultado;

    preUno = parseInt(document.getElementById("PrecioUno").value);
    
    preDos = parseInt(document.getElementById("PrecioDos").value);

    preTres = parseInt(document.getElementById("PrecioTres").value);



    resultado = (preUno + preDos + preTres);

    alert ("La suma de los productos es " + resultado);
	
}
function Promedio () 
{
    var preUno;
    var preDos;
    var preTres;
    var resultado;
     var promedio;

    preUno = parseInt(document.getElementById("PrecioUno").value);

    preDos = parseInt(document.getElementById("PrecioDos").value);

    preTres = parseInt(document.getElementById("PrecioTres").value);
    
    resultado = preUno+ preDos+preTres;

    

   
	
}
function PrecioFinal () 
{
    var preUno;
    var preDos;
    var preTres;
    var resultado;
    
    preUno = parseInt(document.getElementById("PrecioUno").value);

    preDos = parseInt(document.getElementById("PrecioDos").value);

    preTres = parseInt(document.getElementById("PrecioTres").value);

    resultado = preUno+preDos+preTres;
    
       iva = resultado * 0.21;

      precFinal =resultado + iva;

     alert ("precio mas el iva es " +precFinal);



}