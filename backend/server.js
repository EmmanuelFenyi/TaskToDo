const express = require('express');
const mongoose = require('mongoose');
// const bodyParser = require('body-parser');
const cors = require('cors');
const authRoutes = require('./routes/authRoutes');
const taskRoutes = require('./routes/taskRoutes');

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
// app.use(bodyParser.json());
app.use(cors());

// Connect to MongoDB
// mongoose.connect('mongodb://localhost:27017/taskToDoDB'
mongoose.connect('mongodb://127.0.0.1:27017/taskToDoDB'
// , {
//   useNewUrlParser: true,
//   useUnifiedTopology: true,
// }
)
.then(() => console.log("Connected to MongoDB successfully!"))
.catch((err) => console.log(err.message));
// ;
// mongoose.connection.on('connected', () => {
//   console.log('Connected to MongoDB');
// });

// mongoose.connect(config.mongoUri, { useNewUrlParser: true, useUnifiedTopology: true }
//   )
//   .then(() => console.log("Connected to MongoDB successfully!"))
//   .catch((err) => console.log(err.message));




// Routes
app.use('/api/auth', authRoutes);
app.use('/api/tasks', taskRoutes);

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});