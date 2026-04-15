// Находим все блоки для аккордеона

const topics = document.querySelectorAll('.topic')

// Обходим все блоки аккордеона
topics.forEach(function (topic) {
	// На каждый блок вешаем прослушку по клику
	topic.addEventListener('click', function (event) {
		// Проверим, был ли клик внутри кнопки или нет
		// Проверка идет на точ, что клик был совершен на элементе, который размещен внутри кнопки,
		// то есть внутри блока с классом .topic__btn, в нашем случае это кнопка
		if (event.target.closest('.topic__btn')) {
			// Добавляем/убираем у блока класс topic--open
			// Если был добавлен - вернется true, если был убран false
			// Возвращаемое значение зщаписываем в константу toggleResult
			const isOpened = topic.classList.toggle('topic--open')

			// Находим картинку
			const content = topic.querySelector('.topic__content')
			const img = topic.querySelector('.topic__icon')

			// Проверяем, если мы добавили класс, то есть блок надо открыть
			// тогда открываем его, отображаем на странице
			if (isOpened) {
				img.src = './img/icons/btn-minus.svg'
				content.style.maxHeight = content.scrollHeight + 'px'
			} else {
				img.src = './img/icons/btn-plus.svg'
				content.style.maxHeight = '0px'
			}
		}
	})
})