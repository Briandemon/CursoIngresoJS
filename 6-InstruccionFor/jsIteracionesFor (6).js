function mostrar()
{
var contaPares;

var numero;

numero = parseInt(prompt("Ingrese un numero"));


for (var i=1; i <= numero ; i++) {

    if(i %2 ==0){


        console.log(i);
        contaPares++;
    }
}


}//FIN DE LA FUNCIÓN