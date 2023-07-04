const id = document.getElementById('form_id');
const password = document.getElementById('form_password');
const form = document.getElementById('form');
const errorElement = document.getElementById('error');

form.addEventListener('submit', (e) => {
    let messages = [];
    if (id.value == '' || id.value == null) {
        messages.push('User Name is required.');
    }

    if (password.value.length <= 6) {
        messages.push('Password must be longer thatn 6 characters.')
    }

    if (password.value.length >= 20) {
        messages.push('Password must be less thatn 20 characters.')
    }
    if (messages.length > 0) {
        e.preventDefault();
        errorElement.innerText = messages.join(', ');
    }
} );
