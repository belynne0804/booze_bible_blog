<template>
  <img class="logo" src="./assets/movieReel.png">
  <img class="logo" src="./assets/book.png">
  <HelloWorld msg="A Shitty Christian's Blog: Musings on Movies and Messiahs"/>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'

export default {
  name: 'App',
  components: {
    HelloWorld
  }
}
</script>

<style>
  #app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: cornsilk;
    margin: 20px;
    padding-bottom: 20px;
    background-color: black;
  }
  .logo {
    height: 100px; 
    margin-top: 10px;
  }
</style>
