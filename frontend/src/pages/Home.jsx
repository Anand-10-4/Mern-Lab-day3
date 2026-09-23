import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div style={{ textAlign: 'center', padding: '4rem 1rem' }}>
      <h1>Welcome to ShopKart</h1>
      <p>Discover our wide collection of items at unbeatable prices.</p>
      <Link to="/products" style={{ display: 'inline-block', marginTop: '1rem', padding: '0.75rem 1.5rem', backgroundColor: '#2563eb', color: '#fff', textDecoration: 'none', borderRadius: '4px' }}>
        Explore Catalog
      </Link>
    </div>
  );
};

export default Home;