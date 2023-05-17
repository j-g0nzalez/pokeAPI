import axios from 'axios'

const URL = "https://pokeapi.co/api/v2/pokemon/"

function pokemonSearchAPI(options, callback) {
  var params = {
    key: options.key,
    id: options.pokemonId
  }

  axios.get(URL, { params: params }).then(function (response) {
    if (callback) {
      callback(response)
    }
  })
}

export default pokemonSearchAPI;
