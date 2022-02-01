$(function () {
    $('.profile__table-btn').on('click', function () {
        $(this).toggleClass('is-active');
        $(this)
            .parent()
            .next('.profile__table-show')
            .slideToggle()
    })
})