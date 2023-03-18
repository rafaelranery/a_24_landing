document.addEventListener('DOMContentLoaded', function() {

    $('.movies__carousel').slick({
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 3,
        cssEase: 'ease',
        centerMode: true,
        arrows: false,
        swipeToSlide: true
    });
})