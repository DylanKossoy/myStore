import { triggerShake } from './utils.js'



let usernameInput = document.querySelector('.login-input-username')
let passwordInput = document.querySelector('.login-input-password');


function validateLogin({ username, password }) {
    let error = false


    if(!username) {
        triggerShake(usernameInput)
        
        error = true;
    }

    if(!password) {
        triggerShake(passwordInput) 
        error = true
    }
    
    if(error) {
        return '* Fill out all fields *'
    }




function clearError() {
    document.querySelector('.login-error-message').textContent = ''

    
}


function showError(error) {
    let errorText = document.querySelector('.login-error-message')
    errorText.textContent = error
}



function handleLogin(e) {
    e.preventDefault()


    let errorMessage = validateLogin(usernameInput.value)




}