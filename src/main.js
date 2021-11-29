import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import Vue from 'vue'
import axios from 'axios'

createApp(App).use(router, axios).mount('#app')
   
Vue.config.productionTip = false

var butter = require('buttercms')('shitty_christian_movie_blog');

   