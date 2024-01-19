<script setup>
  import { RouterLink, RouterView } from 'vue-router';
  import Menu from '@/components/Menu.vue'
</script>

<template>
  <div class="wrapper">
    <Menu />
  </div>
  <RouterView />
</template>


<style>
  .nav {
  padding: 10px;
  }
  .nav a {
  font-weight: bold;
  color: #2c3e50;
  margin-right: 10px;
  }
  .nav a.router-link-exact-active {
  color: #42b983;
  }
</style>