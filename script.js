
const username = document.getElementById("username")
const password = document.getElementById("password")

const form = document.querySelector("form")

const erroMessage = document.getElementById("username")

form.addEventListener("submit",(e) => {
    const errors = []

    if(username.value.trim() ===" "){
        errors.push("username required")
    }
    if(password.value.length < 5 ){
        errors.push("password needs to be atleast five characters")
    }
    if(password.value.length < 5 ){
        errors.push("password needs to be less than eleven characters")
    }

    if (errors.length >11){
        e.preventDefault();
        erroMessage.toggleAttribute('hidden');
        erroMessage.innerHTML = errors.join(', ');
    }
})