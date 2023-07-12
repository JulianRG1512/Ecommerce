import { productoServices } from "../services/producto-services.js";

const formulario = document.querySelector("[data-form]")


const obtenerInformacion = async () => {
    const url = new URL(window.location);
    const id = url.searchParams.get("id");

    if (id === null) {
        window.location.href = "/html/error.html";
    }

    const imagen = document.querySelector("[data-img]");
    const nombre = document.querySelector("[data-nombre]");
    const precio = document.querySelector("[data-precio]");
    const descripcion = document.querySelector("[data-descripcion]");

    try {
        const productos = await productoServices.detalleProducto(id)
                
        if (productos.imagen &&  productos.nombre && productos.precio && productos.descripcion) {
            imagen.value = productos.imagen;
            nombre.value = productos.nombre;
            precio.value = productos.precio;
            descripcion.value = productos.descripcion;
                    
        } else {
            throw new Error();
        }
    } catch (error) {
        window.location.href = "/html/error.html"
    }
/*
    try {
        const productos = await productoServices.detalleProducto("id")
            
        
        if (productos.imagen &&  productos.nombre && productos.precio && productos.descripcion) {
            
            imagen.value = productos.imagen;
            nombre.value = productos.nombre;
            precio.value = productos.precio;
            descripcion.value = productos.descripcion;
                    
        } else {
            throw new Error();
        }
        
    } catch (error) {
        
        window.location.href = "/html/error.html"
    }
*/
    
    
    
}

obtenerInformacion();

formulario.addEventListener("submit", (e) => {
    e.preventDefault();

    const url = new URL(window.location);
    const id = url.searchParams.get("id");

    const imagen = document.querySelector("[data-img]").value;
    const nombre = document.querySelector("[data-nombre]").value;
    const precio = document.querySelector("[data-precio]").value;
    const descripcion = document.querySelector("[data-descripcion]").value;
    
    console.log(imagen," ",nombre," ",precio," ",descripcion);

    productoServices.actualizarProducto(imagen, nombre, precio, descripcion, id)
    .then (() =>{
        window.location.href = "/html/edicion_exitosa.html"
    })
});





