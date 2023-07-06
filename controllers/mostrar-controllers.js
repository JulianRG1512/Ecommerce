import { productoServices } from "../services/producto-services.js";


const crearNuevoProducto = (imagen,nombre, precio,descripcion, id) =>{
    
    const tarjeta = document.createElement("div");

    const contenido= 
        `
        <div class="galeria_star">
            <div class="grid-container">
                <div class="grid-elemento"><img src="${imagen}"> </div>
                <div class="grid-elemento">${nombre}</div>
                <div class="grid-elemento">${precio}</div>
                <div class="grid-descripcion">
                    <textarea name="" id="descripcion" cols="300" rows="10">${descripcion}</textarea>
                </div>
                <div class="grid-elemento"> <button class="btn" >Modificar</button><img class="edit2" src="/img/edit.png"></img></div>
                <div class="grid-elemento"><button class="btn">Eliminar</button><img class="delete2" src="/img/delete.png"></img></div>
            </div>
        </div>
        `;
        
        
        
       

        tarjeta.innerHTML = contenido;
        return tarjeta;
    };

    const seccion = document.querySelector("[data-star]")

        productoServices
            .listaProductos()
            .then((informacion) =>{
                informacion.forEach(({imagen,nombre, precio,descripcion,id}) => {
                const nuevoProducto = crearNuevoProducto(imagen,nombre,precio,descripcion,id);
                seccion.appendChild(nuevoProducto);  
                });
            }).catch((err) => alert ("Servidor Fuera de Linea"));