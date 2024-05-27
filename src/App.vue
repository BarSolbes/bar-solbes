<script>
import { mapActions, mapState } from 'pinia';
import { useDataStore } from './stores/data.js'
import AppMenu from './components/AppMenu.vue';
import ErrMsg from './components/ErrMsg.vue';
import AppFooter from './components/AppFooter.vue';

export default {
  components: {
    AppMenu,
    ErrMsg,
    AppFooter
  },
  methods: {
    ...mapActions(useDataStore, ['loadData'])
  },
  computed: {
    ...mapState(useDataStore, {
      messages: 'messages',
    })
  },
  mounted() {
    this.loadData()
  }
};
</script>

<template>
  <app-menu></app-menu>
  <err-msg v-for="message in messages" :key="message.id" v-bind:message="message"></err-msg>
  <router-view></router-view>

  <app-footer></app-footer>
</template>

<style>
@import url("https://cdn.jsdelivr.net/npm/bootstrap-icons@1.7.2/font/bootstrap-icons.css");
@import url("https://fonts.googleapis.com/icon?family=Pacifico");
@import url("https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/css/bootstrap.min.css");
</style>