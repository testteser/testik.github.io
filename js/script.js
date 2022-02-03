$(function () {
    /* Обработчик клика для скрытия карточек предложений */
    $('.offers__close').on('click', function () {
        $(this)
            .closest('div.offers__item')
            .addClass('js-active');
    })

    /* Обработчик клика для скрытия модальных окон - параметров формы */
    $('.search-modal__close').on('click', function () {
        $('.search-modal').removeClass('js-active');

        enableScroll();
    })

    $('#search-input').on('focus', function () {
        $('#search-input-label').addClass('js-active');
    })

    $('#search-input').on('blur', function () {
        if (!$(this).val().trim().length > 0) {
            $('#search-input-label').removeClass('js-active');
            $(this).val('');
        }
    })

    $('#search-input').on('keyup', function () {
        if ($(this).val().length > 0) {

            $('#search-location').addClass('js-active');
            $('#search-table').addClass('js-active');
            $('#clear-btn').addClass('js-active');

            $(this)
                .closest('form')
                .addClass('js-active');
            $(this)
                .parent()
                .addClass('js-active');
        } else {
            $('#search-location').removeClass('js-active');
            $('#search-table').removeClass('js-active');
            $('#clear-btn').removeClass('js-active');

            $(this)
                .closest('form')
                .removeClass('js-active');
            $(this)
                .parent()
                .removeClass('js-active');
        }
    })

    $('#clear-btn').on('click', function (e) {
        e.preventDefault();

        $('#search-input').val('');
        $('#search-input-label').removeClass('js-active');

        $('#search-location').removeClass('js-active');
        $('#search-table').removeClass('js-active');
        $(this).removeClass('js-active');

        $(this)
            .closest('form')
            .removeClass('js-active');
        $(this)
            .parent()
            .removeClass('js-active');
    })

    $.each($('.search-modal__settings-item'), function (index, item) {
        const increaseBtn = $(item).find('.increase');
        const decreaseBtn = $(item).find('.decrease');
        const counter = $(item).find('.search-modal__settings-value');
        const counterMinValue = +counter.attr('data-min');
        const counterMaxValue = +counter.attr('data-max');

        let count = +counter.val();

        increaseBtn.on('click', function (e) {
            e.preventDefault();

            if (count < counterMaxValue) {
                counter.val(++count);

                if (count >= 1) {
                    decreaseBtn
                        .removeClass('is-disabled')
                        .prop('disabled', false)
                }

                if (count >= counterMaxValue) {
                    increaseBtn
                        .addClass('is-disabled')
                        .prop('disabled', true)
                }
            }
        })

        decreaseBtn.on('click', function (e) {
            e.preventDefault();

            if (count > 0) {
                counter.val(--count);

                if (count <= 0) {
                    decreaseBtn
                        .addClass('is-disabled')
                        .prop('disabled', true)
                }

                if (count <= counterMaxValue) {
                    increaseBtn
                        .removeClass('is-disabled')
                        .prop('disabled', false)
                }
            }
        })
    })

    $('.search-form__field--date').on('click', function () {
        $('#date-modal').addClass('js-active');

        $(this).find('input').blur();

        disableScroll();
    })

    $('#search-form-way').on('click', function () {
        $('#search-modal').addClass('js-active');
        $('#body-closer').addClass('js-active');

        $(this).blur();

        setTimeout(function () {
            $('#search-input').focus();
        },300)

        disableScroll();
    })

    $('#search-form-count').on('click', function () {
        $('#count-modal').addClass('js-active');

        disableScroll();
    })

    $('.search-modal__location-item').on('click', function () {
        $('#search-modal').removeClass('js-active');
        $('#date-modal').addClass('js-active');

        $('#search-form-way')
            .parent()
            .addClass('js-active');

        $('#search-form-way').val('Tashkent, Uzbekistan');
    })

    $('.search-modal__form').on('submit', function (e) {
        e.preventDefault();

        $('.search-modal').removeClass('js-active');

        enableScroll();
    })

    $('#count-form').on('submit', function (e) {
        let adultsValue = $('.search-modal__settings-value[name="adults"]').val();
        let childrenValue = $('.search-modal__settings-value[name="children"]').val();
        let roomsValue = $('.search-modal__settings-value[name="rooms"]').val();

        $('.search-form__field-item--adults span').text(adultsValue);
        $('.search-form__field-item--adults input').val(adultsValue);

        $('.search-form__field-item--children span').text(childrenValue);
        $('.search-form__field-item--children input').val(childrenValue);

        $('.search-form__field-item--rooms span').text(roomsValue);
        $('.search-form__field-item--rooms input').val(roomsValue);
    })

    let today = new Date();
    let minDate = today.setUTCHours(0, 0, 0);

    $('#calendar-date').attr('value', `${new Date()} - ${new Date(new Date().setDate(new Date().getDate() + 1))}`);

    /* Календарь */

    const picker = new Litepicker({
        autoApply: true,
        element: document.getElementById('calendar-date'),
        parentEl: document.getElementById('calendar-field'),
        singleMode: false,
        inlineMode: true,
        numberOfMonths: 12,
        delimetr: ' - ',
        lang: 'ru-RU',
        splitView: false,
        showTooltip: false,
        autoRefresh: true,
        maxDays: 31,
        format: {
            parse(date) {
                return new Date(date);
            },
            output(date) {
                let currentDate = new Date(date);

                return formatDate(currentDate, {weekday: "short", month: "short", day: "numeric"})
            }
        },
        disallowLockDaysInRange: false,
        selectForward: false,
        minDate: minDate,
        startDate: +new Date(),
    });

    function setInputsValue() {
        let firstDate = picker.getStartDate().dateInstance;
        let lastDate = picker.getEndDate().dateInstance;

        $('#search-form-checkin')
            .val(formatDate(firstDate, {day: 'numeric', month: 'numeric', year: 'numeric'}))
        $('#search-form-checkout')
            .val(formatDate(lastDate, {day: 'numeric', month: 'numeric', year: 'numeric'}));
    }

    setInputsValue();

    $('#confirm-dates').on('click', function (e) {
        let startDate = picker.getStartDate().dateInstance;
        let endDate = picker.getEndDate().dateInstance;

        $('#search-form-checkin').val(formatDate(startDate, {day: 'numeric', month: 'numeric', year: 'numeric'}));
        $('#search-form-checkout').val(formatDate(endDate, {day: 'numeric', month: 'numeric', year: 'numeric'}));
    })

    $('#search-main-form').on('submit', function (e) {
        e.preventDefault();

        let data = $(this).serializeArray();

        console.log(data);
    })

    /* Функция для форматирования дат */
    function formatDate(value, options) {
        let formatter = new Intl.DateTimeFormat("ru", options);

        return formatter.format(value);
    }

    $('.recent-hotels__slider').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        centerMode: false,
        infinite: true,
        variableWidth: true,
    })

    /* Функция для включения скролла */
    function enableScroll() {
        $('#body-closer').removeClass('js-active');
        $('body, html').css('overflow', 'auto');
    }

    /* Функция для отключения скролла */
    function disableScroll() {
        $('#body-closer').addClass('js-active');
        $('body, html').css('overflow', 'hidden');
    }
})