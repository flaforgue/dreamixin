<template>
  <div class="home-container">
    <logo />
    <h1 class="title">
      Dreamixin
    </h1>
    <h2 class="subtitle">
      Dreamixin project
    </h2>
  </div>
</template>

<script>
import Logo from '~/components/Logo.vue';

export default {
  components: {
    Logo
  }
};
</script>
<style scoped>
.home-container {
  text-align: center;
  margin-top: 150px;
}
</style>
