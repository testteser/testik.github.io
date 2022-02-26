const authTabBody = document.querySelector('.auth-tabs');
const authTabs = document.querySelectorAll('.auth-tabs__tab');
const authItem = document.querySelectorAll('.auth__content-item');
const authPassShow = document.querySelectorAll('.auth__form-show');

authTabs.forEach(item => {
    item.addEventListener('click', (e) => {
        let tabAttr = e.currentTarget.getAttribute('data-tab');

        authTabs.forEach(tab => tab.classList.remove('active'));
        authItem.forEach(item => item.classList.remove('show'));

        document.querySelector(`.auth-tabs__tab[data-tab="${tabAttr}"]`).classList.add('active');
        document.querySelector(`.auth__content-item[data-content="${tabAttr}"]`).classList.add('show');

        tabAttr === 'phone' ?
            authTabBody.classList.add('active') :
            authTabBody.classList.remove('active');
    })
})

authPassShow.forEach(item => {
    item.addEventListener('click', (e) => {
        e.preventDefault();

        let input = e.currentTarget.parentElement.nextElementSibling;

        if (e.currentTarget.getAttribute('data-show-flag') !== 'false') {
            input.setAttribute('type', 'text');
            e.currentTarget.setAttribute('data-show-flag', 'false');
            e.currentTarget.innerText = e.currentTarget.getAttribute('data-hide-text');
        } else {
            input.setAttribute('type', 'password');
            e.currentTarget.setAttribute('data-show-flag', 'true');
            e.currentTarget.innerText = e.currentTarget.getAttribute('data-show-text');
        }
    })
})