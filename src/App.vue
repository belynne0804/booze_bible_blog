<template>
  <div class="topnav" id="nav">
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link> |
    <router-link to="/contact">Contact</router-link>
          <a href="https://buttercms.com/">
          </a>
  </div>
  <router-view/>
</template>

<script>
import { butter } from '@/buttercms'

export default {
  created() {
    this.fetchHeadline()
    this.fetchPosts()
  },

  methods: {
  fetchPosts() {
    butter.post.list({
        page: 1,
        page_size: 10
      })
      .then((res) => {
        console.log('Content from ButterCMS')
        console.log(res)
      })
  },
  fetchHeadline() {
  butter.content.retrieve(['homepage_headline'])
    .then((res) => {
      console.log('Headline from ButterCMS')
      console.log(res)
    })
  }
}

}
</script>

<style>
#app {
  font-family: sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
}

h1, h2, h3, h4, label {
  color: #9cb3c9; 
}


.topnav router-link.active {
  background-color: #04AA6D;
  color: white;
}

#nav {
  padding: 30px;
  overflow: hidden;
}

#nav a {
  font-weight: bold;
  color: #92A4B6;
}

#nav a.router-link-exact-active {
  color: #42b983;
}

</style>
