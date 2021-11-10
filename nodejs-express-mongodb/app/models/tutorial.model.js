module.exports = mongoose => {
	const Tutorial = mongoose.model(
		"tutorial",
		mongoose.Schema({
			Title: String,
			description: String,
			published: Boolean
		},
		{ timestamps: true
		})
	)

	return Tutorial
}

