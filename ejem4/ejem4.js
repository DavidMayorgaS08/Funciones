// Una pizzería, vende sus pizzas en tres tamaños: pequeña (10 pulg. De diámetro); mediana
// (12 pulg. De diámetro); y grandes (16 pulg. De diámetro); Una pizza puede ser sencilla (con
// sólo salsa y carne), o con ingredientes extras, tales como pepinillos, champiñones o cebollas
// Los propietarios desean desarrollar un programa que calcule el precio de venta de una pizza,
// dándole el tamaño y el número de ingredientes extras. El precio de venta será 1.5 veces el
// costo total, que viene determinado por el área de la pizza, más el número de ingredientes.
// En particular el costo total se calcula sumando:
// * Un costo fijo de preparación
// * Un costo base variable que es proporcional al tamaño de la pizza
// * Un costo adicional por cada ingrediente extra. Por simplicidad se supone que cada
// ingrediente extra tiene el mismo costo por unidad de área.
// con funciones


const costoFijo = 10;
const CostoPequeña = 4;
const CostoMediana = 6;
const CostoGrande = 8;
const ingredienteExtra = 3;

function calcularPrecio(CostoVariable) {
    const costoTotal = costoFijo + CostoVariable;

    return costoTotal * 1.5;
}

function calcularPrecioExtras(CostoVariable, ingredientes) {
    const costoIngredientes = ingredientes * ingredienteExtra;

    const costoTotal = costoFijo + CostoVariable + costoIngredientes;

    return costoTotal * 1.5;
}

while (true) {
    const tamaño = prompt("Ingrese el tamaño de la pizza: \n 1. pequeña \n 2. mediana \n 3. grande \n 0. salir");
    if (tamaño == 0) {
        break;
    }

    const ingredientes = prompt("Ingrese el número de ingredientes extras: ");

    let CostoVariable = 0;

    if(ingredientes > 0){
        if (tamaño == 1) {
            CostoVariable = CostoPequeña;
            console.log(`El precio de la pizza es: ${calcularPrecioExtras(CostoVariable, ingredientes)}`);
        }
        else if (tamaño == 2) {
            CostoVariable = CostoMediana;
            console.log(`El precio de la pizza es: ${calcularPrecioExtras(CostoVariable, ingredientes)}`);
        }
        else if (tamaño == 3) {
            CostoVariable = CostoGrande;
            console.log(`El precio de la pizza es: ${calcularPrecioExtras(CostoVariable, ingredientes)}`);
        }
    }
    else{
        if(tamaño == 1){
            CostoVariable = CostoPequeña;
            console.log(`El precio de la pizza es: ${calcularPrecio(CostoVariable)}`);
        }
        else if(tamaño == 2){
            CostoVariable = CostoMediana;
            console.log(`El precio de la pizza es: ${calcularPrecio(CostoVariable)}`);
        }
        else if(tamaño == 3){
            CostoVariable = CostoGrande;
            console.log(`El precio de la pizza es: ${calcularPrecio(CostoVariable)}`);
        }
    }
}