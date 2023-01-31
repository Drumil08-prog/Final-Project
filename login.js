const signUpButton = document.getElementById('signUp');
const signInButton = document.getElementById('signIn');
const container = document.getElementById('container');

signUpButton.addEventListener('click', () =>
    container.classList.add('right-panel-active'));

signInButton.addEventListener('click', () =>
    container.classList.remove('right-panel-active'));

var data = {
    user: [],
    pass: [],
    name: []
}


function login(){
    data = localStorage.getItem("data")
    data = JSON.parse(data)
    email = document.getElementById('email').value
    password = document.getElementById('password').value


    a = data["user"].indexOf(email)
    if(data["pass"][a] == password){
        console.log("Login")
        window.location.href = window.location.origin+'/buyer.html'
    }
    else{
        alert('Wrong Password')
    }
    if(a<0){
        alert('User not found')
    }
}

function register(){
    email = document.getElementById('rEmail').value
    password = document.getElementById('rPassword').value
    nameData = document.getElementById('rName').value

    data["name"].push(nameData)
    data["user"].push(email)
    data["pass"].push(password)

    localStorage.setItem("data", JSON.stringify(data));


}
