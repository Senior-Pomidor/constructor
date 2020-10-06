// импорт модулей
import { model } from './model.js'
import { title, text, columns, image } from './templates.js'
// глобальный импорт стилей
import './styles/main.css'

// переменные DOM-элементы будем именовать с $ чтобы отличать от обычных переменных
const $site = document.querySelector('#site')

model.forEach(block => {
	// console.log(block)
	let html = '' // формируемый html

	// html по типу блока
	if (block.type === 'title') {
		html = title(block)
	} else if (block.type === 'text') {
		html = text(block)
	} else if (block.type === 'columns') {
		html = columns(block)
	} else if (block.type === 'image') {
		html = image(block)
	}

	// вставка HTML в определённое место
	// $site.insertAdjacentHTML('куда', что)
	$site.insertAdjacentHTML('beforeend', html)
})