// Desarrollar un programa que permita almacenar las edades de un grupo de 10 personas en un vector de enteros y luego determine la cantidad de personas que son menores de edad, mayores de edad, cuántos adultos mayores, la edad más baja, la edad más alta y el promedio de edades ingresadas. Para el ejercicio anterior suponga que un adulto mayor debe tener una edad igual o superior a 60. Debe validar para cada ingreso que los valores estén en un rango entre 1 y 120 años. En caso de error deberá notificar y solicitar un nuevo valor.

const edades = [];

let i = 1;

while(edades.length < 10){
    const edad = parseInt(prompt(`Ingrese la edad de la persona ${i}:`));
    if(edad >= 1 && edad <= 120){
        edades.push(edad);
        i++;
    }else{
        alert("Ingrese una edad entre 1 y 120 años");
    }
}

const menores = edades.filter(edad => edad < 18);
const mayores = edades.filter(edad => edad >= 18 && edad < 60);
const adultosMayores = edades.filter(edad => edad >= 60);

let edadMinima = edades[0];
for(let i = 0; i < edades.length; i++){
    if(edades[i] < edadMinima){
        edadMinima = edades[i];
    }
}

let edadMaxima = edades[0];
for(let i = 0; i < edades.length; i++){
    if(edades[i] > edadMaxima){
        edadMaxima = edades[i];
    }
}

const promedio = edades.reduce((a, b) => a + b, 0) / edades.length;

console.log(`La cantidad de menores de edad es: ${menores.length}`);
console.log(`La cantidad de mayores de edad es: ${mayores.length}`);
console.log(`La cantidad de adultos mayores es: ${adultosMayores.length}`);
console.log(`La edad mínima es: ${edadMinima}`);
console.log(`La edad máxima es: ${edadMaxima}`);
console.log(`El promedio de edades es: ${promedio}`);
