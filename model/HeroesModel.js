const mongoose = require('mongoose')

const heroes = new mongoose.Schema({

    name: String,
    intelligence: String,
    strength: String,
    speed: Number,
    power: Number,
    combat: Number,
})

let modelHeroes = mongoose.model('Hero', heroes)
module.exports = modelHeroes;