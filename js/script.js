var header    = document.querySelector("header");
var headroom  = new Headroom(header, {
    tolerance: 10,
});
headroom.init();


$(document).ready(function(){
    $('.slider').slick({
        dots: true,
        prevArrow: `<button class="slider__arrow slider__arrow--prev btn btn--light btn--icon">
                        <i class="fas fa-chevron-left"></i>
                    </button>`,
        nextArrow: `<button class="slider__arrow slider__arrow--next btn btn--light btn--icon">
                        <i class="fas fa-chevron-right"></i>
                    </button>`,
        dotsClass: 'slider__dots',
        infinite: true,
        slidesToShow: 2,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 960,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    });
});