window.addEventListener('load', function() {
    setTimeout(function() {
        document.getElementById('loader').style.display = 'none';
        document.getElementById('ageModal').style.display = 'flex';
    }, 2000);
});

function acceptAge() {
    document.getElementById('ageModal').style.display = 'none';
    document.getElementById('loader').style.display = 'flex'; // Muestra el loader otra vez
    
    setTimeout(function() {
        document.getElementById('loader').style.display = 'none'; // Oculta el loader después de 2 segundos
        document.getElementById('content').style.display = 'block'; // Muestra el contenido de la página
    }, 2000);
}

function denyAccess() {
    alert('Debes ser mayor de edad para ingresar.');
    window.location.href = 'https://www.google.com';
}

function mostrarSelectorCiudad() {
    document.getElementById("selectorCiudad").style.display = "block";
    document.getElementById("fondoTransparente").style.display = "block";
    document.getElementById("selectorCiudad").setAttribute("aria-hidden", "false");
}

function cerrarSelectorCiudad() {
    document.getElementById("selectorCiudad").style.display = "none";
    document.getElementById("fondoTransparente").style.display = "none";
    document.getElementById("selectorCiudad").setAttribute("aria-hidden", "true");
}

function seleccionarCiudad(ciudad) {
    localStorage.setItem("ciudadSeleccionada", ciudad);
    alert("Has seleccionado: " + ciudad);
    cerrarSelectorCiudad();
}

// Verifica si ya se ha seleccionado una ciudad antes
window.onload = function () {
    if (localStorage.getItem("ciudadSeleccionada")) {
        console.log("Ciudad guardada:", localStorage.getItem("ciudadSeleccionada"));
    } else {
        mostrarSelectorCiudad();
    }
};


window.addEventListener('load', function() {
    setTimeout(function() {
        document.getElementById('loader').style.display = 'none';
        document.getElementById('ageModal').style.display = 'flex';
    }, 2000);
});

function acceptAge() {
    document.getElementById('ageModal').style.display = 'none';
    document.getElementById('loader').style.display = 'flex'; // Muestra el loader otra vez
    
    setTimeout(function() {
        document.getElementById('loader').style.display = 'none'; // Oculta el loader después de 2 segundos
        document.getElementById('content').style.display = 'block'; // Muestra el contenido de la página
    }, 2000);
}

function denyAccess() {
    alert('Debes ser mayor de edad para ingresar.');
    window.location.href = 'https://www.google.com';
}

function sendWhatsApp(element) {
    let name = element.getAttribute("data-name");
    let size = element.getAttribute("data-size");
    let price = element.getAttribute("data-price");

    let message = `¡Hola! 👋 Estoy interesado en comprar el *${name}* de ${size} por $${price} COP. ¿Cómo podemos coordinar la entrega? 🚀`;
    let phone = "573103668731"; // Número de WhatsApp (sin el "+")

    let url = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
    window.open(url, "_blank");
}

