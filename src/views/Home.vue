<template>
  <div class="home">
    <Content>
      <Post/>
    </Content>
  </div>
</template>

<script>
import Content from '../components/Content.vue'
import Post from '../views/Post.vue' 

export default {
  components: {
    Content, 
    Post
  }
}
</script>

<style>
</style>
