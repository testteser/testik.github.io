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
    })
})