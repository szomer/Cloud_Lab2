const express = require('express');
const path = require('path');

const app = express();

const port = process.env.PORT || 5000;

app.use(express.static(path.join(__dirname, 'frontend')));

app.listen(port, () => {
  console.log(`Listening on port ${port}...`);
});

app.get('/api/add', (req, res) => {
  var num1 = req.query.number1;
  var num2 = req.query.number2;
  var result = parseInt(num1) + parseInt(num2);
  console.log('res: ' + result);
  res.send(result.toString());
});
app.get('/api/sub', (req, res) => {
  var num1 = req.query.number1;
  var num2 = req.query.number2;
  var result = parseInt(num1) - parseInt(num2);
  console.log('res: ' + result);
  res.send(result.toString());
});
app.get('/api/mul', (req, res) => {
  var num1 = req.query.number1;
  var num2 = req.query.number2;
  var result = parseInt(num1) * parseInt(num2);
  console.log('res: ' + result);
  res.send(result.toString());
});
app.get('/api/div', (req, res) => {
  var num1 = req.query.number1;
  var num2 = req.query.number2;
  var result = parseInt(num1) / parseInt(num2);
  console.log('res: ' + result);
  res.send(result.toString());
});