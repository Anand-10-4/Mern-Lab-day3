import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { fetchProductById } from '../services/api';

const ProductDetails = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getProduct = async () => {
      setLoading(true);
      setError(null);
      try {
        const data = await fetchProductById(id);
        setProduct(data.product);
      } catch (err) {
        setError('Something went wrong while loading products.');
      } finally {
        setLoading(false);
      }
    };

    getProduct();
  }, [id]);

  if (loading) return <div style={styles.message}>Loading products...</div>;
  if (error) return <div style={{ ...styles.message, color: '#dc2626' }}>{error}</div>;
  if (!product) return <div style={styles.message}>No products found.</div>;

  return (
    <div style={styles.container}>
      <Link to="/products" style={styles.backLink}>&larr; Back to Products</Link>
      <div style={styles.card}>
        <img src={product.image} alt={product.name} style={styles.image} />
        <div style={styles.details}>
          <span style={styles.category}>{product.category}</span>
          <h1 style={styles.title}>{product.name}</h1>
          <p style={styles.description}>{product.description}</p>
          <p style={styles.price}>₹{product.price.toLocaleString()}</p>
          <p style={styles.stock}>In Stock: {product.stock} units</p>
          <button style={styles.button} onClick={() => alert('Add to Cart functionality coming in Lab 04!')}>
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

const styles = {
  container: {
    maxWidth: '1000px',
    margin: '2rem auto',
    padding: '0 1rem'
  },
  backLink: {
    display: 'inline-block',
    marginBottom: '1rem',
    color: '#2563eb',
    textDecoration: 'none'
  },
  card: {
    display: 'flex',
    gap: '2rem',
    backgroundColor: '#fff',
    border: '1px solid #e5e7eb',
    borderRadius: '8px',
    padding: '2rem',
    flexWrap: 'wrap'
  },
  image: {
    maxWidth: '400px',
    width: '100%',
    height: '350px',
    objectFit: 'cover',
    borderRadius: '8px'
  },
  details: {
    flex: 1,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    gap: '1rem'
  },
  category: {
    backgroundColor: '#e5e7eb',
    color: '#374151',
    padding: '0.2rem 0.6rem',
    borderRadius: '4px',
    alignSelf: 'flex-start',
    fontSize: '0.875rem'
  },
  title: {
    margin: 0,
    color: '#111827'
  },
  description: {
    color: '#4b5563',
    lineHeight: '1.5'
  },
  price: {
    fontSize: '1.75rem',
    fontWeight: 'bold',
    color: '#059669',
    margin: 0
  },
  stock: {
    color: '#6b7280'
  },
  button: {
    padding: '0.75rem 1.5rem',
    backgroundColor: '#2563eb',
    color: '#fff',
    border: 'none',
    borderRadius: '4px',
    fontSize: '1rem',
    cursor: 'pointer',
    alignSelf: 'flex-start'
  },
  message: {
    textAlign: 'center',
    fontSize: '1.2rem',
    margin: '3rem 0',
    color: '#4b5563'
  }
};

export default ProductDetails;