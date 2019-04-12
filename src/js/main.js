// When the camera button is clicked

const cameraBtn = () => {
    const camera = document.querySelector('.toggle-button');
    const navbar = document.querySelector('.mobile-nav');

    camera.addEventListener('click', (e) => {
        e.preventDefault();
        navbar.classList.toggle('open');
    });
}
cameraBtn();

// When you click outside the camera button

(function($) {

    const clickOutside = $('.toggle-button');

    $(document).on('click', function (e) {
        const navBtn = $('.mobile-nav')

        if (!clickOutside.is(e.target) && clickOutside.has(e.target).length === 0) {
        navBtn.removeClass('open');
        }
    });

})(jQuery);

// Image Gallery and Lightbox 

lightbox.option ({
  'alwaysShowNavOnTouchDevices': true,
  'fadeDuration': 300,
  'imageFadeDuration': 300,
});

// ScrollReveal applied to images

ScrollReveal({ distance: '10px' });
ScrollReveal().reveal('.image1', { easing: 'ease-in', origin: 'right' });
ScrollReveal().reveal('.image2', { delay: 500, easing: 'ease-in', origin: 'right' });
ScrollReveal().reveal('.image3', { delay: 700, easing: 'ease-in', origin: 'right' });
ScrollReveal().reveal('.image4', { delay: 900, easing: 'ease-in', origin: 'right' });
ScrollReveal().reveal('.image5', { delay: 1100, easing: 'ease-in', origin: 'right' });
ScrollReveal().reveal('.image6', { delay: 1300, easing: 'ease-in', origin: 'right' });
ScrollReveal().reveal('.image7', { delay: 1400, easing: 'ease-in', origin: 'right' });
ScrollReveal().reveal('.image8', { delay: 1500, easing: 'ease-in', origin: 'right' });
ScrollReveal().reveal('.image9', { delay: 1600, easing: 'ease-in', origin: 'right' });
ScrollReveal().reveal('.image10', { origin: 'right' } );
ScrollReveal().reveal('.image11', { delay: 300, origin: 'right' });
ScrollReveal().reveal('.image12', { delay: 500, origin: 'right' });
