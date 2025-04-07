const obras = {
  blueWolf: {
    titulo: "Blue Wolf",
    descripcion: "Una majestuosa criatura envuelta en llamas azules resplandecientes. Este lobo ancestral vigila un reino olvidado, con ojos tan fríos como la luna llena que lo acompaña. Su presencia irradia poder y serenidad, como un guardián entre el fuego y el hielo.",
    precio: "$250.000",
    imagenPrincipal: "imagenes/Blue Wolf.webp",
    thumbnails: [
      "imagenes/Thumb 1.webp",
      "imagenes/Thumb 2.webp"
    ],
    artista: "NovaStrider"
  },
  SamuraiCyberpunk: {
    titulo: "Samurai Cyberpunk",
    descripcion: "Una ciudad sumida en neón, violencia y códigos rotos. En medio del caos digital, un samurái solitario recorre las calles ensangrentadas con su katana cromada, buscando justicia en un mundo que olvidó su significado. Bleeding Streets captura la esencia del honor perdido, la rebelión silenciosa y el arte del combate en una urbe que arde en luces y pecado. Cada trazo grita resistencia, cada color es una cicatriz de guerra.",
    precio: "$180.000",
    imagenPrincipal: "imagenes/Samurai Cyberpunk.png",
    thumbnails: [
      "imagenes/Samurai Cyberpunk.png",
      "imagenes/Samurai Cyberpunk.png"
    ],
    artista: "NovaStrider"
  },
  MagicGalaxy: {
    titulo: "Magic Galaxy",
    descripcion: "Un rincón del universo donde la ciencia y la magia se entrelazan. Magic Galaxy representa una galaxia prohibida, custodiada por secretos milenarios y energías que desafían toda lógica. Un agujero negro iluminado por luz púrpura marca el centro de un sistema donde el tiempo no tiene sentido, y cada planeta orbita alrededor de un destino desconocido. Esta obra es una ventana al abismo cósmico, perfecta para quienes sueñan con explorar lo inexplorado… o simplemente perderse en el infinito.",
    precio: "$200.000",
    imagenPrincipal: "imagenes/Magic Galaxy.png",
    thumbnails: [
      "imagenes/Magic Galaxy.png",
      "imagenes/Magic Galaxy.png"
    ],
    artista: "NovaStrider"
  },
  ElegantFuture: {
    titulo: "Elegant Future",
    descripcion: "Imagina un mundo donde los años 20 nunca terminaron… pero en vez de evolucionar hacia lo que conocemos, la humanidad se volvió aún más sofisticada y tecnológica. Elegant Future captura ese contraste entre lo clásico y lo futurista: un caballero sin rostro, cubierto de luces de neón y circuitos, que camina entre rascacielos art déco y coches voladores. Esta obra rinde homenaje a la elegancia del pasado fusionada con la potencia del mañana. Ideal para quienes ven la tecnología no como un fin, sino como un estilo de vida con clase.",
    precio: "$185.000",
    imagenPrincipal: "imagenes/Elegant Future.png",
    thumbnails: [
      "imagenes/Elegant Future.png",
      "imagenes/Elegant Future.png"
    ],
    artista: "NovaStrider"
  },
  MagistralLion: {
    titulo: "Magistral Lion",
    descripcion: "Un rugido que atraviesa dimensiones. Magistral Lion no es solo una imagen, es una declaración de poder, liderazgo y misticismo. Su melena hecha de energía cósmica y su mirada firme representan el equilibrio perfecto entre lo salvaje y lo divino. Este león es el guardián de los secretos del universo, el símbolo de una fuerza que no necesita palabras para imponerse. Con colores vibrantes, líneas energéticas y un aura sobrenatural, esta obra es perfecta para quienes se sienten líderes en su camino, incluso si caminan solos.",
    precio: "$195.000",
    imagenPrincipal: "imagenes/Magistral Lion.jpeg",
    thumbnails: [
      "imagenes/Magistral Lion.jpeg",
      "imagenes/Magistral Lion.jpeg"
    ],
    artista: "NovaStrider"
  },
  DarkShowroom: {
    titulo: "Dark Showroom",
    descripcion: "Un salón donde el silencio habla, donde las sombras cuentan historias. Dark Showroom es una experiencia visual que mezcla el misterio con la sofisticación. Cada rincón está bañado en oscuridad con un control absoluto del contraste y la atmósfera. Aquí no hay caos, hay estilo. Un refugio para las almas que disfrutan del diseño sobrio, futurista y con una esencia casi secreta. Perfecta para representar ambientes tecnológicos, elegantes y con una estética cinematográfica que parece salida de una película de culto.",
    precio: "$160.000",
    imagenPrincipal: "imagenes/Dark Showroom.png",
    thumbnails: [
      "imagenes/Dark Showroom.png",
      "imagenes/Dark Showroom.png"
    ],
    artista: "NovaStrider"
  },
  BitLandscape: {
    titulo: "16 BitLandscape",
    descripcion: "Un atardecer congelado donde el sol se despide con una caricia dorada sobre un bosque dormido. Las copas de los pinos, cubiertas por un manto espeso de nieve, parecen murmurar secretos al viento helado. En medio del silencio cristalino, una pequeña criatura se asoma tímidamente entre la blancura, recordando que incluso en el frío más intenso puede habitar la esperanza.",
    precio: "$190.000",
    imagenPrincipal: "imagenes/16 Bit Landscape.jpeg",
    thumbnails: [
      "imagenes/16 Bit Landscape.jpeg",
      "imagenes/16 Bit Landscape.jpeg"
    ],
    artista: "NovaStrider"
  },
  CathedralofEchoes: {
    titulo: "Cathedral of Echoes",
    descripcion: "Ruinas eternas que guardan los ecos de un pasado olvidado. Entre estructuras ennegrecidas por la oscuridad, una figura solitaria se enfrenta a lo desconocido, con el acero en mano y la determinación en la mirada. La tenue luz de cristales rotos tiñe el suelo con destellos iridiscentes, como si la catedral misma intentara recordar lo que fue.",
    precio: "$210.000",
    imagenPrincipal: "imagenes/Cathedral of Echoes.png",
    thumbnails: [
      "imagenes/Cathedral of Echoes.png",
      "imagenes/Cathedral of Echoes.png"
    ],
    artista: "NovaStrider"
  },
};

