const pessoas = require('../models/personModel')

const listPerson = async(req, res) => {
    try{
        const pessoa =  await pessoas.findAll()
        res.send({...pessoa})
    }catch(error){
        res.status(500).send(error)
    }
}

const createPerson = async(req, res) => {
    try {
        const data = {...req.body}
        data.DataNascimento = new Date(data.DataNascimento)
        const pessoa = await pessoas.create({...data})
        res.send({...pessoa.dataValues})
    } catch (error) {
        res.status(500).send(error)
    }
}

module.exports = { listPerson, createPerson};