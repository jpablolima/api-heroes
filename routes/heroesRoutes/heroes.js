const express = require('express')
const listHeroes = express.Router()
const db = require('../../services/db')
const heroesModel = require('../../model/HeroesModel')
const fs = require('fs')




listHeroes.get('/', (req, res) => {
    try {
        const Heroes = new heroesModel({
            name: 'Bataman',
            intelligence: '100',
            strength: '99',
            speed: 70,
            power: 80,
            combat: 180,
        })

        Heroes.save()
        res.send('Hero successfully registered')
    } catch {
        res.send('Error when registering')
    }
})


listHeroes.post('/heroes/addnew', (req, res) => {
    const data = fs.readFileSync('./services/dbHeroes.json')
    const heroesJson = JSON.parse(data)
    const bodyRequest = req.body


    heroesJson.heroes.push(bodyRequest)

    fs.writeFileSync('./services/dbHeroes.json', JSON.stringify(heroesJson))
    res.send('Heroes insert sucess!')

})

listHeroes.get('/heroes/:id', (req, res) => {
    const idHeroes = req.params.id;
    let heroesSearch = ''

    const data = fs.readFileSync('./services/dbHeroes.json')
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
    const data = fs.readFileSync('./services/dbHeroesMarvel.json')
    const dataHeroesJson = JSON.parse(data)
    res.send(dataHeroesJson)


})

listHeroes.get('/dc', (req, res) => {
    const data = fs.readFileSync('./services/dbHeroesDC.json')
    const dataHeroesJson = JSON.parse(data)
    res.send(dataHeroesJson)
})



module.exports = listHeroes