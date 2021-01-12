const express = require('express');

const hbs = require('hbs');

require('dotenv').config();

const app = express();

// ****************** require the necessary npm package here: ******************

const mongoose  = require('mongoose');

// *****************************************************************************

app.set('views', __dirname + '/views');
app.set('view engine', 'hbs');

app.use(express.static('public'));

app.get('/', (req, res) => {
  res.render('index');
});

// 4.
app.post('/theAge', (req, res) => {
console.log(req.query.theAge);
res.render('index');


} )

// 5:
// ... your code here

app.listen(process.env.PORT, () =>
  console.log(`Running on port: ${process.env.PORT}`)
);
