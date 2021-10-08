const loginForm = document.querySelector("#login-form");
const loginInput = loginForm.querySelector("input");
const greeting = document.querySelector("#greeting");
const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY = "username";

const todosForm = document.querySelector("#todo-form");



function paintGreetings(username){
    todosForm.classList.remove(HIDDEN_CLASSNAME);
    greeting.innerText = `${username}'s blog`;
    greeting.classList.remove(HIDDEN_CLASSNAME);
}



function handleLoginForm(event){
    event.preventDefault();
    loginForm.classList.add(HIDDEN_CLASSNAME);
    const username = loginInput.value;
    localStorage.setItem(USERNAME_KEY, username);
    paintGreetings(username)
    

}

const savedUsername = localStorage.getItem(USERNAME_KEY);
if(savedUsername===null){
    loginForm.addEventListener("submit", handleLoginForm);
    loginForm.classList.remove(HIDDEN_CLASSNAME);
}else {
    
    paintGreetings(savedUsername);
    
}

