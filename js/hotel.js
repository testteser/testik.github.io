$(function () {
    $('.body-closer').on('click', function () {
        $(this).removeClass('js-active');
        $('.hotel-search').removeClass('js-active');
    })

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
        $('.body-closer').addClass('js-active');
        $('body').css('overflow', 'hidden');
    })

    $('.body-closer').on('click', function () {
        $(this).removeClass('js-active');
        $('.hotel-search').removeClass('show')
        $('body').css('overflow', 'auto');
    })

    $('.hotel-bookings__remove').on('click', function () {
        $(this).parent().remove();

        if ($('.hotel-bookings__list').children().length === 0) {
            $('.hotel-bookings').removeClass('show');
        }
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
})