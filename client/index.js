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


  let name = document.querySelector('#name')
  let picture = document.querySelector('#picture')
  let quantity = document.querySelector('#quantity')

  


  let bodyObj = {

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
    <br>
    <img src=${pokemon.picture}  id="${pokemon.id}"/>
    <p>${pokemon.name}</p>
    <p>${pokemon.id}</p>
    <p id "quantity"> Quantity is ${pokemon.quantity}</p>

  
    <button onclick="updateQuantity(${pokemon.id}, 'quantity'); toggleClass()">Add One Pokemon to Quantity</button>

<br>     
    `
pokemoncontainer.appendChild(pokemonCard)
}


form.addEventListener('submit', submitHandler)

//////////////////////////////////////////////////////////////////////////////////////////////////////



// const image = document.querySelector('.grayscale');


// function toggleClass() {
//   if (image.classList.contains('grayscale')) {
//     image.classList.remove('grayscale');
//   } 
// }



// function colorMe(id) {

//   var element = document.getElementById(`#${id}`);
//   element.classList.toggle("grayscale");
//   console.log('click');


// var pictureClick = document.querySelector(`#${id}`);

//   pictureClick.addEventListener("click", colorMe)

// };
















getAllPokemon()
