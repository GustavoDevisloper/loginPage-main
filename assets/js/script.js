const passwordInput = document.getElementById('password');
const showPasswordIcon = document.querySelector('.show-password-icon');

showPasswordIcon.addEventListener('click', () => {
    if (passwordInput.type === 'password') {
        passwordInput.type = 'text'; // Mostrar a senha
    } else {
        passwordInput.type = 'password'; // Ocultar a senha
    }
});