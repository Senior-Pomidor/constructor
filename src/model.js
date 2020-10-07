import image from './assets/image.png' //путь до картинки

// модель блоков
export const model = [
	{
		// заголовок
		type: 'title',
		value: 'Конструктор сайтов на JavaScript!',
		options: {
			tag: 'h2',
			styles: `background: 'linear-gradient(to right, #ff0099, #493240);color: #fff;'`
		}
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
	},
	{
		type: 'image',
		value: image
	}
]