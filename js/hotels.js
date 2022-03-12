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
                <span class="hotels-filter__close">
                    <svg width="13" height="13" viewBox="0 0 13 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M2.12117 0.626878C1.73064 0.236353 1.09748 0.236353 0.706956 0.626878C0.316431 1.0174 0.316431 1.65057 0.706956 2.04109L5.33286 6.66699L0.707054 11.2928C0.31653 11.6833 0.31653 12.3165 0.707054 12.707C1.09758 13.0975 1.73074 13.0975 2.12127 12.707L6.74707 8.0812L11.2926 12.6268C11.6832 13.0173 12.3163 13.0173 12.7069 12.6268C13.0974 12.2363 13.0974 11.6031 12.7069 11.2126L8.16128 6.66699L12.707 2.12132C13.0975 1.7308 13.0975 1.09763 12.707 0.707107C12.3164 0.316582 11.6833 0.316582 11.2927 0.707107L6.74707 5.25278L2.12117 0.626878Z" fill="#637280"/>
                    </svg>
                </span>
            </button>
        `;

    filterList.insertAdjacentHTML("afterbegin", skeleton);
}