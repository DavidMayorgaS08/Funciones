// Desarrollar un programa que permita calcular el área o perímetro de algunas figuras planas

const pi = 3.1416;

const trianguloP = (lado1, lado2, lado3) => {
    perimetro = lado1 + lado2 + lado3;
    return perimetro;
}

const trianguloA = (base, altura) => {
    area = (base * altura) / 2;
    return area;
}

const rectanguloP = (base, altura) => {
    perimetro = 2 * (base + altura);
    return perimetro;
}

const rectanguloA = (base, altura) => {
    area = base * altura;
    return area;
}

const cuadradoP = (lado) => {
    perimetro = 4 * lado;
    return perimetro;
}

const cuadradoA = (lado) => {
    area = lado * lado;
    return area;
}

const circuloP = (radio) => {
    perimetro = 2 * pi * (radio * radio);
    return perimetro;
}

const circuloA = (radio) => {
    area = pi * (radio * radio);
    return area;
}

while(true){
    const figuras = prompt("Ingrese la figura que desea calcular: \n 1. Triángulo \n 2. Rectángulo \n 3. Cuadrado \n 4. Círculo \n 5. Salir");

    if(figuras == 1){
        const triangulo = prompt("Ingrese la operación que desea realizar: \n 1. Perímetro \n 2. Área");
        if(triangulo == 1){
            const lado1 = parseInt(prompt("Ingrese el lado 1: "));
            const lado2 = parseInt(prompt("Ingrese el lado 2: "));
            const lado3 = parseInt(prompt("Ingrese el lado 3: "));
            console.log(`El perímetro del triángulo es: ${trianguloP(lado1, lado2, lado3)}`);
        }else{
            const base = parseInt(prompt("Ingrese la base: "));
            const altura = parseInt(prompt("Ingrese la altura: "));
            console.log(`El área del triángulo es: ${trianguloA(base, altura)}`);
        }
    }
    else if(figuras == 2){
        const rectángulo = prompt("Ingrese la operación que desea realizar: \n 1. Perímetro \n 2. Área");
        if(rectángulo == 1){
            const base = parseInt(prompt("Ingrese la base: "));
            const altura = parseInt(prompt("Ingrese la altura: "));
            console.log(`El perimetro del rectangulo es: ${trianguloA(base, altura)}`);
        }
        else{
            const base = parseInt(prompt("Ingrese la base: "));
            const altura = parseInt(prompt("Ingrese la altura: "));
            console.log(`El área del rectangulo es: ${trianguloA(base, altura)}`);
        }
    }
    else if(figuras == 3){
        const cuadrado = prompt("Ingrese la operación que desea realizar: \n 1. Perímetro \n 2. Área");
        if(cuadrado == 1){
            const lado = parseInt(prompt("Ingrese el lado: "));
            console.log(`El perímetro del cuadrado es: ${cuadradoP(lado)}`);
        }
        else{
            const lado = parseInt(prompt("Ingrese el lado: "));
            console.log(`El área del cuadrado es: ${cuadradoA(lado)}`);
        }
    }
    else if(figuras == 4){
        const circulo = prompt("Ingrese la operación que desea realizar: \n 1. Perímetro \n 2. Área");
        if(circulo == 1){
            const radio = parseInt(prompt("Ingrese el radio: "));
            console.log(`El perímetro del círculo es: ${circuloP(radio)}`);
        }
        else{
            const radio = parseInt(prompt("Ingrese el radio: "));
            console.log(`El área del círculo es: ${circuloA(radio)}`);
        }
    }
    else if(figuras == 5){
        break;
    }
    else{
        console.log("Ingrese una opción válida");
    }   
}