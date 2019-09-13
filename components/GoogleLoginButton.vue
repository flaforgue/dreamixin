<template>
  <div id="google-login-button" />
</template>
<script>

export default {
  mounted() {
    // eslint-disable-next-line no-undef
    gapi.signin2.render('google-login-button', {
      onsuccess: this.login
    });
  },

  methods: {
    login(original) {
      const googleUserProfile = original.getBasicProfile();
      const profile = {
        firstName: googleUserProfile.getGivenName(),
        lastName: googleUserProfile.getFamilyName(),
        fullName: googleUserProfile.getName(),
        email: googleUserProfile.getEmail(),
        avatarUrl: googleUserProfile.getImageUrl(),
        idToken: original.getAuthResponse().id_token
      };

      this.$emit('login', profile);
    }
  }
};
</script>
<style scoped>
  #google-login-button {
    display: flex;
    justify-content: center;
  }
</style>
