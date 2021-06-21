const express = require('express');
const bodyParser = require('body-parser');

const response = require ('./network/response');

const router = express.Router();

var app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use(router);

/* app.use('/', (req, res) => {
    res.send('Hola');
}) */

router.get('/message', (req, res) => {
    console.log(req.headers);
    res.header({
        "custom-header": "Nuestro valor personalizado",
    })
    // res.send('Msg List');
    response.success(req, res, 'Message List');
});

router.post('/message', (req, res) => {
    // res.status(201).send([{error: '', body: 'Creado correctamente'}]);
    if(req.query.error == 'ok') {
        response.error(req, res, 'Error inesperado', 500, 'Es solo una simulacion de los errores');
    } else {
        response.success(req, res, 'Creado correctamente', 201)
    }
});

router.delete('/message', (req, res) => {
    console.log(req.query);
    console.log(req.body);
    res.send('Msg ' + req.body.text + ' deleted correctly');
});

app.use('/app', express.static('public'));

app.listen(3000);
console.log('La aplicacion esta escuchando en http://localhost:3000');