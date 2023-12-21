alert("¡Bienvenido al Mundo de Impuestos Gamer! Tu recorrido comienza aquí, explorando las tarifas fiscales de los juegos en Argentina. ¡Calcula tus impuestos y asegúrate de estar listo para tu próxima compra!")

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