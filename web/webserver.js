global.__base = process.env.PWD + '/'

const path = require('path')

const express = require('express')
const app = express()

PORT = 8000

function main() {
	setStaticResources()
	setRoutes()
	startServer()
}

function setStaticResources() {
	app.use(express.static('public'))
}

function setRoutes() {
	app.get('/', (req, res) => {
		res.sendFile(path.join(__base + '/public/index.html'))
	})

	app.get('/svg/:id', (req, res) => {
		let svg_filename = req.params.id
		res.sendFile(path.join(__base + `/files/${svg_filename}.svg`))
	})
}

function startServer() {
	app.listen(PORT,  () => console.log(`Listening port ${PORT}`))
}

main()