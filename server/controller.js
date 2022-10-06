
let pokemon = require('./db.json')

let pokemonId = 136

module.exports = {
    
    
    getPokemon: (req, res) => {
        res.status(200).send(pokemon)
    },

    updateQuantity: (req, res) => {
    
        const index = pokemon.findIndex(el => el.id === +req.params.id)
        const {type} = req.body
    
        if(type === 'quantity'){
            pokemon[index].quantity++
            
            res.status(200).send(pokemon)
        } else {
            res.status(400).send('no')
        }

    
    },
 

    addPokemon: (req, res) => {

        const {name, picture, quantity} = req.body


        let newPokemonObject = {
            id: pokemonId,
            name,
            picture,
            quantity,
            
           

        }

        pokemon.push(newPokemonObject)


        pokemonId++

        res.status(200).send(pokemon)

    },

    randomPokemon: (req, res) => {
     
        let randomIndex = Math.floor(Math.random() * pokemon.length)
        let randomPokemon = pokemon[randomIndex]['name']
        

        res.status(200).send(randomPokemon)
    }

 
}