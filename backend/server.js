const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const authRoutes = require('./routes/authRoutes');
const taskRoutes = require('./routes/taskRoutes');

require('dotenv').config();

const app = express();
const { MONGODB_URI } = process.env;
const PORT = process.env.PORT || 5000;

// Middleware
app.use(express.json());
app.use(cors());

// Connect to MongoDB
// mongoose.connect(process.env.MONGODB_URI /*|| 'mongodb://127.0.0.1:27017/taskToDoDB'*/
mongoose.connect(MONGODB_URI /*|| 'mongodb://127.0.0.1:27017/taskToDoDB'*/
)
.then(() => console.log("Connected to MongoDB successfully!"))
.catch((err) => console.log(err.message));

// Routes
app.use('/api/auth', authRoutes);
app.use('/api/tasks', taskRoutes);

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});