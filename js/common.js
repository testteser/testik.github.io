$(function () {
    /* Обработчики меню аккаунта */
    $('#close-account-menu').on('click', function () {
        $('#account-menu').removeClass('show');

        enableScroll();
    })
    $('#show-account-menu').on('click', function () {
        $('.account-menu').addClass('show');

        disableScroll();
    })

    /* Обработчики главного меню */
    $('#show-menu').on('click', function () {
        $('#menu').addClass('show');

        disableScroll();
    })
    $('#menu-close').on('click', function () {
        $('#menu').removeClass('show');

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