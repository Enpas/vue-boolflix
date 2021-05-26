<template>
  <section>
    <div class="filmCard mb-3">
      <ul>
        <li><span>Titolo:</span> {{ film.title }}</li>
        <li><span>Titolo originale:</span> {{ film.original_title }}</li>
        <li><span>Lingua originale:</span> {{ film.original_language }}</li>
        <li><span>Voto:</span> {{ film.vote_average }}</li>
      </ul>
    </div>
  </section>

</template>

<script>
export default {
  name: 'FilmCard',
  props: {
    film: Object
  }
}
</script>

<style lang="scss" scoped>
  .filmCard {
    background-color: rgb(196, 215, 255);
    flex-basis: calc(100% / 5);
    width: 250px;
    min-height: 150px;
    
    span {
      font-weight: 600;
    }
  }
</style>