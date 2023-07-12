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
                        <textarea name="" id="descripcion" cols="100" rows="10" disabled>${descripcion}</textarea>
                    </div>
                    <div class="grid-btn">
                    <a href="/html/editarProducto.html?id=${id}"><input class="btn_editar" type="submit" value="Editar producto"><img class="edit2" src="/img/edit.png"></img></a> 
                    <div class="grid-elemento"><button class="btnEliminar" id ='${id}'>Eliminar</button><img class="delete2" src="/img/delete.png"></img></div>
                </div>
            </div>

        `;
        
        tarjeta.innerHTML = contenido;

        const btnEliminar = tarjeta.querySelector('.btnEliminar') 
        btnEliminar.addEventListener('click', () => {
            const id = btnEliminar.id
            
            productoServices
            .eliminar(id)
            .then(respuesta =>{
                alert("Producto Eliminado")
            }).catch((err) => alert ("Servidor Fuera de Linea"));
            
            //console.log('Eliminar', id);

        });
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