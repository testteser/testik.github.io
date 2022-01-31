$(function () {
    $('#close-advice').on('click', function () {
        $('.reviews-advice').remove();
    })

    $('.reviews__tabs-switch').on('click', function () {
        let currentAttr =  $(this).attr('id');
        $('.reviews__tabs-switch').removeClass('is-active');
        $(this).addClass('is-active');

        $('.reviews__table-item').removeClass('is-active');
        $(`div.reviews__table-item[data-reviews='${currentAttr}']`).addClass('is-active');

        currentAttr === 'sended' ? $('.reviews__tabs').addClass('is-active') : $('.reviews__tabs').removeClass('is-active');
    })
})