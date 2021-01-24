const mongoose = require('mongoose')

const db = mongoose.connect('mongodb://127.0.0.1:27017/heroes', {
    useNewUrlParser: true,
    useUnifiedTopolofy: true

})

module.exports = db.then(() => {
    console.log('Database connection successfully')
})