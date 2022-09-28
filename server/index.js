const express = require('express')
const cors = require('cors')

const app = express()

app.use(express.json())
app.use(cors())


//add each function to this destructing
const { getPokemon, addPokemon, deletePokemon, updateQuantity} = require('./controller')

app.get('/getPokemon', getPokemon);
app.post('/addPokemon', addPokemon);
app.delete('/deletePokemon/:id', deletePokemon);
app.put('/updateQuantity/:id', updateQuantity);



app.listen(5500, () => console.log('server is running'));
