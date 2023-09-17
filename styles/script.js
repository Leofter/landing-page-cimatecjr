const prevBtn = document.getElementById("prevBtn");
const nextBtn = document.getElementById("nextBtn");
const slide = document.querySelector(".carousel-slide");

let slideIndex = 0;

prevBtn.addEventListener("click", () => {
    if (slideIndex === 0) {
        slideIndex = slide.childElementCount - 1;
    } else {
        slideIndex--;
    }
    updateSlide();
});

nextBtn.addEventListener("click", () => {
    if (slideIndex === slide.childElementCount - 1) {
        slideIndex = 0;
    } else {
        slideIndex++;
    }
    updateSlide();
});

function updateSlide() {
    const slideWidth = slide.clientWidth;
    slide.style.transform = `translateX(-${slideIndex * slideWidth}px)`;
}