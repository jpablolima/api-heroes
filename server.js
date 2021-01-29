const express = require('express')
const listHeroes = require('./routes/heroesRoutes/listHeroes')
const bodyParser = require('body-parser')

const app = express()
const PORT = 3000

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(listHeroes)



app.listen(PORT, () => {
    console.log(`Server running in port: ${PORT}`)

})