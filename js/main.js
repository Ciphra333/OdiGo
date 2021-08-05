(function () {
    const header = document.querySelector('.header');
    window.onscroll = () => {
        if (window.pageYOffset > 50) {
            header.classList.add('header_active');
        } else {
            header.classList.remove('header_active');
        }
    };
}());

// Burger handler
// Вызываем функцию
(function () {
    // Создаем переменную и обращаемся к ней, querySelector ('ищет указанный класс из css')
    const burgerItem = document.querySelector('.burger');
    const menu = document.querySelector('.header__nav');
    const menuCloseItem = document.querySelector('.header__nav-close');
    // addEventListener - подвешиваем обработчик события, по клику на бургер применяем к нашему меню(header_nav_active) отвечает за его активное состояние  
    burgerItem.addEventListener('click', () => {
        // При клике на header__nav применяется header__Active, сот-но выезжает меню
        menu.classList.add('header__nav_active');
    });
    // Подвешиваем обработчик события, по клику на бургер header__nav_active уезжает за пределы экрана
    menuCloseItem.addEventListener('click', () => {
        menu.classList.remove('header__nav_active');
    });

}());