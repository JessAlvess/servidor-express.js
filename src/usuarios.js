const express = require('express')
const app = express()

const usuarios = [
    {id: 11, nome: 'Joao', idade: 23},
    {id: 2, nome: 'maria', idade: 18},
    {id: 4, nome: 'ana', idade: 30},
    {id: 1, nome: 'rodrigo', idade: 17},
    {id: 123, nome: 'james', idade: 25}
]

app.get('/', (req, res) => {
    res.send(usuarios)
})

app.listen(3000)