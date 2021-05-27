<template>
  <main class="container">
    <h2 class="text-center" v-if="this.filmList.length === 0 && this.tvList.length === 0">Attenzione! nessun risultato trovato!</h2>
    <h3 v-if="this.filmList.length != 0">Film</h3>
    <div class="box-card">
      <FilmCard 
        :film="film"
        v-for="film in filmList" :key="film.id"
      />
    </div>

    <h3 v-if="this.tvList.length != 0">Show</h3>
    <div class="box-card">
      <TvCard 
        :show="show"
        v-for="show in tvList" :key="show.id"
      />
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
  .box-card {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
  }
</style>