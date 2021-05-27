<template>
  <header class="d-flex align-items-center mb-3">
    <div class="logo col-3 offset-1">
      <h1>Logo boolflix</h1>
    </div>
    <div class="col-3 offset-4 d-flex justify-content-evenly">
      <input 
        type="text" 
        placeholder="Cerca..." 
        v-model.trim="apiQuery"
        @keyup.enter="sendQuery()"
      >
      <button @click="sendQuery()">CERCA</button>
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
  .logo {
    font-size: 30px;
    text-transform: uppercase;
    margin-left: 180px;
    color: #FFF;
  }
  input{
    border: none;
    padding: 0 20px;
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