import { productoServices } from "../services/producto-services.js";

const formulario = document.querySelector('[data-form]');

formulario.addEventListener('submit', (event) => {
    event.preventDefault();
    
    console.log("Enviado");

    const imagen = document.querySelector('[data-img]').value;
    const nombre = document.querySelector('[data-nombre]').value;
    const precio = document.querySelector('[data-precio]').value;
    const descripcion = document.querySelector('[data-descripcion]').value;

    productoServices
    .crearDato(imagen,nombre,precio,descripcion)
    .then(respuesta => {
        window.location.href = "/html/nuevoProducto.html"
    }).catch(error => console.log(error));

});

