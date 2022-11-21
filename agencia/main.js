// Escribir una función en JavaScript que recoja la información de los campos de texto en
// formato JSON cada vez que se pulse el botón "solicitar información". Esta información se
// debe guardar en un array.

// Escribe ahora una segunda función en JavaScript que cada vez que se pulse el boton
// "filtrar", nos muestre por consola la información de las solicitudes recibidas que tengan
// como destino Canarias, Mallorca y Galicia (tener en cuenta que los usuarios pueden
// escribir, el destino en mayuscula o minuscula).
// 5. Modifica la función anterior para que ahora muestre esos datos en una en la landing
// page maquetada anteriormente.
// 6. Sube ahora tu versión final de la agencia de viajes, con los cambios realizados en la
// parte de maquetación y con el archivo .js

let arrayViajes = [];
function pedirInfo() {
    let nombre = document.getElementById("nombre");
    let origen = document.getElementById("origen");
    let destino = document.getElementById("destino");
    let viajeros = document.getElementById("viajeros");
    let fecha = document.getElementById("fecha");

    let viaje =
    {
        nombre_viaje: nombre.value,
        origen_viaje: origen.value,
        destino_viaje: destino.value,
        viajeros_viaje: viajeros.value,
        fecha_viaje: fecha.value
    };

    arrayViajes.push(viaje);
    console.log(arrayViajes);
}

function filtrar() {

    
}