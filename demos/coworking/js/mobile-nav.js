// Находим кнопку открытия мобильной навигации
const mobileNavBtnOpen = document.querySelector('#openMobileNav')

// Находим кнопку закрытия мобильной навигации
const mobileNavBtnClose = document.querySelector('#closeMobileNav')

// Находим блок с мобильной навигации
const mobileNav = document.querySelector('.mobile-nav')

// Вешаем прослушку по клику на кнопку Открытия мобильной навигации
mobileNavBtnOpen.addEventListener('click', function () {
	// По клику добавляем класс mobile-nav--open к блоку с мобильной навигацией
	mobileNav.classList.add('mobile-nav--open')
	// Добавляем класс no-scroll к тегу body чтобы убрать скролл на странице с мобильной навигацией
	document.body.classList.add('no-scroll')
})

// Вешаем прослушку по клику на кнопку Закрытия мобильной навигации
mobileNavBtnClose.addEventListener('click', function () {
	// По клику удаляем класс mobile-nav--open у блока с мобильной навигацией
	mobileNav.classList.remove('mobile-nav--open')
	// Удаляем класс no-scroll у тега body чтобы вернуть скролл на сайте
	document.body.classList.remove('no-scroll')
})

/* Закрываем мобильную навигацию по клику на ссылки внутри мобильной навигации */

// Находим ссылки внутри блока с мобильной навигацией
const mobileNavLinks = mobileNav.querySelectorAll('a, button')

// Перебираем все ссылки в мобильной навигации
mobileNavLinks.forEach(function (item) {
	// Вешаем прослушку по клику на каждый элемент в мобильной навигации
	item.addEventListener('click', function () {
		// Закрываем мобильную навигацию удялив класс mobile-nav--open
		mobileNav.classList.remove('mobile-nav--open')
		// Удаляем класс no-scroll у тега body чтобы вернуть скролл на сайте
		document.body.classList.remove('no-scroll')
	})
})