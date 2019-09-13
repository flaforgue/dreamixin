<template>
  <div>
    <app-nav-bar />
    <div
      ref="page-container"
      class="page-container"
    >
      <nuxt />
    </div>
  </div>
</template>
<script>
import AppNavBar from '~/components/AppNavBar.vue';

export default {
  middleware: 'auth',

  components: {
    AppNavBar
  },

  mounted() {
    this.$refs['page-container'].style.minHeight = window.innerHeight + 'px';
  }
};
</script>
