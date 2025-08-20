// server.js

// Import necessary packages
import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
// Import the database connection function
import connectDB from './config/db.js';
// Import user routes
import userRoutes from './routes/userRoutes.js';

// Load environment variables from .env file
dotenv.config();

// --- Database Connection ---
// Call the function to connect to the database
connectDB();

// Initialize the Express application
const app = express();

// --- Middleware ---
// Enable Cross-Origin Resource Sharing (CORS) to allow our frontend to communicate with the backend
app.use(cors());
// Parse incoming JSON requests. This allows us to access request body data via `req.body`
app.use(express.json());
// Parse URL-encoded data. The `extended: true` option allows for rich objects and arrays to be encoded.
app.use(express.urlencoded({ extended: true }));


// --- API Routes ---
// Mount the user routes at the '/api/users' path.
// Any request starting with '/api/users' will be handled by the userRoutes router.
app.use('/api/users', userRoutes);

// A simple test route to verify the server is running
app.get('/', (req, res) => {
  // res.send() sends a response to the client
  res.send('API is running successfully...');
});


// --- Server Initialization ---
// Define the port the server will listen on.
// It will use the PORT from the .env file, or default to 5000 if it's not defined.
const PORT = process.env.PORT || 5000;

// Start the server and listen for incoming connections on the specified port
app.listen(PORT, () => {
  console.log(`Server is running in ${process.env.NODE_ENV || 'development'} mode on port ${PORT}`);
});
