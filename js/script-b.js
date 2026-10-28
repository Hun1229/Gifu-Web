//  const menuButton = document.getElementById("menu-button");
//     const sideMenu = document.getElementById("side-menu");
//     const menuOverlay = document.getElementById("menu-overlay");
//     const menuLinks = sideMenu.querySelectorAll("a");

//     function openMenu() {
//         sideMenu.classList.add("is-open");
//         menuOverlay.classList.add("is-open");
//         menuButton.setAttribute("aria-expanded", "true");
//         menuButton.setAttribute("aria-label", "メニューを閉じる");
//         sideMenu.setAttribute("aria-hidden", "false");
//         document.body.classList.add("menu-open");
//     }

//     function closeMenu() {
//         sideMenu.classList.remove("is-open");
//         menuOverlay.classList.remove("is-open");
//         menuButton.setAttribute("aria-expanded", "false");
//         menuButton.setAttribute("aria-label", "メニューを開く");
//         sideMenu.setAttribute("aria-hidden", "true");
//         document.body.classList.remove("menu-open");
//     }

//     menuButton.addEventListener("click", function () {
//         if (menuButton.getAttribute("aria-expanded") === "true") {
//             closeMenu();
//         } else {
//             openMenu();
//         }
//     });

//     menuOverlay.addEventListener("click", closeMenu);

//     menuLinks.forEach(function (link) {
//         link.addEventListener("click", closeMenu);
//     });

//     document.addEventListener("keydown", function (event) {
//         if (event.key === "Escape") {
//             closeMenu();
//         }
//     });
const images = [
  'images/gifuCastle.jpg',
  'images/Colorful.jpg',
];

let currentIndex = 0;
let carouselTimer = null;

const carouselEl = document.getElementById('carousel');
const dotsContainerEl = document.getElementById('dotsContainer');

// カルーセルの初期化
// function initCarousel() {
//   images.forEach((imgUrl, idx) => {
//     // スライド作成
//     const slide = document.createElement('div');
//     slide.className = `carousel-slide ${idx === 0 ? 'active' : ''}`;
//     slide.style.backgroundImage = `url('${imgUrl}')`;
//     carouselEl.appendChild(slide);

//     // ドット作成
//     const dot = document.createElement('div');
//     dot.className = `dot ${idx === 0 ? 'active' : ''}`;
//     dot.addEventListener('click', () => goToSlide(idx));
//     dotsContainerEl.appendChild(dot);
//   });

//   startAutoSlide();
// }

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

// function startAutoSlide() {
//   carouselTimer = setInterval(nextSlide, 5000); // 5秒ごとに移動
// }

function resetAutoSlide() {
  clearInterval(carouselTimer);
  startAutoSlide();
}

// 矢印ボタンイベント
// document.getElementById('prevBtn').addEventListener('click', () => {
//   prevSlide();
//   resetAutoSlide();
// });

// document.getElementById('nextBtn').addEventListener('click', () => {
//   nextSlide();
//   resetAutoSlide();
// });

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

// 初期実行
initCarousel();