// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import VueRouter from 'vue-router'
import HelloWorld from './components/HelloWorld'
import Posts from './components/Posts'
import Contact from './components/Contact'

Vue.use(VueRouter);

const routes = [

  {
    path:'/', component:HelloWorld
  },
  {
    path:'/home', component:HelloWorld
  },
  {
    path:'/posts', component:Posts
  },
  {
    path:'/contact', component:Contact
  },

];
Vue.config.productionTip = false
const router = new VueRouter({
  routes: routes,
  mode :'history'
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router:router,
  components: { App },
  template: '<App/>'
})
