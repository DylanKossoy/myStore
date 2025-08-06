import { triggerShake } from './utils.js'



const usernameInput = document.querySelector('.login-input-username')
const passwordInput = document.querySelector('.login-input-password');


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
    

    const userInfo = {
        username: document.querySelector('.login-input-username').value.trim(),
        password: document.querySelector('.login-input-password').value.trim()
    }


    let errorMessage = validateLogin(userInfo)

    if(errorMessage) {
        showError(errorMessage)
        return
    }



    clearError()
  


}


document.querySelector('.login-inputs-form').addEventListener('submit', handleLogin);