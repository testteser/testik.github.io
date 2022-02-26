const adviceBody = document.querySelector('.reviews-advice');
const closeAdvice = document.querySelector('#close-advice');

const reviewsItems = document.querySelectorAll('.reviews__table-item');
const reviewsTab = document.querySelector('.reviews__tabs');
const reviewsTabs = document.querySelectorAll('.reviews__tabs-switch');

closeAdvice.addEventListener('click', () => {
    adviceBody.remove();
})

reviewsTabs.forEach((item, index, array) => {
    item.addEventListener('click', (e) => {
        let currentAttr = e.currentTarget.getAttribute('id');

        array.forEach(item => item.classList.remove('is-active'));
        reviewsItems.forEach(item => item.classList.remove('is-active'));
        e.currentTarget.classList.add('is-active');

        document.querySelector(`div.reviews__table-item[data-reviews='${currentAttr}']`).classList.add('is-active');

        currentAttr === 'sended' ?  reviewsTab.classList.add('is-active') : reviewsTab.classList.remove('is-active');
    })
})