$(function () {
    /* Обработчик клика для показа табов */
    $('.auth-tabs__tab').on('click', function () {
        let tabAttr = $(this).attr('data-tab');

        $('.auth-tabs__tab').removeClass('active');
        $(`.auth-tabs__tab[data-tab="${tabAttr}"]`).addClass('active');

        $('.auth__content-item').removeClass('show');
        $(`.auth__content-item[data-content="${tabAttr}"]`).addClass('show');

        tabAttr === 'phone' ? $('.auth-tabs').addClass('active') : $('.auth-tabs').removeClass('active');
    })

    /* Обработчик клика для показа/скрытия пароля */
    $.each($('.auth__form-show'), function (index, item) {
        $(item).on('click', function (e) {
            e.preventDefault();

            let input = $(this).parent().next();

            if ($(this).attr('data-show-flag') !== 'false') {
                input.attr('type', 'text');
                $(this).attr('data-show-flag', 'false');
                $(this).text($(this).attr('data-hide-text'));
            } else {
                input.attr('type', 'password');
                $(this).attr('data-show-flag', 'true');
                $(this).text($(this).attr('data-show-text'));
            }
        })
    })
})