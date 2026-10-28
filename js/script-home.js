const images = [
  'images/gifuCastle.jpg',
  'images/Colorful.jpg',
];

// カルーセルの初期化
function initCarousel() {
  images.forEach((imgUrl, idx) => {
    // スライド作成
    const slide = document.createElement('div');
    slide.className = `carousel-slide ${idx === 0 ? 'active' : ''}`;
    slide.style.backgroundImage = `url('${imgUrl}')`;
    carouselEl.appendChild(slide);

    // ドット作成
    const dot = document.createElement('div');
    dot.className = `dot ${idx === 0 ? 'active' : ''}`;
    dot.addEventListener('click', () => goToSlide(idx));
    dotsContainerEl.appendChild(dot);
  });

  startAutoSlide();
}

function startAutoSlide() {
  carouselTimer = setInterval(nextSlide, 5000); // 5秒ごとに移動
}

// 矢印ボタンイベント
document.getElementById('prevBtn').addEventListener('click', () => {
  prevSlide();
  resetAutoSlide();
});

document.getElementById('nextBtn').addEventListener('click', () => {
  nextSlide();
  resetAutoSlide();
});

// 初期実行
initCarousel();