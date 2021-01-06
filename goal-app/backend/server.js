const express = require('express');
const cors = require('cors');

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

const mongoose = require('mongoose');

require('dotenv').config();

const uri = process.env.ATLAS_URI;
mongoose.connect(uri, { useNewUrlParser: true, useCreateIndex: true });
const connection = mongoose.connection;
connection.once('open', () => {
	console.log('MongoDB database connection established successfully');
});

const goalsRoutes = require('./routes/goals.routes');
//const usersRoutes = require('./routes/users.routes.js');

app.use('/goals', goalsRoutes);
//app.use('/users', usersRoutes);

app.listen(port, () => {
	console.log(`Server is listening on port: ${port}`);
});
