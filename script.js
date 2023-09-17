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





let currentImageIndex = 0;
const images = document.querySelectorAll('.galeria-slide img');
const ampliada = document.querySelector('.ampliada');
const imagemAmpliada = document.getElementById('imagem-ampliada');

function showImage(index) {
  if (index >= 0 && index < images.length) {
    imagemAmpliada.src = images[index].src;
    ampliada.style.display = 'block';
    currentImageIndex = index;
  }
}

function closeImage() {
  ampliada.style.display = 'none';
}

function prevImage() {
  showImage(currentImageIndex - 1);
}

function nextImage() {
  showImage(currentImageIndex + 1);
}

// Adicione um evento de clique a todas as imagens na galeria para ampliá-las
images.forEach((image, index) => {
  image.addEventListener('click', () => showImage(index));
});

// Adicione um evento de clique à imagem ampliada para fechá-la
ampliada.addEventListener('click', closeImage);

// Pré-carregue todas as imagens
images.forEach((image) => {
  const img = new Image();
  img.src = image.src;
});

