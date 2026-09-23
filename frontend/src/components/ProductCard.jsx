import React from 'react';
import { Link } from 'react-router-dom';

const ProductCard = ({ product }) => {
  return (
    <div className="product-card">
      <img src={product.image} alt={product.name} className="product-image" />
      <div className="product-details">
        <span className="product-category">{product.category}</span>
        <h3 className="product-title">{product.name}</h3>
        
        <div className="product-meta">
          <span className="product-price">₹{product.price}</span>
          <span className="product-stock">{product.stock} in stock</span>
        </div>

        <Link to={`/products/${product._id || product.id}`} className="btn-primary">
          View Details
        </Link>
      </div>
    </div>
  );
};

export default ProductCard;