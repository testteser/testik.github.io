$(function () {
    $('.hotels-filter__item').on('click', function () {
        $(this).remove();

        if (!$('.hotels-filter__list').children().length) {
            $('.hotels-filter__list').remove();
        }
    })

    // $('.hotels-table__dates').slick({
    //     slidesToShow: 1,
    //     slidesToScroll: 1,
    //     arrows: false,
    //     centerMode: false,
    //     infinite: true,
    //     variableWidth: true,
    // })
})