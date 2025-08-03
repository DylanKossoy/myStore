import { triggerShake } from './utils.js'


const firstInput = document.querySelector('.join-input-first-name')
const lastInput = document.querySelector('.join-input-last-name');
const usernameInput = document.querySelector('.join-input-username');
const emailInput = document.querySelector('.join-input-email')
const passwordInput = document.querySelector('.join-input-password')
const confirmPasswordInput = document.querySelector('.join-input-confirm-password')





function validateInputs({first, last, username, email, password, confirmPassword}) {

    let error = false


    if(!first) {
        triggerShake(firstInput)
        error = true
    }

    if(!last) {
        triggerShake(lastInput)
        error = true
    }

    if(!username) {
        triggerShake(usernameInput)
        error = true;
    }

    if(!email) {
        triggerShake(emailInput)
        error = true
    }

    if(!password) {
        triggerShake(passwordInput)
        error = true
    }

    if(!confirmPassword) {
        triggerShake(confirmPasswordInput) 
        error = true
    }



    if(error) {
        return '*All fields need to be filled out*'

    }
    
    if(password !== confirmPassword) {
        triggerShake(passwordInput)
        triggerShake(confirmPasswordInput)
        return '*Passwords must match*'
    }

    if(password.length < 6) {
        triggerShake(passwordInput)
        triggerShake(confirmPasswordInput)
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
        first: document.querySelector('.join-input-first-name').value.trim(),
        last: document.querySelector('.join-input-last-name').value.trim(),
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