const { Sequelize } = require('sequelize')

const dataBase = new Sequelize({
    dialect: 'sqlite',
    storage: './database.sqlite'
})

module.exports = dataBase;