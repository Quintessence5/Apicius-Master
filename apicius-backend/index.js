const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 5010;

// Import routes
const userRoutes = require('./routes/userRoutes');
const recipeRoutes = require('./routes/recipeRoutes');
const ingredientRoutes = require('./routes/ingredientRoutes');
const unitsRoutes = require('./routes/unitsRoutes'); // Import the new units route

// Middleware setup
app.use(cors());
app.use(bodyParser.json());

// Route setup
app.use('/api/users', userRoutes);
app.use('/api/recipes', recipeRoutes);
app.use('/api/ingredients', ingredientRoutes);
app.use('/api/units', unitsRoutes); // Add units route

// Test route
app.get('/', (req, res) => {
    res.send('Apicius Backend is Running');
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
