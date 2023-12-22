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
        mostrarJuegos(tiposDeJuegos.RPG, "RPG", 1);
        mostrarJuegos(tiposDeJuegos.SHOOTER, "Shooter", 6);

        let opcionElegida = parseInt(prompt("Ingrese el número del juego que desea calcular sus impuestos"));

        let juegoSeleccionado = tiposDeJuegos.RPG.find(juego => juego.id === opcionElegida) || tiposDeJuegos.SHOOTER.find(juego => juego.id === opcionElegida);
        //Uso find para que me busque con la funcion el primer id del juego.
        if (!juegoSeleccionado) {
            alert("Opción no válida. Por favor, elija un número de juego válido.");
            continue;
        }

        const tipoCambio = 842.68; // Precio del dolar (Cierre del 22/12/2023-10:08)

        const conversionDePesoADolar = juegoSeleccionado.precio * tipoCambio; //PrecioDolar a PesoArgentino

        const impuestoPais = impuestos.find(impuesto => impuesto.nombre === "Impuesto PAIS").porcentaje;
        const impuestosALasGanancias = impuestos.find(impuesto => impuesto.nombre === "Percepción de Impuesto a las Ganancias").porcentaje;

        const precioConImpuesto =
            conversionDePesoADolar +
            conversionDePesoADolar * (impuestoPais + impuestosALasGanancias); //Precio total en pesos, sumandole los impuestos.

        const impuestosTotales =
            precioConImpuesto * (impuestoPais + impuestosALasGanancias);

        //Se le muestra al usuario el precio total con impuestos , el monto de impuestos a pagar y total sin impuestos.
        alert(`Total con impuestos de ${juegoSeleccionado.nombre} es $${precioConImpuesto.toFixed(2)} 
        Impuestos totales: $${impuestosTotales.toFixed(2)} 
        Total sin impuestos: $${conversionDePesoADolar.toFixed(2)}`);
        //Coloco el toFixed para que no me tome solo los dos ultimos numeros despues del punto, asi no tener que redondear ni para arriba ni para abajo, dando el precio exacto.

        //Alert para mostrarle el tipo de cambio utilizado y los impuestos regidos por steam que se le sumaron al precio del juego.
        alert(`Cotización del dólar tarjeta: 1 USD ≈ ${tipoCambio} ARS
        Esta cotización referencial es provista por steam e incluye todos los impuestos listados abajo.

        ${impuestos.map(impuesto => `
        ${impuesto.nombre} ${impuesto.porcentaje * 100}%`).join('\n')}`);
        //Con el map mapeo los impuestos del objeto impuestos dejandome un string , a este lo multiplico x 100 para que me muestre el porcentaje no los decimales de los impuestos,luego uso el join para unir todos estos elementos en una sola cadena y le egrego el salto de linea para que no se vean uno al lado del otro sino uno abajo del otro.

        const nuevoPrecio = prompt(
            "¿Desea realizar otro cálculo? SI/NO"
        ).toLowerCase();
        if (nuevoPrecio !== "si") {
            mensajeDeBienvenidaYDespedida.despedida(nombreDeUsuario);
            break;
        }
    }

}