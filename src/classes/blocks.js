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
}

// класс колонок унаследованный от класса Block
export class ColumnsBlock extends Block {
	constructor(value, options) {
		super('columns', value, options)
	}
}

// класс параграфа унаследованный от класса Block
export class TextBlock extends Block {
	constructor(value, options) {
		super('text', value, options)
	}
}