<template>
  <section>
    <div class="card">
      <img v-if="show.backdrop_path === null" src="#" :alt="show.name">
      <img v-if="show.backdrop_path != null" :src="`https://image.tmdb.org/t/p/w300${show.backdrop_path}`" :alt="show.name">
      <ul>
        <li><span>Titolo:</span> {{ show.name }}</li>
        <li><span>Titolo originale:</span> {{ show.original_name }}</li>
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
          <li v-if="show.overview != ''"><span>Overview: </span> {{show.overview}}</li>
      </ul>
    </div>
  </section>
</template>

<script>
import CountryFlag from 'vue-country-flag'

export default {
  name: 'TvCard',
  components: {
    CountryFlag
  },
  props: {
    show: Object
  },
  computed: {
    filterLang() {
      if (this.show.original_language === 'en') {
        return 'gb'
      } else if (this.show.original_language === 'ja') {
        return 'jp'
      } else if (this.show.original_language === 'zh') {
        return 'cn'
      } else if (this.show.original_language === 'hi') {
        return 'in'
      } else if (this.show.original_language === 'he') {
        return 'il'
      } else if (this.show.original_language === 'cs') {
        return 'cz'
      } else if (this.show.original_language === 'ar') {
        return 'sa'
      } else if (this.show.original_language === 'ko') {
        return 'kr'
      } else if (this.show.original_language === 'sv') {
        return 'se'
      }
      return this.show.original_language
    },
    convertVote() {
      return Math.ceil((this.show.vote_average * 5) / 10)
    }
  }
}
</script>

<style lang="scss" scoped>

</style>