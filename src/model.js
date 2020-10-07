import image from './assets/image.png' //путь до картинки

const text = `
Лайк и подписка <a href="https://www.instagram.com/sugarbob99/" target="_blank">sugarbob99</a>
`

// модель блоков
export const model = [
	{
		// заголовок
		type: 'title',
		value: 'Конструктор сайтов на JavaScript!',
		options: {
			tag: 'h2',
			// styles: `background: linear-gradient(to right, #ff0099, #493240);color: #fff;text-align: center;padding: 1.5rem;`
			styles: {
				background: 'linear-gradient(to right, #ff0099, #493240)',
				color: '#fff',
				padding: '1.5rem',
				'text-align': 'center'
			}
		}
	},
	{
		type: 'image',
		value: image,
		options: {
			styles: {
				padding: '2rem 0',
				display: 'flex',
				'justify-content': 'center'
			},
			imageStyles: {
				width: '500px',
				height: 'auto'
			},
			alt: ''
		}
	},
	{
		// колонки
		type: 'columns',
		value: [
			'11111111',
			'22222222',
			'33333333'
		],
		options: {
			styles: {
				background: 'linear-gradient(to bottom, #8e2de2, #4a00e0)',
				padding: '2rem',
				color: '#fff',
				'font-weight': 'bold'
			}
		}
	},
	{
		// параграф
		type: 'text',
		value: text,
		options: {
			styles: {
				background: 'linear-gradient(to left, #f2994a, #f2c94c)',
				padding: '1rem',
				'font-weight': 'bold'
			}
		}
	}
]