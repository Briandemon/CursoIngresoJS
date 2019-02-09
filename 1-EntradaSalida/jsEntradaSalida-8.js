/*Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostrar el resto entre el dividendo y el divisor.
ej.: "El resto es 0 ."*/
function SacarResto()
{
    var numUno;
    var numDos;
    var resto;

    numUno = parseInt(document.getElementById("numeroDividendo").value);
    numDos = parseInt(document.getElementById("numeroDivisor").value);

    resto = (numUno%numDos);

    alert("el resto es " + resto);

	
}
