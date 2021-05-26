<template>
  <header class="mb-3">
    <div>Logo boolflix</div>
    <div>
      <input 
        type="text" 
        placeholder="Cerca un film" 
        v-model="apiQuery"
        @keyup.enter="sendQuery()"
      >
      <button @click="sendQuery()">Cerca</button>
    </div>
  </header>
</template>

<script>
export default {
  name: 'Header',
  data() {
    return {
      apiQuery: ''
    }
  },
  methods: {
    sendQuery() {
      this.$emit('searchQuery', this.apiQuery);
      this.apiQuery = '';
    }
  }
}
</script>

<style lang="scss" scoped>
header{
  height: 80px;
  background-color:#71e64dab;
  input{
    border: none;
    padding: 0 20px;
    margin-right: 20px;
    border-radius:5px;
    outline: none;
   }
   button {
    padding: 5px 20px;
    border: 0;
    border-radius: 10px;
    color: #FFF;
    background-color: #2c8daa;
    &:hover {
      transform: scale(1.1);
    }
   }
}
</style>