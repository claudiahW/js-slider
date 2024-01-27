// selectors

const slides = document.querySelectorAll(".slide");
const nextBtn = document.querySelector(".nextBtn");
const prevBtn = document.querySelector(".prevBtn");

// iterate over slides object using foreach method using an index
slides.forEach(function(slide,index){
    slide.style.left = `${index * 100}%`
});

// set up functionality to control which slide is shown and which one is hidden

// this first function controls whether the button will navigate to next slide or will go back to start

// set up counter for prev and next btn 
let counter = 0;

nextBtn.addEventListener("click",function(){
 counter++;
});

prevBtn.addEventListener("click",function(){
    counter--;
   });

   