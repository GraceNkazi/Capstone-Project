import { useState } from 'react';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const ProductForm = () => {
    const prods = JSON.parse(localStorage.getItem('products')) || [];

    const [productName, setProductName] = useState('');
    const [category, setCategory] = useState('');
    const [description, setDescription] = useState('');
    const [price, setPrice] = useState('');
    const [image, setImage] = useState(null);
    const [id, setId] = useState(prods.length + 1);
    const [sellerName, setSellerName] = useState('');
    const [contactDetails, setContactDetails] = useState('');
    const [products, setProducts] = useState(prods);

    const handleProductNameChange = (e) => {
        setProductName(e.target.value);
    };
    const handleCategoryChange = (e) => {
        setCategory(e.target.value);
    };

    const handleDescriptionChange = (e) => {
        setDescription(e.target.value);
    };

    const handlePriceChange = (e) => {
        setPrice(e.target.value);
    };

    const handleImageChange = (e) => {
        const file = e.target.files[0];
        setImage(file);
    };

    const handleSellerNameChange = (e) => {
        setSellerName(e.target.value);
    };

    const handleContactDetailsChange = (e) => {
        setContactDetails(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        const errors = {};
        if (!productName.trim()) {
            errors.productName = 'Product Name is required';
        }
        if (!category.trim()) {
            errors.category = 'Category is required';
        }
        if (!description.trim()) {
            errors.description = 'Description is required';
        }
        if (!price.trim()) {
            errors.price = 'Price is required';
        }
        if (!image) {
            errors.image = 'Image is required';
        }
        if (!sellerName.trim()) {
            errors.sellerName = 'Seller Name is required';
        }
        if (!contactDetails.trim()) {
            errors.contactDetails = 'Contact Details are required';
        }

        if (Object.keys(errors).length === 0) {
            // image file Convertion(base64)
            const reader = new FileReader();
            reader.onloadend = () => {
                const base64Image = reader.result;

                // Create product object
                const product = {
                    id: id,
                    productName,
                    category,
                    description,
                    price,
                    image: base64Image,
                    quantity: 1,
                    sellerName,
                    contactDetails,
                };

                // Update storage
                const updatedProducts = [...products, product];
                localStorage.setItem(
                    'products', JSON.stringify(updatedProducts));

                //state Update
                setProducts(updatedProducts);
                setId(id + 1);

                // Reset form 
                setProductName('');
                setDescription('');
                setPrice('');
                setImage(null);
                setCategory('');
                setSellerName('');
                setContactDetails('');

                // Show success message
                toast.success('success!');
            };

            reader.readAsDataURL(image);
        } else {
            // messages error
            Object.values(errors).forEach((error) => {
                toast.error(error);
            });
        }
    };

    return (
        <div className="container" style={{ width: '70%' }}>
            <h2>Add Product</h2>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label htmlFor="productName">
                        Product Name:
                    </label>
                    <input
                        type="text"
                        className="form-control"
                        id="productName"
                        value={productName}
                        onChange={handleProductNameChange}
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="category">
                    Product Category:
                    </label>
                    <textarea
                        className="form-control"
                        id="category"
                        value={description}
                        onChange={handleDescriptionChange}
                    ></textarea>
                </div>
                <div className="form-group">
                    <label htmlFor="description">Product Description:</label>
                    <input
                        type="text"
                        className="form-control"
                        id=""
                        value={price}
                        onChange={handlePriceChange}
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="price">Product Price:</label>
                    <select
                        className="form-control"
                        id="price"
                        value={category}
                        onChange={handleCategoryChange}
                    >
                        <option value="">Select a category</option>
                        <option value="appliance">Appliances</option>
                        <option value="fashion and apparel">Fashion and apparel</option>
                        <option value="sports">Sports</option>
                        <option value="furniture">Furniture</option>
                        <option value="other">Other</option>
                    </select>
                </div>
                <div className="form-group">
                    <label htmlFor="sellerName">Seller Name:</label>
                    <input
                        type="text"
                        className="form-control"
                        id="sellerName"
                        value={sellerName}
                        onChange={handleSellerNameChange}
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="contactDetails">
                        Contact Details:
                    </label>
                    <input
                        type="text"
                        className="form-control"
                        id="contactDetails"
                        value={contactDetails}
                        onChange={handleContactDetailsChange}
                    />
                </div>
                <div className="form-group mt-3">
                    <label htmlFor="image">Image:</label>
                    <input
                        type="file"
                        className="form-control-file"
                        id="image"
                        accept="image/*"
                        onChange={handleImageChange}
                    />
                </div>
                <button type="submit" 
                        className="btn btn-primary mt-3">
                    Submit
                </button>
            </form>
            <ToastContainer />
        </div>
    );
};

export default ProductForm;