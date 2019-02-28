function mostrar()
{

var numero;
var contador;

numero = parseInt(prompt("Ingrese un numero"));
for (var i=1 ; i <= numero ; i++){


    if (numero % i == 0) {


        contador++;
        console.log(i);
    }
}



}//FIN DE LA FUNCIÓN