// слайдер для главной страницы
const container = document.querySelector('.slider_container');
document.querySelector('.slider_range').addEventListener('input', (e) => {
    container.style.setProperty('--position', `${e.target.value}%`);
})