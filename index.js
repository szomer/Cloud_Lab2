const express = require('express');
const path = require('path');

const app = express();

const port = process.env.PORT || 3000;

app.use(express.static('/frontend'));

app.listen(port, () => {
  console.log(`Listening on port ${port}...`);
});

app.get('/api/add', (req, res) => {

});
app.get('/api/sub', (req, res) => {

});
app.get('/api/mul', (req, res) => {

});
app.get('/api/div', (req, res) => {

});