// Variable para guardar el ID de la obra actual
let obraActual = "blueWolf";

// Función para obtener claves aleatorias de un objeto excepto una
function obtenerClavesAleatorias(obj, excluir, cantidad) {
  const todasLasClaves = Object.keys(obj).filter(key => key !== excluir);
  const clavesAleatorias = [];
  
  // Mezclar claves (algoritmo Fisher-Yates)
  for (let i = todasLasClaves.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [todasLasClaves[i], todasLasClaves[j]] = [todasLasClaves[j], todasLasClaves[i]];
  }
  
  // Tomar solo la cantidad necesaria
  for (let i = 0; i < Math.min(cantidad, todasLasClaves.length); i++) {
    clavesAleatorias.push(todasLasClaves[i]);
  }
  
  return clavesAleatorias;
}

// Función para actualizar el portafolio con obras aleatorias
function actualizarPortafolio() {
  const portfolioContainer = document.getElementById("portfolio-container");
  portfolioContainer.innerHTML = ""; // Limpiar contenido anterior
  
  // Obtener 5 obras aleatorias (o el máximo disponible) excluyendo la obra actual
  const obrasAleatorias = obtenerClavesAleatorias(obras, obraActual, 5);
  
  // Crear elementos del portafolio
  obrasAleatorias.forEach(clave => {
    const obra = obras[clave];
    
    const articulo = document.createElement("article");
    articulo.className = "portfolio-item";
    articulo.setAttribute("data-obra", clave);
    
    const imagen = document.createElement("img");
    imagen.src = obra.imagenPrincipal;
    imagen.alt = obra.titulo;
    imagen.className = "portfolio-image";
    
    const titulo = document.createElement("h3");
    titulo.className = "portfolio-item-title";
    titulo.textContent = obra.titulo;
    
    articulo.appendChild(imagen);
    articulo.appendChild(titulo);
    
    // Agregar evento de clic
    articulo.addEventListener("click", () => {
      mostrarObra(clave);
    });
    
    portfolioContainer.appendChild(articulo);
  });
}

