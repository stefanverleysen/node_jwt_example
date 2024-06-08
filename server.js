// const express = require('express');
// const mongoose = require('mongoose');
// const bodyParser = require('body-parser');
// const cors = require('cors');
// const dotenv = require('dotenv');
// const authRoutes = require('./routes/auth'); // Ensure this path is correct

// dotenv.config();

// const app = express();
// const PORT = 6000;

// // Middleware

// // Routes
// app.use('/api/auth', authRoutes);

// // Example of a protected route
// app.get('/api/protected', (req, res) => {
//   res.json({ msg: 'This is a protected route' });
// });

// // Connect to MongoDB
// mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
//   .then(() => {
//     console.log('Connected to MongoDB');
//     app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
//   })
//   .catch(err => console.log(err));
