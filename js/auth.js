$(function () {
    $('.auth-tabs__tab').on('click', function () {
        let tabAttr = $(this).attr('data-tab');

        $('.auth-tabs__tab').removeClass('js-active');
        $(`.auth-tabs__tab[data-tab="${tabAttr}"]`).addClass('js-active');

        $('.auth__content-item').removeClass('js-active');
        $(`.auth__content-item[data-content="${tabAttr}"]`).addClass('js-active');
    })

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