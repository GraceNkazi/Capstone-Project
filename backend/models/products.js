const mongoose = require('mongoose')



// Product Schema
const productSchema = new mongoose.Schema({
	name: {
		type: String,
		required: true
	},
	description: String,
	price: {
		type: Number,
		required: true
	},
	category: String,
	imageUrl: String, 
});

const Product = mongoose.model('Products', productSchema);

module.exports = Product


