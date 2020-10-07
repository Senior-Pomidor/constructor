import { block } from '../utils.js'
import { TextBlock, TitleBlock } from './blocks.js'
// Класс сайдбара с инструментами конструктора сайтов
export class Sidebar {
	constructor(selector, updateCallback) {
		this.$element = document.querySelector(selector)
		this.update = updateCallback

		this.init()
	}

	init() {
		this.$element.insertAdjacentHTML('afterbegin', this.template)
		// .bind(this) привяжет контекст класса к функции add
		this.$element.addEventListener('submit', this.add.bind(this))
	}

	get template() {
		return [
			block('text'),
			block('title')
		].join('')
	}

	// предотвращение обновления страницы после отправки формы
	add(event) {
		event.preventDefault()
		// console.log(event.target)
		// это сама форма

		// получение значений из формы
		const type = event.target.name
		const value = event.target.value.value
		const styles = event.target.styles.value

		// формирование объекта блока
		const newBlock = type === 'text'
			? new TextBlock(value, {styles})
			: new TitleBlock(value, {styles})

		// console.log(newBlock)
		this.update(newBlock)

		// очистка формы
		event.target.value.value = ''
		event.target.styles.value = ''
	}	
}