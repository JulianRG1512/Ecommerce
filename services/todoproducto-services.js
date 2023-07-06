const datos_bd = 'http://localhost:3000/productos'

const gallery = document.getElementById('Gallery')

function getFotos(){
    fetch(datos_bd)
    .then(res => res.json())
    .then(informacion => {
        mostrarDatos(informacion)
        console.log(informacion);
    } )
    .catch(err => {
        
        alert("Servidor Fuera de Servicio");
    })
}

const mostrarDatos = (informacion) =>{
    informacion.forEach(elemento => {
        let tarjeta = document.createElement('div')
        tarjeta.classList =  'card_foto'
        tarjeta.innerHTML = 
        `
        <div class="card_imagen">
            <img src="${elemento.imagen}">
        </div>
        <div class="card_texto">
            <h3>${elemento.nombre}</h3>
            <h4>${elemento.precio}</h4>
            
        </div>
        `
        gallery.appendChild(tarjeta)

    });
}
getFotos()




