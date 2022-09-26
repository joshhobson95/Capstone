let pokemon = require('./db.json')
let pokemonId = 4

module.exports = {

    
    getPokemon: (req, res) => {
        res.status(200).send(pokemon)
    },

    addPokemon: (req, res) => {

        const {name, picture, quantity} = req.body


        let newPokemonObject = {
            id: pokemonId,
            name: name,
            picture: picture,
            quantity: quantity,

        }

        pokemon.push(newPokemonObject)


        pokemonId++

        res.status(200).send(pokemon)

    },
    deletePokemon: (req, res) => {
        const index = pokemon.findIndex(el => el.id === +req.params.id)
        //this looks for the id in the pokemonarray and prepares it for deletion

        pokemon.splice(index, 1)

        res.status(200).send(pokemon)
    },
    updateQuantity: (req, res) => {

        const index = pokemon.findIndex(el => el.id === +req.params.id)
        const {type} = req.body

        if(type === 'add'){
            pokemon[index].quantity++
        } else if (type === 'remove') {
            pokemon[index].quantity--
        }
       
        res.status(200).send(pokemon)

    }

}