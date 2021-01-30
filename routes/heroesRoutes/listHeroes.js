const express = require('express')
const listHeroes = express.Router()
const db = require('../../services/db')
const heroesModel = require('../../model/HeroesModel')



listHeroes.get('/', (req, res) => {
    res.send('Home')

})

listHeroes.get('/heroes/all', (req, res) => {

    heroesModel.find({}).then((response) => {
        res.send(response)
    }).catch((err) => {
        res.send(err)
    })
})

listHeroes.post('/heroes/addnew', (req, res) => {
    if (req.body.name == "" || req.body.intelligence == "" || req.body.speed == "" || req.body.power == "") {
        res.send('Informe todos os dados')
        return
    }

    const newHeroes = new heroesModel({
        name: req.body.name,
        intelligence: req.body.intelligence,
        speed: req.body.speed,
        power: req.body.power
    })

    newHeroes.save().then(() => {
        res.send('Hero successfully registered ')
    }).catch((err) => {
        res.send('Registered hero error' + err)
    })


})


listHeroes.put('/heroes/edit/:id', (req, res) => {
    const idHeroes = req.params.idHeroes
    if (idHeroes == "" || idHeroes == null || idHeroes == undefined) {
        res.send('Id not found! ')
        return
    }

    const newHeroes = {
        name: req.body.name,
        intelligence: req.body.name,
        speed: req.body.speed,
        power: req.body.power
    }

    heroesModel.update({ _id: idHeroes }, newHeroes)
        .then(() => { res.send('Hero updated successfully!') })
        .catch((err) => { res.send('Error updating hero!' + err) })
})



listHeroes.delete('/hereos/delete/:id', (req, res) => {
    const idHeroes = req.params.id

    heroesModel.deleteOne({ _id: idHeroes })
        .then(() => { res.send('Hero successfully deleted') })
        .catch((err) => { res.send('Error deleting hero') + err })

})


module.exports = listHeroes;