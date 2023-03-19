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
    for (let i = 0; i < faqArray.length; i++) {
        faqArray[i].addEventListener('click', toggleFaq)
        
    }

    /* Newletter Btn Animation */
    let btnNews = document.querySelector('[data-btn-newsletter]');
    btnNews.addEventListener('click', function(e) {
        console.log(e);
        btnNews.innerText = 'Done';
        btnNews.classList.add('btn--is-disabled');
        btnNews.classList.add('disabled');
        
    })
})

function toggleFaq(elemento) {
    const faqOppener = 'faq__questions__item--is-open';
    const faqItem = elemento.target.parentNode;
    faqItem.classList.toggle(faqOppener)
}