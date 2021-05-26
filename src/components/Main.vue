<template>
  <main class="container">
    <FilmCard 
      :film="film"
      v-for="film in filmList" :key="film.id"
    />
  </main>
</template>

<script>
import FilmCard from './FilmCard.vue'
export default {
  name: 'Main',
  components: {
    FilmCard
  },
  props: {
    filmList: Array,
  }
}
</script>

<style lang="scss" scoped>
  main {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
  }
</style>