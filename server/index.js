const express = require('express')
const cors = require('cors')

const app = express()

app.use(express.json())
app.use(cors())



const { getPokemon, addPokemon, updateQuantity, randomPokemon} = require('./controller')

app.get('/getPokemon', getPokemon);
app.post('/addPokemon', addPokemon);

app.put('/updateQuantity/:id', updateQuantity);
app.get('/randomPokemon', randomPokemon);





app.listen(5500, () => console.log('server is running'));
