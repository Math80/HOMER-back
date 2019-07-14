import mysql from 'mysql';

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'TotoToto',
  database: 'homerodyssey',
});

export default connection;
