<script>
import AppMenu from './components/AppMenu.vue';
import AppFooter from './components/AppFooter.vue';

export default {
  components: {
    AppMenu,
    AppFooter
  },
  
};
</script>

<template>
  <app-menu></app-menu>
  <router-view></router-view>

  <app-footer></app-footer>
</template>

<style>
@import url("https://cdn.jsdelivr.net/npm/bootstrap-icons@1.7.2/font/bootstrap-icons.css");
@import url("https://fonts.googleapis.com/icon?family=Pacifico");
@import url("https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/css/bootstrap.min.css");
</style>