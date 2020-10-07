// импорт модулей
import { model } from './model.js'
import { templates } from './templates.js'
// глобальный импорт стилей
import './styles/main.css'

// переменные DOM-элементы будем именовать с $ чтобы отличать от обычных переменных
const $site = document.querySelector('#site')
// console.log(templates)

model.forEach(block => {
	// console.log(block)

	// возвращает соответствующие функции генерации
	const toHTML = templates[block.type]
	// console.log(toHTML)

	if(toHTML) {
		// вставка HTML в определённое место
		// $site.insertAdjacentHTML('куда', что)
		$site.insertAdjacentHTML('beforeend', toHTML(block))
	}
})

// console.log(templates.columns({
// 	// колонки
// 	type: 'columns',
// 	value: [
// 		'11111111',
// 		'22222222',
// 		'33333333'
// 	]
// }))