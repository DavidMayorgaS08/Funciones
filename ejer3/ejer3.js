const numero1 = [];
const numero2 = [];
let ingresar1;
let ingresar2;

function ordenar(numero1, numero2) {
  let concat = numero1.concat(numero2);
  let ascendentemente = concat.sort();
  return ascendentemente;
}

while (true) {
  ingresar1 = prompt("ingrese un numero para el primer vector (salir:s)") ;
  if (ingresar1 == "s") break;
  numero1.push(ingresar1);
}

while (true) {
  ingresar2 =  prompt("ingrese un numero para el segundo vector (salir:s)");
  if (ingresar2 == "s") break;
  numero2.push(ingresar2);
}
console.log(ordenar(numero1, numero2));