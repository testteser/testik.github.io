const filterBody = document.querySelector('.filter');
const filterList = document.querySelector('.hotels-filter__list');
const filterSubmit = document.querySelector('.filter__submit');
const filterShow = document.querySelector('#filter-show');
const filterClose = document.querySelector('#filter-close');
const filterRemove = document.querySelector('.filter__remove');

const hotelsFavourite = document.querySelectorAll('.hotels-table__heart');



filterList.addEventListener('click', (e) => {
    let elem = e.target.closest('button');

    if (elem) elem.remove();
})

hotelsFavourite.forEach((item) => {
    item.addEventListener('click', (e) => {
        e.preventDefault();
        e.currentTarget.classList.toggle('is-active');
    })
})

filterSubmit.addEventListener('click', () => {
    filterBody.classList.remove('show');

    enableScroll();
})

filterShow.addEventListener('click', () => {
    filterBody.classList.add('show');
    
    disableScroll();
})

filterClose.addEventListener('click',  () => {
    filterBody.classList.remove('show');

    enableScroll();
})

filterRemove.addEventListener('click', (e) => {
    e.currentTarget.classList.remove('active');

    filterBody.querySelectorAll('input').forEach(item => item.checked = false);

    filterSubmit.querySelector('span').innerText = '';
    filterShow.querySelector('.hotels-filter__btn-count').innerText = '';
})

filterBody.querySelectorAll('input').forEach(item => {
    item.addEventListener('change', () => {
        const inputCheckedCount = filterBody.querySelectorAll('input:checked').length;

        filterSubmit.querySelector('span').innerText = `${inputCheckedCount === 0 ? '' : inputCheckedCount}`;

        if (inputCheckedCount > 0) {
            filterRemove.classList.add('active');
            filterRemove.disabled = false;
        } else {
            filterRemove.classList.remove('active');
            filterRemove.disabled = true;
        }
    })
})

filterSubmit.addEventListener('click', () => {
    filterBody.querySelectorAll('input:checked').forEach((item, index, array) => {
       let itemText = item.parentElement.querySelector('.filter__item-desc').innerText;

       filterShow.querySelector('.hotels-filter__btn-count').innerText = `(${array.length === 0 ? '' : array.length})`;

       renderItem(itemText);

       if (array.length) filterList.classList.add('show');
       else filterList.classList.remove('show');
    })
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

function renderItem(item) {
    let skeleton = `
            <button class="hotels-filter__item">
                ${item}
                <span class="hotels-filter__close"></span>
            </button>
        `;

    filterList.insertAdjacentHTML("afterbegin", skeleton);
}