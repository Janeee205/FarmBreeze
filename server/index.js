const express = require('express');
const app = express();

const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({extended : true}));

app.listen(7000, function () {
  console.log('listening on 7000')
});

app.use(express.static(__dirname))