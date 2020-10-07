import {col, css, row} from '../utils.js'

// класс базового блока
class Block {
	constructor(type, value, options) {
		this.type = type
		this.value = value
		this.options = options
	}

	// создаст ошибку если в инстансе не определён этот метод
	toHTML() {
		throw new Error('Метод toHTML не определён')
	}
}

// класс заголовка унаследованный от класса Block
export class TitleBlock extends Block {
	constructor (value, options) {
		// вызывает конструктор класса Block
		super('title', value, options)
	}

	// генерация html Заголовка
	toHTML() {
		const { tag = 'h1', styles } = this.options
		return row(col(`<${tag}>${this.value}</${tag}>`), css(styles))
	}
}

// класс картинки унаследованный от класса Block
export class ImageBlock extends Block {
	constructor(value, options) {
		super('image', value, options)
	}

	// генерация html Картинки
	toHTML() {
		const { imageStyles: is, alt = '', styles } = this.options
		return row(`<img src="${this.value}" alt="${alt}" style="${css(is)}" />`, css(styles))
	}
}

// класс колонок унаследованный от класса Block
export class ColumnsBlock extends Block {
	constructor(value, options) {
		super('columns', value, options)
	}

	// генерация html Колонок
	toHTML() {
		const html = this.value.map(col).join('')
		// col каждый раз будет вызываться с новым параметром
	
		return row(html, css(this.options.styles))
		// вывод элементов массива в строку разделяется запятыми
		// .join('') это устраняет
	}
}

// класс параграфа унаследованный от класса Block
export class TextBlock extends Block {
	constructor(value, options) {
		super('text', value, options)
	}

	// генерация html Параграфа
	toHTML() {
		return row(col(`<p>
			${this.value}
		</p>`), css(this.options.styles))
	}
}