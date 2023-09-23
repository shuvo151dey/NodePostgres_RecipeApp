const express = require('express'),
   path = require('path'),
   bodyParser = require('body-parser'),
   cons = require('consolidate'),
   dust = require('dustjs-helpers'),
   pg = require('pg'),
   app = express();

const connect = 'postgres://postgres:postgres@localhost/recipebookdb';

app.engine('dust', cons.dust);

app.set('view engine', 'dust');
app.set('views', __dirname + "/views");

app.use(express.static(path.join(__dirname, 'public')));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.get('/', (req, res) => {
   // console.log('TEST')
   res.render('index')
})

app.listen(3000, () => {
   console.log('Server live on 3000');
})