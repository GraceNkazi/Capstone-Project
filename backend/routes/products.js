const express = require('express')
const Product = require('../models/products')

const router = express.Router()


// Route to add new product
router.post('/', async (req, res) => {
	try {
		const { name, description, price, category, imageUrl } = req.body;
		const newProduct = new Product({
			name,
			description,
			price,
			category,
			imageUrl,
		});
		const savedProduct = await newProduct.save();
		res.status(201).json(savedProduct);
	} catch (err) {
		console.error(err);
		res.status(500).json({ message: 'Server Error' });
	}
});


// Route to fetch products
router.get('/', async (req, res) => {
	try {
		const products = await Product.find();
		res.json(products);
	} catch (err) {
		console.error(err);
		res.status(500).json({ message: 'Server Error' });
	}
});


//DELETE
router.delete('/', async (req, res) => {
	try {
		const products = await Request.findByIdAndDelete();
		res.json(products);
	} catch (err) {
		console.error(err);
		res.status(500).json({ message: 'Server Error' });
	}
});

module.exports = router


