const obras = {
  blueWolf: {
    titulo: "Blue Wolf",
    descripcion: "Una majestuosa criatura envuelta en llamas azules resplandecientes. Este lobo ancestral vigila un reino olvidado, con ojos tan fríos como la luna llena que lo acompaña.",
    imagen: "imagenes/Blue Wolf.webp",
    precio: "$250.000",
    artista: "NovaStrider"
  },
  samuraiCyberpunk: {
    titulo: "Samurai Cyberpunk",
    descripcion: "Un guerrero samurái con tecnología futurista, fusionando la antigua tradición con un futuro distópico lleno de neones y cibernética.",
    imagen: "imagenes/Samurai Cyberpunk.png",
    precio: "$180.000",
    artista: "NovaStrider"
  },
  magicGalaxy: {
    titulo: "Magic Galaxy",
    descripcion: "Una galaxia mágica llena de estrellas y color que transporta al espectador a un universo de posibilidades infinitas.",
    imagen: "imagenes/Magic Galaxy.png",
    precio: "$200.000",
    artista: "NovaStrider"
  },
  elegantFuture: {
    titulo: "Elegant Future",
    descripcion: "Una visión artística de un futuro sofisticado donde la tecnología y la elegancia se fusionan en perfecta armonía.",
    imagen: "imagenes/Elegant Future.png",
    precio: "$220.000",
    artista: "NovaStrider"
  },
  magistralLion: {
    titulo: "Magistral Lion",
    descripcion: "Retrato de un león con majestuosidad digital, capturando la esencia y fuerza del rey de la selva en un estilo único.",
    imagen: "imagenes/Magistral Lion.jpeg",
    precio: "$190.000",
    artista: "NovaStrider"
  },
  darkShowroom: {
    titulo: "Dark Showroom",
    descripcion: "Un showroom con iluminación oscura y elegante que resalta la belleza de lo misterioso y lo desconocido.",
    imagen: "imagenes/Dark Showroom.png",
    precio: "$230.000",
    artista: "NovaStrider"
  },
  landscape16bit: {
    titulo: "16 Bit Landscape",
    descripcion: "Paisaje estilo pixel-art de los años 80 que evoca nostalgia y encanto retro en un mundo digitalizado.",
    imagen: "imagenes/16 Bit Landscape.jpeg",
    precio: "$150.000",
    artista: "NovaStrider"
  },
  cathedralOfEchoes: {
    titulo: "Cathedral of Echoes",
    descripcion: "Catedral inmensa envuelta en ecos del pasado, donde la arquitectura ancestral se encuentra con la visión futurista.",
    imagen: "imagenes/Cathedral of Echoes.png",
    precio: "$270.000",
    artista: "NovaStrider"
  }
};

function mostrarObra() {
  const params = new URLSearchParams(window.location.search);
  const id = params.get("id") || "blueWolf"; // Default to blueWolf if no ID provided

  const obra = obras[id];

  if (obra) {
    document.getElementById("tituloObra").textContent = obra.titulo;
    document.getElementById("descripcionObra").textContent = obra.descripcion;
    document.getElementById("imagenObra").src = obra.imagen;
    document.getElementById("imagenObra").alt = obra.titulo;
    document.getElementById("precioObra").textContent = obra.precio;
    document.getElementById("artistaObra").textContent = obra.artista;

    // Añadir thumbnails
    const contenedorThumbnails = document.getElementById("contenedor-thumbnails");
    contenedorThumbnails.innerHTML = ""; // Limpiar contenedor

    // Añadir 2-3 thumbnails (podría ser la misma imagen para este ejemplo)
    for (let i = 0; i < 2; i++) {
      const thumbnail = document.createElement("img");
      thumbnail.src = obra.imagen;
      thumbnail.alt = `${obra.titulo} thumbnail ${i+1}`;
      thumbnail.classList.add("thumbnail");
      contenedorThumbnails.appendChild(thumbnail);
    }

    // Mostrar otras obras en portafolio
    const portafolio = document.getElementById("portafolio");
    portafolio.innerHTML = ""; // Limpiar portafolio

    for (let key in obras) {
      if (key !== id) { // No mostrar la obra actual
        const portfolioItem = document.createElement("div");
        portfolioItem.classList.add("portfolio-item");
        
        const img = document.createElement("img");
        img.src = obras[key].imagen;
        img.alt = obras[key].titulo;
        img.classList.add("portfolio-image");
        
        const title = document.createElement("p");
        title.textContent = obras[key].titulo;
        title.style.color = "#fff";
        title.style.marginTop = "10px";
        
        portfolioItem.appendChild(img);
        portfolioItem.appendChild(title);
        
        portfolioItem.addEventListener("click", () => {
          window.location.href = `DescripciónSinLogin.html?id=${key}`;
        });
        
        portafolio.appendChild(portfolioItem);
      }
    }
  } else {
    document.getElementById("tituloObra").textContent = "Obra no encontrada";
    document.getElementById("descripcionObra").textContent = "La obra que estás buscando no existe en nuestra galería.";
    document.getElementById("imagenObra").style.display = "none";
  }
}

document.addEventListener("DOMContentLoaded", mostrarObra);

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

document.querySelector('.btn-agregar').addEventListener("click", () => {
  window.location.href = "login.html";
});

document.querySelectorAll('.artist-button').forEach(boton => {
  boton.addEventListener("click", (e) => {
    e.preventDefault(); // Previene comportamiento del enlace
    const destino = boton.dataset.usuario;
    window.location.href = "login.html";
  });
});
