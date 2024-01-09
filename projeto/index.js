const express = require('express');
const cursos = require('./cursos');
const listaCursos = ['Informática', 'Eletrotécnica', 'Administração'];
const alunos = [
    {nome:'Rafael', idade: 20},
    {nome:'Juliana', idade: 18},
    {nome:'Tenilton', idade: 21}
]
const app = express();
app.set('view engine', 'ejs')

//app.use('/static', express.static('public')) Para mudar diretório do css
app.use(express.static('public'))
app.use('/cursos', cursos);

app.use(express.urlencoded({ extended: true}))

app.post('/enviar_dados', (req,res) =>{
    console.log('Dados recebidos!');
    console.log('Nome: ', req.body.nome);
    console.log('E-mail: ', req.body.email);
});

app.get('/', function(req, res){
    res.render('index', {cursos: listaCursos});
    //res.render('index', {title: 'Botafogo fora do G4'})
    //res.sendFile(__dirname + '/index.html')
    //res.send('Página principal')
});

app.get('/alunos', function(req, res){
    res.render('alunos', {alunos});
    //res.render('index', {title: 'Botafogo fora do G4'})
    //res.sendFile(__dirname + '/index.html')
    //res.send('Página principal')
});

app.listen(3000, () => {
    console.log('Servidor executando na porta 3000')
});