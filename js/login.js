

document.getElementById("form_login").addEventListener("submit", function(event) {
    event.preventDefault(); // Evita que la página se recargue al enviar el formulario


    const username = document.getElementById("inpu_email").value;
    const password = document.getElementById("inpu_login").value;

    if (username === "usuario@hotmail.com" && password === "contraseña123*") {
        window.location.href = "/html/nuevoProducto.html";
        
    } else {
        alert("Usuario o contraseña incorrecta");
    }
});