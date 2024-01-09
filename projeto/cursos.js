// cursos.js - Rotas de Cursos
var express = require('express');
var router = express.Router();
// Rota para consultar cursos
router.get('/', function(req, res){
    res.send('Lista de cursos.');
});
// Rota para cadastrar curso
router.post('/', function(req, res){
    res.send('Curso cadastrado!');
});
// Rota para consultar um aluno por id
router.get('/docentes', function(req, res){
    res.send('Lista de docentes.');
});
const listaCursos = ['Informática', 'Eletrotécnica', 'Administração'];
module.exports = router;
