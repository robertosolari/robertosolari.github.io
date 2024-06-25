$(document).ready(function () {
    $("#bgndVideo").YTPlayer();

    $('.slider-container').slick({
        autoplay: true,
        autoplaySpeed: 3000,
        dots: true,
        arrows: true
    });
});
