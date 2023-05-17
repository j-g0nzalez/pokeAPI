<template>
  <header>
    <SearchBar v-model="pokemonId"/>
    <Buttons @nextPokemon="nextPokemon"/>
    <Pokemon />
  </header>
</template>

<script>
  import SearchBar from "./components/SearchBar.vue"
  import Buttons from "./components/Buttons.vue"
  import Pokemon from "./components/Pokemon.vue"
  import pokemonSearchAPI from "./pokemonSearchAPI"

  export default {
    components: {
      SearchBar,
      Buttons,
      Pokemon
    },
    data: function() {
      return {
        pokemonId: 1
      }
    },
    created: function() {
      this.fetchPokemonAPI()
    },
    methods: {
      fetchPokemonAPI: function() {
        pokemonSearchAPI({
          key:'20230516202936',
          pokemonId: this.pokemonId
        }, function(data){
          console.log(data)
        })
      }
    }
  }
</script>
