$(function () {
    /* Логика меню аккаунта */
    $('.account-menu__close').on('click', function () {
        $('.account-menu').removeClass('js-active');

        enableScroll();
    })
    $('#main-menu').on('click', function () {
        $('.account-menu').addClass('js-active');

        disableScroll();
    })

    /* Клик по черному фону - плашке */
    $('#body-closer').on('click', function () {
        $('.search-modal').removeClass('js-active');

        enableScroll();
    })

    /* Клик по меню */
    $('#show-menu').on('click', function () {
        $('#menu').addClass('js-active');

        disableScroll();
    })
    $('#menu-close').on('click', function () {
        $('#menu').removeClass('js-active');

        enableScroll();
    })

    /* Функция для включения скролла */
    function enableScroll() {
        $('#body-closer').removeClass('js-active');
        $('body').css('overflow', 'auto');
    }

    /* Функция для отключения скролла */
    function disableScroll() {
        $('#body-closer').addClass('js-active');
        $('body').css('overflow', 'hidden');
    }
})