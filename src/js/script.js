
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


$(document).ready(function(){
    $('ul.catalog__tabs').on('click', 'li:not(.catalog__tab_active)', function() {
        $(this)
          .addClass('catalog__tab_active').siblings().removeClass('catalog__tab_active')
          .closest('div.container').find('div.catalog__content').removeClass('catalog__content_active').eq($(this).index()).addClass('catalog__content_active');
      });

    function toggleSlide(item) {
        $(item).each(function(i) {
            $(this).on('click', function(e) {
                e.preventDefault();
                $('.catalog-item__content').eq(i).toggleClass('catalog-item__content_active');
                $('.catalog-item__list').eq(i).toggleClass('catalog-item__list_active');
    
            });
        });
    }

    toggleSlide('.catalog-item__link_forward');
    toggleSlide('.catalog-item__link_back');

    //modal
    $('[data-modal=consultation]').on('click',  function() {
        $('.overlay, #consultation').fadeIn('slow');
    });
    $('.modal__close').on('click', function() {
        $('.overlay, #consultation, #order, #thanks').fadeOut('slow');
    });

    $('.button_mini').each(function(i) {
        $(this).on('click', function() {
            $('#order .modal__descr').text($('.catalog-item__subtitle').eq(i).text());
            $('.overlay, #order').fadeIn('slow');
        });
    });

    function validatForms(form) {
        $(form).validate({
            rules: {
                name: {
                    required: true,
                    minlength: 2
                },
                phone: "required",
               /*  phone: {
                    required: true,
                    minlength: 11
                }, */
                email: {
                    required: true,
                    email: true
                }
            },
            messages: {
                name: {
                    required: "Пожалуйста, введите своё имя",
                    /* minlength: jQuery.validator.format("Имя не может быть короче {0} символов!") */
                  },
                phone: {
                    required: "Пожалуйста, введите свой номер телефона",
                    minlength: jQuery.validator.format("Номер должен состоять из {0} символов!")
                },
                email: {
                    required: "Пожалуйста, введите свой email",
                    email: "Неправильно введён адрес почты"
                  }
            }
        });
    }

    validatForms ('#consultation-form');
    validatForms ('#order form');
    validatForms ('#consultation form');

    $('input[name=phone]').mask("+7 (999) 999-9999");
});



