<template>
  <section>
    <div class="box-filmCard mb-3">
      <ul>
        <li><span>Titolo:</span> {{ film.title }}</li>
        <li><span>Titolo originale:</span> {{ film.original_title }}</li>
        <li><span>Lingua originale:</span> <CountryFlag :country="this.filterLang" size='small'/></li>
        <li><span>Voto:</span> {{ film.vote_average }}</li>
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
    }
  }
}
</script>

<style lang="scss" scoped>
  .box-filmCard {
    background-color: rgb(196, 215, 255);
    flex-basis: calc(100% / 5);
    width: 250px;
    min-height: 150px;
    
    span {
      font-weight: 600;
    }
  }
</style>