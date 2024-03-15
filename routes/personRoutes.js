const { Router } = require('express')
const pessoaRouter = Router()
const { createPerson, listPerson } = require('../controllers/personController')

pessoaRouter.get('/', listPerson)
pessoaRouter.post('/', createPerson)

module.exports = pessoaRouter;