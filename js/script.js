const offersClose = document.querySelectorAll('.offers__close');
const searchModals = document.querySelectorAll('.search-modal');
const searchClose = document.querySelectorAll('.search-modal__close');
const searchInput = document.querySelector('#search-input');
const searchTable = document.querySelector('#search-table');
const searchLocation = document.querySelector('#search-location');
const searchForm = document.querySelector('#search-form');
const searchClear = document.querySelector('#clear-btn');
const calendarDateInput = document.querySelector('#calendar-date');
const searchModal = document.querySelector('#search-modal');
const dateModal = document.querySelector('#date-modal');
const searchDates = document.querySelectorAll('.search-form__field--date');
const searchFormCount = document.querySelector('#search-form-count');
const countModal = document.querySelector('#count-modal');
const dateForm = document.querySelector('#date-form');
const dateFormCheckin = document.querySelector('#search-form-checkin');
const dateFormCheckout = document.querySelector('#search-form-checkout');
const mainForm = document.querySelector('#search-main-form');
const searchWay = document.querySelector('#search-form-way');
const countForm = document.querySelector('#count-form');
const searchModalItems = document.querySelectorAll('.search-modal__settings-item');
const locationBtn = document.querySelector('.search-modal__location-btn');
const locationItems = document.querySelectorAll('.search-modal__location-item');

/* Установка стандартных дат сегодня-завтра для формы */
let today = new Date();
let minDate = today.setUTCHours(0, 0, 0);
calendarDateInput.setAttribute('value', `${new Date()} - ${new Date(new Date().setDate(new Date().getDate() + 1))}`);

/* Обработчик клика для открытия выбора мест */
searchFormCount.addEventListener('click', () => {
    countModal.classList.add('show');

    disableScroll();
})

/* Обработчик клика для скрытия карточек предложений */
offersClose.forEach(item => {
    item.addEventListener('click', (e) => {
        e.currentTarget.closest('.offers__item').classList.add('hide');
    })
})

/* Обработчик клика для скрытия модальных окон - параметров формы */
searchClose.forEach(item => {
    item.addEventListener('click', () => {
        searchModals.forEach(modal => modal.classList.remove('show'));

        enableScroll();
    })
})

/* Обработчик инпута при потере фокуса */
searchInput.addEventListener('blur', (e) => {
    let inputValue = e.currentTarget.value;

    if (!inputValue.trim().length > 0) {
        inputValue = '';
        searchTable.classList.remove('show');
        searchLocation.classList.remove('hide');
        searchForm.classList.remove('active');
    }
})

/* Обработчик клика по кнопке очистить */
searchClear.addEventListener('click', (e) => {
    e.preventDefault();

    e.currentTarget.classList.remove('show');
    e.currentTarget.parentElement.classList.remove('active');

    searchTable.classList.remove('show');
    searchLocation.classList.remove('hide');
    searchForm.classList.remove('active');

    searchInput.value = '';
})

/* Обработчик клика для открытия календаря */
searchDates.forEach(item => {
    item.addEventListener('click', (e) => {
        e.currentTarget.querySelector('input').blur();

        dateModal.classList.add('show');

        disableScroll();
    })
})

/* Обработчик сабмита календаря */
dateForm.addEventListener('submit', (e) => {
    e.preventDefault();

    let startDate = picker.getStartDate().dateInstance;
    let endDate = picker.getEndDate().dateInstance;

    dateFormCheckin.value = formatDate(startDate, {day: 'numeric', month: 'numeric', year: 'numeric'});
    dateFormCheckout.value = formatDate(endDate, {day: 'numeric', month: 'numeric', year: 'numeric'});

    dateModal.classList.remove('show');
    countModal.classList.add('show');
})

/* Обработчик сабмита главной формы */
mainForm.addEventListener('submit', (e) => {
    e.preventDefault();

    window.location.href = 'hotels.html';
})

/* Обработчик клика для открытия поиска направлений */
searchWay.addEventListener('click',  (e) => {
    e.currentTarget.querySelector('input').blur();

    searchModal.classList.add('show');

    setTimeout(function () {
        searchInput.focus();
    },300)

    disableScroll();
})

