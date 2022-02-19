const express = require('express');
const cors = require('cors');
const connectDB = require('./config/db');

const app = express();

const authentication = require('./routes/authentication');
const subscription = require('./routes/subscription');

// Body parser
app.use(express.json());

connectDB();

// Cookie parser
// app.use(cookieParser());

app.use('/api/v1/authentication', authentication);
app.use('/api/v1/subscription', subscription);

const PORT = 3000;

const server = app.listen(
  PORT,
  console.log(
    `Server running on port ${PORT}`
  )
);
