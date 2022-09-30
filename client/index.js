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
    
    
    <button onclick="updateQuantity(${pokemon.id}, 'quantity');">Add One Pokemon to Quantity</button>
    <script>
    function colorMe() {

      var element = document.getElementById("1");
      element.classList.toggle("pokemoncontainer");
      console.log('click');
    
    
    var pictureClick = document.querySelector("#1");
    
      pictureClick.addEventListener("click", colorMe)
    
    };
    </script>

  

<select name="games" id="s1">

  <optgroup label="Gen 3">
    <option value="Ruby">Ruby</option>
    <option value="Saphire">Saphire</option>
    <option value="Emerald">Emerald</option>
    <option value="FireRed">Fire Red</option>
    <option value="LeafGreen">Leaf Green</option>

  </optgroup>

  <optgroup label="Gen 4">
    <option value="Diamond">Diamond</option>
    <option value="Pearl">Pearl</option>
    <option value="Platinum">Platinum</option>
    <option value="HeartGold">HeartGold</option>
    <option value="SoulSilver">SoulSilver</option>


  <optgroup label="Gen 5">
    <option value="Black">Black</option>
    <option value="White">White</option>
    <option value="Black2">Black 2</option>
    <option value="White2">White 2</option>

  <optgroup label="Gen 6">
    <option value="X">X</option>
    <option value="Y">Y</option>
    <option value="Omega Ruby">Omega Ruby</option>
    <option value="Alpha Saphire">Alpha Saphire</option>

  <optgroup label="Gen 7">
    <option value="Sun">Sun</option>
    <option value="Moon">Moon</option>
    <option value="Ultra Sun">Ultra Sun</option>
    <option value="Ultra Moon">Ultra Moon</option>
    <option value="LGEevee">Let's Go Eevee</option>
    <option value="LGPikachu">Let's Go Pikachu</option>


    
  <optgroup label="Gen 8">
    <option value="Sword">Sword</option>
    <option value="Shield">Shield</option>
    <option value="Brilliant Diamond">Brilliant Diamond</option>
    <option value="Shining Pearl">Shining Pearl</option>
    <option value="Legends Arceus">Legends Arceus</option>
    
    </optgroup>
    </select>

    <p id="choosengame">
        <span class="op"></span>
    </p>
    <button onclick="selOpt()">Option Check</button>
    
<br><br>




<br> </br>



    
    <br>     
    `
    pokemoncontainer.appendChild(pokemonCard)
}


form.addEventListener('submit', submitHandler)

//////////////////////////////////////////////////////////////////////////////////////////////////////
function selOpt() {
    selEl = document.querySelector('#s1');
    op = selEl.value;
    document.querySelector('.op').textContent = op;
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
  name.value = ''
  picture.value= ''
  quantity.value = ''
  
}

//////////////////////////

function colorMe() {

  var element = document.getElementById("1");
  element.classList.toggle("pokemoncontainer");
  console.log('click');


var pictureClick = document.querySelector("#1");

  pictureClick.addEventListener("click", colorMe)

};


// const getAllPokemon2 = () => {
//   axios.get(`${baseURL}/getPokemon`)
//       .then((res) => {
//           console.log(res.data)
//           displayPokemon2(res.data)
//       })
//       .catch((err) => {
//           console.log(err)
//       })



// data.forEach(i =>{
//   let x = document.getElementById(`${i.id}`);
//   let y = document.getElementById(`${i.id}`);
//   let z = document.getElementById(`${i.id}`);
//   let b = document.getElementById(`${i.id}+btn`)
//     x.onclick =changeBackground=()=>{
//       y.classList.toggle("togglebackground");
//         if(z.style.display==="none"){
//           z.style.display="block"
//         } else {
//           z.style.display="none";
//         }
//     }
//     b.onclick=memorize=()=>{
//       y.style.display="none";
//     }



// })

// }



// const image = document.querySelector('.grayscale');


// function toggleClass() {
//   if (image.classList.contains('grayscale')) {
//     image.classList.remove('grayscale');
//   } 
// }
































getAllPokemon()
