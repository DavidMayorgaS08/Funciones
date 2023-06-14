// En una empresa se requiere calcular el salario semanal de cada uno de los N obreros que
// laboran en ella. El salario se obtiene de la siguiente forma: Si el obrero trabaja 40 horas o
// menos se le paga $20 por hora. Si trabaja más de 40 horas se le paga $20 por cada una de
// las primeras 40 horas y $25 por cada hora extra.

// Se debe pedir el numero de horas trabajadas y crear una funcion que devuelva el valor a pagar


function salario(horas){
    if(horas <= 40){
        return horas * 20;
    }else{
        return (40 * 20) + ((horas - 40) * 25);
    }
}

while(true){
    let horas = parseInt(prompt("Ingrese las horas trabajadas o 0 para salir"));
    if(horas > 0){
        console.log(`El salario es: ${salario(horas)}`);
    }else{
        break;
    }
}
