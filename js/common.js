const accountMenu = document.querySelector('#account-menu');
const closeAccountMenu = document.querySelector('#close-account-menu');
const showAccountMenu = document.querySelector('#show-account-menu');

const mainMenu = document.querySelector('#menu');
const mainShowMenu = document.querySelector('#show-menu');
const mainMenuClose = document.querySelector('#menu-close');

const bodyCloserItems = document.querySelectorAll('.body-closer-item');

const bodyCloser = document.querySelector('#body-closer');

bodyCloser.addEventListener('click', (e) => {
    enableScroll();
})

if (accountMenu) {
    showAccountMenu.addEventListener('click', () => {
        accountMenu.classList.add('show');

        disableScroll();
    });
    closeAccountMenu.addEventListener('click', () => {
        accountMenu.classList.remove('show');

        enableScroll();
    });
}

if (mainMenu) {
    mainShowMenu.addEventListener('click', () => {
        mainMenu.classList.add('show');

        disableScroll();
    });
    mainMenuClose.addEventListener('click', () => {
        mainMenu.classList.remove('show');

        enableScroll();
    });
}

/* Функция для включения скролла */
function enableScroll() {
    bodyCloser.classList.remove('show');

    document.body.style.overflow = 'auto';

    bodyCloserItems.forEach(item => item.classList.remove('show'));
}

/* Функция для отключения скролла */
function disableScroll() {
    bodyCloser.classList.add('show');

    document.body.style.overflow = 'hidden';
}