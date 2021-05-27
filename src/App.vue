<template>
  <div id="app">
    <Header
      @searchQuery="searching"
    />
    <Main 
      :filmList="filmList"
      :tvList="tvList"
    />
  </div>
</template>

<script>
import axios from 'axios'
import Header from './components/Header.vue'
import Main from './components/Main.vue'
export default {
  name: 'App',
  components: {
    Header,
    Main
  },
  data() {
    return {
      apiMoviesURL: 'https://api.themoviedb.org/3/search/movie',
      apiTvURL: 'https://api.themoviedb.org/3/search/tv',
      apiKey: '822d16617b418ef00732254ac6e85f68',
      apiLang: 'it-IT',
      apiPage: 1,
      apiQuery: '',
      filmList: [],
      tvList: []
    }
  },
  methods: {
    searching(apiQuery) {
      this.apiQuery = apiQuery;
      let request = {
        params: {
          api_key: this.apiKey,
          query: this.apiQuery,
          language: this.apiLang,
          page: this.apiPage
        }
      }
      if (apiQuery != '') {
        axios.all([
            axios.get(this.apiMoviesURL, request),
            axios.get(this.apiTvURL, request)
          ])
        .then(axios.spread((resMovies, resTv) => {
          this.filmList = resMovies.data.results;
          this.tvList = resTv.data.results;
        }))
        .catch(err => {
          console.log(err);
        })
      }
    }
  },
}
</script>

<style lang="scss">
  @import './assets/style/general.scss';
</style>
