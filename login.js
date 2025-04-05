// script.js para la página de login/registro

// Simulación de validación de formulario
document.addEventListener("DOMContentLoaded", () => {
  const form = document.querySelector("form");
  const emailInput = document.getElementById("email");
  const passwordInput = document.getElementById("password");
  const forgotPasswordLink = document.querySelector(".forgot-password");
  const registerLink = document.querySelector(".register-link");

  // Manejo del formulario de login
  form?.addEventListener("submit", (e) => {
    e.preventDefault();

    const email = emailInput.value.trim();
    const password = passwordInput.value.trim();

    // Validación simple
    if (!validateEmail(email)) {
      alert("Por favor, introduce un correo electrónico válido.");
      return;
    }

    if (password.length < 5) {
      alert("La contraseña debe tener al menos 5 caracteres.");
      return;
    }

    // Aquí puedes enviar los datos al servidor o simular un inicio de sesión
    window.location.href = "PrincipalConLogin.html"; // o a donde debas redirigir
  });

  // Manejo de enlace "¿Olvidaste tu contraseña?"
  forgotPasswordLink?.addEventListener("click", (e) => {
    e.preventDefault(); // Prevenir comportamiento predeterminado del enlace
    console.log("Redirigiendo a recuperación de contraseña...");
    window.location.href = "recuperar.html";
  });

  // Manejo de enlace "Regístrate aquí"
  registerLink?.addEventListener("click", (e) => {
    e.preventDefault(); // Prevenir comportamiento predeterminado del enlace
    console.log("Redirigiendo a página de registro...");
    window.location.href = "register.html";
  });
});

function validateEmail(email) {
  // Expresión regular simple para validar correo
  const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return re.test(email);
}