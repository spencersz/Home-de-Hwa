const { Pool } = require('pg');

const PG_URI = 'postgresql://postgres.eytbcusbpxersdpuqdku:CodesmithFTRI49@aws-0-us-west-1.pooler.supabase.com:6543/postgres';

const pool = new Pool({
    connectionString: PG_URI
});

module.exports = { 
    query: (test, params, callback) => {
        console.log('executed query');
        return pool.query(test, params, callback);
    }
};