const express = require('express')
const cors = require('cors')

const app = express()

app.use(express.json)
app.use(cors())



const{ getPokemon } = require('./controller')

app.get('/getPokemon', getPokemon)

app.listen(4567, () => console.log('server is running'))