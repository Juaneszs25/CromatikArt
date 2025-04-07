// Agregar al script existente
document.addEventListener('DOMContentLoaded', () => {
    // El código existente sigue aquí...
    
    // Agregar funcionalidad a los botones de scroll
    const scrollLeftBtn = document.getElementById('scrollLeft');
    const scrollRightBtn = document.getElementById('scrollRight');
    const portfolioGrid = document.querySelector('.portfolio-grid');
    
    scrollLeftBtn.addEventListener('click', () => {
      portfolioGrid.scrollBy({ left: -300, behavior: 'smooth' });
    });
    
    scrollRightBtn.addEventListener('click', () => {
      portfolioGrid.scrollBy({ left: 300, behavior: 'smooth' });
    });
  });