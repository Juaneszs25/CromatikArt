// script.js para la página de login/registro

document.addEventListener("DOMContentLoaded", () => {
    const form = document.querySelector("form");
    const emailInput = document.getElementById("email");
    const passwordInput = document.getElementById("password");
  
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
  
      // ✅ Acción cuando todo es válido

      window.location.href = "PrincipalConLogin.html"; // o a donde debas redirigir
    });
  });
  
  function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
  }
  