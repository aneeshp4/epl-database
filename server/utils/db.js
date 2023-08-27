import { createPool } from 'mysql';
import { config as dotenvConfig } from 'dotenv';

// .env configuration
dotenvConfig();

// Database configuration
const dbConfig = {
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DATABASE
};

// Create a connection pool
const pool = createPool(dbConfig);

// Utility function to execute a query
const query = (sql, values) => {
    return new Promise((resolve, reject) => {
        pool.getConnection((err, connection) => {
            if (err) {
                reject(err);
                return;
            }

            connection.query(sql, values, (err, results) => {
                connection.release();

                if (err) {
                    reject(err);
                    return;
                }

                resolve(results);
            });
        });
    });
};

export default query;

// TEST
// (async () => {
//     try {
//       const testResults = await query('SELECT * FROM Team');
//       console.log('Test query result:', testResults);
//     } catch (error) {
//       console.error('Test query error:', error);
//     }
//   })();
