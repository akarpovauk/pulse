
const slider = tns({
    container: '.carousel__inner',
    items: 1,
    slideBy: 'page',
    speed: 900,
    autoplay: false,
    controls: false,
    nav: true,
    navPosition: 'bottom',
    responsive: {
        768: {
            nav: false
        }
    }
});

document.querySelector('.prev').addEventListener('click', function () {
    slider.goTo('prev');
});

document.querySelector('.next').addEventListener('click', function () {
    slider.goTo('next');
});