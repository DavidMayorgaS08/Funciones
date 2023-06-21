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

    if(figuras == 5){
        break;
    }else if(figuras == 1){
        alert("Para hallar el Perimetro");
        const lado1 = parseFloat(prompt("Ingrese el lado 1: "));
        const lado2 = parseFloat(prompt("Ingrese el lado 2: "));
        const lado3 = parseFloat(prompt("Ingrese el lado 3: "));
        alert("Para hallar el Area");
        const base = parseFloat(prompt("Ingrese la base: "));
        const altura = parseFloat(prompt("Ingrese la altura: "));
        console.log(`El perímetro del triángulo es: ${trianguloP(lado1, lado2, lado3)}`);
        console.log(`El área del triángulo es: ${trianguloA(base, altura)}`);
    }else if(figuras == 2){
        alert("Para hallar el Perimetro y el Area");
        const base = parseFloat(prompt("Ingrese la base: "));
        const altura = parseFloat(prompt("Ingrese la altura: "));
        console.log(`El perímetro del rectángulo es: ${rectanguloP(base, altura)}`);
        console.log(`El área del rectángulo es: ${rectanguloA(base, altura)}`);
    }else if(figuras == 3){
        alert("Para hallar el Perimetro y el Area");
        const lado = parseFloat(prompt("Ingrese el lado: "));
        console.log(`El perímetro del cuadrado es: ${cuadradoP(lado)}`);
        console.log(`El área del cuadrado es: ${cuadradoA(lado)}`);
    }else if(figuras == 4){
        alert("Para hallar el Perimetro y el Area");
        const radio = parseFloat(prompt("Ingrese el radio: "));
        console.log(`El perímetro del círculo es: ${circuloP(radio)}`);
        console.log(`El área del círculo es: ${circuloA(radio)}`);
    }
}