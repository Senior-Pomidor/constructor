// класс базового блока
class Block {
	constructor(type, value, options) {
		this.type = type
		this.value = value
		this.options = options
	}
}

// класс заголовка унаследованный от класса Block
export class TitleBlock extends Block {
	constructor (value, options) {
		// вызывает конструктор класса Block
		super('title', value, options)
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