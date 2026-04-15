/* Tiny Slider */

const slider = tns({
	container: '.slider',
	items: 2.7,
	gutter: 10,
	"mouseDrag": true,
	speed: 400,
	// loop: false, // ломает работу с lazyload
	autoWidth: true,
	lazyload: true,
	swipeAngle: false,

	controlsContainer: '.locations__controls',
	nav: false,
});

// Кнопки управления слайдером на моб версии
const prevMobile = document.querySelector('.locations__controls--mobile .prev')
const nextMobile = document.querySelector('.locations__controls--mobile .next')

// Обращаемся с кнопкам и по событию клика вешаем на них методы перелистывания слайдера вперед и назад
prevMobile.onclick = function () {
	slider.goTo('prev')
}
nextMobile.onclick = function () {
	slider.goTo('next')
}