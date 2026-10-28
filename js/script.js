let currentIndex = 0;
let carouselTimer = null;

const carouselEl = document.getElementById('carousel');
const dotsContainerEl = document.getElementById('dotsContainer');

function updateSlide() {
  const slides = document.querySelectorAll('.carousel-slide');
  const dots = document.querySelectorAll('.dot');

  slides.forEach((slide, idx) => {
    slide.classList.toggle('active', idx === currentIndex);
  });

  dots.forEach((dot, idx) => {
    dot.classList.toggle('active', idx === currentIndex);
  });
}

function goToSlide(index) {
  currentIndex = index;
  updateSlide();
  resetAutoSlide();
}

function nextSlide() {
  currentIndex = (currentIndex + 1) % images.length;
  updateSlide();
}

function prevSlide() {
  currentIndex = (currentIndex - 1 + images.length) % images.length;
  updateSlide();
}

function resetAutoSlide() {
  clearInterval(carouselTimer);
  startAutoSlide();
}

// ドロワーメニュー制御
const drawerEl = document.getElementById('drawer');
const menuOpenBtn = document.getElementById('menuOpenBtn');
const menuCloseBtn = document.getElementById('menuCloseBtn');
const drawerBackdrop = document.getElementById('drawerBackdrop');

menuOpenBtn.addEventListener('click', () => {
  drawerEl.classList.add('open');
});

function closeDrawer() {
  drawerEl.classList.remove('open');
}

menuCloseBtn.addEventListener('click', closeDrawer);
drawerBackdrop.addEventListener('click', closeDrawer);