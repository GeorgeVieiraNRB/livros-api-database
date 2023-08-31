const express = require('express');
const router = express.Router();


const LivroController = require('./controllers/LivroController');

router.get('/livros',LivroController.buscarTodos);
router.get('/livro/:codigo',LivroController.buscarUm);
router.post('/livro',LivroController.inserir);
router.put('/livro/:codigo',LivroController.alterar);
router.delete('/livro/:codigo',LivroController.excluir);
module.exports = router;