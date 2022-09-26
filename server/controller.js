const pokemon = require('./db.json')

module.exports = {
    getPokemon: (req, res) => {
        res.status(200).send(pokemon)
    }
}