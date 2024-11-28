const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const connectDB = require('./config/database');
const spintaxRoutes = require('./routes/spintax');

const app = express();
// to access api from all origin - Its configurable
app.use(cors())
const PORT = process.env.PORT || 3000;

// Connect to MongoDB
connectDB();

// Middleware
app.use(bodyParser.json());

// Routes
app.use('/api', [spintaxRoutes]);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
