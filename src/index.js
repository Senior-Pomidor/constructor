// импорт модулей
import { model } from './model.js'
// глобальный импорт стилей
import './styles/main.css'

// переменные DOM-элементы будем именовать с $ чтобы отличать от обычных переменных
const $site = document.querySelector('#site')
// console.log(templates)

model.forEach(block => {
	// console.log(block)
	// вставка HTML в определённое место
	// $site.insertAdjacentHTML('куда', что)
	$site.insertAdjacentHTML('beforeend', block.toHTML())
})