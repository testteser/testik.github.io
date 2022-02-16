$(function () {
    /* Установка стандартных дат сегодня-завтра для формы */
    let today = new Date();
    let minDate = today.setUTCHours(0, 0, 0);
    $('#calendar-date').attr('value', `${new Date()} - ${new Date(new Date().setDate(new Date().getDate() + 1))}`);

    /* Обработчик клика для скрытия карточек предложений */
    $('.offers__close').on('click', function () {
        $(this).closest('div.offers__item').addClass('hide');
    })

    /* Обработчик клика для скрытия модальных окон - параметров формы */
    $('.search-modal__close').on('click', function () {
        $('.search-modal').removeClass('show');

        enableScroll();
    })

    /* Обработчик инпута при потере фокуса */
    $('#search-input').on('blur', function () {
        if (!$(this).val().trim().length > 0) {
            $(this).val('');
            $('#search-table').removeClass('show');
            $('#search-location').removeClass('hide');
            $('#search-form').removeClass('active');
        }
    })

    /* Обработчик инпута при нажатиях клавиш */
    $('#search-input').on('keyup', function () {
        if ($(this).val().length > 0) {
            $(this).parent().addClass('active');
            $('#search-table').addClass('show');
            $('#clear-btn').addClass('show');
            $('#search-form').addClass('active');
            $('#search-location').addClass('hide');
        } else {
            $(this).parent().removeClass('active');
            $('#search-location').removeClass('hide');
            $('#search-table').removeClass('show');
            $('#clear-btn').removeClass('show');
            $('#search-form').removeClass('active');
        }
    })

    /* Обработчик клика по кнопке очистить */
    $('#clear-btn').on('click', function (e) {
        e.preventDefault();
        $(this).removeClass('show');
        $(this).parent().removeClass('active');

        $('#search-location').removeClass('hide');
        $('#search-table').removeClass('show');
        $('#search-form').removeClass('active');

        $('#search-input').val('');
    })

    /* Обработчик клика для открытия календаря */
    $('.search-form__field--date').on('click', function () {
        $(this).find('input').blur();

        $('#date-modal').addClass('show');

        disableScroll();
    })

    /* Обработчик клика для открытия поиска направлений */
    $('#search-form-way').on('click', function () {
        $(this).blur();

        $('#search-modal').addClass('show');
        $('#body-closer').addClass('show');

        setTimeout(function () {
            $('#search-input').focus();
        },300)

        disableScroll();
    })

    /* Обработчик клика для открытия выбора мест */
    $('#search-form-count').on('click', function () {
        $('#count-modal').addClass('show');

        disableScroll();
    })

    /* Обработчик клика по популярным направлениям */
    $('.search-modal__location-item').on('click', function () {
        $('#search-modal').removeClass('show');
        $('#date-modal').addClass('show');

        $('#search-form-way input').val('Tashkent, Uzbekistan');
    })

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

    /* Обработчик сабмита календаря */
    $('#date-form').on('submit', function (e) {
        e.preventDefault();

        let startDate = picker.getStartDate().dateInstance;
        let endDate = picker.getEndDate().dateInstance;

        $('#search-form-checkin').val(formatDate(startDate, {day: 'numeric', month: 'numeric', year: 'numeric'}));
        $('#search-form-checkout').val(formatDate(endDate, {day: 'numeric', month: 'numeric', year: 'numeric'}));

        $('#date-modal').removeClass('show');
        $('#count-modal').addClass('show');
    })

    /* Обработчик сабмита главной формы */
    $('#search-main-form').on('submit', function (e) {
        e.preventDefault();

        let data = $(this).serializeArray();

        if (!$('#search-form-way input').val()) {
            getLocation();
        }

        // window.location.href = 'hotels.html';
    })

    /* Клик по черному фону - плашке */
    $('#body-closer').on('click', function () {
        $('.search-modal').removeClass('show');

        enableScroll();
    })

    /* Функция для форматирования дат */
    function formatDate(value, options) {
        let formatter = new Intl.DateTimeFormat("ru", options);

        return formatter.format(value);
    }

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

    // Определение местоположения по клика на кнопку в форме
    $('.search-modal__location-btn').on('click', function () {
        getLocation();
    })

    function getLocation () {
        if (navigator.geolocation) {
            let geoSuccess = function (pos) {
                let lat = pos.coords.latitude;
                let lng = pos.coords.longitude;

                console.log(lat, lng);
            }

            let geoError = function (error) {
                console.log(error.code);
            }

            navigator.geolocation.getCurrentPosition(geoSuccess, geoError);
        }
    }

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
    $('#count-form').on('submit', function (e) {
        e.preventDefault();

        $('#count-modal').removeClass('show');

        let adultsValue = $('.search-modal__settings-value[name="adults"]').val();
        let childrenValue = $('.search-modal__settings-value[name="children"]').val();
        let roomsValue = $('.search-modal__settings-value[name="rooms"]').val();

        $('.search-form__field-item--adults span').text(adultsValue);
        $('.search-form__field-item--adults input').val(adultsValue);

        $('.search-form__field-item--children span').text(childrenValue);
        $('.search-form__field-item--children input').val(childrenValue);

        $('.search-form__field-item--rooms span').text(roomsValue);
        $('.search-form__field-item--rooms input').val(roomsValue);

        enableScroll();
    })
    function setInputsValue() {
        let firstDate = picker.getStartDate().dateInstance;
        let lastDate = picker.getEndDate().dateInstance;

        $('#search-form-checkin')
            .val(formatDate(firstDate, {day: 'numeric', month: 'numeric', year: 'numeric'}))
        $('#search-form-checkout')
            .val(formatDate(lastDate, {day: 'numeric', month: 'numeric', year: 'numeric'}));
    }
    setInputsValue();
})