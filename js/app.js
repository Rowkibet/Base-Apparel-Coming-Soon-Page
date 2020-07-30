const email = document.querySelector('#email');

document.addEventListener('submit', e => {
    e.preventDefault();
    validateData();
});

function validateData() {
    const emailValue = email.value.trim();

    if(emailValue === '') {
        setErrorFor(email, "Email cannot be empty");
    } else if (!isEmail(emailValue)) {
        setErrorFor(email, "Please provide a valid email");
    } else {
        setSuccessFor(email);
    }
}

function setErrorFor(input, message) {
    const form = input.parentElement;
    const small = form.querySelector('small');
    form.classList.add('error');
    small.textContent = message;
}

function setSuccessFor(input) {
    const form = input.parentElement;
    form.classList.remove('error');
}

function isEmail(email) {
    const regex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return regex.test(email);
}


const allInputFields = document.querySelectorAll('form input');


allInputFields.forEach(input => {
    input.addEventListener('focus', () => {
        input.style.color = "var(--dark-grayish-red)";
    })
});

allInputFields.forEach(input => {
    input.addEventListener('blur', () => {
        if(input.value === '') {
            allInputFields.forEach(input => {
                input.removeAttribute('style');
            });
        }
    })
});