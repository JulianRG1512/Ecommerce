
const registro = document.querySelector('#form_registro')

registro.addEventListener('submit', (e) =>{
    e.preventDefault()


    const name = document.querySelector('#inpu_nombre').value
    const email = document.querySelector('#inpu_email').value
    const password = document.querySelector('#inpu_login').value

    const Users = JSON.parse(localStorage.getItem('users')) || []
    
    const usuarioRegistrado = Users.find(user => user.email === email)
    
    if(usuarioRegistrado){
        return alert('El usuario ya esta registrado!')
    }
    Users.push({name: name, email: email, password: password})
    localStorage.setItem('users', JSON.stringify(Users))
    alert('Registro Exitoso!')
    window.location.href = 'login.html'
})