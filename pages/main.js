const mostrarJuegos = (juegos, tipoJuego, numero) => {
    alert(`A continuación se le mostrarán los juegos ${tipoJuego} disponibles:`);
    juegos.forEach((juego, index) => {
        alert(`${index + numero}: ${juego.nombre}`);
    });
};

const tiposDeJuegos = {
    RPG: [//Objeto de juegosRPG
        { id: 1, nombre: "Elden Ring", precio: 47.99 },
        { id: 2, nombre: "Baldur's gate 3", precio: 34.99 },
        { id: 3, nombre: "Starfield", precio: 41.99 },
        { id: 4, nombre: "Cyberpunk 2077", precio: 44.99 },
        { id: 5, nombre: "Sea of Stars", precio: 17.99 },
    ],
    SHOOTER: [//Objeto de juegosSHOOTER
        { id: 6, nombre: "Doom Eternal", precio: 23.99 },
        { id: 7, nombre: "Halo", precio: 39.99 },
        { id: 8, nombre: "Far cry 4", precio: 23.99 },
        { id: 9, nombre: "Battlefield 1", precio: 39.99 },
        { id: 10, nombre: "Black Mesa", precio: 19.99 },
    ],
};

const mensajeDeBienvenidaYDespedida = {//creo un objeto que tendra dentro un saludo con el mensaje de bienvenida y despedida.
    saludo: () => alert("¡Bienvenido al Mundo de Impuestos Gamer! Tu recorrido comienza aquí, explorando las tarifas fiscales de los juegos en Argentina. ¡Calcula tus impuestos y asegúrate de estar listo para tu próxima compra!"),
    despedida: (nombreUsuario) => alert(`¡Gracias ${nombreUsuario} por usar el Calculador de Impuestos de Steam! ¡Hasta pronto!`),
};

const impuestos = [//Creo un arrays con los impuestos , en caso que se agreguen otro solo lo pongo por debajo.
    { nombre: "Impuesto PAIS", porcentaje: 0.3 },
    { nombre: "Percepción de Impuesto a las Ganancias", porcentaje: 0.3 },
];

mensajeDeBienvenidaYDespedida.saludo();





let nuevoUsuario = prompt("¿Desea crear un nombre de usuario para proseguir?SI/NO").toLowerCase();
if (nuevoUsuario === "no") {
    alert("¡Hasta pronto! Esperamos verte de vuelta muy pronto. ¡Que tengas un buen día!");
} else {
    let nombreDeUsuario = prompt("Por favor, ingresa tu nombre de usuario y comencemos");

    alert("Bienvenido " + nombreDeUsuario + " a tu Calculador de Impuestos de Steam");

    while (true) {
        let precioJuego = parseFloat(prompt("Ingrese el valor en dólares del juego al que desea calcular sus impuestos"));// Con esta variable el usuario me indica el valor del juego que quiere calcularte el impuesto.

        if (isNaN(precioJuego)) {//Con esto me aseguro que el usuario no ingrese letras , solo un valor numerico.
            alert("Por favor, ingresa un valor numérico válido.");
        }else {
            function calculo(tipoCambio = 969) {
            let conversionADolar = precioJuego * tipoCambio;//PrecioDolar a PesoArgentino
            let bienesPersonales =0.25; //Impuesto 1
            let impuestoPais=0.3//Impuesto 2
            let impuestosALasGanancias=1.00 //Impuesto 3
            let precioConImpuesto = conversionADolar + (conversionADolar * (bienesPersonales + impuestoPais + impuestosALasGanancias));
            //Precio total en pesos, sumandole los impuestos.
    
            //Se le muestra al usuario el precio en pesos y precio en dolares con sus impuestos aplicados.
            alert("El total de su juego en pesos es $" + conversionADolar + "\nEl precio con impuestos es: $" +  precioConImpuesto);

            //Alert para mostrarle el tipo de cambio utilizado y los impuestos regidos por steam que se le sumaron al precio del juego.
            alert ("Cotización del dólar tarjeta: 1 USD ≈"+tipoCambio+
            "\nEsta cotización referencial es provista por steam e incluye todos los impuestos listados abajo."+
            "\n"+
            "\nImpuestos Nacionales (Boletín Oficial)".toUpperCase()+ 
            "\nPercepción de Bienes Personales- RG AFIP Nº 5430/2023 25%"+
            "\nImpuesto PAIS - RG AFIP N° 4659/2020 30%"+
            "\nPercepción de Impuesto a las Ganancias - RG AFIP Nº 5232/2022 100%)");
        }
        calculo(); 
        let nuevoPrecio = prompt("¿Desea realizar otro cálculo? SI/NO").toLowerCase();
        if (nuevoPrecio !== "si") {//Le indica un true y se ejecuta el ciclo de nuevo.
            alert("¡Gracias "+ nombreDeUsuario +" "+ "por usar el Calculador de Impuestos de Steam! ¡Hasta pronto!");
            break; //Se corta el ciclo cuando dice que no.
        }
    }
}
}