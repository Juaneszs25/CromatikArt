// Esperar a que el DOM cargue
document.addEventListener("DOMContentLoaded", () => {
    // ===============================
    // Redirecciones de botones header
    // ===============================

  

    // Carrito
    document.querySelector('.icons button:nth-child(1)').addEventListener("click", () => {
        window.location.href = "carrito.html"; // Cambia por tu ruta real
    });

    // Perfil
    document.querySelector('.icons button:nth-child(2)').addEventListener("click", () => {
        window.location.href = "user.html"; // Cambia por tu ruta real
    });
});
