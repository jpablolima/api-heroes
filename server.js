const express = require('express')
const app = express()
const listHeroes = require('./routes/heroesRoutes/heroes')
const PORT = 3000


app.use(listHeroes)



app.listen(PORT, () => {
    console.log(`Server running in port: ${PORT}`)

})