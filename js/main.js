// Создаём переменную в которую положим кнопку меню
let menuToggle = document.querySelector('#menu-toogle');
// Создаём переменнуюю в которую кладём меню
let menu = document.querySelector('.sidebar');
// Отслеживаем клик по кнопке менб и запускаем функцию
menuToggle.addEventListener('click', function(event){
    //отменяем стандартное поведение ссылки
    event.preventDefault();
    // вешаем класс на меню, когда кликнули на меню
    menu.classList.toggle('visible');
})
