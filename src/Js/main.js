const prevBtnEl = document.querySelector('.prev');
const nextBtnEl = document.querySelector('.next');
const slides = document.querySelectorAll('.slide');


let index = 0;

function nextSlide(){
  index++

  index > slides.length - 1 ? index = 0 : 0;

  slides.forEach(slide => slide.style.display = 'none'); 

  slides[index].style.display = 'flex';
};

function prevSlide(){
  index--

  index < 0 ? index = slides.length - 1 : 0;

  slides.forEach(slide => slide.style.display = 'none');

  slides[index].style.display = 'flex';
}

nextBtnEl.addEventListener('click', nextSlide);
prevBtnEl.addEventListener('click', prevSlide);