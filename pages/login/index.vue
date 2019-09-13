<template>
  <div class="login-page-container">
    <div class="app-logo-container">
      <app-logo />
    </div>

    <div class="login-buttons-container">
      <google-login-button @login="login" />
    </div>
  </div>
</template>
<script>
import AppLogo from '~/components/icons/AppLogo.vue';
import GoogleLoginButton from '~/components/GoogleLoginButton.vue';

export default {
  layout: 'login',

  components: { AppLogo, GoogleLoginButton },

  methods: {
    login(profile) {
      this.$store.dispatch('login', profile);
      this.$router.push('/');
    }
  }
};
</script>
<style scoped lang="scss">
  .app-logo-container {
    height: 200px;
    text-align: center;
  }

  .login-buttons-container {
    padding: 40px;
  }
</style>
