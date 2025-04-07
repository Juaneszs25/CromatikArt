document.addEventListener("DOMContentLoaded", () => {
    // ====================
    // Carrusel manual
    // ====================
    const carouselImages = [
        { src: "images/art1.jpg", alt: "Arte digital 1" },
        { src: "images/art2.jpg", alt: "Arte digital 2" },
        { src: "images/art3.jpg", alt: "Arte digital 3" },
        { src: "images/art4.jpg", alt: "Arte digital 4" },
        { src: "images/art5.jpg", alt: "Arte digital 5" },
        { src: "images/art6.jpg", alt: "Arte digital 6" },
        { src: "images/art7.jpg", alt: "Arte digital 7" }
    ];

    const carouselContainer = document.getElementById("carouselContainer");

    carouselImages.forEach(image => {
        const imgElement = document.createElement("img");
        imgElement.src = image.src;
        imgElement.alt = image.alt;
        imgElement.classList.add("carousel-image");
        carouselContainer.appendChild(imgElement);
    });

    let currentIndex = 0;
    const images = document.querySelectorAll(".carousel-image");

    window.nextSlide = () => {
        images[currentIndex].classList.remove("active");
        currentIndex = (currentIndex + 1) % images.length;
        images[currentIndex].classList.add("active");
    };

    window.prevSlide = () => {
        images[currentIndex].classList.remove("active");
        currentIndex = (currentIndex - 1 + images.length) % images.length;
        images[currentIndex].classList.add("active");
    };

    images[currentIndex].classList.add("active");

    // ==============================
    // Galería con carga incremental
    // ==============================

    const galleryContainer = document.getElementById("gallery");
    const loadMoreBtn = document.getElementById("loadMoreBtn");

    const totalImages = 900; // Ajusta según tu galería
    const batchSize = 4;     // Número de imágenes por lote
    let currentImage = 1;

    // Lazy loading observer
    const lazyLoadObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src;
                observer.unobserve(img);
            }
        });
    });

    function loadNextBatch() {
        const maxToLoad = Math.min(currentImage + batchSize - 1, totalImages);
        for (; currentImage <= maxToLoad; currentImage++) {
            // Usamos un <a> para hacer clic en la imagen y redirigir
            const link = document.createElement("a");
            link.href = `Descripción.html?id=art${currentImage}`;
            link.classList.add("art-card");

            const img = document.createElement("img");
            img.dataset.src = `images/gallery/art${currentImage}.jpg`;
            img.alt = `Arte ${currentImage}`;

            link.appendChild(img);
            galleryContainer.appendChild(link);

            lazyLoadObserver.observe(img);
        }

        // Ocultar botón si ya cargamos todas
        if (currentImage > totalImages) {
            loadMoreBtn.style.display = "none";
        }
    }

    // Cargar las primeras imágenes
    loadNextBatch();

    // Escuchar clic en el botón
    loadMoreBtn.addEventListener("click", loadNextBatch);
});

// ===============================
// Redirecciones de botones
// ===============================

// Iniciar sesión
document.querySelector(".login-btn").addEventListener("click", () => {
    window.location.href = "login.html"; // Indica que es el modo inicio de sesión
});

// Registrarse
document.querySelector(".register-btn").addEventListener("click", () => {
    window.location.href = "register.html"; // Indica que es el modo registro
});


// Shop
document.querySelector(".nav-btn").addEventListener("click", () => {
    window.location.href = "shop.html"; // Cambia por tu ruta real
});

// Carrito
document.querySelector('.icons button:nth-child(2)').addEventListener("click", () => {
    window.location.href = "carrito.html"; // Cambia por tu ruta real
});

// Notificaciones
document.querySelector('.icons button:nth-child(1)').addEventListener("click", () => {
    window.location.href = "login.html"; // Cambia por tu ruta real
});