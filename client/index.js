const baseURL = 'http://localhost:5500'

const showPokemon = document.querySelector('#pokemonDisplay')



const getAllPokemon = () => {
    axios.get(`${baseURL}/getPokemon`)
        .then((res) => {
            console.log(res.data)
            displayPokemon(res.data)
        })
        .catch((err) => {
            console.log(err)
        })
}
////////////////////////////////// submit handler
function submitHandler(e) {
  e.preventDefault()
  let quantity = document.querySelector('#quantity')


  let bodyObj = {
      
   
      quantity: quantity.value,
     
  }

  createPokemon(bodyObj)

 
  
  quantity.value = ''
  
}
////////////////////////////// callback
const updatequantitycb = ({ data: pokemon }) => displayPokemon(pokemon);
const errCallback = err => console.log(err)

//////////////////////////
const displayPokemon = (arr) => {
    for(let i =0; i < arr.length; i++){
        createPokemonCard(arr[i])
    }
}
////////// creates a card for each pokemon

///actualy function to add the innerHTML
const createPokemonCard = (pokemon) => {
    const pokemonCard = document.createElement('section')
    pokemonCard.classList.add('pokemon-card')

    pokemonCard.innerHTML = `
    <img src=${pokemon.picture} alt='pokemon image'/>
    <p>${pokemon.name}</p>
    <p>${pokemon.id}</p>
    <p id "quantity"> Quantity is ${pokemon.quantity}</p>
    <button onclick="updateQuantity(${pokemon.id}, 'quantity')">Add One Pokemon to Quantity</button>



    
       
    `
pokemoncontainer.appendChild(pokemonCard)
}





const updateQuantity = (id, type) => axios.put(`${baseURL}/updateQuantity/${id}`, {type}).then(updatequantitycb).catch(errCallback)



// const updateQuantity = (id, type) => {
//     axios.put(`${baseURL}/${id}`, {type})
//         .then((res) => {
//             showPokemon.innerHTML = `${pokemon.quantity}`
//             displayPokemon(res.data)
//         })
// }

////////////////////////////////////
//using template literal and . notation to acess data from db.json to add to each card

//skipped delete for now
// section revised with ids
// {/* <section>
//             <button onclick="updateDrink(${drink.id}, 'dislike')">Dislike</button>
//             Popularity: ${drink.likes}
//             <button onclick="updateDrink(${drink.id}, 'like')">Like</button>
// </section> */}





// <section id="suggestionBox">
//             <h3>What drink would you like to see?</h3>
//             <input id='nameInput' placeholder="Name"/>
//             <input id='flavorInput' placeholder="Flavor"/>
//             <input id='imageInput' placeholder="Image URL"/>
//             <button id="addDrink">Submit</button>
//         </section>
// const addButton = document.querySelector('#addDrink')










// const addDrink = () => {

//     let nameInput = document.querySelector('#nameInput')
//     let flavorInput = document.querySelector('#flavorInput')
//     let imageInput = document.querySelector('#imageInput')

//     let newDrink = {
//         name: nameInput.value,
//         flavor: flavorInput.value,
//         picture: imageInput.value
//     }

//     axios.post(`${baseURL}/addDrink`, newDrink)
//     .then((res) => {
//         showDrinks.innerHTML = ''

//         nameInput.value = ''
//         flavorInput.value = ''
//         imageInput.value = ''

//         displayDrinks(res.data)
//     })
// }











getAllPokemon()