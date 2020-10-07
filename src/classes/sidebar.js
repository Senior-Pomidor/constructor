// Класс сайдбара с инструментами конструктора сайтов
export class Sidebar {
	constructor(selector) {
		this.$element = document.querySelector(selector)

		this.$element.insertAdjacentHTML('afterbegin', this.template)
	}

	get template() {
		return '<h1>test<h1/>'
	}
}