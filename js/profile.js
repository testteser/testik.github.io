const profileBtns = document.querySelectorAll('.profile__table-btn');

profileBtns.forEach(item => {
    item.addEventListener('click', (e) => {
        e.currentTarget.classList.toggle('is-active');
        e.currentTarget.parentElement.nextElementSibling.classList.toggle('active');
    })
})