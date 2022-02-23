$(function () {
    $('body').on('click', '.hotels-filter__item', function () {
        $(this).remove();

        if (!$('.hotels-filter__list').children().length) {
            $('.hotels-filter__list').remove();
        }
    })

    $('.hotels-table__heart').on('click', function (e) {
        e.preventDefault();

        console.log('sss')

        $(this).toggleClass('is-active');
    })

    $('.filter__submit').on('click', function () {
        $('.filter').removeClass('show');

        enableScroll();
    })

    $('#filter-remove').on('click', function () {
        $('.filter input').prop('checked', false);
        $(this).removeClass('active');

        $('.filter__submit span').text('');
        $('#filter-show .hotels-filter__btn-count').text('');
    })

    $('.filter input').on('change', function () {
        let inputCheckedCount = $('.filter').find('input:checked:not(#budget)').length;

        renderItem($(this).siblings('.filter__item-desc').text())

        $('.filter__submit span').text(inputCheckedCount === 0 ? '' : inputCheckedCount);
        $('#filter-show .hotels-filter__btn-count').text(inputCheckedCount === 0 ? '' : `(${inputCheckedCount})`);

        if (inputCheckedCount > 0) {
            $('.filter__remove')
                .addClass('active')
                .prop('disabled', false);
        } else {
            $('.filter__remove')
                .removeClass('active')
                .prop('disabled', true);
        }
    })

    function renderItem(item) {
        let skeleton = `
            <button class="hotels-filter__item">
                ${item}
                <span class="hotels-filter__close"></span>
            </button>
        `;

        $('.hotels-filter__list').append(skeleton);
    }


    $('#filter-close').on('click', function () {
        $('.filter').removeClass('show');

        enableScroll();
    })

    let swiper = new Swiper("#variants", {
        loop: false,
        speed: 500,
        slidesPerView: 2.3,
        spaceBetween: 10,
        breakpoints: {
            375: {
                slidesPerView: 2.8,
            }
        }
    });

    $('#filter-show').on('click', function () {
        $('.filter').addClass('show');

        disableScroll();
    })

    $('#body-closer').on('click', function () {
        $('.filter').removeClass('show');

        enableScroll();
    })

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
})