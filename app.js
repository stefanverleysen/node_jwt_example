const express = require('express');
const bodyParser = require('body-parser');
const dotenv = require('dotenv');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();
const userRoutes = require('./routes/auth');
const leaderboardRoutes = require('./routes/leaderboard');
const rspvRoutes = require('./routes/rsvp');

app.use(express.json())
app.use(cors()); // Enable CORS for the frontend
app.options('*', cors());  // enable pre-flight
app.use(bodyParser.json());


dotenv.config();

app.use('/user', userRoutes);
app.use('/leaderboard', leaderboardRoutes);
app.use('/rspv', rspvRoutes);

// Connect to MongoDB
mongoose.connect(process.env.MONGO_URI)
  .then(() => {
    console.log('Connected to MongoDB');
  })
  .catch(err => console.log(err));


app.listen(process.env.PORT, () => console.log(`Server started on port ${process.env.PORT}`));