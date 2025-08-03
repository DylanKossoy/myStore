import { triggerShake } from './utils.js'



const usernameInput = document.querySelector('.join-input-username');
const emailInput = document.querySelector('.join-input-email')
const passwordInput = document.querySelector('.join-input-password')
const confirmPasswordInput = document.querySelector('.join-input-confirm-password')





function validateInputs({username, email, password, confirmPassword}) {


    if(!username || !email || !password || !confirmPassword) {
        
    
        return '*All fields need to be filled out*'
    }

    if(password !== confirmPassword) {
        return '*Passwords must match*'
    }

    if(password.length < 6) {
        return '*Passwords must be 6 or more characters'

    }


 
}



function showError(error) {
    let errorText  = document.querySelector('.error-message-text');
    errorText.textContent = error
}



function clearError() {
    document.querySelector('.error-message-text').textContent = ''
}





async function handleSubmit(e) {
    e.preventDefault();


    const userInfo = {
        username: document.querySelector('.join-input-username').value.trim(),
        email: document.querySelector('.join-input-email').value.trim(),
        password: document.querySelector('.join-input-password').value.trim(),
        confirmPassword: document.querySelector('.join-input-confirm-password').value.trim()
    }


    const error = validateInputs(userInfo)
    if(error) {
        showError(error)
        return
    }


    clearError()
    console.log('hell yeah cleared and valid and now i can put in more logic')

    
    
    
    
}

document.querySelector('.join-inputs-form').addEventListener('submit', handleSubmit)