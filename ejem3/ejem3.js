// Un grupo de 100 estudiantes presentan un examen de Física. Diseñe un algoritmo que lea por cada estudiante la calificación obtenida y calcule e imprima:
// • La cantidad de estudiantes que obtuvieron una calificación menor a 50.
// • La cantidad de estudiantes que obtuvieron una calificación de 50 o más pero menor que
// 80.
// • La cantidad de estudiantes que obtuvieron una calificación de 70 o más pero menor que
// 80.
// • La cantidad de estudiantes que obtuvieron una calificación de 80 o más.
//  y crear una función por cada uno


const calificaciones = [];

for(let i = 1; i <= 100; i++){
    calificaciones.push(parseFloat(prompt(`Ingrese la calificación del estudiante ${i}`)));
}

function menor50(calificaciones){
    let cantidad = 0;
    for(let i = 0; i < calificaciones.length; i++){
        if(calificaciones[i] < 50){
            cantidad++;
        }
    }
    return cantidad;
}

function entre50y80(calificaciones){
    let cantidad = 0;
    for(let i = 0; i < calificaciones.length; i++){
        if(calificaciones[i] >= 50 && calificaciones[i] < 80){
            cantidad++;
        }
    }
    return cantidad;
}

function entre70y80(calificaciones){
    let cantidad = 0;
    for(let i = 0; i < calificaciones.length; i++){
        if(calificaciones[i] >= 70 && calificaciones[i] < 80){
            cantidad++;
        }
    }
    return cantidad;
}

function mayor80(calificaciones){
    let cantidad = 0;
    for(let i = 0; i < calificaciones.length; i++){
        if(calificaciones[i] >= 80){
            cantidad++;
        }
    }
    return cantidad;
}

console.log(`La cantidad de estudiantes que obtuvieron una calificación menor a 50 es: ${menor50(calificaciones)}`);
console.log(`La cantidad de estudiantes que obtuvieron una calificación de 50 o más pero menor que 80 es: ${entre50y80(calificaciones)}`);
console.log(`La cantidad de estudiantes que obtuvieron una calificación de 70 o más pero menor que 80 es: ${entre70y80(calificaciones)}`);
console.log(`La cantidad de estudiantes que obtuvieron una calificación de 80 o más es: ${mayor80(calificaciones)}`);
