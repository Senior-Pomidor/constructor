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