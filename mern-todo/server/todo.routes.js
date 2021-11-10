let express = require('express');
let router = express.Router();

let todoSchema = require('./todo');

router.route('/').get((req, res, next) => {
	todoSchema.find((error, data) => {
		if (error) return next(error)
		else res.json(data)
	})
})

router.route('/create-todo').post((req, res, next) => {
	todoSchema.create(req.body, (error, data) => {
		if (error) return next(error)
		else {
			console.log(data)
			res.json(data)
		}
	})
})

router.route('/edit-todo/:id').get((req, res, next) => {
	todoSchema.findById(req.params.id, (error, data) => {
		if (error) return next(error)
		else res.json(data)
	})
})

router.route('/update-todo/:id').put((req, res, next) => {
	todoSchema.findByIdAndUpdate(req.params.id, {
		$set: req.body
	}, (error, data) => {
		if (error) return next(error)
		else {
			res.json(data)
			console.log('Todo updated')
		}
	})
})

router.route('/delete-todo/:id').delete((req, res, next) => {
	todoSchema.findByIdAndRemove(req.params.id, (error, data) => {
		if (error) return next(error)
		else res.status(200).json({ msg: data })
	})
})

module.exports = router