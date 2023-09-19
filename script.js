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
document.addEventListener('keydown', function(event) {
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