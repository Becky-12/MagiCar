/* =========================
   MENÚ
========================= */

const menuBtn = document.getElementById("menuBtn");
const nav = document.getElementById("nav");

menuBtn.addEventListener("click", () => {
    nav.classList.toggle("active");
});


/* Cerrar menú al seleccionar una sección */

document.querySelectorAll("nav a").forEach(link => {

    link.addEventListener("click", () => {
        nav.classList.remove("active");
    });

});


/* =========================
   WHATSAPP
========================= */

const whatsappNumber = "51919677146";

const mensajeGeneral =
    "Hola MagiCar, quiero información sobre sus servicios.";


function abrirWhatsApp(mensaje) {

    const url =
        "https://wa.me/" +
        whatsappNumber +
        "?text=" +
        encodeURIComponent(mensaje);

    window.open(url, "_blank");

}


/* Botón de contacto */

const whatsappLink =
    document.getElementById("whatsappLink");

if (whatsappLink) {

    whatsappLink.addEventListener("click", function(event) {

        event.preventDefault();

        abrirWhatsApp(mensajeGeneral);

    });

}


/* Botón flotante */

const floatingWhatsApp =
    document.getElementById("floatingWhatsApp");

if (floatingWhatsApp) {

    floatingWhatsApp.addEventListener("click", function(event) {

        event.preventDefault();

        abrirWhatsApp(mensajeGeneral);

    });

}


/* =========================
   FORMULARIO
========================= */

const form =
    document.getElementById("appointmentForm");


if (form) {

    form.addEventListener("submit", function(event) {

        event.preventDefault();


        const nombre =
            form.elements["nombre"].value;

        const telefono =
            form.elements["telefono"].value;

        const servicio =
            form.elements["servicio"].value;

        const fecha =
            form.elements["fecha"].value;


        const mensaje =

            "Hola MagiCar \n\n" +

            "Quiero solicitar una cita.\n\n" +

            "Nombre: " +
            nombre +

            "\nTeléfono: " +
            telefono +

            "\nServicio: " +
            servicio +

            "\nFecha: " +
            fecha;


        abrirWhatsApp(mensaje);

    });

}