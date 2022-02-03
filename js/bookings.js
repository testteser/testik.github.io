$(function () {
    $.each($('.bookings-table__class-close'), function (index, item) {
        $(item).on('click', function () {
            $(this).parent().remove();
        })
    })

    let counter = 0;

    $('#show-more').on('click', function () {
        let cell = `
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

        $('.bookings-table__content').append(cell);
        counter++;

        if (counter >= 3) $(this).remove();
    })

    $('.bookings-table__item-more').on('click', function () {
        $('#body-closer').addClass('js-active');
        $('#bookings-more').addClass('js-active');
    })

    $('#bookings-more-close').on('click', function () {
        $('#bookings-more').removeClass('js-active');
        $('#body-closer').removeClass('js-active');
    })

    $('#body-closer').on('click', function () {
        $('#bookings-more').removeClass('js-active');
        $('#bookings-delete').removeClass('js-active');
    })

    $('#booking-delete-show').on('click', function () {
        $('#bookings-more').removeClass('js-active');
        $('#bookings-delete').addClass('js-active');
    })

    $('#bookings-delete-cancel').on('click', function () {
        $('#bookings-delete').removeClass('js-active');
        $('#bookings-more').addClass('js-active');
    })

    $('#bookings-delete-close').on('click', function () {
        $('#bookings-delete').removeClass('js-active');
        $('#body-closer').removeClass('js-active');
    })
})