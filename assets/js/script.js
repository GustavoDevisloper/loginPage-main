var passwordInput = document.getElementById('password');
var passwordStrengthCircle = document.querySelector('.password-strength-circle');

passwordInput.addEventListener('focus', function () {
    // Mostra o círculo quando o campo de senha recebe foco
    passwordStrengthCircle.style.display = 'block';
});

passwordInput.addEventListener('input', function () {
    var val = passwordInput.value;
    var result = zxcvbn(val);

    // Remove todas as classes de força da senha
    passwordStrengthCircle.classList.remove('medium', 'strong');

    // Adiciona a classe correspondente à força da senha
    if (result.score === 2) {
        passwordStrengthCircle.classList.add('medium');
    } else if (result.score === 3 || result.score === 4) {
        passwordStrengthCircle.classList.add('strong');
    }
});
