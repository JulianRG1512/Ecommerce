

const loginForm = document.querySelector("#form_login")

loginForm.addEventListener("submit", (event) => {
    event.preventDefault() 
    
    const email = document.querySelector("#inpu_email").value;
    const password = document.querySelector("#inpu_login").value;
    const Users = JSON.parse(localStorage.getItem('users')) || []
    
    const validUser = Users.find(user => user.email === email && user.password === password)

    if(!validUser){
        return alert('Usuario y/o contraseña incorrectos!')
    }
    alert(`Bienvenido ${validUser.name}`)
    
    localStorage.setItem('login_success', JSON.stringify(validUser))
    
    window.location.href = "/html/prodcutos.html";  
});