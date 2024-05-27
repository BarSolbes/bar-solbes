<template>
  <div :class="classList" class="text-center">
    <span><strong>ATENCIÓN: </strong>{{ message.text }}</span>
    <button type="button" class="btn-close" @click="delMessageInBd"></button>
  </div>
</template>

<script>
import { mapActions, mapState } from 'pinia';
import { useDataStore } from '../stores/data.js'
export default {
  props: {
    message: Object
  },
  computed: {
    classList() {
      return "col-sm-12 alert alert-dismissible alert-" + this.message.type
    }
  },
  methods: {
    ...mapActions(useDataStore, ['delMessage']),
    delMessageInBd() {
      this.delMessage(this.message.id)
    },
  },
};
</script>
