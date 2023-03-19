document.addEventListener('DOMContentLoaded', function() {

    $('.movies__carousel').slick({
        infinite: true,
        slidesToShow: 5,
        slidesToScroll: 3,
        cssEase: 'ease',
        centerMode: true,
        arrows: false,
        swipeToSlide: true,
        responsive: [{
            breakpoint: 1024,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 3,
            }
            }]

    });
})