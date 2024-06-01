import { useState, useEffect } from 'react';
import './FeaturedProducts.css';

const FeaturedProducts = () => {
    const [products, setProducts] = useState([]);
    const [page, setPage] = useState(1);

    useEffect(() => {
        fetch(`https://dummyjson.com/docs/products?page=${page}`)
            .then(response => response.json())
            .then(data => setProducts(prevProducts => [...prevProducts, ...data.products]))
            .catch(error => console.error('Error fetching products:', error));
    }, [page]);

    const loadMoreProducts = () => {
        setPage(prevPage => prevPage + 1);
    };

    return (
        <section className="featured-products">
            <h2 className="section-title">Featured Products</h2>
            <h3 className="section-subtitle">BESTSELLER PRODUCTS</h3>
            <p className="section-description">Problems trying to resolve the conflict between</p>
            <div className="products-grid">
                {products.map(product => (
                    <div className="product-card" key={product.id}>
                        <img src={product.thumbnail} alt={product.title} className="product-image" />
                        <div className="product-info">
                            <h4>{product.title}</h4>
                            <p>{product.category}</p>
                            <div className="product-pricing">
                                <span className="original-price">${product.price.toFixed(2)}</span>
                                <span className="sale-price">${(product.price - (product.price * (product.discountPercentage / 100))).toFixed(2)}</span>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
            <button className="load-more-button" onClick={loadMoreProducts}>Load More Products</button>
        </section>
    );
};

export default FeaturedProducts;
