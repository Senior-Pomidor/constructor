// Класс сайдбара с инструментами конструктора сайтов
export class Sidebar {
	constructor(selector) {
		this.$element = document.querySelector(selector)

		this.$element.insertAdjacentHTML('afterbegin', '<h1>test<h1/>')
	}
}