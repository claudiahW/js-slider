// selectors

const slides = document.querySelectorAll(".slide");
const nextBtn = document.querySelector(".nextBtn");
const prevBtn = document.querySelector(".prevBtn");

// iterate over slides object using foreach method using an index
slides.forEach(function(slide,index){
    slide.style.left = `${index * 100}%`
})