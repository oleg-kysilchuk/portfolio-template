const cookies = document.querySelector('.cookies__btn-accept');
const container = document.querySelector('.container');

const navButton = document.querySelector('.menu-btn');
const menu = document.querySelector('.menu');

const navLink = document.querySelectorAll('.menu__nav-link');

const closeButton = document.querySelectorAll('.btn-close');

const hireButton = document.querySelectorAll('.btn-hire');
const hireForm = document.querySelector('.form-container');


cookies.addEventListener('click', function() {
    container.classList.add('accepted');
});

navButton.addEventListener('click', function() {
    menu.classList.add('open');
    container.classList.add('mask');
});

for (let i = 0; i < navLink.length; i++) {
    navLink[i].addEventListener('click', function() {
        menu.classList.remove('open');
        container.classList.remove('mask');
    });
}

for (let i = 0; i < hireButton.length; i++) {
    hireButton[i].addEventListener('click', function() {
        hireForm.classList.add('hire');
        container.classList.add('mask');
    });
}


for (let i = 0; i < closeButton.length; i++) {
    closeButton[i].addEventListener('click', function() {
        menu.classList.remove('open');
        hireForm.classList.remove('hire')
        container.classList.remove('mask');
    });
}