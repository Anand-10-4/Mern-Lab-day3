import React, { useState, useEffect } from 'react';
import { fetchProducts } from '../services/api';
import ProductCard from '../components/ProductCard';

const Products = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const [search, setSearch] = useState('');
  const [category, setCategory] = useState('');
  const [sort, setSort] = useState('');

  useEffect(() => {
    const loadProducts = async () => {
      try {
        setLoading(true);
        const data = await fetchProducts(search, category, sort);

        // Ensure data is always an array before setting state
        if (Array.isArray(data)) {
          setProducts(data);
        } else if (data && Array.isArray(data.products)) {
          setProducts(data.products);
        } else if (data && Array.isArray(data.data)) {
          setProducts(data.data);
        } else {
          setProducts([]);
        }

        setError(null);
      } catch (err) {
        setError('Something went wrong while loading products.');
      } finally {
        setLoading(false);
      }
    };

    loadProducts();
  }, [search, category, sort]);

  return (
    <div className="app-container">
      <h1 className="page-title">Product Catalog</h1>

      <div className="filter-bar">
        <input
          type="text"
          className="filter-input"
          placeholder="Search products..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />

        <select
          className="filter-select"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
        >
          <option value="">All Categories</option>
          <option value="Electronics">Electronics</option>
          <option value="Fashion">Fashion</option>
          <option value="Home">Home</option>
          <option value="Books">Books</option>
        </select>

        <select
          className="filter-select"
          value={sort}
          onChange={(e) => setSort(e.target.value)}
        >
          <option value="">Sort By</option>
          <option value="price_asc">Price: Low to High</option>
          <option value="price_desc">Price: High to Low</option>
        </select>
      </div>

      {loading && <p style={{ color: 'var(--text-muted)' }}>Loading products...</p>}
      {error && <p style={{ color: '#FF4D4D' }}>{error}</p>}

      {!loading && !error && (
        <div className="product-grid">
          {Array.isArray(products) && products.length > 0 ? (
            products.map((product) => (
              <ProductCard key={product._id || product.id} product={product} />
            ))
          ) : (
            <p style={{ color: 'var(--text-muted)' }}>No products found.</p>
          )}
        </div>
      )}
    </div>
  );
};

export default Products;