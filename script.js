// Shrink Header on Scroll
window.addEventListener('scroll', function () {
  const header = document.querySelector('.header');
  if (window.scrollY > 50) {
      header.classList.add('shrink');
  } else {
      header.classList.remove('shrink');
  }
});

// Hamburger Menu Toggle
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');

hamburger.addEventListener('click', function () {
  hamburger.classList.toggle('open');
  navMenu.classList.toggle('active');
});

// Scroll-triggered section animations
const sections = document.querySelectorAll('.section');

function animateSections() {
  const scrollY = window.pageYOffset;

  sections.forEach(section => {
      const sectionTop = section.offsetTop - window.innerHeight * 0.8;
      if (scrollY > sectionTop) {
          section.classList.add('visible');
      } else {
          section.classList.remove('visible');
      }
  });
}

window.addEventListener('scroll', animateSections);
animateSections(); // Trigger the function to show visible sections on load






document.addEventListener('DOMContentLoaded', () => {
  // Typewriter Effect
  const textArray = ["Crafting Visual Experiences", "Designing with Passion", "Creating Motion and Impact"];
  let currentIndex = 0;
  let charIndex = 0;
  const typingSpeed = 100;
  const taglineElement = document.querySelector('.tagline');

  function typeWriter() {
    if (charIndex < textArray[currentIndex].length) {
      taglineElement.textContent += textArray[currentIndex].charAt(charIndex);
      charIndex++;
      setTimeout(typeWriter, typingSpeed);
    } else {
      setTimeout(() => {
        deleteText();
      }, 2000);
    }
  }

  function deleteText() {
    if (charIndex > 0) {
      taglineElement.textContent = textArray[currentIndex].substring(0, charIndex - 1);
      charIndex--;
      setTimeout(deleteText, typingSpeed);
    } else {
      currentIndex = (currentIndex + 1) % textArray.length;
      setTimeout(typeWriter, typingSpeed);
    }
  }

  typeWriter();
});






// Smooth Scroll Functionality for the Scroll Indicator
document.querySelector('.scroll-indicator').addEventListener('click', () => {
  document.getElementById('about').scrollIntoView({ behavior: 'smooth' });
});








// Fade in Image on Scroll
window.addEventListener('scroll', function() {
  const aboutImage = document.querySelector('.about-image');
  const aboutText = document.querySelector('.about-text');
  const windowHeight = window.innerHeight;

  if (aboutImage.getBoundingClientRect().top < windowHeight - 100) {
      aboutImage.style.opacity = '1';
      aboutImage.style.transform = 'translateX(0)';
  }
});

// Skills Bar Animation
window.addEventListener('scroll', function() {
  const skills = document.querySelectorAll('.progress');
  const windowHeight = window.innerHeight;

  skills.forEach(skill => {
      const skillTop = skill.getBoundingClientRect().top;

      if (skillTop < windowHeight - 50) {
          const skillLevel = skill.getAttribute('data-skill');
          skill.style.width = skillLevel + '%';
      }
  });
});



/*
// Animation for auto-swapping cards
let index = 0;
const cards = document.querySelectorAll('.service-card');
const totalCards = cards.length;

function swapCards() {
    cards.forEach((card, i) => {
        card.style.transform = `translateX(${(i - index) * 100}%)`;
    });
    index = (index + 1) % totalCards;
}

document.addEventListener('DOMContentLoaded', () => {
    setInterval(swapCards, 3000); // Swap cards every 3 seconds
});

document.querySelector('.left-arrow').addEventListener('click', () => {
    index = (index - 1 + totalCards) % totalCards;
    swapCards();
});

document.querySelector('.right-arrow').addEventListener('click', () => {
    index = (index + 1) % totalCards;
    swapCards();
});
*/



const cards = document.querySelectorAll('.card');
const leftArrow = document.getElementById('left-arrow');
const rightArrow = document.getElementById('right-arrow');
let currentIndex = 0;
const swapInterval = 3000; // 3 seconds

function updateCards() {
    cards.forEach((card, index) => {
        card.style.transform = `translateX(${(index - currentIndex) * 220}px)`;
    });
}

function swapCards() {
    currentIndex = (currentIndex + 1) % cards.length;
    updateCards();
}

// Set interval for automatic card swapping
setInterval(swapCards, swapInterval);

// Initial update
updateCards();







