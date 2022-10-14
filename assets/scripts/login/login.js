const form = document.querySelector(".login__form");
const inputUsername = document.querySelector(".input__username");
const inputPassword = document.querySelector(".input__password");
const button = document.querySelector(".button");
const usernameIcon = document.querySelector(".input__username__icon");
const passwordIcon = document.querySelector(".input__password__icon"); 
const formInput = document.querySelector(".form__input");
const error = document.querySelector(".form__error");

const loginAdmin = {
    username: "admin",
    password: "admin"
}

button.addEventListener("click", (event) =>{
    event.preventDefault();

    if(!(inputUsername.value === loginAdmin.username) && !(inputPassword.value === loginAdmin.password)){
        inputUsername.setAttribute("style", "border: 1px solid var(--login-error);");
        inputPassword.setAttribute("style", "border: 1px solid var(--login-error);");
        error.setAttribute("style", "display: flex;");
        usernameIcon.classList.remove("input__username__icon-active");
        passwordIcon.classList.remove("input__password__icon-active");
    } else if ((inputUsername.value === loginAdmin.username) && (inputPassword.value === loginAdmin.password)){
        inputUsername.setAttribute("style", "border: 1px solid var(--white);");
        inputPassword.setAttribute("style", "border: 1px solid var(--white);");
        error.setAttribute("style", "display: none;");
        document.location.pathname = "./pages/home.html";
    } else {
        inputUsername.setAttribute("style", "border: 1px solid var(--login-error);");
        inputPassword.setAttribute("style", "border: 1px solid var(--login-error);");
        error.setAttribute("style", "display: flex;");
        usernameIcon.classList.remove("input__username__icon-active");
        passwordIcon.classList.remove("input__password__icon-active");
    }


    const item = {
        username: inputUsername.value,
        password: inputPassword.value
    }
    
    localStorage.setItem("name", JSON.stringify(item));
    console.log(localStorage.getItem("name"));
    inputUsername.value = "";
    inputPassword.value = "";
})

inputUsername.addEventListener("change", (event) =>{
    if(event.target.value.length > 0){
        usernameIcon.classList.add("input__username__icon-active");
    } else {
        usernameIcon.classList.remove("input__username__icon-active");
    }
})

inputPassword.addEventListener("change", (event) => {
    if(event.target.value.length > 0){
        passwordIcon.classList.add("input__password__icon-active");
    } else {
        passwordIcon.classList.remove("input__password__icon-active");
    }
})