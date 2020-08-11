const form = document.querySelector('form');
const email = document.querySelector('#email');
const small = document.querySelector('small');

document.addEventListener('submit', e => {
    e.preventDefault();
    validateData();
});

function validateData() {
    const emailValue = email.value.trim();

    if(emailValue === '') {
        form.classList.add('error');
        small.textContent = "Email cannot be empty";
    } else if (!isEmail(emailValue)) {     
        form.classList.add('error');
        small.textContent = "Please provide a valid email";
    } else {
        form.classList.remove('error');
    }
}

function isEmail(email) {
    const regex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return regex.test(email);
}