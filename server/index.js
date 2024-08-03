const path = require('path');
const express = require('express');
const productRouter = require('./routes/products');

const app = express();
const PORT = 3000;

//define where to serve express static files
app.use(express.static(path.resolve(__dirname, '../dist')));

//express json
app.use(express.json());

//when getting to the /api/products endpoint, invoke productRouter
app.use('/api/products', productRouter);
//     , (req, res) => { //productRouter);
//     return res.status(200).json(res.locals.queryResult);
// });

//serve indexhtml when a GET requeset is made to localhost:3000
app.get('/', (req, res) => {
    res.sendFile(path.resolve(__dirname, '../dist/index.html'));
});

//catch-all 404 handler for paths not defined
app.use((req, res) => {return res.status(404).send('This is not the page you\'re looking for')});

//default error handler
app.use((err, req, res, next) => {
    const defaultErr = {
      log: 'Express error handler caught unknown middleware error',
      status: 500,
      message: { err: 'An error occurred' },
    };
    const errorObj = Object.assign({}, defaultErr, err);
    console.log(errorObj.log);
    return res.status(errorObj.status).json(errorObj.message);
});


app.listen(PORT, () => {
    console.log(`Server is running on port: ${PORT}...`);
})

module.exports = app