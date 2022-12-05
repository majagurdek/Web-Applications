const slides = document.querySelectorAll(".slide");

slides.forEach((slide, indx) => {
  slide.style.transform = `translateX(${indx * 100}%)`;
});

let curSlide = 0;
const nextSlide = document.querySelector(".btn-next");
let maxSlide = slides.length - 1;


nextSlide.addEventListener("click", function () {
  if (curSlide === maxSlide) {
    curSlide = 0;
  } else {
    curSlide++;
  }

  slides.forEach((slide, indx) => {
    slide.style.transform = `translateX(${100 * (indx - curSlide)}%)`;
  });
});


const prevSlide = document.querySelector(".btn-prev");

prevSlide.addEventListener("click", function () {
  if (curSlide === 0) {
    curSlide = maxSlide;
  } else {
    curSlide--;
  }

  slides.forEach((slide, indx) => {
    slide.style.transform = `translateX(${100 * (indx - curSlide)}%)`;
  });
})

const random = document.querySelector(".btn-random");

random.addEventListener('click', event => {
  let random = Math.floor(Math.random() * 6)
  slides.forEach((slide, indx) => {
    slide.style.transform = `translateX(${100 * (indx - random)}%)`;
  });

  
})


;


