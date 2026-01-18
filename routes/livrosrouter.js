const express = require('express');
const router = express.Router();
const Livrocontroller = require('../controllers/livrocontroller.js');


router.post('/', Livrocontroller.criarlivro);

router.get('/', Livrocontroller.listarlivros);


router.get('/:id', Livrocontroller.buscarlivrobyid);

router.put('/:id', Livrocontroller.atualizarlivro);


router.delete('/:id', Livrocontroller.removerlivro);

module.exports = router;