// Lista de productos
const products = [
        {
            name: "Aguardiente Amarillo",
            reference: "Amarillo de Manzanares Botella",
            img: "./img/aguardiente_amarillo.webp",
            alcohol: "29%",
            origin: "Colombia",
            capacity: "750ml",
            invima: "1234-5678",
            price: "$59.900 COP",
            link: "https://wa.link/dn4b5r"
        },
        {
            name: "Aguardiente Antioqueño",
            reference: "Tapa verde litro",
            img: "./img/aguardiente_antioquenio_litro_tapaverde.webp",
            alcohol: "29%",
            origin: "Colombia",
            capacity: "1000ml",
            invima: "5678-1234",
            price: "$63.500 COP",
            link: "https://wa.link/dn4b5r"
        },
        {
            name: "Aguardiente Antioqueño",
            reference: "Tapa azul litro",
            img: "./img/aguardiente_antioquenio_tapa_azul_litro.webp",
            alcohol: "24%",
            origin: "Colombia",
            capacity: "1000ml",
            invima: "8765-4321",
            price: "$60.900 COP",
            link: "https://wa.link/dn4b5r"
        },
        {
            name: "Ron Viejo de Caldas",
            reference: "Caldas tradicional",
            img: "./img/ron_caldas_tradicional.webp",
            alcohol: "35%",
            origin: "Colombia",
            capacity: "750ml",
            invima: "4321-8765",
            price: "$54.600 COP",
            link: "https://wa.link/dn4b5r"
        },
        {
            name: "Buchanan's Deluxe",
            reference: "Whisky Buchanan's Deluxe",
            img: "./img/botella_buchanans.webp",
            alcohol: "40%",
            origin: "Escocia",
            capacity: "750ml",
            invima: "2468-1357",
            price: "$206.000 COP",
            link: "https://wa.link/dn4b5r"
        },
        {
            name: "Ron Caldas 15 años",
            reference: "Edición Especial",
            img: "./img/ron_caldas_15_anios.webp",
            alcohol: "40%",
            origin: "Colombia",
            capacity: "750ml",
            invima: "1357-2468",
            price: "$185.000 COP",
            link: "https://wa.link/dn4b5r"
        },
        {
            name: "Aguardiente Antioqueño Sin Azúcar Tapa Verde",
            reference: "Aguardiente Antioqueño Tapa Verde Botella 750ml",
            img: "./img/aguardiente_antioquenio_verde_botella.webp",
            alcohol: "24%",
            origin: "Colombia",
            capacity: "750ml",
            invima: "5678-1234",
            price: "$40.300 COP",
            link: "https://www.exito.com/aguardiente-sazucar-verde-718737/p"
        },
        {
            name: "Aguardiente Antioqueño Sin Azúcar Tapa Azul",
            reference: "Aguardiente Antioqueño Tapa Azul Botella 750ml",
            img: "./img/aguardiente_antioquenio_botella.webp",
            alcohol: "29%",
            origin: "Colombia",
            capacity: "750ml",
            invima: "8765-4321",
            price: "$53.100 COP",
            link: "https://www.exito.com/aguardiente-antioqueno-sin-azucar-en-botella-x-750ml-949390/p"
        },
        {
            name: "Aguardiente Antioqueño Real",
            reference: "Sin Azúcar 750ml",
            img: "./img/aguardiente_real.webp",
            alcohol: "29%",
            origin: "Colombia",
            capacity: "750ml",
            invima: "5678-1234",
            price: "$70.290 COP",
            link: "https://wa.link/dn4b5r"
        },
        {
            name: "Aguardiente Cristal XS",
            reference: "Media",
            img: "./img/aguardiente_xs.webp",
            alcohol: "24%",
            origin: "Colombia",
            capacity: "375ml",
            invima: "5678-1234",
            price: "$23.546 COP",
            link: "https://wa.link/dn4b5r"
        },
        {
            name: "Cerveza Águila Original",
            reference: "Botella 330ml",
            img: "./img/aguila_botella.webp",
            alcohol: "4.0%",
            origin: "Colombia",
            capacity: "330ml",
            invima: "RSIA16I10806",
            price: "$3.200 COP",
            link: "https://wa.link/dn4b5r"
        },
        {
            name: "Cerveza Águila Original",
            reference: "Lata 330ml",
            img: "./img/aguila_lata.webp",
            alcohol: "4.0%",
            origin: "Colombia",
            capacity: "330ml",
            invima: "RSIA16I10806",
            price: "$3.200 COP",
            link: "https://wa.link/dn4b5r"
        },
        {
            name: "Cerveza Águila Original",
            reference: "Sixpack Lata 330ml",
            img: "./img/aguila_lata_six.webp",
            alcohol: "4.0%",
            origin: "Colombia",
            capacity: "6 x 330ml",
            invima: "RSIA16I10806",
            price: "$18.500 COP",
            link: "https://wa.link/dn4b5r"
        },
        {
            name: "Cerveza Águila Original",
            reference: "Lata 473ml",
            img: "./img/aguila_laton.webp",
            alcohol: "4.0%",
            origin: "Colombia",
            capacity: "473ml",
            invima: "RSIA16I10806",
            price: "$5.500 COP",
            link: "https://wa.link/dn4b5r"
        },
        {
            name: "Aguardiente Antioqueño",
            reference: "Tapa verde media",
            img: "./img/aguardiente_antioquenio_verde_media.webp",
            alcohol: "29%",
            origin: "Colombia",
            capacity: "375ml",
            invima: "RSIAV02I11612",
            price: "$27.500 COP",
            link: "https://wa.link/dn4b5r"
        },
        {
            name: "Aguardiente Antioqueño",
            reference: "Tapa azul media",
            img: "./img/aguardiente_antioquenio_medio.webp",
            alcohol: "24%",
            origin: "Colombia",
            capacity: "375ml",
            invima: "RSIAV02I11612",
            price: "$26.900 COP",
            link: "https://wa.link/dn4b5r"
        },
        {
            name: "Cerveza Águila Light",
            reference: "Botella",
            img: "./img/aguila_light_botella.webp",
            alcohol: "3.4%",
            origin: "Colombia",
            capacity: "330ml",
            invima: "RSAA02I10606",
            price: "$4.500 COP",
            link: "https://wa.link/dn4b5r"
        },
        {
            name: "Cerveza Águila Light",
            reference: "Lata",
            img: "./img/aguila_light_lata.webp",
            alcohol: "3.4%",
            origin: "Colombia",
            capacity: "330ml",
            invima: "RSAA02I10606",
            price: "$4.000 COP",
            link: "https://wa.link/dn4b5r"
        },
        {
            name: "Cerveza Águila Light",
            reference: "Lata Sixpack",
            img: "./img/aguila_light_lata_six.webp",
            alcohol: "3.4%",
            origin: "Colombia",
            capacity: "6 x 330ml",
            invima: "RSAA02I10606",
            price: "$22.500 COP",
            link: "https://wa.link/dn4b5r"
        },
        {
            name: "Bacardí Carta Blanca",
            reference: "Botella",
            img: "./img/bacardi.webp",
            alcohol: "40%",
            origin: "Puerto Rico",
            capacity: "750ml",
            invima: "RSAA02I10789",
            price: "$72.000 COP",
            link: "https://wa.link/dn4b5r"
        },
        {
            name: "Baileys Original",
            reference: "Botella",
            img: "./img/baileys.webp",
            alcohol: "17%",
            origin: "Irlanda",
            capacity: "750ml",
            invima: "RSAA16I27105",
            price: "$99.000 COP",
            link: "https://wa.link/dn4b5r"
        },
        {
            name: "Aguardiente Antioqueño",
            reference: "Tapa verde garrafa",
            img: "./img/aguardiente_antioquenio_verde_garrafa.webp",
            alcohol: "29%",
            origin: "Colombia",
            capacity: "2500ml",
            invima: "5678-1234",
            price: "$158.900 COP",
            link: "https://wa.link/dn4b5r"
        },
        {
            name: "Aguardiente Antioqueño",
            reference: "Tapa azul garrafa",
            img: "./img/aguardiente_antioquenio_garrafa.webp",
            alcohol: "24%",
            origin: "Colombia",
            capacity: "2500ml",
            invima: "8765-4321",
            price: "$154.500 COP",
            link: "https://wa.link/dn4b5r"
        },
        {
            name: "Johnnie Walker Black Label",
            reference: "Whisky Escocés 12 años",
            img: "./img/black_label.webp",
            alcohol: "40%",
            origin: "Escocia",
            capacity: "750ml",
            invima: "1234-5678",
            price: "$199.900 COP",
            link: "https://wa.link/dn4b5r"
        },
        {
            name: "Johnnie Walker Blue Label",
            reference: "Whisky Escocés de Lujo",
            img: "./img/blue_label.webp",
            alcohol: "40%",
            origin: "Escocia",
            capacity: "750ml",
            invima: "1234-5678",
            price: "$950.000 COP",
            link: "https://wa.link/dn4b5r"
        },
        {
            name: "Johnnie Walker Red Label",
            reference: "Whisky Escocés",
            img: "./img/red_label.webp",
            alcohol: "40%",
            origin: "Escocia",
            capacity: "750ml",
            invima: "5678-1234",
            price: "$90.000 COP",
            link: "https://wa.link/dn4b5r"
        },
        {
            name: "Brandy Domecq",
            reference: "Cuarto de botella",
            img: "./img/domeq_cuarto.webp",
            alcohol: "30%",
            origin: "España",
            capacity: "250ml",
            invima: "5678-1234",
            price: "$23.000 COP",
            link: "https://wa.link/dn4b5r"
        },
        {
            name: "Brandy Domecq",
            reference: "Media botella",
            img: "./img/domeq_medio.webp",
            alcohol: "30%",
            origin: "España",
            capacity: "375ml",
            invima: "5678-1234",
            price: "$32.000 COP",
            link: "https://wa.link/dn4b5r"
        },
        {
            name: "Brandy Domecq",
            reference: "Botella 750ml",
            img: "./img/botella_domeq.webp",
            alcohol: "30%",
            origin: "España",
            capacity: "750ml",
            invima: "5678-1234",
            price: "$55.000 COP",
            link: "https://wa.link/dn4b5r"
        },
        {
            name: "Brandy Domecq",
            reference: "Botella litro",
            img: "./img/domeq_litro.webp",
            alcohol: "30%",
            origin: "España",
            capacity: "1000ml",
            invima: "5678-1234",
            price: "$72.000 COP",
            link: "https://wa.link/dn4b5r"
        },
        {
            name: "José Cuervo Blanco",
            reference: "Tequila Plata",
            img: "./img/botella_jose_cuervo.webp",
            alcohol: "38%",
            origin: "México",
            capacity: "750ml",
            invima: "1234-5678",
            price: "$85.000 COP",
            link: "https://wa.link/dn4b5r"
        },
        {
            name: "José Cuervo Especial Reposado",
            reference: "Tequila Reposado",
            img: "./img/jose_cuervo.webp",
            alcohol: "35%",
            origin: "México",
            capacity: "750ml",
            invima: "RSIA16I130713",
            price: "$77.775 COP",
            link: "https://wa.link/dn4b5r"
        },
        {
            name: "Vodka Smirnoff No. 21",
            reference: "Botella 750 ml",
            img: "./img/smirnoff.webp",
            alcohol: "40%",
            origin: "Rusia",
            capacity: "750ml",
            invima: "RSIA16I130713",
            price: "$89.900 COP",
            link: "https://wa.link/dn4b5r"
        },
        {
            name: "Jagger",
            reference: "Jägermeister",
            img: "./img/botella_jagger.webp",
            alcohol: "35%",
            origin: "Alemania",
            capacity: "700ml",
            invima: "1234-6789",
            price: "$120.000 COP",
            link: "https://wa.link/dn4b5r"
        },
        {
            name: "Whisky Something Special",
            reference: "Botella 750 ml",
            img: "./img/botella_something.webp",
            alcohol: "40%",
            origin: "Escocia",
            capacity: "750ml",
            invima: "RSIA16I130713",
            price: "$75.500 COP",
            link: "https://wa.link/dn4b5r"
        },
        {
            name: "Old Parr",
            reference: "Whisky Old Parr",
            img: "./img/old_parr.webp",
            alcohol: "40%",
            origin: "Escocia",
            capacity: "750ml",
            invima: "3698-7412",
            price: "$190.000 COP",
            link: "https://wa.link/dn4b5r"
        },
        {
            name: "Budweiser",
            reference: "Cerveza Budweiser Botella",
            img: "./img/cerveza_budweizer_botella.webp",
            alcohol: "5%",
            origin: "EE.UU.",
            capacity: "330ml",
            invima: "2589-1473",
            price: "$5.500 COP",
            link: "https://wa.link/dn4b5r"
        },
        {
            name: "Cerveza Budweiser",
            reference: "Sixpack Lata 269 ml",
            img: "./img/cerveza_budweizer_lata_six.webp",
            alcohol: "5%",
            origin: "Estados Unidos",
            capacity: "6 x 269 ml",
            invima: "RSIA16I130713",
            price: "$15.150 COP",
            link: "https://wa.link/dn4b5r"
        },
        {
            name: "Tequila 1800 Azul",
            reference: "Botella 750 ml",
            img: "./img/botella_1800.webp",
            alcohol: "40%",
            origin: "México",
            capacity: "750 ml",
            invima: "RSIA02I10213",
            price: "$135.000 COP",
            link: "https://wa.link/dn4b5r"
        },
        {
            name: "Tequila 1800 Reposado",
            reference: "Botella 750 ml",
            img: "./img/1800.webp",
            alcohol: "38%",
            origin: "México",
            capacity: "750 ml",
            invima: "RSIA02I10214",
            price: "$125.000 COP",
            link: "https://wa.link/dn4b5r"
        },
        {
            name: "Tequila 1800 Añejo Edición Especial",
            reference: "Botella 750 ml",
            img: "./img/1800_special.webp",
            alcohol: "40%",
            origin: "México",
            capacity: "750 ml",
            invima: "RSIA02I10215",
            price: "$185.000 COP",
            link: "https://wa.link/dn4b5r"
        },
        {
            name: "Cerveza Club Colombia Dorada",
            reference: "Botella 330 ml",
            img: "./img/cerveza_club_dorada_botella.webp",
            alcohol: "4.7%",
            origin: "Colombia",
            capacity: "330 ml",
            invima: "RSAA02I14141",
            price: "$4.500 COP",
            link: "https://wa.link/dn4b5r"
        },
        {
            name: "Cerveza Club Colombia Dorada",
            reference: "Sixpack Lata 330 ml",
            img: "./img/cerveza_club_dorada_lata_six.webp",
            alcohol: "4.7%",
            origin: "Colombia",
            capacity: "6 x 330 ml",
            invima: "RSAA02I14141",
            price: "$25.500 COP",
            link: "https://wa.link/dn4b5r"
        },
        {
            name: "Cerveza Club Colombia Dorada",
            reference: "Lata 473 ml",
            img: "./img/cerveza_club_dorada_laton.webp",
            alcohol: "4.7%",
            origin: "Colombia",
            capacity: "473 ml",
            invima: "RSAA02I14141",
            price: "$5.500 COP",
            link: "https://wa.link/dn4b5r"
        },
        {
            name: "Cerveza Club Colombia Negra",
            reference: "Botella 330 ml",
            img: "./img/cerveza_club_negra_botella.webp",
            alcohol: "5%",
            origin: "Colombia",
            capacity: "330 ml",
            invima: "RSAA02I14141",
            price: "$4.800 COP",
            link: "https://wa.link/dn4b5r"
        },
        {
            name: "Cerveza Club Colombia Negra",
            reference: "Lata 330 ml",
            img: "./img/cerveza_club_negra_lata.webp",
            alcohol: "5%",
            origin: "Colombia",
            capacity: "330 ml",
            invima: "RSAA02I14141",
            price: "$5.000 COP",
            link: "https://wa.link/dn4b5r"
        },
        {
            name: "Cerveza Club Colombia Negra",
            reference: "Sixpack Lata 330 ml",
            img: "./img/cerveza_club_negra_lata_six.webp",
            alcohol: "5%",
            origin: "Colombia",
            capacity: "6 x 330 ml",
            invima: "RSAA02I14141",
            price: "$27.500 COP",
            link: "https://wa.link/dn4b5r"
        },
        {
            name: "Cerveza Club Colombia Roja",
            reference: "Botella 330 ml",
            img: "./img/cerveza_club_roja_botella.webp",
            alcohol: "5.5%",
            origin: "Colombia",
            capacity: "330 ml",
            invima: "RSAA02I14141",
            price: "$4.800 COP",
            link: "https://wa.link/dn4b5r"
        },
        {
            name: "Cerveza Club Colombia Roja",
            reference: "Lata 330 ml",
            img: "./img/cerveza_club_roja_lata.webp",
            alcohol: "5.5%",
            origin: "Colombia",
            capacity: "330 ml",
            invima: "RSAA02I14141",
            price: "$5.000 COP",
            link: "https://wa.link/dn4b5r"
        },
        {
            name: "Cerveza Club Colombia Roja",
            reference: "Sixpack Lata 330 ml",
            img: "./img/cerveza_club_roja_lata_six.webp",
            alcohol: "5.5%",
            origin: "Colombia",
            capacity: "6 x 330 ml",
            invima: "RSAA02I14141",
            price: "$27.500 COP",
            link: "https://wa.link/dn4b5r"
        },
        {
            name: "Cerveza Corona",
            reference: "Botella 355 ml",
            img: "./img/cerveza_corona_botella.webp",
            alcohol: "4.5%",
            origin: "México",
            capacity: "355 ml",
            invima: "RSAA02I14239",
            price: "$6.500 COP",
            link: "https://wa.link/dn4b5r"
        },
        {
            name: "Cerveza Corona",
            reference: "Sixpack Botella 355 ml",
            img: "./img/cerveza_corona_botella_six.webp",
            alcohol: "4.5%",
            origin: "México",
            capacity: "6 x 355 ml",
            invima: "RSAA02I14239",
            price: "$37.500 COP",
            link: "https://wa.link/dn4b5r"
        },
        {
            name: "Cerveza Poker",
            reference: "Botella 330 ml",
            img: "./img/cerveza_poker.webp",
            alcohol: "4%",
            origin: "Colombia",
            capacity: "330 ml",
            invima: "RSAA02I11341",
            price: "$4.000 COP",
            link: "https://wa.link/dn4b5r"
        },
        {
            name: "Cerveza Poker",
            reference: "Lata 330 ml",
            img: "./img/cerveza_poker_lata.webp",
            alcohol: "4%",
            origin: "Colombia",
            capacity: "330 ml",
            invima: "RSAA02I11341",
            price: "$4.500 COP",
            link: "https://wa.link/dn4b5r"
        },
        {
            name: "Cerveza Poker",
            reference: "Lata 473 ml",
            img: "./img/cerveza_poker_laton.webp",
            alcohol: "4%",
            origin: "Colombia",
            capacity: "473 ml",
            invima: "RSAA02I11341",
            price: "$5.500 COP",
            link: "https://wa.link/dn4b5r"
        },
        {
            name: "Cerveza Poker",
            reference: "Sixpack Lata 330 ml",
            img: "./img/cerveza_poker_six_lata.webp",
            alcohol: "4%",
            origin: "Colombia",
            capacity: "6 x 330 ml",
            invima: "RSAA02I11341",
            price: "$25.500 COP",
            link: "https://wa.link/dn4b5r"
        },
        {
            name: "Cerveza Poker",
            reference: "Sixpack Lata 473 ml",
            img: "./img/cerveza_poker_laton_six.webp",
            alcohol: "4%",
            origin: "Colombia",
            capacity: "6 x 473 ml",
            invima: "RSAA02I11341",
            price: "$31.500 COP",
            link: "https://wa.link/dn4b5r"
        },
        {
            name: "Cerveza Stella Artois",
            reference: "Botella 330 ml",
            img: "./img/cerveza_stella_botella.webp",
            alcohol: "5%",
            origin: "Bélgica",
            capacity: "330 ml",
            invima: "RSAA02I12061",
            price: "$6.500 COP",
            link: "https://wa.link/dn4b5r"
        },
        {
            name: "Cerveza Stella Artois",
            reference: "Lata 330 ml",
            img: "./img/cerveza_stella_lata.webp",
            alcohol: "5%",
            origin: "Bélgica",
            capacity: "330 ml",
            invima: "RSAA02I12061",
            price: "$6.800 COP",
            link: "https://wa.link/dn4b5r"
        },
        {
            name: "Vino Espumoso JP Chenet",
            reference: "Botella 750 ml",
            img: "./img/chenet.webp",
            alcohol: "11%",
            origin: "Francia",
            capacity: "750 ml",
            invima: "RSAI16I14247",
            price: "$49.900 COP",
            link: "https://wa.link/dn4b5r"
        },
        {
            name: "Vino Espumoso JP Chenet",
            reference: "Lata 250 ml",
            img: "./img/chenet_lata.webp",
            alcohol: "11%",
            origin: "Francia",
            capacity: "250 ml",
            invima: "RSAI16I14247",
            price: "$16.900 COP",
            link: "https://wa.link/dn4b5r"
        },
        {
            name: "Whisky Chivas Regal Red",
            reference: "Botella 750 ml",
            img: "./img/chivas_regal_red.webp",
            alcohol: "40%",
            origin: "Escocia",
            capacity: "750 ml",
            invima: "RSAA02I14141",
            price: "$189.900 COP",
            link: "https://wa.link/dn4b5r"
        },
        {
            name: "Whisky Chivas Regal Blue",
            reference: "Botella 750 ml",
            img: "./img/chivas_regal_blue.webp",
            alcohol: "40%",
            origin: "Escocia",
            capacity: "750 ml",
            invima: "RSAA02I14141",
            price: "$229.900 COP",
            link: "https://wa.link/dn4b5r"
        },
        {
            name: "Four Loko Blue",
            reference: "Lata 473 ml",
            img: "./img/fourloko_azul.webp",
            alcohol: "12%",
            origin: "Estados Unidos",
            capacity: "473 ml",
            invima: "RSAI16I14247",
            price: "$12.900 COP",
            link: "https://wa.link/dn4b5r"
        },
        {
            name: "Four Loko Dorado",
            reference: "Lata 473 ml",
            img: "./img/fourloko_dorado.webp",
            alcohol: "12%",
            origin: "Estados Unidos",
            capacity: "473 ml",
            invima: "RSAI16I14247",
            price: "$12.900 COP",
            link: "https://wa.link/dn4b5r"
        },
        {
            name: "Four Loko Red",
            reference: "Lata 473 ml",
            img: "./img/fourloko_rojo.webp",
            alcohol: "12%",
            origin: "Estados Unidos",
            capacity: "473 ml",
            invima: "RSAI16I14247",
            price: "$12.900 COP",
            link: "https://wa.link/dn4b5r"
        },
        {
            name: "Four Loko Sandía",
            reference: "Lata 473 ml",
            img: "./img/fourloko_sandia.webp",
            alcohol: "12%",
            origin: "Estados Unidos",
            capacity: "473 ml",
            invima: "RSAI16I14247",
            price: "$12.900 COP",
            link: "https://wa.link/dn4b5r"
        },
        {
            name: "Whisky Jack Daniel's",
            reference: "Botella 750 ml",
            img: "./img/jack_daniels.webp",
            alcohol: "40%",
            origin: "Estados Unidos",
            capacity: "750 ml",
            invima: "RSAA02I14141",
            price: "$139.900 COP",
            link: "https://wa.link/dn4b5r"
        },
        {
            name: "Bebida Energizante Like Blue",
            reference: "Lata 473 ml",
            img: "./img/like_blue.webp",
            alcohol: "7%",
            origin: "Colombia",
            capacity: "473 ml",
            invima: "RSAI16I14247",
            price: "$9.900 COP",
            link: "https://wa.link/dn4b5r"
        },
        {
            name: "Bebida Energizante Like Green",
            reference: "Lata 473 ml",
            img: "./img/like_green.webp",
            alcohol: "7%",
            origin: "Colombia",
            capacity: "473 ml",
            invima: "RSAI16I14247",
            price: "$9.900 COP",
            link: "https://wa.link/dn4b5r"
        },
        {
            name: "Bebida Energizante Like Red",
            reference: "Lata 473 ml",
            img: "./img/like_red.webp",
            alcohol: "7%",
            origin: "Colombia",
            capacity: "473 ml",
            invima: "RSAI16I14247",
            price: "$9.900 COP",
            link: "https://wa.link/dn4b5r"
        },
        {
            name: "Ron Viejo de Caldas",
            reference: "Botella 1 Litro",
            img: "./img/ron_caldas_litro.webp",
            alcohol: "35%",
            origin: "Colombia",
            capacity: "1000 ml",
            invima: "RSAA02I14141",
            price: "$79.900 COP",
            link: "https://wa.link/dn4b5r"
        },
        {
            name: "Ron Medellín 8 Años",
            reference: "Botella 375 ml",
            img: "./img/ron_medellin_8_anios.webp",
            alcohol: "37.5%",
            origin: "Colombia",
            capacity: "375 ml",
            invima: "RSAA02I14141",
            price: "$49.900 COP",
            link: "https://wa.link/dn4b5r"
        },
        {
            name: "Ron Medellín 8 Años",
            reference: "Botella 750 ml",
            img: "./img/ron_medellin_ocho_anios_botella.webp",
            alcohol: "37.5%",
            origin: "Colombia",
            capacity: "750 ml",
            invima: "RSAA02I14141",
            price: "$89.900 COP",
            link: "https://wa.link/dn4b5r"
        },
        {
            name: "Ron Medellín",
            reference: "Botella 750 ml",
            img: "./img/ron_medellin_botella.webp",
            alcohol: "35%",
            origin: "Colombia",
            capacity: "750 ml",
            invima: "RSAA02I14141",
            price: "$74.900 COP",
            link: "https://wa.link/dn4b5r"
        },
        {
            name: "Ron Medellín Dorado",
            reference: "Botella 750 ml",
            img: "./img/ron_medellin_dorado.webp",
            alcohol: "35%",
            origin: "Colombia",
            capacity: "750 ml",
            invima: "RSAA02I14141",
            price: "$72.900 COP",
            link: "https://wa.link/dn4b5r"
        },
        {
            name: "Ron Medellín 5 Años",
            reference: "Botella 375 ml",
            img: "./img/ron_medellin_cinco_anios_botella.webp",
            alcohol: "35%",
            origin: "Colombia",
            capacity: "375 ml",
            invima: "RSAA02I14141",
            price: "$39.900 COP",
            link: "https://wa.link/dn4b5r"
        },
        {
            name: "Ron Medellín 5 Años",
            reference: "Botella 750 ml",
            img: "./img/ron_medellin_cinco_anios.webp",
            alcohol: "35%",
            origin: "Colombia",
            capacity: "750 ml",
            invima: "RSAA02I14141",
            price: "$69.900 COP",
            link: "https://wa.link/dn4b5r"
        },
        {
            name: "Ron Medellín 3 Años",
            reference: "Garrafa 2000 ml",
            img: "./img/ron_medellin_garrafa.webp",
            alcohol: "35%",
            origin: "Colombia",
            capacity: "2000 ml",
            invima: "RSAA02I14141",
            price: "$129.900 COP",
            link: "https://wa.link/dn4b5r"
        },
        {
            name: "Ron Medellín 3 Años",
            reference: "Botella 375 ml",
            img: "./img/ron_medellin_medio.webp",
            alcohol: "35%",
            origin: "Colombia",
            capacity: "375 ml",
            invima: "RSAA02I14141",
            price: "$32.900 COP",
            link: "https://wa.link/dn4b5r"
        },
        {
            name: "Ron Medellín 3 Años",
            reference: "Botella 1000 ml",
            img: "./img/ron_medellin_litro.webp",
            alcohol: "35%",
            origin: "Colombia",
            capacity: "1000 ml",
            invima: "RSAA02I14141",
            price: "$89.900 COP",
            link: "https://wa.link/dn4b5r"
        }
    ];
    let currentPage = 1;
    const itemsPerPage = 4;

    function displayProducts(page) {
        const container = document.getElementById("product-container");
        container.innerHTML = ""; // Limpiar productos previos

        const start = (page - 1) * itemsPerPage;
        const end = start + itemsPerPage;
        const paginatedItems = products.slice(start, end);

        paginatedItems.forEach(product => {
            // Generar el enlace de WhatsApp con el mensaje dinámico
            const whatsappMessage = `👋 ¡Hola! Estoy interesado en comprar *${product.name}* 🏷️ (Referencia: *${product.reference}*). Su precio es *${product.price}*. ¿Podrías darme más información? ¡Gracias! 😊`;
            const whatsappLink = `https://wa.me/573103668731?text=${encodeURIComponent(whatsappMessage)}`;
            container.innerHTML += `
                <div class="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-3 product-fade-in">
                    <div class="card card-product" style="background-image: url('./img/trb_background_catalog_web.webp');">
                        <img class="img-card-product" src="${product.img}" class="card-img-top" alt="${product.name}">
                        <div class="card-body">
                            <div class="height-title-card-product">
                                <h5 class="card-title title-product-card">${product.name}</h5>
                            </div>
                            <div class="height-text-card-product">
                                <p class="card-text description-card-text mt-0 mb-0"> 
                                    <strong>Referencia: </strong>${product.reference}
                                </p>
                                <ul class="list-unstyled liquor-characteristics description-card-text mb-0">
                                    <li><strong>■ Contenido de alcohol:</strong> ${product.alcohol} Vol.</li>
                                    <li><strong>■ Origen:</strong> ${product.origin}</li>
                                    <li><strong>■ Capacidad:</strong> ${product.capacity}</li>
                                    <li><strong>■ Registro INVIMA:</strong> ${product.invima}</li>
                                </ul>
                            </div>                                
                            <p class="fw-bold price-card-product mb-3 mt-3">${product.price}</p>
                            <section class="text-center">
                                <a href="${whatsappLink}" target="_blank" class="btn-cart-add-product-card">
                                    🛒 ¡Pedir ahora! 💰
                                    <img class="icon-whatsapp-card-products" src="./img/whatsapp_card_product_icon.webp" alt=""> 
                                </a>
                            </section>
                        </div>
                    </div>
                </div>
            `;
        });

        document.getElementById("pageNumber").innerText = currentPage;
        document.getElementById("prevPage").disabled = currentPage === 1;
        document.getElementById("nextPage").disabled = end >= products.length;
    }

    document.getElementById("prevPage").addEventListener("click", () => {
        if (currentPage > 1) {
            currentPage--;
            displayProducts(currentPage);
        }
    });

    document.getElementById("nextPage").addEventListener("click", () => {
        if (currentPage * itemsPerPage < products.length) {
            currentPage++;
            displayProducts(currentPage);
        }
    });

    // Cargar la primera página
    displayProducts(currentPage);