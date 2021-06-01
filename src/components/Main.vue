<template>
  <main class="container">

    <!-- stampo a schermo il titolo di filmList -->
    <h3 v-if="this.filmList.length != 0">Film</h3>

    <!-- stampo a schermo la lista di film ricercata dall'utente -->
    <div class="box-card">
      <FilmCard 
        :film="film"
        v-for="film in filmList" :key="film.id"
      />
    </div>

    <!-- in caso di assenza di film visualizzo questo h2 -->
    <div class="boxNotFound">
      <h2 v-if="this.filmList.length === 0">Nessun Film trovato!</h2>
    </div>

    <!-- stampo a schermo il titolo di tvList -->
    <h3 v-if="this.tvList.length != 0">Serie TV</h3>
    
    <!-- stampo a schermo la lista di serie tv ricercata dall'utente -->
    <div class="box-card">
      <TvCard 
        :show="show"
        v-for="show in tvList" :key="show.id"
      />
    </div>

    <!-- in caso di assenza di serie tv visualizzo questo h2 -->
    <div class="boxNotFound">
      <h2 v-if="this.tvList.length === 0">Nessuna Serie TV trovata!</h2>
    </div>

  </main>
</template>

<script>
import FilmCard from './FilmCard.vue'
import TvCard from './TvCard.vue'
export default {
  name: 'Main',
  components: {
    FilmCard,
    TvCard
  },
  props: {
    filmList: Array,
    tvList: Array
  },
}
</script>

<style lang="scss" scoped>
  main {
    min-height: calc(100vh - 80px);
    padding-top: 20px;
    background-color: #434343;
    h3 {
      font-size: 32px;
      margin: 30px 0;
      color: #FFF;
    }
    .box-card {
      display: flex;
      justify-content: space-between;
      flex-wrap: wrap;
    }
    .boxNotFound {
      font-size: 26px;
      text-align: center;
      padding-top: 60px;
      color: #FFF;
    }
    @media all and (max-width: 629px) {
     .boxNotFound {
       font-size: 16px;
     } 
     h3 {
       font-size: 22px;
     }
    }
  }
</style>