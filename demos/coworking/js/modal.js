/* Находим элементы для модального окна */

// Все кнопки которые могут открывать модальные окна по data атрибуту [data-action="modal"]
const openModalBtns = document.querySelectorAll('[data-action="modal"]')

const modal = document.querySelector('.modal') // Модальное окно
const closeModalBtn = document.querySelector('#closeModal') // Кнопка закрытия модального окна
const modalBody = document.querySelector('.modal__body') // Блок с контентом модального окна

// Перебираем все кнопки открытия модального окна
openModalBtns.forEach(function (item) {
	// Вешаем прослушку на кнопки открытия по клику
	item.addEventListener('click', function () {
		// Обращаемся к модалке и отбражаем ее, добавляем к ней класс modal--open
		modal.classList.add('modal--open')

		// Добавляем к body класс no-scroll, чтобы запретить скролл на странице при открытой модалке
		document.body.classList.add('no-scroll')
	})
})

// Слушаем клик по кнопке закрытия модального окна
closeModalBtn.addEventListener('click', function () {
	// Закрываем модальное окно, удаляем у нее класс modal--open
	modal.classList.remove('modal--open')

	// Возвращаем скролл на страницу
	document.body.classList.remove('no-scroll')
})

/* Закрытие модалки при клике на оверлее */

// Слушаем клик по модальному окну
modal.addEventListener('click', function () {
	// Закрываем модальное окно, удаляем у нее класс modal--open
	modal.classList.remove('modal--open')

	// Возвращаем скролл на страницу
	document.body.classList.remove('no-scroll')
})

// Слушаем клик внутри модального окна
modalBody.addEventListener('click', function (event) {
	// Запрещаем кликам из содержимого модального окна закрывать саму модалку
	event.stopPropagation()
})

// Закрываем модалку клавишей Esc
document.addEventListener('keydown', function (event) {
	if (event.key == 'Escape') {
		modal.classList.remove('modal--open')
		document.body.classList.remove('no-scroll')
	}
})