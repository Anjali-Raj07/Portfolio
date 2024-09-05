
$(document).ready(function(){
	$(".nav-link").on('click', function(event) {

    	if (this.hash !== "") {

			event.preventDefault();

			var hash = this.hash;

			$('html, body').animate({
				scrollTop: $(hash).offset().top
			}, 700, function(){
				window.location.hash = hash;
			});
      	} 
    });
});


document.getElementById('downloadCvBtn').addEventListener('click', function() {
    const cvFilePath = '/public_html/assets/cv/AnjaliRajT.cv.pdf';
    const tempLink = document.createElement('a');
    tempLink.href = cvFilePath;

    tempLink.download = 'AnjaliRajT.CV.pdf';

    document.body.appendChild(tempLink);

    tempLink.click();

    document.body.removeChild(tempLink);
});
document.getElementById('downloadCVBtn').addEventListener('click', function() {
    const cvFilePath = '/public_html/assets/cv/AnjaliRajT.cv.pdf';
    const tempLink = document.createElement('a');
    tempLink.href = cvFilePath;

    tempLink.download = 'AnjaliRajT.CV.pdf';

    document.body.appendChild(tempLink);

    tempLink.click();

    document.body.removeChild(tempLink);
});

// me
const slides = document.querySelectorAll('.project-slide');
const prevBtns = document.querySelectorAll('.prev-btn');
const nextBtns = document.querySelectorAll('.next-btn');
let currentSlide = 0;

function showSlide(index) {
    slides.forEach((slide, i) => {
        slide.classList.remove('active');
        if (i === index) {
            slide.classList.add('active');
        }
    });
}

prevBtns.forEach(button => {
    button.addEventListener('click', () => {
        currentSlide = (currentSlide === 0) ? slides.length - 1 : currentSlide - 1;
        showSlide(currentSlide);
    });
});

nextBtns.forEach(button => {
    button.addEventListener('click', () => {
        currentSlide = (currentSlide === slides.length - 1) ? 0 : currentSlide + 1;
        showSlide(currentSlide);
    });
});

showSlide(currentSlide);
