const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const helmet = require('helmet');
const morgan = require('morgan');
const app = express();
const userRoute = require('./routes/users');
const authRoute = require('./routes/auth');
const postRoute = require('./routes/posts');

dotenv.config();
//connete to database
mongoose.connect(process.env.MONGO_URL)
.then(()=> {
    console.log('connected to MongoDB');
})
.catch((err) => { console.log(err); });
//middleware
app.use(express.json());
app.use(helmet());
app.use(morgan('common'));

app.use('/API/users', userRoute);
app.use('/API/auth', authRoute);
app.use('/API/posts', postRoute);

app.listen(8800);