countForm.addEventListener('submit', (e) => {
    e.preventDefault();

    countModal.classList.remove('show');

    let adultsValue = document.querySelector('.search-modal__settings-value[name="adults"]').value;
    let childrenValue = document.querySelector('.search-modal__settings-value[name="children"]').value;
    let roomsValue = document.querySelector('.search-modal__settings-value[name="rooms"]').value;

    document.querySelector('.search-form__field-item--adults span').innerText = adultsValue;
    document.querySelector('.search-form__field-item--adults input').value = adultsValue;

    document.querySelector('.search-form__field-item--children span').innerText = childrenValue;
    document.querySelector('.search-form__field-item--children input').value = childrenValue;

    document.querySelector('.search-form__field-item--rooms span').innerText = roomsValue;
    document.querySelector('.search-form__field-item--rooms input').value = roomsValue;

    enableScroll();
})

/* Обработчик клика по популярным направлениям */
locationItems.forEach(item => {
    item.addEventListener('click', () => {
        let itemText = `${item.querySelector('.search-modal__location-value').innerText}, ${item.querySelector('.search-modal__location-sub-value').innerText}`;

        searchModal.classList.remove('show');
        dateModal.classList.add('show');

        searchWay.querySelector('input').value = itemText;
    })
})

// Определение местоположения по клика на кнопку в форме
locationBtn.addEventListener('click', () => {
    getLocation();
})

searchModalItems.forEach(item => {
    const plusBtn = item.querySelector('.increase');
    const minusBtn = item.querySelector('.decrease');
    const counterSpan = item.querySelector('.search-modal__settings-value');
    let counterValue = +counterSpan.value;
    const settings = {
        min: 0,
        max: 30,
    }

    plusBtn.addEventListener('click', (e) => {
        e.preventDefault();

        if (counterValue < settings.max) {
            counterSpan.value = ++counterValue;

            if (counterValue >= 1) {
                minusBtn.classList.remove('is-disabled');
                minusBtn.disabled = false;
            }

            if (counterValue >= settings.max) {
                plusBtn.classList.add('is-disabled');
                plusBtn.disabled = true;
            }
        }
    })

    minusBtn.addEventListener('click', (e) => {
        e.preventDefault();

        if (counterValue > settings.min) {
            counterSpan.value = --counterValue;

            if (counterValue <= settings.min) {
                minusBtn.classList.add('is-disabled');
                minusBtn.disabled = true;
            }

            if (counterValue <= settings.max) {
                plusBtn.classList.remove('is-disabled');
                plusBtn.disabled = false;
            }
        }
    })
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

let geoSuccess = function (e) {
    let lat = e.coords.latitude;
    let lng = e.coords.longitude;

    searchModal.classList.remove('show');
    document.querySelector('.search-form__input[name="city"]').value = `${lat} ${lng}`;

    location.href = 'hotel.html';

    enableScroll();
}

let geoError = function (error) {
    switch(error.code) {
        case 1:
            console.log('Пользователь запретил отслеживать геолокацию');
            break;
        case 2:
            console.log(error.code);
            break;
        case 3:
            console.log(error.code);
            break;
    }
}

function setInputsValue() {
    let firstDate = picker.getStartDate().dateInstance;
    let lastDate = picker.getEndDate().dateInstance;

    dateFormCheckin.value = formatDate(firstDate, {day: 'numeric', month: 'numeric', year: 'numeric'});
    dateFormCheckout.value = formatDate(lastDate, {day: 'numeric', month: 'numeric', year: 'numeric'});
}

setInputsValue();

function getLocation() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(geoSuccess, geoError);
    } else {
        console.log("Your browser or device doesn't support Geolocation");
    }
}

/* Функция для форматирования дат */
function formatDate(value, options) {
    let formatter = new Intl.DateTimeFormat("ru", options);

    return formatter.format(value);
}

    // /* Обработчик инпута при нажатиях клавиш */
    // $('#search-input').on('keyup', function () {
    //     if ($(this).val().length > 0) {
    //         $(this).parent().addClass('active');
    //         $('#search-table').addClass('show');
    //         $('#clear-btn').addClass('show');
    //         $('#search-form').addClass('active');
    //         $('#search-location').addClass('hide');
    //     } else {
    //         $(this).parent().removeClass('active');
    //         $('#search-location').removeClass('hide');
    //         $('#search-table').removeClass('show');
    //         $('#clear-btn').removeClass('show');
    //         $('#search-form').removeClass('active');
    //     }
    // })