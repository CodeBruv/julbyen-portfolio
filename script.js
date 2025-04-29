// Mobile Menu
const menuBtn = document.getElementById('menu-btn');
const mobileMenu = document.getElementById('mobile-menu');
const menuLinks = mobileMenu.querySelectorAll('a');

menuBtn.addEventListener('click', () => {
    mobileMenu.classList.toggle('hidden');
});

menuLinks.forEach(link => {
    link.addEventListener('click', () => {
        mobileMenu.classList.add('hidden');
    });
});

// Back to Top
const backToTop = document.getElementById('back-to-top');
window.addEventListener('scroll', () => {
    if (window.scrollY > 300) {
        backToTop.classList.remove('hidden');
    } else {
        backToTop.classList.add('hidden');
    }
});
backToTop.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
});

// Auto Year
document.getElementById('year').textContent = new Date().getFullYear();

// Testimonial Sliders
// Testimonial Sliders
const sliders = document.querySelectorAll('.testimonial-slider');
sliders.forEach(slider => {
    const slides = slider.querySelector('.slides');
    const prevBtn = slider.querySelector('.prev');
    const nextBtn = slider.querySelector('.next');
    let currentSlide = 0;

    const showSlide = (index) => {
        const slideWidth = slider.offsetWidth; // Actual slider width
        slides.style.transform = `translateX(-${index * slideWidth}px)`;
    };

    prevBtn.addEventListener('click', () => {
        currentSlide = (currentSlide === 0) ? 1 : 0;
        showSlide(currentSlide);
    });

    nextBtn.addEventListener('click', () => {
        currentSlide = (currentSlide === 1) ? 0 : 1;
        showSlide(currentSlide);
    });

    slider.addEventListener('keydown', (e) => {
        if (e.key === 'ArrowLeft') {
            prevBtn.click();
        } else if (e.key === 'ArrowRight') {
            nextBtn.click();
        }
    });

    // Update slide position on resize
    window.addEventListener('resize', () => {
        showSlide(currentSlide);
    });
});