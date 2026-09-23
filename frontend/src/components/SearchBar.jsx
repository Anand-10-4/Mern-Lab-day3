import React from 'react';

const SearchBar = ({ search, setSearch, category, setCategory, sort, setSort }) => {
  return (
    <div style={styles.container}>
      <input
        type="text"
        placeholder="Search products..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        style={styles.input}
      />
      <select value={category} onChange={(e) => setCategory(e.target.value)} style={styles.select}>
        <option value="All Categories" style={styles.option}>All Categories</option>
        <option value="Electronics" style={styles.option}>Electronics</option>
        <option value="Fashion" style={styles.option}>Fashion</option>
        <option value="Books" style={styles.option}>Books</option>
        <option value="Home" style={styles.option}>Home</option>
      </select>
      <select value={sort} onChange={(e) => setSort(e.target.value)} style={styles.select}>
        <option value="" style={styles.option}>Sort By</option>
        <option value="price_asc" style={styles.option}>Price: Low to High</option>
        <option value="price_desc" style={styles.option}>Price: High to Low</option>
      </select>
    </div>
  );
};

const styles = {
  container: {
    display: 'flex',
    gap: '1rem',
    marginBottom: '2rem',
    flexWrap: 'wrap'
  },
  input: {
    flex: 2,
    padding: '0.6rem 1rem',
    borderRadius: '4px',
    border: '1px solid #d1d5db',
    fontSize: '1rem',
    backgroundColor: '#ffffff',
    color: '#111827'
  },
  select: {
    flex: 1,
    padding: '0.6rem 1rem',
    borderRadius: '4px',
    border: '1px solid #d1d5db',
    fontSize: '1rem',
    backgroundColor: '#ffffff',
    color: '#111827',
    cursor: 'pointer'
  },
  option: {
    backgroundColor: '#ffffff',
    color: '#111827'
  }
};

export default SearchBar;