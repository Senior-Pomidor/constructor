// pure functions - функции которые зависят только от аргументов
// не зависят от глобального контекста

// функции генерации html для различных блоков

// генерация html Заголовка
function title(block) {
	return `
		<div class="row">
			<div class="col-sm">
				<h1>${block.value}</h1>
			</div>
		</div>
	`
}

// генерация html параграфа
function text(block) {
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

// генерация html колонок
function columns(block) {
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

// генерация html картинки
function image(block) {
	return `
		<div class="row">
			<img src="${block.value}" alt="" />
		</div>
	`
}

// объект с функциями генерации html блоков
export const templates = {
	title,
	text,
	columns,
	image
}