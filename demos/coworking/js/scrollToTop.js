// Находим кнопку скролла по id
const scrollBtn = document.querySelector('#scrollToTopBtn');

// Слушаем событие скролла на странице
window.addEventListener('scroll', function () {
	// Если пользователь проскролил страницу по высоте больше чем высота экрана
	if (window.scrollY > window.innerHeight) {
		// Тогда к кнопке добавляем класс top-link--visible, чтобы она показалась
		scrollBtn.classList.add('top-link--visible')
	} else {
		// Убираем кнопку, когда пользователь наверху
		scrollBtn.classList.remove('top-link--visible')
	}
})