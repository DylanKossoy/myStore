import { triggerShake } from './utils.js'





function validateInputs({username, email, password, confirmPassword}) {
    if(!username || !email || !password || !confirmPassword) {
    
        return '*All fields need to be filled out*'
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



    
}
