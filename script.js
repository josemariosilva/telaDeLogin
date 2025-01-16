document.getElementById('loginForm').addEventListener('submit', function (e) {
  e.preventDefault();

  const email = document.getElementById('email').value.trim();
  const password = document.getElementById('password').value.trim();
  const messageDiv = document.getElementById('message');

  // Validacao para o Email
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailPattern.test(email)) {
    messageDiv.textContent = "Por favor, insira um e-mail vlido.";
    messageDiv.style.color = "red";
    return;
  }

  // Validacao da Senha
  if (password.length < 6) {
    messageDiv.textContent = "A senha deve ter pelo menos 6 caracteres.";
    messageDiv.style.color = "red";
    return;
  }

  // Sucesso na validacao
  messageDiv.textContent = "Login realizado com sucesso!";
  messageDiv.style.color = "green";
});
