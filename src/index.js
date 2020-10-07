import { model } from './model.js'
import { Site } from './classes/site.js'
import './styles/main.css'
import { Sidebar } from './classes/sidebar.js'

const site = new Site('#site')

site.render(model)

const sidebar = new Sidebar('#panel')