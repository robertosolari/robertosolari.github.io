$(document).ready(function () {
    // Initialize the YouTube video background
    $("#bgndVideo").YTPlayer();

    // Initialize the Slick slider
    $('.slider-container').slick({
        autoplay: true,
        autoplaySpeed: 3000,
        dots: true,
        arrows: true
    });

    // Hide the header initially
    $('header').hide();

    // Show the header on scroll
    $(window).on('scroll', function () {
        if ($(this).scrollTop() > 50) {
            $('header').fadeIn();
        } else {
            $('header').fadeOut();
        }
    });

    // Remove the welcome message after 1.5 seconds
    setTimeout(function () {
        $('.welcome-message').fadeOut('slow');
    }, 3000); // 1.5s fade in + 1.5s stay duration
});
