// index.js

const express = require('express');
const app = express();
const bfhlRoutes = require('./routes/bfhlRoutes');
const errorHandler = require('./middlewares/errorMiddleware');  // Optional

const PORT = process.env.PORT || 3000;

// Middleware to parse JSON
app.use(express.json());

// Routes
app.use('/api', bfhlRoutes);

// Error Handling Middleware (Optional)
app.use(errorHandler);

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
