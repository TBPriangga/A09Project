const hambBtn = document.getElementById('hamburgerButton');
const headList = document.querySelector('.header-list');
const navLinks = document.querySelectorAll('.nav-link');
const exploreBtn = document.getElementById('exploreBtn');

hambBtn.addEventListener('click', () => {
    headList.classList.toggle('show');
});

navLinks.forEach((navLink) => {
    navLink.addEventListener('click', () => {
        headList.classList.remove('show');
    });
});

exploreBtn.addEventListener('click', () => {
  window.location.href = '#dev';
});

const rmvClassShow = (element) => {
    element.addEventListener('click', () => {
        headList.classList.remove('show');
    });
};

rmvClassShow(document.querySelector('main'));
rmvClassShow(document.querySelector('.jumbotron'));
rmvClassShow(document.querySelector('footer'));