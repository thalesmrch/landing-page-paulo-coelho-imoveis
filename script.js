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





















// Função para formatar o número com vírgula e casas decimais
function formatNumber(number, decimalPlaces) {
    return number.toLocaleString('pt-BR', { minimumFractionDigits: decimalPlaces, maximumFractionDigits: decimalPlaces });
}

// Função para animar o contador
function animateValue(element, start, end, duration, complement, decimalPlaces) {
    let startTimestamp = null;
    const step = (timestamp) => {
        if (!startTimestamp) startTimestamp = timestamp;
        const progress = Math.min((timestamp - startTimestamp) / duration, 1);
        const formattedEnd = formatNumber(end, decimalPlaces); // Formata o número final
        const current = formatNumber(progress * (end - start) + start, decimalPlaces); // Formata o número atual
        element.textContent = current + complement;
        if (progress < 1) {
            requestAnimationFrame(step);
        }
    };

    // Verificar se o contador já foi acionado
    if (!element.dataset.counted) {
        element.dataset.counted = "true"; // Defina um atributo de dados para marcar como contado
        requestAnimationFrame(step);
    }
}

// Função para verificar se o elemento está visível na janela
function isElementInViewport(element) {
    const rect = element.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
}

// Seletor para todos os elementos com a classe "contador"
const contadorElements = document.querySelectorAll('.contador');

// Função para iniciar o contador quando o elemento estiver visível
function startCounterWhenVisible(entries) {
    entries.forEach((entry) => {
        const element = entry.target;
        if (entry.isIntersecting) {
            const startValue = 0;
            const endValue = parseFloat(element.textContent.replace(/\./g, '').replace(',', '.')); // Remove pontos e substitui vírgula por ponto
            const decimalPlaces = parseInt(element.dataset.decimalPlaces) || 2; // Obtém o número de casas decimais do atributo de dados ou assume 2 casas decimais por padrão
            const duration = 2500; // Duração da animação em milissegundos (2.5 segundos neste caso)
            animateValue(element, startValue, endValue, duration, element.dataset.complement, decimalPlaces);
        }
    });
}

// Adicione um observador de interseção para verificar quando os elementos estão visíveis
const observer = new IntersectionObserver(startCounterWhenVisible);
contadorElements.forEach((element) => {
    observer.observe(element);
});


