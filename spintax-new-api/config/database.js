const mongoose = require('mongoose');
require('dotenv').config();
const mongo_uri = process.env.DB_URI

async function connectDB() {
  try {
    console.log('test')
    // await mongoose.connect(`${mongo_uri}`);
    console.log('Atlas MongoDB connected');
  } catch (err) {
    console.log('env', process.env.DB_URI);
    console.error('Failed to connect to MongoDB', err);
    process.exit(1);
  }
}
// 
module.exports = connectDB;


