const mongoose = require('mongoose')


const hero = new mongoose.Schema({

    name: String,
    intelligence: String,
    speed: Number,
    power: Number,

})

let modelHeroes = mongoose.model('hero', hero)
module.exports = modelHeroes;