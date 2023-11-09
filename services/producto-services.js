const listaProductos = () => 
    fetch ("https://apiecommerce-6rc4.onrender.com/productos")
    .then((respuesta) => respuesta.json())


const crearDato = (imagen, nombre, precio, descripcion) =>{
    return fetch("https://apiecommerce-6rc4.onrender.com/productos",{
           method:"POST",
           headers: {
                "Content-Type": "application/json"
           },
           body: JSON.stringify({imagen, nombre, precio, descripcion, id:uuid.v4()})
           
        });
}

const eliminar = (id) => {
    console.log("Eliminar a: ", id);
    return fetch(`https://apiecommerce-6rc4.onrender.com/productos/${id}`, {
        method: "DELETE",
    })
}

const detalleProducto = (id) => {
    return fetch (`https://apiecommerce-6rc4.onrender.com/productos/${id}`)
    .then((respuesta) => respuesta.json())
};


const actualizarProducto = (imagen, nombre, precio, descripcion,id ) => {
    return fetch (`https://apiecommerce-6rc4.onrender.com/productos/${id}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body:JSON.stringify({imagen,nombre,precio,descripcion}),
    })
        .then((respuesta) => respuesta)
        .catch((err) => console.log(err));
};


    export const productoServices = {
        listaProductos,
        crearDato,
        eliminar,
        detalleProducto,
        actualizarProducto,
    };