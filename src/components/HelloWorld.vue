<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
      <Main/>
  </div>
</template>

<script>

import Main from './Main.vue'

export default {
  name: 'HelloWorld',
  components: {
    Main
  },
  props: {
    msg: String
  }
}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
</style>
