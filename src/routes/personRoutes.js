const { Router } = require('express')
const pessoaRouter = Router()
const { createPerson, listPerson, deletePerson, updatePerson, getCPF } = require('../controllers/personController')

pessoaRouter.get('/', listPerson)
pessoaRouter.post('/', createPerson)
pessoaRouter.put('/:id', updatePerson)
pessoaRouter.delete('/:id', deletePerson)
pessoaRouter.get('/cpf/:cpf', getCPF)

module.exports = pessoaRouter;