/*
// Filter gallery items
const filterButtons = document.querySelectorAll('.filter-btn');
const galleryItems = document.querySelectorAll('.gallery-item');

filterButtons.forEach(btn => {
  btn.addEventListener('click', () => {
    const filter = btn.getAttribute('data-filter');
    galleryItems.forEach(item => {
      if (filter === 'all' || item.getAttribute('data-category') === filter) {
        item.style.display = 'block';
      } else {
        item.style.display = 'none';
      }
    });
  });
});

// Image Slider Functionality
let currentSlide = 0;
const slides = document.querySelectorAll('.slide');
const totalSlides = slides.length;

document.querySelector('.next').addEventListener('click', () => {
  currentSlide = (currentSlide + 1) % totalSlides;
  updateSlider();
});

document.querySelector('.prev').addEventListener('click', () => {
  currentSlide = (currentSlide - 1 + totalSlides) % totalSlides;
  updateSlider();
});

function updateSlider() {
  const sliderContainer = document.querySelector('.slider-container');
  sliderContainer.style.transform = `translateX(-${currentSlide * 100}%)`;
}

// Modal Functionality
const modal = document.getElementById('modal');
const modalImg = document.getElementById('modal-img');
const galleryImages = document.querySelectorAll('.gallery-img');
const modalDescription = document.querySelector('.modal-description');

galleryImages.forEach(img => {
  img.addEventListener('click', () => {
    modal.style.display = 'flex';
    modalImg.src = img.src;
    // You can add more logic to change the description based on the clicked image
  });
});

document.querySelector('.close').addEventListener('click', () => {
  modal.style.display = 'none';
});

*/



/*// Image Filtering
const filterButtons = document.querySelectorAll('.filter-btn');
const portfolioItems = document.querySelectorAll('.portfolio-item');

filterButtons.forEach(btn => {
    btn.addEventListener('click', () => {
        const filter = btn.getAttribute('data-filter');

        portfolioItems.forEach(item => {
            if (filter === 'all' || item.getAttribute('data-category') === filter) {
                item.style.display = 'block';
            } else {
                item.style.display = 'none';
            }
        });
    });
});

// Image Slider
let slideIndex = 0;
const slides = document.querySelectorAll('.slide');

function showSlides() {
    slides.forEach((slide, index) => {
        slide.style.transform = `translateX(${(index - slideIndex) * 100}%)`;
    });
}

function nextSlide() {
    slideIndex = (slideIndex + 1) % slides.length;
    showSlides();
}

setInterval(nextSlide, 3000);

// Modal
const modal = document.getElementById("modal");
const modalImg = document.getElementById("modal-img");
const modalCaption = document.getElementById("modal-caption");

portfolioItems.forEach(item => {
    item.addEventListener('click', () => {
        modal.style.display = "block";
        modalImg.src = item.querySelector('img').src;
        modalCaption.innerHTML = item.querySelector('.overlay h3').textContent;
    });
});

document.querySelector('.close-modal').onclick = function() {
    modal.style.display = "none";
};
*/



// Image Filtering
const filterButtons = document.querySelectorAll('.filter-btn');
const portfolioItems = document.querySelectorAll('.portfolio-item');

filterButtons.forEach(btn => {
    btn.addEventListener('click', () => {
        const filter = btn.getAttribute('data-filter');

        portfolioItems.forEach(item => {
            if (filter === 'all' || item.getAttribute('data-category') === filter) {
                item.style.display = 'block';
            } else {
                item.style.display = 'none';
            }
        });
    });
});
/*
// Image Slider
let slideIndex = 0;
const slides = document.querySelectorAll('.slide');

function showSlides() {
    slides.forEach((slide, index) => {
        slide.style.transform = `translateX(${(index - slideIndex) * 100}%)`;
    });
}

function nextSlide() {
    slideIndex = (slideIndex + 1) % slides.length;  // Loop back to the first slide
    showSlides();
}

setInterval(nextSlide, 3000); */

// Image Slider
let slideIndex = 0;
let slides = document.querySelectorAll('.slide');  // Fetch slides dynamically

function showSlides() {
    slides.forEach((slide, index) => {
        slide.style.transform = `translateX(${(index - slideIndex) * 100}%)`;
    });
}

function nextSlide() {
    slideIndex = (slideIndex + 1) % slides.length;  // Loop back to the first slide
    showSlides();
}

