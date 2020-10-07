export function row(content, styles = '') {
	return `<div class="row" style="${styles}">
	${content}
</div>`
}

export function col(content) {
	return `<div class="col-sm">
		${content}
	</div>`
}

export function css(styles = {}) {
	// const keys = Object.keys(styles)
	// const styles_array = keys.map(key => {
	// 	return `${key}: ${styles[key]}`
	// })

	// return styles_array.join(';')
	const toString = key => `${key}: ${styles[key]}`
	return Object.keys(styles).map(toString).join(';')
}

// создаёт форму для конструктора в сайдбаре
export function block(type) {
	return `
		<form name="${type}">
			<h5>${type}</h5>
			<div class="form-group">
				<input class="form-control form-control-sm" name="value" placeholder="value">
			</div>
			<div class="form-group">
				<input class="form-control form-control-sm" name="styles" placeholder="styles">
			</div>
			<button type="submit" class="btn btn-primary btn-sm">Добавить</button>
		</form>
		<hr />
	`
}