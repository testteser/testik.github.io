const bookingsTablesClose = document.querySelectorAll('.bookings__class-close');
const bookingsTableContent = document.querySelector('.bookings__content');
const bookingsItemMore = document.querySelectorAll('.bookings__item-more');
const bookingsItemClose = document.querySelectorAll('.bookings-more__close');
const bookingsDeleteClose = document.querySelectorAll('.bookings-delete-close');
const bookingsMore = document.querySelector('#bookings-more');
const bookingsDelete = document.querySelector('#bookings-delete');
const showMore = document.querySelector('#show-more');
const bookingsDeleteShow = document.querySelector('#booking-delete-show');
const bookingsDeleteCancel = document.querySelector('#bookings-delete-cancel');

let counter = 0;

bookingsDeleteShow.addEventListener('click', () => {
    bookingsMore.classList.remove('show');
    bookingsDelete.classList.add('show');
})

bookingsDeleteCancel.addEventListener('click', () => {
    bookingsDelete.classList.remove('show');
    bookingsMore.classList.add('show');
})

bookingsItemMore.forEach(item => {
    item.addEventListener('click', () => {
        bookingsMore.classList.add('show');

        disableScroll();
    })
})

bookingsItemClose.forEach(item => {
    item.addEventListener('click', () => {
        bookingsMore.classList.remove('show');

        enableScroll();
    })
})

bookingsDeleteClose.forEach(item => {
    item.addEventListener('click', () => {
        bookingsDelete.classList.remove('show');

        enableScroll();
    })
})

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
            <div class="bookings__cell">
                <div class="bookings__cell-info">
                    <h2 class="bookings__cell-title">
                        Бухара
                    </h2>
                    <p class="bookings__cell-date">
                        18 ноября. 2021 - 19 нояб. 2021
                    </p>
                </div>
                <div class="bookings__list">
                    <div class="bookings__item">
                        <img src="images/booking-hotel.png" alt="Фото отеля" class="bookings__item-img">
                        <div class="bookings__item-content">
                            <div class="bookings__item-info">
                                <h3 class="bookings__item-name">
                                        DMG Apartments Hotel
                                    </h3>
                                <p class="bookings__item-date">
                                        18 ноября. 2021 - 19 нояб. 2021
                                    </p>
                                <span class="bookings__item-price">
                                        UZS 232 222
                                    </span>
                                <span class="bookings__item-status status-is-cancelled">
                                        Отменено
                                    </span>
                                <button class="bookings__item-more site-more">
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