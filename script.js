// ========== Quick Exit Button ==========
const quickExit = document.getElementById('quickExit');
if (quickExit) {
    quickExit.addEventListener('click', () => {
        window.location.href = "https://www.google.com";
    });
}

// ========== Hero Slider ==========
let slides = document.querySelectorAll('.slide');
let currentSlide = 0;
const totalSlides = slides.length;

// Next / Prev buttons
const nextBtn = document.querySelector('.next');
const prevBtn = document.querySelector('.prev');

if (nextBtn) {
    nextBtn.addEventListener('click', () => changeSlide(1));
}
if (prevBtn) {
    prevBtn.addEventListener('click', () => changeSlide(-1));
}

function changeSlide(direction) {
    slides[currentSlide].classList.remove('active');
    currentSlide = (currentSlide + direction + totalSlides) % totalSlides;
    slides[currentSlide].classList.add('active');
}

// Auto Slide every 5 seconds
setInterval(() => {
    changeSlide(1);
}, 5000);

// Dropdown toggle vetëm tek butoni
const dropdown = document.querySelector('.dropdown');
if (dropdown) {
    const btn = dropdown.querySelector('.dropbtn');
    btn.addEventListener('click', function(e) {
        e.stopPropagation(); // ndalon klikimin të arrij tek window
        dropdown.classList.toggle('active');
    });

    // Mbyll dropdown kur klikoni jashtë
    window.addEventListener('click', function(e) {
        if (!dropdown.contains(e.target)) {
            dropdown.classList.remove('active');
        }
    });
}


