import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const ProductList = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const [selectedCategory, setSelectedCategory] = useState(null);
    const products =
        JSON.parse(localStorage.getItem('products')) || [];
    const categories =
        [...new Set(products.map((product) => product.category))];

    const filteredProducts = products.filter(
        (product) =>
            product.productName
                   .toLowerCase()
                   .includes(searchTerm.toLowerCase()) &&
           (selectedCategory?product.category === selectedCategory:true)
    );

    return (
        <div className='container mt-3'>
            <div className='btn-group mb-3'
                role='group'
                aria-label='Categories'>
                <button
                    type='button'
                    className={
`btn ${selectedCategory === null ? 'btn-primary' : 'btn-secondary'}`}
                    onClick={() => setSelectedCategory(null)}
                >
                    All
                </button>
                {categories.map((category) => (
                    <button
                        key={category}
                        type='button'
                        className={
`btn ${selectedCategory === category ? 'btn-primary':'btn-secondary'}`}
                        onClick={() => setSelectedCategory(category)}>
                        {category}
                    </button>
                ))}
            </div>
            <input
                type='text'
                placeholder='Search products...'
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className='form-control mb-3'
            />
            <div className='row'>
                {filteredProducts.map((product) => (
                    <div key={product.id}
                        className='col-md-3 mb-4'>
                        <div className='card'
                            style={{ width: '100%' }}>
                            <img
                                src={product.image}
                                className='card-img-top'
                                alt={product.name}
                                style={{
                                    objectFit: 'cover',
                                    width: '200px',
                                    height: '200px'
                                }}
                            />
                            <div className='card-body'>
                                <h5 className='card-title'
                                    style={{
                                        fontSize: '1.25rem',
                                        fontWeight: 'bold'
                                    }}>
                                    {product.productName}
                                </h5>
                                <p className='card-text'
                                    style={{
                                        fontSize: '1rem',
                                        color: 'gray'
                                    }}>
                                    ${product.price}
                                </p>
                                <Link to={`/products/${product.id}`}>
                                    <button className='btn btn-primary'>
                                        View Details
                                    </button>
                                </Link>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
            <ToastContainer />
        </div>
    );
};

export default ProductList;