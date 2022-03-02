const roomReserve = document.querySelectorAll('.hotel__rooms-reserve');
const roomsRemove = document.querySelectorAll('.hotel__rooms-remove');
const roomsPrice = document.querySelectorAll('.hotel__rooms-sum');
const roomPrice = document.querySelector('.hotel-price');
const roomsBookings = document.querySelector('.hotel-bookings');
const roomsBookingsRemove = document.querySelectorAll('.hotel-bookings__remove');
const roomsBookingsList = document.querySelectorAll('.hotel-bookings__list');
const roomsStat = document.querySelectorAll('.hotel__rooms-stat--bottom');
const reviewsMore = document.querySelectorAll('.hotel__reviews-more');
const reviewsModal = document.querySelector('.hotel-reviews');
const reviewsModalAll = document.querySelector('.hotel-reviews__all-btn');
const reviewsModalTable = document.querySelector('.hotel-reviews__table');
const hotelMainImage = document.querySelector('.hotel__header-img');
const hotelGallery = document.querySelector('.hotel-gallery');
const headerHotel = document.querySelector('.header-hotel');
const headerHotelMenu = document.querySelector('.header-hotel__menu');
const hotelCalendar = document.querySelectorAll('.hotel-calendar');
const hotelSearch = document.querySelector('.hotel-search');
const hotelStats = document.querySelectorAll('.hotel__rooms-stat--bottom');
const reviewsClose = document.querySelector('.hotel-reviews__close');
const searchClose = document.querySelector('.hotel-search__close');

hotelStats.forEach(item => {
    item.querySelectorAll('.hotel__rooms-btn').forEach((btn, index, array) => {
        array.forEach(btns => btns.classList.remove('active'));
        btn.classList.add('active');
    })
})

reviewsClose.addEventListener('click', () => {
    reviewsModal.classList.remove('show');

    enableScroll();
})

searchClose.addEventListener('click', () => {
    hotelSearch.classList.remove('show');

    enableScroll();
})

reviewsModalAll.addEventListener('click', (e) => {
    e.currentTarget.classList.add('hide');

    for (let i = 0; i <= 5; i++) renderReview();
})

hotelMainImage.addEventListener('click', () => {
    hotelGallery.classList.add('show');
    headerHotel.classList.add('active');

    disableScroll();
})

hotelCalendar.forEach(item => {
  item.addEventListener('click', () => {
      hotelSearch.classList.add('show');

      disableScroll();
  })
})

headerHotelMenu.addEventListener('click', () => {
    hotelGallery.classList.remove('show');
    headerHotel.classList.remove('active');

    enableScroll();
})

reviewsMore.forEach(item => {
    item.addEventListener('click', () => {
        reviewsModal.classList.add('show');

        disableScroll();
    })
})

