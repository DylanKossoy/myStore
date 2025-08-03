



// function to trigger shake animation on input field with a little interval timer 


export function triggerShake(field) {
    field.classList.add('shake')

    setTimeout(() => {
        field.classList.remove('shake')

    }, 300)
}