const express = require('express')
const dataBase = require('./src/infrastructure/db')
const bodyParser = require('body-parser')
const pessoaRouter = require('./src/routes/personRoutes')

const app = express()
const port = 3000

dataBase.sync()

app.use(express.json())
app.use('/person', pessoaRouter)
app.use(bodyParser.urlencoded({ extended: true }))

app.get('/', (req, res) => {
  res.send('Bem-vindo ao sistema de gerenciamento de pessoas!');
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
