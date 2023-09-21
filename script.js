// BARRA DE NAVEGAÇÃO PRINCIPAL
document.getElementById("menu-button").addEventListener("click", function () {
    let menuOptions = document.getElementById("menu-options");
    menuOptions.classList.toggle("hidden");
});

// BARRA DE NAVEGAÇÃO SECUNDÁRIA FIXADA
window.addEventListener('scroll', function () {
    let fixedNav = document.getElementById('fixedNav');
    let header = document.querySelector('header');
    let headerHeight = header.offsetHeight;

    if (window.scrollY >= headerHeight) {
        fixedNav.classList.add('fixed');
    } else {
        fixedNav.classList.remove('fixed');
    }
});

// GALERIA DE IMAGENS COM SLIDE E MODAL
let currentIndex = 0;
const images = document.querySelectorAll('.slide-image');
const modal = document.getElementById('imageModal');
const modalImage = document.getElementById('modalImage');

function showImage(index) {
    images.forEach((image, i) => {
        if (i === index) {
            image.style.display = 'block';
        } else {
            image.style.display = 'none';
        }
    });
}

function prevImage() {
    currentIndex = (currentIndex - 1 + images.length) % images.length;
    showImage(currentIndex);
}

function nextImage() {
    currentIndex = (currentIndex + 1) % images.length;
    showImage(currentIndex);
}

function openImage(index) {
    modal.style.display = 'block';
    modalImage.src = images[index].src;
    currentIndex = index;
}

function closeModal() {
    modal.style.display = 'none';
}

function prevModalImage() {
    currentIndex = (currentIndex - 1 + images.length) % images.length;
    modalImage.src = images[currentIndex].src;
}

function nextModalImage() {
    currentIndex = (currentIndex + 1) % images.length;
    modalImage.src = images[currentIndex].src;
}

// Adicione um evento de tecla para sair do modal quando a tecla Esc for pressionada
document.addEventListener('keydown', function (event) {
    if (event.key === 'Escape') {
        closeModal();
    } else if (event.key === 'ArrowLeft') {
        prevModalImage();
    } else if (event.key === 'ArrowRight') {
        nextModalImage();
    }
});

// Adicione eventos de toque para dispositivos móveis
let touchStartX = null;

modalImage.addEventListener('touchstart', (e) => {
    touchStartX = e.touches[0].clientX;
});

modalImage.addEventListener('touchmove', (e) => {
    if (touchStartX === null) return;

    const touchEndX = e.touches[0].clientX;
    const deltaX = touchEndX - touchStartX;

    if (deltaX > 50) {
        // Deslizou para a direita (avançar)
        nextModalImage();
    } else if (deltaX < -50) {
        // Deslizou para a esquerda (retornar)
        prevModalImage();
    }

    touchStartX = null;
});

// Inicialmente, exiba a primeira imagem
showImage(currentIndex);






// FUNCIONALIDADE BOTÃO VER MAPA

document.addEventListener("DOMContentLoaded", function() {
    const verMapaBtn = document.getElementById("ver-mapa-btn");
    const mapaIframe = document.getElementById("mapa-iframe");
    const imagemLocalizacao = document.getElementById("imagem-localizacao");
  
    // Inicialmente, o mapa está oculto
    mapaIframe.style.display = "none";
  
    verMapaBtn.addEventListener("click", function() {
      // Quando o botão é clicado, alternar a visibilidade do mapa e da imagem
      if (mapaIframe.style.display === "none") {
        mapaIframe.style.display = "block";
        imagemLocalizacao.style.display = "none";
      } else {
        mapaIframe.style.display = "none";
        imagemLocalizacao.style.display = "block";
      }
    });
  });
  
  