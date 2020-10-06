// модель блоков
const model = [
	{
		// заголовок
		type: 'title',
		value: 'Hello World from JS'
	},
	{
		// параграф
		type: 'text',
		value: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.'
	},
	{
		// колонки
		type: 'columns',
		value: [
			'11111111',
			'22222222',
			'33333333'
		]
	}
]

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
	let html = ''

	block.value.forEach(text => {
		html += `
			<div class="col-sm">
				${text}
			</div>
		`
	})

	return `
		<div class="row">
			${html}
		</div>
	`
}