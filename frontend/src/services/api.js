const API_BASE_URL = '/api';

export const fetchProducts = async (search = '', category = '', sort = '') => {
  const params = new URLSearchParams();
  if (search && search.trim() !== '') params.append('search', search.trim());
  if (category && category !== 'All Categories') params.append('category', category);
  if (sort && sort.trim() !== '') params.append('sort', sort);

  const queryString = params.toString();
  const url = queryString ? `${API_BASE_URL}/products?${queryString}` : `${API_BASE_URL}/products`;

  const response = await fetch(url);
  if (!response.ok) {
    throw new Error('Failed to fetch products');
  }
  return response.json();
};

export const fetchProductById = async (id) => {
  const response = await fetch(`${API_BASE_URL}/products/${id}`);
  if (!response.ok) {
    throw new Error('Failed to fetch product details');
  }
  return response.json();
};