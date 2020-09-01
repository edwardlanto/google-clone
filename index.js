const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const path = require('path');
const mongoKey = require('./keys');

require('dotenv').config();

const app = express();
const port = process.env.PORT || 5000;

const uri = mongoKey.dev;
mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true });

const connection = mongoose.connection;
connection.once('open', () => {
	console.log('Mongoose Connection good');
});

// serves the built version of your react app
app.use(express.static(path.join(__dirname, '/fe/build')));
app.get('*', (req, res) => {
	res.sendFile(path.join(__dirname + '/fe/build/index.html'));
});

app.use(cors());
app.use(express.json());

const excerciseRouter = require('./routes/excercises');
const userRouter = require('./routes/users');

app.use('/excercises', excerciseRouter);
app.use('/users', userRouter);

app.listen(port, () => {
	console.log(`Server is running on ${port}`);
});