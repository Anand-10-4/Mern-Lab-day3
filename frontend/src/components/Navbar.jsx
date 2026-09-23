import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav style={styles.nav}>
      <Link to="/products" style={styles.brand}>🛒 ShopKart</Link>
      <div style={styles.links}>
        <Link to="/home" style={styles.link}>Home</Link>
        <Link to="/products" style={styles.link}>Products</Link>
      </div>
    </nav>
  );
};

const styles = {
  nav: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '1rem 2rem',
    backgroundColor: '#1f2937',
    color: '#ffffff'
  },
  brand: {
    fontSize: '1.5rem',
    fontWeight: 'bold',
    color: '#ffffff',
    textDecoration: 'none'
  },
  links: {
    display: 'flex',
    gap: '1.5rem'
  },
  link: {
    color: '#d1d5db',
    textDecoration: 'none',
    fontSize: '1rem'
  }
};

export default Navbar;