const express = require('express');
const path = require('path');
const app = express();
const port = 3000;

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
    res.render('index');
});

app.get('/doso', (req, res) => {
    res.render('doso');
});

app.get('/ctp', (req, res) => {
    res.render('ctp');
});

app.get('/weatherapp', (req, res) => {
    res.render('weatherapp');
});

app.listen(port, () => {
    console.log(`App running at http://localhost:${port}`);
});

