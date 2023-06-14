// Carousel Functions
const carouselImages = document.querySelectorAll('.carousel-item');
let currentImageIndex = 0;

function showNextImage() {
  carouselImages[currentImageIndex].classList.remove('active');
  currentImageIndex = (currentImageIndex + 1) % carouselImages.length;
  carouselImages[currentImageIndex].classList.add('active');
}

setInterval(showNextImage, 4000);

// faster animation when it is last image going to the first image again
function checkLastImage() {
  if (currentImageIndex === carouselImages.length - 1) {
    clearInterval(interval);
    interval = setInterval(showNextImage, 2000);
  }
}

let interval = setInterval(showNextImage, 4000);
checkLastImage();


// Countdown Functions
function countdown() {
  const countdownDate = new Date("September 26, 2023 00:00:00").getTime();
  const now = new Date().getTime();
  const difference = countdownDate - now;

  const days = Math.floor(difference / (1000 * 60 * 60 * 24));
  const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((difference % (1000 * 60)) / 1000);

  document.getElementById("days").textContent = days;
  document.getElementById("hours").textContent = hours;
  document.getElementById("minutes").textContent = minutes;
  document.getElementById("seconds").textContent = seconds;
}

setInterval(countdown, 1000); // update every second

// Footer Newsletter - Submit
function submitForm(event) {
  event.preventDefault();
  event.target.reset();
}

// Hamburger Menu script
const hamburgerMenu = document.querySelector(".hamburger-menu");
const navLinks = document.querySelector(".nav__links");

hamburgerMenu.addEventListener("click", () => {
  hamburgerMenu.classList.toggle("active");
  navLinks.classList.toggle("active");
})

// Remove hamburger menu list after going through new page
document.querySelectorAll(".nav__links").forEach(n => n.
  addEventListener("click", () => {
    hamburgerMenu.classList.remove("active");
    navLinks.classList.remove("active");
  }))