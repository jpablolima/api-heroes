const mongoose = require('mongoose')


const heroes = new mongoose.Schema({

    name: String,
    intelligence: String,
    speed: Number,
    power: Number,

})

let modelHeroes = mongoose.model('Hero', heroes)
module.exports = modelHeroes;