// pure functions - функции которые зависят только от аргументов
// не зависят от глобального контекста
import { row, col, css } from './utils.js'

// функции генерации html для различных блоков

// генерация html Заголовка
function title(block) {
	const { tag = 'h1', styles } = block.options
	return row(col(`<${tag}>${block.value}</${tag}>`), css(styles))
}

// генерация html параграфа
function text(block) {
	return row(col(`<p>
			${block.value}
		</p>`))
}

// генерация html колонок
function columns(block) {
	const html = block.value.map(col).join('')
	// col каждый раз будет вызываться с новым параметром

	return row(html)
	// вывод элементов массива в строку разделяется запятыми
	// .join('') это устраняет
}

// генерация html картинки
function image(block) {
	return row(`<img src="${block.value}" alt="" />`)
}

// объект с функциями генерации html блоков
export const templates = {
	title,
	text,
	columns,
	image
}