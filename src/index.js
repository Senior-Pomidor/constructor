// импорт модулей
import { model } from './model.js'
import { Site } from './classes/site.js'
// глобальный импорт стилей
import './styles/main.css'

const site = new Site('#site')

site.render(model)