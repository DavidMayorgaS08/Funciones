// Una emisora con presencia en diferentes ciudades desea conocer el rating de canciones y
// cantantes más escuchados (sonados) en este semestre del año. Por lo tanto, se ha pedido a
// estudiantes del SENA del programa de tecnólogo en análisis y desarrollo de software desarrollar
// una solución que permita conocer la respuesta de 6 personas con relación a sus gustos musicales.
// Con fines administrativos y realizar una rifa entre las personas encuestadas, la emisora desea poder registrar de las personas entrevistadas su nombre, número de identificación (cédula), fecha de nacimiento, correo electrónico, ciudad de residencia, ciudad de origen. Además, se deberá poder almacenar el artista y título de hasta 3 canciones favoritas en cada una de las personas que se ingrese, teniendo en cuenta lo anterior, se sugiere que la solución deberá mostrar un menú que permite las siguientes opciones:
// a. Agregar una persona con los datos que se listan anteriormente.
// b. Mostrar la información personal de una persona particular por medio de su posición en el vector.

const personas = [];

let n = 1;


const AgregarPersona = () => {
    const nombre = prompt(`Ingrese el nombre de la persona ${n}`);
    const identificacion = prompt(`Ingrese la identificación de ${nombre}`);
    const fechaNacimiento = prompt(`Ingrese la fecha de nacimiento de ${nombre}`);
    const correo = prompt(`Ingrese el correo de ${nombre}`);
    const ciudadResidencia = prompt(`Ingrese la ciudad de residencia de ${nombre}`);
    const ciudadOrigen = prompt(`Ingrese la ciudad de origen de ${nombre}`);

    const artista = prompt(`Ingrese el artista favorito de ${nombre}`);
    const titulo1 = prompt(`Ingrese el título de la canción 1 favorita de ${artista}`);
    const titulo2 = prompt(`Ingrese el título de la canción 2 favorita de ${artista}`);
    const titulo3 = prompt(`Ingrese el título de la canción 3 favorita de ${artista}`);

    canciones = {
        nombre:nombre,
        identificacion:identificacion,
        fechaNacimiento:fechaNacimiento,
        correo:correo,
        ciudadResidencia:ciudadResidencia,
        ciudadOrigen:ciudadOrigen,
        artista:artista,
        titulo1:titulo1,
        titulo2:titulo2,
        titulo3:titulo3,
    }

    personas.push(canciones);
    n++;
}


for (let i = 1; i <= 2; i++) {
    const opcion = prompt(`Ingrese la opción que desea realizar:
    a. Agregar una persona con los datos que se listan anteriormente.
    b. Mostrar la información personal de una persona.`);

    if (opcion.toLowerCase() === "a") {
        AgregarPersona();
    }
    else if (opcion.toLowerCase() === "b") {
        const posicion = prompt("Ingrese la posición de la persona que desea ver");
        console.log(personas[posicion - 1]);
        i--;
    }
}

for(let k = 0; k < personas.length; k++){
    console.log(`El nombre es ${personas[k]["nombre"]}, la identificación es ${personas[k]["identificacion"]}, la fecha de nacimiento es ${personas[k]["fechaNacimiento"]}, el correo es ${personas[k]["correo"]}, la ciudad de residencia es ${personas[k]["ciudadResidencia"]}, la ciudad de origen es ${personas[k]["ciudadOrigen"]}, el artista favorito es ${personas[k]["artista"]}, el título de las 3 canciones favoritas son ${personas[k]["titulo1"]}, ${personas[k]["titulo2"]}, ${personas[k]["titulo3"]}`)
}