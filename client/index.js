const baseURL = 'http://localhost:5500'

const showPokemon = document.querySelector('#pokemonDisplay')
const form = document.querySelector('form')


const errCallback = err => console.log(err)
/////////////////////////////////////////////////////////////////////////
//post
const addPokemon = body => axios.post(`${baseURL}/addPokemon`, body).then(displayPokemon).catch(errCallback)
//put
const updateQuantity = (id, type) => axios.put(`${baseURL}/updateQuantity/${id}`, {type}).then(displayPokemon).catch(errCallback)

//get
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

//   let id = document.querySelector('#id')
  let name = document.querySelector('#name')
  let picture = document.querySelector('#picture')
  let quantity = document.querySelector('#quantity')

  


  let bodyObj = {
    //   id: id.value,
      name: name.value,
      picture: picture.value,
      quantity: quantity.value
     
  }

  addPokemon(bodyObj)

 
//   id.value = ''
  name.value = ''
  picture.value= ''
  quantity.value = ''
  
}

//////////////////////////
const displayPokemon = (arr) => {
    for(let i =0; i < arr.length; i++){
        createPokemonCard(arr[i])
    }
}
////////// creates a card for each pokemon

///actual function to add the innerHTML
const createPokemonCard = (pokemon) => {
    const pokemonCard = document.createElement('section')
    pokemonCard.classList.add('pokemon-card')

    pokemonCard.innerHTML = `
    <img src=${pokemon.picture}  id="${pokemon.id}"/>
    <p>${pokemon.name}</p>
    <p>${pokemon.id}</p>
    <p id "quantity"> Quantity is ${pokemon.quantity}</p>
    <button onclick="updateQuantity(${pokemon.id}, 'quantity')">Add One Pokemon to Quantity</button>



    
       
    `
pokemoncontainer.appendChild(pokemonCard)
}


form.addEventListener('submit', submitHandler)

//////////////////////////////////////////////////////////////////////////////////////////////////////






// function colorMe() {

//   var element = document.getElementById(`${pokemon.id}`);
//   element.classList.toggle("grayscale");
//   console.log('click');

// }
// var pictureClick = document.querySelector(`#${pokemon.id}`);
// pictureClick.addEventListener("click", colorMe);
















getAllPokemon()
