// pure functions - функции которые зависят только от аргументов
// не зависят от глобального контекста

// функции генерации html для различных блоков
export function title(block) {
	// генерация html Заголовка
	return `
		<div class="row">
			<div class="col-sm">
				<h1>${block.value}</h1>
			</div>
		</div>
	`
}

export function text(block) {
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

export function columns(block) {
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

export function image(block) {
	return `
		<div class="row">
			<img src="${block.value}" alt="" />
		</div>
	`
}