<template>
  <section>
    <div class="card">
      <div class="flip-card">
        <div class="flip-card-inner">
          <div class="flip-card-front">

            <!-- con questo v-if visualizzo l'img corrispondente del film -->
            <img v-if="film.poster_path != null" :src="`https://image.tmdb.org/t/p/w300${film.poster_path}`" :alt="film.name">

            <!-- se non è presente l'img originale vado a generarne una fittizia -->
            <img v-else-if="film.poster_path === null" src="https://via.placeholder.com/250x400/000/FFF.png?text=img+not+found" :alt="film.title">
            
          </div>
          <div class="flip-card-back">
            <div class="overview-container">
              <ul>
                <!-- visualizzo a schermo i seguenti valori per ogni film trovato -->
                <li><span>Titolo:</span> {{ film.title }}</li>
                <li><span>Titolo originale:</span> {{ film.original_title }}</li>

                <!-- visualizzo a schermo le bandiere in base alla lingua originale -->
                <li><span>Lingua originale:</span> <CountryFlag :country="this.filterLang" size='small'/></li>
                  <li>
                    <!-- i tag "i" sono stati annidati in tag span perché si presentava il seguente errore in console: [Vue warn]: Duplicate keys detected: 0 - 1 -->
                    <span>Voto: </span>
                    
                    <!-- con questo v-for stampo le stelle piene per quante ce ne sono in convertVote --> 
                    <span>
                      <i v-for="(i, index) in this.convertVote" :key="index" class="fas fa-star"></i>
                    </span>

                    <!-- mentre per le stelle vuote il massimo è 5 meno quelle che ha già stampato, quindi stampa le restanti vuote -->
                    <span> 
                      <i v-for="(i, index) in (5 - this.convertVote)" :key="index" class="far fa-star"></i>
                    </span>
                  </li>
                  
                  <li v-if="film.overview != ''"><span>Overview:</span> {{ film.overview }}</li>
                  <!-- in caso di assenza di overview visualizzo questo h5 -->
                  <li v-else-if="film.overview === ''">
                    <h5>Nessuna overview trovata</h5>
                  </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
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
    // con la funzione filterLang associo alla lingua la rispettiva bandiera
    // (solo quelle a cui non corrispondeva)
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
    // con questa funzione trasformo il voto da 1 a 10 decimale
    // in un numero intero da 1 a 5
    // la proprietà Math.ceil arrotonda sempre un numero all'intero successivo più grande 
    convertVote() {
      return Math.ceil((this.film.vote_average * 5) / 10)
    }
  }
}
</script>

<style lang="scss" scoped>

</style>