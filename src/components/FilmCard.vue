<template>
  <section>
    <div class="card">
      <img v-if="film.poster_path === null" src="#" :alt="film.title">
      <img v-if="film.poster_path != null" :src="`https://image.tmdb.org/t/p/w300${film.poster_path}`" :alt="film.name">
      <ul>
        <li><span>Titolo:</span> {{ film.title }}</li>
        <li><span>Titolo originale:</span> {{ film.original_title }}</li>
        <li><span>Lingua originale:</span> <CountryFlag :country="this.filterLang" size='small'/></li>
        <li>
            <span>Voto: </span> 
            <span>
              <i v-for="(i, index) in this.convertVote" :key="index" class="fas fa-star"></i>
            </span>

            <span> 
              <i v-for="(i, index) in (5 - this.convertVote)" :key="index" class="far fa-star"></i>
            </span>
          </li>
          <li v-if="film.overview != ''"><span>Overview:</span> {{ film.overview }}</li>
      </ul>
    </div>
  </section>

</template>

<script>
import CountryFlag from 'vue-country-flag'

export default {
  name: 'FilmCard',
  components: {
    CountryFlag
  },
  props: {
    film: Object
  },
  computed: {
    filterLang() {
      if (this.film.original_language === 'en') {
        return 'gb'
      } else if (this.film.original_language === 'ja') {
        return 'jp'
      } else if (this.film.original_language === 'zh') {
        return 'cn'
      } else if (this.film.original_language === 'hi') {
        return 'in'
      } else if (this.film.original_language === 'he') {
        return 'il'
      } else if (this.film.original_language === 'cs') {
        return 'cz'
      } else if (this.film.original_language === 'ar') {
        return 'sa'
      } else if (this.film.original_language === 'ko') {
        return 'kr'
      } else if (this.film.original_language === 'sv') {
        return 'se'
      }
      return this.film.original_language
    },
    convertVote() {
      return Math.ceil((this.film.vote_average * 5) / 10)
    }
  }
}
</script>

<style lang="scss" scoped>

</style>