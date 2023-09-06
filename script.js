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
