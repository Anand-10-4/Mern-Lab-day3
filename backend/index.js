const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

const productRoutes = require('./routes/product.routes');
const Product = require('./models/product.model');

const app = express();

app.use(cors());
app.use(express.json());

// Explicitly handle root and health check
app.get('/health', (req, res) => res.send('OK'));

app.use('/products', productRoutes);

const startServer = async () => {
  let mongoUri = process.env.MONGO_URI || 'mongodb://127.0.0.1:27017/shopkart';

  try {
    await mongoose.connect(mongoUri, { serverSelectionTimeoutMS: 3000 });
    console.log('Connected to local MongoDB');
  } catch (err) {
    console.log('Local MongoDB not found. Starting In-Memory MongoDB...');
    try {
      const { MongoMemoryServer } = require('mongodb-memory-server');
      const mongod = await MongoMemoryServer.create();
      mongoUri = mongod.getUri();
      await mongoose.connect(mongoUri);
      console.log('Connected to In-Memory MongoDB');
    } catch (memErr) {
      console.error('Database connection failed:', memErr.message);
    }
  }

  try {
    const count = await Product.countDocuments();
    if (count === 0) {
      await Product.insertMany([
        {
          name: 'Mechanical Keyboard',
          description: 'RGB mechanical keyboard with blue switches.',
          price: 2999,
          category: 'Electronics',
          image: 'https://images.unsplash.com/photo-1587829741301-dc798b83add3?w=500',
          stock: 10
        },
        {
          name: 'Noise Cancelling Headphones',
          description: 'Wireless over-ear headphones with active noise cancellation.',
          price: 4999,
          category: 'Electronics',
          image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=500',
          stock: 25
        },
        {
          name: 'Cotton T-Shirt',
          description: 'Comfortable 100% cotton t-shirt.',
          price: 499,
          category: 'Fashion',
          image: 'https://images.unsplash.com/photo-1521572267360-ee0c2909d518?w=500',
          stock: 50
        },
        {
          name: 'Ceramic Coffee Mug',
          description: '350ml ceramic mug for coffee or tea.',
          price: 299,
          category: 'Home',
          image: 'https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?w=500',
          stock: 15
        },
        {
          name: 'JavaScript: The Good Parts',
          description: 'Essential guide to unearthing the good features of JS.',
          price: 999,
          category: 'Books',
          image: 'https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?w=500',
          stock: 8
        }
      ]);
      console.log('Seeded database with initial products.');
    }

    const PORT = process.env.PORT || 5000;
    app.listen(PORT, '127.0.0.1', () => {
      console.log(`Server running on http://127.0.0.1:${PORT}`);
    });
  } catch (error) {
    console.error('Error during startup:', error);
  }
};

startServer();