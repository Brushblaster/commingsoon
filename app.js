const express = require('express');
const app = express();

const Host = process.env.HOST || '127.0.0.1'
const Port = process.env.PORT || 3000

app.use(express.static(__dirname + '/public'))

app.get('/', function (req, res) {
  res.send('public/index.html')
})

app.listen(Port, Host, function () {
  console.log(`Example app listening to ${Host}:${Port}`)
})

