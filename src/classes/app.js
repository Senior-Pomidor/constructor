import { Site } from './site.js'
import { Sidebar } from './sidebar.js'

export class App {
	constructor(model) {
		this.model = model
	}

	init() {
		const site = new Site('#site')

		site.render(this.model)

		const updateCallback = newBlock => {
			// коллбэк для перерисовки DOM после изменения
			this.model.push(newBlock)
			site.render(this.model)
		}

		new Sidebar('#panel', updateCallback)
	}
}