let carousels

function showSlide(index, carouselIndex) {
   const carousel = carousels[carouselIndex];
   const carouselItems = carousel.querySelectorAll('.carousel-item');
   const totalItems = carouselItems.length;
   const offset = -index * 100;
   carousel.querySelector('.carousel-content').style.transform = `translateX(${offset}%)`;
}

function nextSlide(carouselIndex) {
   const carousel = carousels[carouselIndex];
   const currentIndex = parseInt(carousel.dataset.currentIndex) || 0;
   const totalItems = carousel.querySelectorAll('.carousel-item').length;
   const nextIndex = (currentIndex + 1) % totalItems;
   carousel.dataset.currentIndex = nextIndex;
   showSlide(nextIndex, carouselIndex);
}

function prevSlide(carouselIndex) {
   const carousel = carousels[carouselIndex];
   const currentIndex = parseInt(carousel.dataset.currentIndex) || 0;
   const totalItems = carousel.querySelectorAll('.carousel-item').length;
   const prevIndex = (currentIndex - 1 + totalItems) % totalItems;
   carousel.dataset.currentIndex = prevIndex;
   showSlide(prevIndex, carouselIndex);
}