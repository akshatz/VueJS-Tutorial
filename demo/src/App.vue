<template id="navBar">
<div id="app">
    <nav class="navbar navbar-expand-lg navbar-light bg-light" v-bind:class=" { 'navbarOpen': show }"  style="color:blue">
        <li class="navbar-brand" href="/">
          <router-link class="nav-link" :to="'/'">Logo</router-link>
        </li>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" @click.stop="toggleNavbar()">
            <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent" v-bind:class="{ 'show': show }">
            <ul class="navbar-nav mr-auto">
                <li class="nav-item active">
                    <router-link class="nav-link":to="'/home'">Home</router-link>
                </li>
                <li class="nav-item">
                    <router-link class="nav-link":to="'/contact'">Contact Us</router-link>
                </li>
            </ul>
          <form class="form-inline my-2 my-lg-0">
            <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search">
            <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
          </form>
        </div>
    </nav>
    <router-view></router-view>
</div>
</template>

<script>
import HelloWorld from './components/HelloWorld'
import PostsExample from './components/Posts'
import Contact from './components/Contact'
import Vue from 'vue'

Vue.component('navBar', {
  template: '#app',
  msg: HelloWorld,
  data() {
    return {
      show: true,
    }
  },
  methods: {
    toggleNavbar() {
      this.show = !this.show
    }
  }
})

new Vue({
  el: '#app'
})
</script>

<style>

@import "../node_modules/bootstrap/dist/css/bootstrap.min.css";

#app{
  font-family: 'Avenir', Arial, Helvetica, sans-serif;
  --webkit-font-smoothing:antialiased;
  -moz-osx-font-smooting: grayscale;
  text-align: center;
  color:green;
}

</style>
