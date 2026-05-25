const express = require('express');
const app = express();
const port = 6200;

const ofertas = require('./dados/ofertas.json');
const novos = require('./dados/novos.json');
const seminovos = require('./dados/seminovos.json');

app.set('view engine', 'ejs');
app.use(express.static('public'));

//ROTAS
app.get('/', (req, res) => {
    res.render('index');
});

app.get('/quemsou', (req, res) => {
    res.render('quemsou');

});

app.get('/ofertas', (req, res) => {
    res.render('ofertas', { ofertas });
});

app.get('/novos', (req, res) => {
    res.render('novos', { novos });
});

app.get('/seminovos', (req, res) => {
    res.render('seminovos', { seminovos });
});

//SERVIDOR
app.listen(port, () => {
    console.log(`Servidor rodando em http://localhost:${port}`);
});