const express = require('express');

const app = express();

app.get('/', (req, res) => {
  console.log('ff')
  res.sendFile(__dirname+'/index.html')
});
app.get('/click', (req, res) => {
  res.sendFile(__dirname+'/click.png')
});

app.listen(3000, () => {
  console.log('server started');
});