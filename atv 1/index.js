const express = require('express'); // Importar biblioteca express
const app = express(); // Criar uma aplicação expresss

//Folha de estilo / Arquivo estáticos
app.use(express.static('public'));
//Motor de visualização
app.set('view engine', 'ejs');

//Cria rota para a raiz do site
app.get('/', function(req, res) {
    //res.send('i love honey')
    //res.sendFile(__dirname + '/pgn/index.html');
    res.render('index', {nome: 'Samuel'});
    
});
app.get('/ifpi', function(req, res) {
    //res.send('Você acessou a porta do ifpi');
    res.sendFile(__dirname + '/pgn/ifpi.html');
});
app.get('/samuel', function(req, res) {
    //res.send('Você acessou a minha página pessoal');
    res.sendFile(__dirname + '/pgn/pessoal.html');
    
});
app.post('/receber_dados' )
//porta do servidor
app.listen(3000, () => {
    console.log('Mel');
});