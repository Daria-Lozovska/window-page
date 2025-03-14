// const slider = document.getElementById("slider");
// const arrowLeft = document.querySelector(".arrow-left");
// const arrowRight = document.querySelector(".arrow-right");
// const slides = document.querySelectorAll(".slider-image");
// const bottom = document.querySelectorById("bottom");

// let currentSlideIndex = 0;
// const paginationCircles = [];
// const sliderWidth = slider.clientWidth;

// function createPaginationCircle() {
//     const div = document.createElement("div");
//     div.className = "pagination-circle";
//     bottom.appendChild(div);
//     paginationCircles.push(div)
// }

// function addPagination() {
//     slides.forEach(createPaginationCircle);
//     paginationCircles[0].classList.add("active");
// }

// function addActiveClass() {
//     paginationCircles[currentSlideIndex].classList.add("active");
// }

// function removeActiveClass() {
//     paginationCircles[currentSlideIndex].classList.remove("active");
// }

// function nextSlide() {
//     let newSlideIndex = currentsSlideIndex + 1;
//     if (newSlideIndex > slides.length - 1) {
//         newSlideIndex = 0;
//     }

//     changeSlide(newSlideIndex);
// }

// function previousSlide() {
//     let newSlideIndex = currentsSlideIndex - 1;
//     if (newSlideIndex < 0) {
//         newSlideIndex = slides.length - 1;
//     }

//     changeSlide(newSlideIndex);
// }

// function showSlide() {
//     slider.style.transform = `translateX(${currentSlideIndex * sliderWidth}px)`;
// }

// function nextSlide() {
//     hideSlide();
//     currentSlideIndex++;
//     if (currentSlideIndex > slides.length - 1) {
//         currentSlideIndex = 0;
//     }

//     showSlide();
// }

// function previousSlide() {
//     hideSlide();
//     currentSlideIndex--;
//      if (currentSlideIndex < 0) {
//         currentSlideIndex = slides.length - 1;
//     }

//     showSlide();
// }

// function changeSlide(slideIndex) {
//     removeActiveClass();
//     currentSlideIndex = slideIndex;
//     addActiveClass();
//     showSlide();
// }

// arrowRight.addEventListener("click", nextSlide);
// arrowLeft.addEventListener("click", previousSlide);

const slider = document.getElementById("slider");
const arrowLeft = document.querySelector(".arrow-left");
const arrowRight = document.querySelector(".arrow-right");
const slides = document.querySelectorAll(".slider-image");
const bottom = document.getElementById("bottom");

let currentSlideIndex = 0;
const totalSlides = slides.length;
const sliderWidth = 800; // Ширина одного слайда
const paginationCircles = [];

// Создаем круги пагинации
function createPaginationCircle(index) {
    const div = document.createElement("div");
    div.className = "pagination-circle";
    if (index === 0) div.classList.add("active");
    div.addEventListener("click", () => changeSlide(index));
    bottom.appendChild(div);
    paginationCircles.push(div);
}

function addPagination() {
    slides.forEach((_, index) => createPaginationCircle(index));
}

function updatePagination() {
    paginationCircles.forEach((circle, index) => {
        if (index === currentSlideIndex) {
            circle.classList.add("active");
        } else {
            circle.classList.remove("active");
        }
    });
}

function changeSlide(index) {
    currentSlideIndex = index;
    slider.style.transform = `translateX(${-currentSlideIndex * sliderWidth}px)`;
    updatePagination();
}

function nextSlide() {
    currentSlideIndex = (currentSlideIndex + 1) % totalSlides;
    changeSlide(currentSlideIndex);
}

function previousSlide() {
    currentSlideIndex = (currentSlideIndex - 1 + totalSlides) % totalSlides;
    changeSlide(currentSlideIndex);
}

// Слушатели событий для стрелок
arrowRight.addEventListener("click", nextSlide);
arrowLeft.addEventListener("click", previousSlide);

// Инициализация
addPagination();


