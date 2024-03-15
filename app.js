const express = require('express')
const dataBase = require('./infrastructure/db')
const bodyParser = require('body-parser')
const pessoaRouter = require('./routes/personRoutes')

const app = express()
const port = 3000

dataBase.sync()

app.use(express.json())
app.use('/person', pessoaRouter)
app.use(bodyParser.urlencoded({extended: true}))


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
