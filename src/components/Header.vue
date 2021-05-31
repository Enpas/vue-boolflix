<template>
  <header class="container">
    <div class="logo">
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
    .logo {
      color: #F00;
      margin-right: 20px;
    }
    .input-research {
      input {
        width: 400px;
        padding: 10px 20px;
        font-size: 18px;
        outline: none;
        border-radius: 5px;
        border: 1px solid #fff;
        background-color: #000;
        color: #FFF;
      }
      input::placeholder {
        color: #FFF;
      }
      button {
        padding: 12px 25px;
        margin-left: 20px;
        background-color: #000;
        color: #FFF;
        border-radius: 5px;
        border: 1px solid #fff;
        font-size: 16px;
        font-weight: 600;
        cursor: pointer;
        &:active {
          background-color: #F00;
          color: #000;
          border: 1px solid #000;
        }
      }
      @media all and (max-width: 1015px) {
        input {
          width: 300px;
        }
      }
      @media all and (max-width: 829px) {
        input {
          width: 180px;
        }
        button {
          margin-left: 10px;
        }
      }
      @media all and (max-width: 629px) {
        input {
          width: 125px;
          padding: 7px 14px;
          margin-left: 10px;
          font-size:  14px;
        }
        button {
          margin: 5px 0 0 30px;
          padding: 7px 16px;
          font-size:  14px;
        }
      }
    }
    @media all and (max-width: 629px) {
      h1 {
        font-size: 24px;
      }
    }
  }
</style>