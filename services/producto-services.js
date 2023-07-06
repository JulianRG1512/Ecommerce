const listaProductos = () => 
    fetch ("http://localhost:3000/productos")
    .then((respuesta) => respuesta.json())


const crearDato = (imagen, nombre, precio, descripcion) =>{
    return fetch("http://localhost:3000/productos",{
           method:"POST",
           headers: {
                "Content-Type": "application/json"
           },
           body: JSON.stringify({imagen, nombre, precio, descripcion, id:uuid.v4()})
           
        });


}




    export const productoServices = {
        listaProductos,
        crearDato,
    };