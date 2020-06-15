const express = require('express');
const app = express();
const mongooDb = require('./config/mongoose');
const userRoute = require('./route/users_router');
const katagoriRouter = require('./route/kategori_route');
const dotenv = require('dotenv/config');

app.use(express.json());
//Greating Middle
app.get('/', (req, res) => {
  res.status(200).json({
    name: 'Sayur App',
  });
});

app.use('/users', userRoute);
app.use('/katagori', katagoriRouter);

//run host and port app
app.listen(process.env.PORT, () => {
  //checking error when connecting database
  const connection = mongooDb.connection;
  connection.on('error', (error) => {
    console.log(error);
  });
  console.log('Magic At ' + process.env.HOST + ':' + process.env.PORT);
});
