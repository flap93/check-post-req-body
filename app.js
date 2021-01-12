const express = require('express');

const hbs = require('hbs');

require('dotenv').config();

const app = express();
const bodyParser = require('body-parser')
// ****************** require the necessary npm package here: ******************

app.use(express.urlencoded({ extended: true}));

// *****************************************************************************

app.set('views', __dirname + '/views');
app.set('view engine', 'hbs');

app.use(express.static('public'));

app.get('/', (req, res) => {
  res.render('index');
});

// 4.
app.post('/create', (req, res) => {
  const { theAge} = req.body;
console.log(`User's age is ${theAge}`);

});

// 5:
// ... your code here

app.listen(process.env.PORT, () =>
  console.log(`Running on port: ${process.env.PORT}`)
);