// Función para mostrar una obra específica
function mostrarObra(nombreObra) {
  const obra = obras[nombreObra];
  
  if (!obra) {
    console.error("Obra no encontrada:", nombreObra);
    return;
  }
  
  // Actualizar la variable de obra actual
  obraActual = nombreObra;
  
  // Actualizar contenido en HTML
  document.getElementById("titulo-obra").textContent = obra.titulo;
  document.getElementById("descripcion-obra").textContent = obra.descripcion;
  document.getElementById("precio-obra").textContent = obra.precio;
  document.getElementById("artista-obra").textContent = obra.artista;
  document.getElementById("imagen-principal").src = obra.imagenPrincipal;
  document.getElementById("imagen-principal").alt = obra.titulo;
  
  // Actualizar miniaturas
  const thumbnailsContainer = document.getElementById("contenedor-thumbnails");
  thumbnailsContainer.innerHTML = ""; // Limpiar los thumbnails anteriores
  
  obra.thumbnails.forEach(thumbnail => {
    const img = document.createElement("img");
    img.src = thumbnail;
    img.alt = "Miniatura de " + obra.titulo;
    img.className = "thumbnail";
    thumbnailsContainer.appendChild(img);
  });
  
  // Restablecer el botón de agregar
  const botonAgregar = document.getElementById("boton-agregar");
  botonAgregar.classList.remove("agregado");
  botonAgregar.innerText = "AGREGAR";
  
  // Actualizar el portafolio para no mostrar la obra actual
  actualizarPortafolio();
  
  // Desplazar la página al inicio para mejor experiencia de usuario
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

// Inicializar la página con la primera obra y el portafolio aleatorio
document.addEventListener("DOMContentLoaded", () => {
  // Configurar los eventos para las miniaturas de navegación
  const miniaturas = document.querySelectorAll(".miniatura-navegacion");
  miniaturas.forEach(miniatura => {
    miniatura.addEventListener("click", () => {
      const obraId = miniatura.getAttribute("data-obra");
      mostrarObra(obraId);
    });
  });
  
  // Cargar la obra inicial (Blue Wolf)
  mostrarObra("blueWolf");
});
// Efecto de pulse para las imágenes del portafolio
document.addEventListener('DOMContentLoaded', () => {
  // Esta función se ejecutará cuando se actualice el portafolio
  const setupPortfolioAnimations = () => {
    const portfolioItems = document.querySelectorAll('.portfolio-item');
    
    portfolioItems.forEach(item => {
      // Quitamos cualquier evento anterior para evitar duplicados
      const newItem = item.cloneNode(true);
      item.parentNode.replaceChild(newItem, item);
      
      // Aplicamos el nuevo evento de click
      newItem.addEventListener('click', () => {
        const obraId = newItem.getAttribute('data-obra');
        mostrarObra(obraId);
      });
      
      // Efecto de pulso al hacer hover
      newItem.addEventListener('mouseenter', () => {
        const image = newItem.querySelector('.portfolio-image');
        image.style.animation = 'pulse 1s infinite alternate';
      });
      
      newItem.addEventListener('mouseleave', () => {
        const image = newItem.querySelector('.portfolio-image');
        image.style.animation = '';
      });
    });
  };
  
  // Crear la animación de pulso en CSS
  const style = document.createElement('style');
  style.textContent = `
    @keyframes pulse {
      0% {
        box-shadow: 0 15px 25px rgba(137, 65, 244, 0.3), 
                    0 0 10px rgba(137, 65, 244, 0.2), 
                    0 0 30px rgba(137, 65, 244, 0.1);
      }
      100% {
        box-shadow: 0 15px 25px rgba(137, 65, 244, 0.5), 
                    0 0 20px rgba(137, 65, 244, 0.4), 
                    0 0 40px rgba(137, 65, 244, 0.3);
      }
    }
  `;
  document.head.appendChild(style);
  
  // Sobrescribir la función de actualizar portafolio para añadir las animaciones
  const originalActualizarPortafolio = window.actualizarPortafolio;
  window.actualizarPortafolio = function() {
    originalActualizarPortafolio();
    setupPortfolioAnimations();
  };
  
  // Iniciar las animaciones con el portafolio inicial
  setupPortfolioAnimations();
});



