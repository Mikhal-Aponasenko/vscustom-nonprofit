// бургер-меню: кнопка
document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("burger").addEventListener("click", function() {
        document.querySelector("header").classList.toggle("open")
    })
})

// кнопка скролла вверх
const ToTop = document.querySelector(".topBtn");

window.addEventListener("scroll", () => {
    if(window.scrollY > 190){
        ToTop.style.opacity = "1";
    } else{
        ToTop.style.opacity = "0";
    }
})

ToTop.addEventListener('click', () => {
    window.scrollTo(0, 0);
})