// Run slider on load and after updating slides
function initSlider() {
    slides = document.querySelectorAll('.slide');  // Re-fetch updated slides
    showSlides();  // Initialize the slide position
}

// Start the slider
initSlider();
setInterval(nextSlide, 3000);  // Rotate every 3 seconds




// Modal and Download Button
const modal = document.getElementById("modal");
const modalImg = document.getElementById("modal-img");
const modalCaption = document.getElementById("modal-caption");
const downloadBtn = document.getElementById("download-btn");

portfolioItems.forEach(item => {
    item.addEventListener('click', () => {
        modal.style.display = "block";
        const imgSrc = item.querySelector('img').src;
        modalImg.src = imgSrc;
        modalCaption.innerHTML = item.querySelector('.overlay h3').textContent;

        // Set the download button's href to the image src
        downloadBtn.href = imgSrc;
        downloadBtn.download = imgSrc.split('/').pop();  // Use image file name for download
    });
});

document.querySelector('.close-modal').onclick = function() {
    modal.style.display = "none";
};














// Open Modal
document.getElementById('open-form-btn').onclick = function() {
  document.getElementById('contact-modal').style.display = 'flex';
};

// Close Modal
document.getElementById('close-modal-btn').onclick = function() {
  document.getElementById('contact-modal').style.display = 'none';
};

// EmailJS Form Submission
document.getElementById('contact-form').addEventListener('submit', function(event) {
  event.preventDefault(); // Prevent default form submission

  // Send the form data using EmailJS
  emailjs.sendForm('service_antlk1i', 'template_amnvpli', this)
      .then(function(response) {
          alert('Your message has been sent successfully!');
          document.getElementById('contact-form').reset(); // Clear the form
          document.getElementById('contact-modal').style.display = 'none'; // Close modal
      }, function(error) {
          alert('Failed to send your message. Please try again later.');
          console.error('Error:', error);
      });
});








// Show "Back to Top" button after scrolling
window.onscroll = function() {
  const backToTopBtn = document.getElementById('back-to-top-btn');
  if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
      backToTopBtn.style.display = 'block';
  } else {
      backToTopBtn.style.display = 'none';
  }
};

// Smooth Scroll Back to Top
document.getElementById('back-to-top-btn').onclick = function() {
  window.scrollTo({ top: 0, behavior: 'smooth' });
};

// EmailJS Form Submission for Subscribe
document.getElementById('subscribe-form').addEventListener('submit', function(event) {
  event.preventDefault(); // Prevent default form submission

  // Send the subscription email using EmailJS
  emailjs.sendForm('service_antlk1i', 'template_amnvpli', this)
      .then(function(response) {
          alert('Subscription successful! Thank you for subscribing.');
          document.getElementById('subscribe-form').reset(); // Clear the form
      }, function(error) {
          alert('Failed to subscribe. Please try again later.');
          console.error('Error:', error);
      });
});




document.addEventListener('DOMContentLoaded', function () {
  const testimonials = document.querySelectorAll('.testimonial-card');
  const prevBtn = document.querySelector('.prev-motion');
  const nextBtn = document.querySelector('.next-motion');

  let currentIndex = 0;
  let totalTestimonials = testimonials.length;

  // Function to show the current testimonial
  function showTestimonial(index) {
    testimonials.forEach((testimonial, i) => {
      testimonial.classList.remove('active');
      testimonial.style.display = 'none'; // Hide all testimonials
    });
    testimonials[index].classList.add('active');
    testimonials[index].style.display = 'block'; // Show active testimonial
  }

  // Show the next testimonial
  nextBtn.addEventListener('click', () => {
    currentIndex = (currentIndex + 1) % totalTestimonials; // Loop to first if at last
    showTestimonial(currentIndex);
  });

  // Show the previous testimonial
  prevBtn.addEventListener('click', () => {
    currentIndex = (currentIndex - 1 + totalTestimonials) % totalTestimonials; // Loop to last if at first
    showTestimonial(currentIndex);
  });

  // Auto-slide every 5 seconds
  setInterval(() => {
    currentIndex = (currentIndex + 1) % totalTestimonials;
    showTestimonial(currentIndex);
  }, 5000); // Auto-slide interval

  // Initial setup: Show the first testimonial
  showTestimonial(currentIndex);
});
