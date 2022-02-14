$(function () {
    $('.hotels-filter__item').on('click', function () {
        $(this).remove();

        if (!$('.hotels-filter__list').children().length) {
            $('.hotels-filter__list').remove();
        }
    })

    $('.hotels-table__heart').on('click', function (e) {
        e.stopPropagation();

        $(this).toggleClass('is-active');
    })

    $('#filter-remove').on('click', function () {
        $('.filter input').prop('checked', false);
    })

    $('#filter-close').on('click', function () {
        $('.filter').removeClass('show');

        enableScroll();
    })

    $('#booking-variants').slick({
        infinite: true,
        dots: false,
        arrows: false,
        variableWidth: true,
        slidesToShow: 1,
        slidesToScroll: 1,
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