const bookingsTablesClose = document.querySelectorAll('.bookings-table__class-close');
const bookingsTableContent = document.querySelector('.bookings-table__content');
const showMore = document.querySelector('#show-more');

let counter = 0;

bookingsTablesClose.forEach(item => {
    item.addEventListener('click', (e) => {
        e.currentTarget.parentElement.remove();
    })
})

showMore.addEventListener('click', (e) => {
    renderItem(e.currentTarget);
})

function renderItem(button) {
    let skeleton = `
            <div class="bookings-table__cell">
                <div class="bookings-table__cell-info">
                    <h2 class="bookings-table__cell-title">
                        Бухара
                    </h2>
                    <p class="bookings-table__cell-date">
                        18 ноября. 2021 - 19 нояб. 2021
                    </p>
                </div>
                <div class="bookings-table__list">
                    <div class="bookings-table__item">
                        <img src="images/booking-hotel.png" alt="Фото отеля" class="bookings-table__item-img">
                        <div class="bookings-table__item-content">
                            <div class="bookings-table__item-info">
                                <h3 class="bookings-table__item-name">
                                        DMG Apartments Hotel
                                    </h3>
                                <p class="bookings-table__item-date">
                                        18 ноября. 2021 - 19 нояб. 2021
                                    </p>
                                <span class="bookings-table__item-price">
                                        UZS 232 222
                                    </span>
                                <span class="bookings-table__item-status status-is-cancelled">
                                        Отменено
                                    </span>
                                <button class="bookings-table__item-more site-more">
                                        <span></span>
                                    </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        `;

    bookingsTableContent.innerHTML += skeleton;

    counter++;

    if (counter >= 3) button.remove();
}

(function () {
    $('.bookings-table__item-more').on('click', function () {
        $('#body-closer').addClass('show');
        $('#bookings-more').addClass('show');
    })

    $('.bookings-more__close').on('click', function () {
        $('#bookings-more').removeClass('show');
        $('#body-closer').removeClass('show');
    })

    $('#body-closer').on('click', function () {
        $(this).removeClass('show');
        $('#bookings-more').removeClass('show');
        $('#bookings-delete').removeClass('show');
    })

    $('#booking-delete-show').on('click', function () {
        $('#bookings-more').removeClass('show');
        $('#bookings-delete').addClass('show');
    })

    $('#bookings-delete-cancel').on('click', function () {
        $('#bookings-delete').removeClass('show');
        $('#bookings-more').addClass('show');
    })

    $('#bookings-delete-close').on('click', function () {
        $('#bookings-delete').removeClass('show');
        $('#body-closer').removeClass('show');
    })
})