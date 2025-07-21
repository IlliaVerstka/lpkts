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
        document.body.classList.toggle('-lock')
    }
    if (target.closest('.fullscreen__view-more')) {
        e.preventDefault()
        const btnMore = target.closest('.fullscreen__view-more')
        const parentElement = btnMore.closest('.fullscreen')
        const nextElement = parentElement.nextElementSibling
        if (nextElement) {
            const offsetTop = nextElement.getBoundingClientRect().top
            const heightHeader = document.querySelector('header').offsetHeight
            const coordTo = window.screenY + offsetTop - heightHeader
            window.scrollTo({
                top: coordTo,
                behavior: 'smooth',
            })
        }
    }
    if (target.closest('.-slider-arrow')) {
        e.preventDefault()
    }

})


if (document.querySelector('.slider-fullscreen-video') && document.querySelector('.slider-info-fullscreen')) {
    const sliderFullscreenVideo = new Swiper('.slider-fullscreen-video__body', {
        simulateTouch: false,
        speed: 1000,
        loop: true,
    })

    const sliderInfoFullscreen = new Swiper('.slider-info-fullscreen__body', {
        simulateTouch: false,
        speed: 1000,
        autoplay: {
            delay: 25000,
        },
        loop: true,
        spaceBetween: 10,
    })
    sliderFullscreenVideo.controller.control = sliderInfoFullscreen
    sliderInfoFullscreen.controller.control = sliderFullscreenVideo
}