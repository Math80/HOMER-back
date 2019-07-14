import express from 'express';
import connection from '../conf';

const router = express.Router();

const bodyParser = require('body-parser');

router.use(bodyParser.json());
router.use(bodyParser.urlencoded({
  extended: true
}));

/* GET index page. */
router.get('/', (req, res) => {
  res.json({
    title: 'Express'
  });
});

router.get('/all', (req, response) => {
  connection.query('SELECT * FROM weirdteam', (err, results) => {
    if (err) {
      response.sendStatus(500);
    } else {
      response.json(results);
    }
  });
});

export default router;
