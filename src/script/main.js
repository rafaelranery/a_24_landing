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
    
    /* Faq Function */
    let faqArray = document.querySelectorAll('[data-faq-question]');
    console.log(faqArray);

    for (let i = 0; i < faqArray.length; i++) {
        faqArray[i].addEventListener('click', toggleFaq)
        
    }
})

function toggleFaq(elemento) {
    const faqOppener = 'faq__questions__item--is-open';
    const faqItem = elemento.target.parentNode;
    faqItem.classList.toggle(faqOppener)
}