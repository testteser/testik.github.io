$(function () {
    $('.hotel__rooms-reserve').on('click', function () {
        $(this).addClass('hide');
        $('.hotel__rooms-total').addClass('hide');
        $('.hotel__rooms-remove').addClass('show');
        $('.hotel__rooms-top').addClass('active');
        $('.hotel__rooms-mid').addClass('active');
        $('.hotel__rooms-bot').addClass('active');

        $('.hotel-bookings').addClass('show');
    })

    $('.hotel__rooms-remove').on('click', function () {
        $(this).removeClass('show');
        $('.hotel__rooms-reserve').removeClass('hide');
        $('.hotel__rooms-total').removeClass('hide');
        $('.hotel__rooms-top').removeClass('active');
        $('.hotel__rooms-mid').removeClass('active');
        $('.hotel__rooms-bot').removeClass('active');

        $('.hotel-bookings').removeClass('show');
    })

    $('.hotel__rooms-stat--bottom .hotel__rooms-btn').on('click', function () {
        $('.hotel__rooms-btn').removeClass('active');
        $(this).addClass('active');
    })

    $('.hotel__availibility-item, .hotel__availibility-edit').on('click', function () {
        $('.hotel-search').addClass('show');

        disableScroll();
    })

    $('.body-closer').on('click', function () {
        $(this).removeClass('show');
        $('.hotel-search').removeClass('show')

        enableScroll();
    })

    $('.hotel-bookings__remove').on('click', function () {
        $(this).parent().remove();

        if ($('.hotel-bookings__list').children().length === 0) {
            $('.hotel-bookings').removeClass('show');
        }
    })

    $('.hotel-bookings__value').on('click', function () {
        let bookingsModal = $('.hotel-bookings').outerHeight();

        $('body, html').animate({
            scrollTop: $(this.hash).offset().top - bookingsModal
        }, 600)
    })

    $('.hotel__rooms-sum').on('click', function () {
        $('.hotel-price').addClass('show');

        disableScroll();
    })

    $('#body-closer').on('click', function () {
        $('.hotel-price').removeClass('show');
    })

    let swiper = new Swiper("#recent-slider", {
        loop: false,
        speed: 500,
        slidesPerView: 1.4,
        spaceBetween: 10,
        breakpoints: {
            375: {
                slidesPerView: 1.4,
            }
        }
    });

    $('.header-hotel__menu').on('click', function () {
        $('.hotel-gallery').removeClass('show');
        $('.header-hotel').removeClass('active');

        enableScroll();
    })

    $('.hotel__header-img').on('click', function () {
        $('.hotel-gallery').addClass('show');
        $('.header-hotel').addClass('active');
        disableScroll();
    })

    /* Функция для включения скролла */
    function enableScroll() {
        $('#body-closer').removeClass('show');
        $('body, html').css('overflow', '');
    }

    /* Функция для отключения скролла */
    function disableScroll() {
        $('#body-closer').addClass('show');
        $('body, html').css('overflow', 'hidden');
    }
})