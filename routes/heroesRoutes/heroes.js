const express = require('express')
const listHeroes = express.Router()
const fs = require('fs')

listHeroes.get('/', (req, res) => {
    const data = fs.readFileSync('./services/db.json')
    const dataHeroesJson = JSON.parse(data)
    res.send(dataHeroesJson)
})

listHeroes.get('/marvel', (req, res) => {
    res.send('Marvel')

})

listHeroes.get('/dc', (req, res) => {
    res.send('DC')
})



module.exports = listHeroes