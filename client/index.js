const baseURL = 'http://localhost:5500'

const showPokemon = document.querySelector('#pokemonDisplay')
const form = document.querySelector('form')


const errCallback = err => console.log(err)
//////////////////////////////////////////////////////////////////// random bounty
const randomBountyButton = document.getElementById('randomBounty')

const getBounty = () => {
  axios.get(`${baseURL}/randomPokemon`)
  .then(res => {
    const data = res.data;
    alert(data);
});
};
randomBountyButton.addEventListener('click', getBounty)

/////////////////////////////////////////////////////////////////////////
//post
const addPokemon = body => axios.post(`${baseURL}/addPokemon`, body).then(displayPokemon).catch(errCallback)
//put
const updateQuantity = (id, type) => axios.put(`${baseURL}/updateQuantity/${id}`, {type}).then(displayPokemon).catch(errCallback)




//Color me//////////////////////////////////////////////////////////////
function colorMe() {
  let pokemonpictures = document.querySelectorAll(".pokemonpicture");
  for( let i = 0; i < pokemonpictures.length; i++ ){
    pokemonpictures[i].addEventListener('click', () =>{
       pokemonpictures[i].classList.remove("grayscale")
      
    })
  }
}
////////////////////////////////////////////////////////////////////////










const getAllPokemon = () => {
    axios.get(`${baseURL}/getPokemon`)
        .then((res) => {
            console.log(res.data)
            displayPokemon(res.data)
            
            colorMe()

            

            
            
            
            
        })
        .catch((err) => {
            console.log(err)
        })
}
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
    let pokemonclass = "pokemonpicture"
    if (pokemon.quantity === 0){
      pokemonclass += " grayscale"

    }
    
    pokemonCard.innerHTML = `
    <br>
    <img src=${pokemon.picture}  id="a${pokemon.id}" class="${pokemonclass}"/>
    <p id "quantity"> You have ${pokemon.quantity} shiny ${pokemon.name} </p> 
    <button  class="addPB" onclick="updateQuantity(${pokemon.id}, 'quantity');">Add </button>
  <br> </br>
    `
    pokemoncontainer.appendChild(pokemonCard)  
}
form.addEventListener('submit', submitHandler)



//////////////////////////////////////////////////////////////////////////////////////////////////////




////////////////////////////////// submit handler
function submitHandler(e) {
  e.preventDefault()

  let name = document.querySelector('#name')
  let picture = document.querySelector('#picture')
  let quantity = document.querySelector('#quantity')

  let bodyObj = {
      name: name.value,
      picture: picture.value,
      quantity: quantity.value   
  }
  addPokemon(bodyObj)
  name.value = ''
  picture.value= ''
  quantity.value = ''
  
}

//////////////////////////

getAllPokemon()
