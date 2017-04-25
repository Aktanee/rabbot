const express = require('express')
const bodyParser = require('body-parser')
const {
  connector,
  bot
} = require('./src/bot/index')

const app = express()

app.use(bodyParser.json())

app.get('/', function (req, res) {
  res.send('Hello World!');
});

app.post('/api/messages', connector.listen())

app.listen(3978, () => {
  console.log('Running at 3978');
})