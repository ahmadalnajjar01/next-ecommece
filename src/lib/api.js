// lib/api.js
import axios from 'axios';

export async function getProducts() {
  // Common function to fetch all products
  const res = await axios.get('https://fakestoreapi.com/products');
  return res.data;
}

export async function getProductById(id) {
  // Fetch a single product by id
  const res = await axios.get(`https://fakestoreapi.com/products/${id}`);
  return res.data;
}
