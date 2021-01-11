const express = require('express')
const listHeroes = express.Router()
const fs = require('fs')

listHeroes.get('/', (req, res) => {
    const data = fs.readFileSync('./services/db.json')
    const dataHeroesJson = JSON.parse(data)
    res.send(dataHeroesJson)
})


listHeroes.post('/heroes/addnew', (req, res) => {
    const data = fs.readFileSync('./services/db.json')
    const heroesJson = JSON.parse(data)
    const bodyRequest = req.body


    heroesJson.heroes.push(bodyRequest)

    fs.writeFileSync('./services/db.json', JSON.stringify(heroesJson))
    res.send('Heroes insert sucess!')

})

listHeroes.get('/heroes/:id', (req, res) => {
    const idHeroes = req.params.id;
    let heroesSearch = ''

    const data = fs.readFileSync('./services/db.json')
    const heroesJson = JSON.parse(data)
    heroesJson.heroes.map(index => {
        if (index.id == idHeroes) {
            heroesSearch = index
        }
    })
    if (heroesSearch != "") {
        res.send(heroesSearch)
    } else {
        res.send('Product not found!')
    }
})






listHeroes.get('/marvel', (req, res) => {
    res.send('Marvel')

})

listHeroes.get('/dc', (req, res) => {
    res.send('DC')
})



module.exports = listHeroes