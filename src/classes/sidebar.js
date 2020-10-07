import { block } from '../utils.js'
// Класс сайдбара с инструментами конструктора сайтов
export class Sidebar {
	constructor(selector) {
		this.$element = document.querySelector(selector)

		this.init()
	}

	init() {
		this.$element.insertAdjacentHTML('afterbegin', this.template)
	}

	get template() {
		return [
			block('text'),
			block('title')
		].join('')
	}
}