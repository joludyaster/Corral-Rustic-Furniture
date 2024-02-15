const swiper = new Swiper('.swiper-container', {
    loop: true,
    slidesPerView: 1,
    spaceBetween: 15,
    centerSlide: true,
    fade: true,
    grabCursor: true,
    breakpoints: {
        768: {
            slidesPerView: 2,
        },
        1200: {
            slidesPerView: 3,
        },
    },
    pagination: {
        el: '.creations-section__pagination',
        clickable: true,
    },
    navigation: {
        nextEl: '.creations-section__next-button',
        prevEl: '.creations-section__previous-button',
    },
});