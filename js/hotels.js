$(function () {
    $('.hotels-filter__item').on('click', function () {
        $(this).remove();

        if (!$('.hotels-filter__list').children().length) {
            $('.hotels-filter__list').remove();
        }
    })

    $('.hotels-table__heart').on('click', function (e) {
        e.preventDefault();

        console.log('sss')

        $(this).toggleClass('is-active');
    })

    $('#filter-remove').on('click', function () {
        $('.filter input').prop('checked', false);
    })

    $('#filter-close').on('click', function () {
        $('.filter').removeClass('show');

        enableScroll();
    })

    let swiper = new Swiper("#variants", {
        loop: false,
        speed: 500,
        slidesPerView: 2.3,
        spaceBetween: 10,
        breakpoints: {
            375: {
                slidesPerView: 2.8,
            }
        }
    });

    $('#filter-show').on('click', function () {
        $('.filter').addClass('show');

        disableScroll();
    })

    $('#body-closer').on('click', function () {
        $('.filter').removeClass('show');

        enableScroll();
    })

    /* Функция для включения скролла */
    function enableScroll() {
        $('#body-closer').removeClass('show');
        $('body, html').css('overflow', 'auto');
    }

    /* Функция для отключения скролла */
    function disableScroll() {
        $('#body-closer').addClass('show');
        $('body, html').css('overflow', 'hidden');
    }
})