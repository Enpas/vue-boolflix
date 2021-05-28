<template>
  <header class="container">
    <div>
      <h1>BOOLFLIX</h1>
    </div>
    <div class="input-research">
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
header {
    height: 80px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: #000;
    h1 {
      color: #F00;
      margin-right: 40px;
    }
    .input-research {
      overflow-x: hidden ;
      input {
        width: 500px;
        padding: 10px 20px;
        outline: none;
      }
      button {
        padding: 10px 20px;
        margin-left: 20px;
      }
    }
  }
</style>