var slideIndex = 0;

function showSlides() {

  var i;

  var slides = document.getElementsByClassName("slide");

  console.log("slides.length is: " + slides.length);

  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }

  slideIndex++;

  if (slideIndex > slides.length) { slideIndex = 1 }

  console.log("slideIndex " + slideIndex);

  slides[slideIndex - 1].style.display = "block";

  setTimeout(showSlides, 2000);
}

showSlides();