function renderReview() {
    const skeleton = `
        <div class="hotel-reviews__item">
            <div class="hotel-reviews__info">
            <div class="hotel-reviews__bio">
                <img src="images/profile-ava.png" alt="" class="hotel-reviews__img">
                <div class="hotel-reviews__about">
                    <span class="hotel-reviews__name">
                        Roberto Markov
                    </span>
                    <div class="hotel-reviews__location">
                        <img src="images/flag.svg" alt="" class="hotel-reviews__flag">
                        <span class="hotel-reviews__country">
                            England
                        </span>
                    </div>
                </div>
            </div>
            <div class="hotel-reviews__rate">
                <span class="hotel-reviews__rate-count">
                    9.6
                </span>
            </div>
        </div>
            <p class="hotel-reviews__date">
            Время отзыва: 22 января 2022
        </p>
            <div class="hotel-reviews__content">
            <h3 class="hotel-reviews__intro">
                Буду в Бухаре - Вернусь в этот отель
            </h3>
            <div class="hotel-reviews__row">
                <svg class="hotel-reviews__icon" width="13" height="12" viewBox="0 0 13 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M5.17535 1.25979C5.116 2.82551 4.93047 3.74272 4.01984 5.09671C3.86488 4.94613 3.65555 4.85132 3.42651 4.85132H0.856666C0.389505 4.85132 0 5.2408 0 5.70799V10.8477C0 11.3148 0.389479 11.7043 0.856666 11.7043H3.42651C3.66682 11.7043 3.88541 11.6004 4.04215 11.4367C4.15379 11.5252 4.25786 11.6064 4.37677 11.6776C4.62942 11.8287 4.924 11.9197 5.30035 11.9586C6.05295 12.0366 7.23844 11.9783 9.99389 11.9899C10.0923 11.9898 10.1902 11.9544 10.2661 11.8917C10.8112 11.4469 11.079 10.9895 11.203 10.5041C11.2506 10.4782 11.2932 10.4431 11.3279 10.4015C11.7413 9.88485 11.908 9.28843 11.8365 8.75075C11.8594 8.73213 11.8804 8.71121 11.8989 8.68831C12.3783 8.08909 12.5303 7.38014 12.3584 6.78318C12.6395 6.41831 12.761 5.98987 12.7153 5.5919C12.6592 5.10391 12.347 4.66424 11.8766 4.4587C11.8233 4.43549 11.7653 4.42325 11.7071 4.42305H8.19141C8.37953 3.01817 8.23592 1.73032 7.74077 0.858408C7.46023 0.36435 7.032 0.0747586 6.60308 0.0107165C5.83266 -0.083891 5.24919 0.45738 5.17538 1.25995L5.17535 1.25979ZM6.99561 1.2821C7.3857 1.96904 7.56814 3.32025 7.2901 4.77102C7.24309 5.0173 7.4588 5.27882 7.70946 5.27961H11.5821C11.7421 5.36904 11.842 5.50607 11.8631 5.69012C11.8829 5.8626 11.8084 6.07055 11.6355 6.27909H10.1364C9.91017 6.27909 9.70203 6.48106 9.70203 6.70742C9.70203 6.93369 9.91017 7.13894 10.1364 7.13576H11.5552C11.5877 7.37815 11.5279 7.683 11.3321 7.99242H10.1364C9.91017 7.99242 9.70203 8.19439 9.70203 8.42076C9.70203 8.64702 9.91017 8.85227 10.1364 8.84909H10.9841C11.0167 9.09149 10.9568 9.39633 10.761 9.70575H10.1364C9.91017 9.70575 9.70203 9.90772 9.70203 10.1341C9.70203 10.3604 9.91017 10.5656 10.1364 10.5624H10.2836C10.1959 10.7513 10.0567 10.9187 9.81067 11.1334C7.21126 11.1255 5.97197 11.1675 5.38483 11.1067C5.08229 11.0753 4.96298 11.0309 4.81381 10.9415C4.68962 10.8672 4.51812 10.7251 4.28291 10.5355V6.19457C5.62277 4.40338 5.96068 3.15053 6.03188 1.30014C6.16573 0.56258 6.80498 0.868514 6.9956 1.28231L6.99561 1.2821ZM0.856538 5.70794H3.42638C3.41672 7.40959 3.42638 9.13261 3.42638 10.8476H0.856538V5.70794Z" fill="#09AD24"/>
                </svg>
                <p class="hotel-reviews__desc">
                    Давно выяснено, что при оценке дизайна и композиции
                    читаемый текст мешает сосредоточиться.
                </p>
            </div>
        </div>
        </div>
    `;

    reviewsModalTable.innerHTML += skeleton;
}

roomReserve.forEach(item => {
    item.addEventListener('click', (e) => {
        e.currentTarget.classList.add('hide');
        e.currentTarget.closest('.hotel__rooms-item').classList.add('active');
    })
})

roomsRemove.forEach(item => {
    item.addEventListener('click', (e) => {
        e.currentTarget.classList.remove('hide');
        e.currentTarget.closest('.hotel__rooms-item').classList.remove('active');
    })
})

roomsPrice.forEach(item => {
    item.addEventListener('click', () => {
        roomPrice.classList.add('show');

        disableScroll();
    })
})

roomsBookingsRemove.forEach(item => {
    item.addEventListener('click', (e) => {
        e.currentTarget.parentElement.remove();

        if (roomsBookingsList.children.length === 0) {
            roomsBookings.classList.remove('show');
        }
    })
})

roomsStat.forEach(item => {
    item.querySelectorAll('.hotel__rooms-radio').forEach((button, index, array) => {
        button.addEventListener('change', (e) => {
            array.forEach(btn => btn.parentElement.classList.remove('active'));
            e.currentTarget.parentElement.classList.add('active');
        })
    })
})

let swiper = new Swiper("#recent-slider", {
    loop: false,
    speed: 500,
    slidesPerView: 1.4,
    spaceBetween: 10,
    breakpoints: {
        375: {
            slidesPerView: 1.4,
        }
    }
});

let reviewsSlider = new Swiper(".hotel__reviews-slider", {
    loop: false,
    speed: 500,
    slidesPerView: 1.4,
    spaceBetween: 12,
});