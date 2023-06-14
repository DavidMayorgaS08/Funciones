// 28. Suponga que se tiene un conjunto de calificaciones de un grupo de 40 alumnos. 
// Crear funciones para.
// Hallar la nota promedio del grupo.
// Hallar la nota mayor
// Hallar la nota menor

function promedio(calificaciones){
    let suma = 0;
    for(let i = 0; i < calificaciones.length; i++){
        suma += calificaciones[i];
    }
    return suma / calificaciones.length;
}

function mayor(calificaciones){
    let mayor = calificaciones[0];
    for(let i = 0; i < calificaciones.length; i++){
        if(calificaciones[i] > mayor){
            mayor = calificaciones[i];
        }
    }
    return mayor;
}

function menor(calificaciones){
    let menor = calificaciones[0];
    for(let i = 0; i < calificaciones.length; i++){
        if(calificaciones[i] < menor){
            menor = calificaciones[i];
        }
    }
    return menor;
}

const calificaciones =[10, 15, 20, 5, 8, 12, 18, 20, 15, 10, 15, 20, 5, 8, 12, 18, 20, 15, 10, 15, 20, 5, 8, 12, 18, 20, 15, 10, 15, 20, 5, 8, 12, 18, 20, 15, 10, 15, 20, 5];

console.log(`El promedio es: ${promedio(calificaciones)}`);
console.log(`La nota mayor es: ${mayor(calificaciones)}`);
console.log(`La nota menor es: ${menor(calificaciones)}`);