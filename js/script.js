function googleTranslateElementInit() {
    new google.translate.TranslateElement({
        pageLanguage: 'uk',
        includedLanguages: 'uk,en,pl',
        autoDisplay: false,
        layout: google.translate.TranslateElement.InlineLayout.SIMPLE
    }, 'select-language');
}
document.addEventListener('click', (e) => {
    const target = e.target

    if (target.closest('.menu__link')) {
        const menuLink = target.closest('.menu__link')
        if (menuLink.nextElementSibling) {
            if (menuLink.nextElementSibling.classList.contains('menu__submenu')) {
                e.preventDefault()
                menuLink.nextElementSibling.classList.add('-active')
            }
        }
    }

    if (target.closest('.menu__back')) {
        e.preventDefault()
        const menuBack = target.closest('.menu__back')
        const lastOpenSubmenu = menuBack.closest('.menu__submenu')
        lastOpenSubmenu.classList.remove('-active')
    }
    if (target.closest('.header__burger')) {
        e.preventDefault()
        const headerBurger = target.closest('.header__burger')
        const headerDecor = document.querySelector('.header__decor')
        const menu = document.querySelector('.menu')
        headerBurger.classList.toggle('-active')
        headerDecor.classList.toggle('-active')
        menu.classList.toggle('-active')
    }
})