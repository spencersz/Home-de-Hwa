const db = require('../models/store.js');


// create an empty object

const productsController = {};

productsController.getData = async (req, res, next) => {
    console.log('hit productsController.getData');
    try{
    const SQL_QUERY = `SELECT * FROM inventory`;
    const result = await db.query(SQL_QUERY);
    res.locals.queryResult = result.rows;
    console.log('res.locals.queryResult: ', res.locals.queryResult);
    return next();
    } catch (err) {
        console.log('err: ', err);
        return next({
            log: 'Error fetching data from database',
            status: 500, 
            message: { err: 'A database error occurred' }
        });
    }
};

module.exports = productsController;

// add properties onto that object that are your middleware functions


// export default the main objecy

