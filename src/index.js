import { model } from './model.js'

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


function title(block) {
	// генерация html Заголовка
	return `
		<div class="row">
			<div class="col-sm">
				<h1>${block.value}</h1>
			</div>
		</div>
	`
}

function text(block) {
	// генерация html параграфа
	return `
		<div class="row">
			<div class="col-sm">
				<p>
					${block.value}
				</p>
			</div>
		</div>
	`
}

function columns(block) {
	// генерация html колонок
	const html = block.value.map(text => `
		<div class="col-sm">
			${text}
		</div>
	`)

	return `
		<div class="row">
			${html.join('')}
		</div>
	`
	// вывод элементов массива в строку разделяется запятыми
	// .join('') это устраняет
}

function image(block) {
	return `
		<div class="row">
			<img src="${block.value}" alt="" />
		</div>
	`
}