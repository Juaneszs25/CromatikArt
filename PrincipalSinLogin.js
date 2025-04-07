document.addEventListener("DOMContentLoaded", () => {
    // Carrusel
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
        const img = document.createElement("img");
        img.src = image.src;
        img.alt = image.alt;
        img.classList.add("carousel-image");
        carouselContainer.appendChild(img);
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

    // Galería incremental
    const galleryContainer = document.getElementById("imagenes");
    const loadMoreBtn = document.getElementById("loadMoreBtn");

    const imageFiles = [
        "Blue Wolf.webp",
        "Samurai Cyberpunk.png",
        "Magic Galaxy.png",
        "Elegant Future.png",
        "Magistral Lion.jpeg",
        "Dark Showroom.png",
        "16 Bit Landscape.jpeg",
        "Cathedral of Echoes.png"
    ];

    const obraKeys = [
        "blueWolf",
        "samuraiCyberpunk",
        "magicGalaxy",
        "elegantFuture",
        "magistralLion",
        "darkShowroom",
        "landscape16bit",
        "cathedralOfEchoes"
    ];

    const totalImages = imageFiles.length;
    const batchSize = 4;
    let currentImage = 0;

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
        const maxToLoad = Math.min(currentImage + batchSize, totalImages);
        for (; currentImage < maxToLoad; currentImage++) {
            const link = document.createElement("a");
            link.href = `DescripciónSinLogin.html?id=${obraKeys[currentImage]}`;
            link.classList.add("art-card");

            const img = document.createElement("img");
            img.dataset.src = `imagenes/${imageFiles[currentImage]}`;
            img.alt = `Arte ${currentImage + 1}`;

            link.appendChild(img);
            galleryContainer.appendChild(link);

            lazyLoadObserver.observe(img);
        }

        if (currentImage >= totalImages) {
            loadMoreBtn.style.display = "none";
        }
    }

    loadNextBatch();
    loadMoreBtn.addEventListener("click", loadNextBatch);
});

// Redirecciones
document.querySelector(".login-btn").addEventListener("click", () => {
    window.location.href = "login.html";
});

document.querySelector(".register-btn").addEventListener("click", () => {
    window.location.href = "register.html";
});

document.querySelector('.icons button:nth-child(2)').addEventListener("click", () => {
    window.location.href = "login.html";
});

document.querySelector('.icons button:nth-child(1)').addEventListener("click", () => {
    window.location.href = "login.html";
});
