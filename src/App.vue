<template>
  <Nav/>
  <img class="logo" src="./assets/movieReel.png">
  <img class="logo" src="./assets/book.png">
  <HelloWorld msg="A Shitty Christian's Blog: Musings on Movies and Messiahs"/>
  <Footer/>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import Nav from "./components/Nav.vue";
import Footer from "./components/Footer.vue";

export default {
  name: 'App',
  components: {
    Nav,
    HelloWorld,
    Footer
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
    /* padding-bottom: 20px; */
    background-color: #227f9f;
  }
  .logo {
    height: 100px; 
    margin-top: 10px;
  }
</style>
