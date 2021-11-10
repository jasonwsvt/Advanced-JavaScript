let express = require('express')
let mongoose = require('mongoose')
let cors = require('cors')
let bodyParser = require('body-parser')
let mongoDb = require('./db')

const TodoRoutes = require('./todo.routes')

mongoose.Promise = global.Promise

mongoose.connect(mongoDb.database, { useUnifiedTopology: true, useNewUrlParser: true })
	.then(() => { console.log('Database connected!') }, error => { console.log(error) })

const app = express()
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

app.use(cors())
app.use('/api', TodoRoutes)

const port = process.env.PORT || 8080
app.listen(port, () => {
	console.log('Connected on port ' + port)
})

app.use(function (err, req, res, next) {
	if (!err.statusCode) err.statusCode = 500
	res.status(err.statusCode).send(err.message)
})