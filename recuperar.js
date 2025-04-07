document.addEventListener("DOMContentLoaded", () => {
    const form = document.querySelector("form");
    const emailInput = document.getElementById("email");
  
    form?.addEventListener("submit", (e) => {
      e.preventDefault();
  
      const email = emailInput.value.trim();
  
      if (!validateEmail(email)) {
        alert("Por favor, introduce un correo electrónico válido.");
        return;
      }
  
      // Simulación de envío
      alert("Hemos enviado instrucciones a tu correo electrónico.");
      window.location.href = "login.html";
    });
  });
  
  function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
  }
  