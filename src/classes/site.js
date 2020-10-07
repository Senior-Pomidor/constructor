// Класс сайта
export class Site {
	constructor(selector) {
		// переменные DOM-элементы будем именовать с $ чтобы отличать от обычных переменных
		this.$element = document.querySelector(selector)
	}

	render(model) {
		// чтобы не дублировался сайт каждый раз при перерендере
		this.$element.innerHTML = ''
		model.forEach(block => {
			// console.log(block)
			// вставка HTML в определённое место
			// $site.insertAdjacentHTML('куда', что)
			this.$element.insertAdjacentHTML('beforeend', block.toHTML())
		})
	}
}