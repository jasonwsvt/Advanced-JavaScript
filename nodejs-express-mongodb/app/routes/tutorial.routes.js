module.exports = app => {
	const tutorials = require("../controllers/tutorial.controller.js")

	var router = require("express").Router()

	// Create a new Tutorial
	router.post("/", tutorials.create)

	// Retrieve all Tutorials
	router.get("/", tutorials.all)

	// Retrieve all published Tutorials
	router.get("/published", tutorials.allPublished)

	// Retrieve a single Tutorial with id
	router.get("/:id", tutorials.findById)

	// Update a Tutorial with id
	router.put("/:id", tutorials.updateById)

	// Delete a tutorial with id
	router.delete("/:id", tutorials.deleteById)

	// Delete all Tutorials
	router.delete("/", tutorials.deleteAll)

	app.use("/api/tutorials", router)
}