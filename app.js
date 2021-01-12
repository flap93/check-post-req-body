const express = require('express');
const hbs = require('hbs');
require('dotenv').config();

const app = express();

// ****************** require body-parser here: ******************
// ****************** require the necessary npm package here: ******************
// ... your code here
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: true }));
// *********************************************************

// *****************************************************************************

app.set('views', __dirname + '/views');
app.set('view engine', 'hbs');
app.use(express.static('public'));
app.get('/', (req, res) => {
  res.render('index');
});

// 4.
// ... your code here
app.post('/create', (req, res) => {
  const { userAge } = req.body;
  console.log(`User's input: ${userAge}`);
});

// 5:
// ... your code here
app.post('/new/user', (req, res) => {
  const { firstName, lastName, street, number, city, zip, country } = req.body;
  console.log(
    `User's input:`,
    req.body,
    firstName,
    lastName,
    street,
    number,
    zip,
    country
  );
});

app.listen(process.env.PORT, () =>
  console.log(`Running on port: ${process.env.PORT}`));