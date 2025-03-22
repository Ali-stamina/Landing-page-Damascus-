const slides = document.querySelectorAll('.slide');
let currentIndex = 0;

function showSlide(index) {
    slides.forEach((slide, i) => {
        slide.classList.remove('active');
        if (i === index) {
            slide.classList.add('active');
        }
    });
}

showSlide(currentIndex);

setInterval(() => {
    currentIndex = (currentIndex + 1) % slides.length;
    showSlide(currentIndex);
}, 3000);

const scrollToTopButton = document.getElementById('scrollToTop');

window.onscroll = function() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        scrollToTopButton.style.display = 'block'; 
    } else {
        scrollToTopButton.style.display = 'none'; 
    }
};

scrollToTopButton.onclick = function() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth' 
    });
};