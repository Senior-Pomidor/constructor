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

	if (block.type === 'title') {
		// html для Заголовка
		html = `
			<div class="row">
				<div class="col-sm">
					<h1>${block.value}</h1>
				</div>
			</div>
		`
	} else if (block.type === 'text') {
		// html для Параграфа
		html = `
			<div class="row">
				<div class="col-sm">
					<p>
						${block.value}
					</p>
				</div>
			</div>
		`
	} else if (block.type === 'columns') {
		
	}

	// вставка HTML в определённое место
	// $site.insertAdjacentHTML('куда', что)
	$site.insertAdjacentHTML('beforeend', html)
})