<template>
  <div
    class="app-profile-button-container"
    @click="toggleProfileMenu()"
  >
    <el-dropdown trigger="click">
      <el-avatar :size="30" icon="el-icon-user-solid" />

      <el-dropdown-menu slot="dropdown">
        <el-dropdown-item>
          <router-link to="/profile">
            <i class="el-icon-user" />
            Mon profil
          </router-link>
        </el-dropdown-item>

        <el-dropdown-item>
          <router-link to="/settings">
            <i class="el-icon-setting" />
            Paramètres
          </router-link>
        </el-dropdown-item>

        <el-dropdown-item>
          <router-link to="/logout">
            <i class="el-icon-switch-button" />
            Se déconnecter
          </router-link>
        </el-dropdown-item>
      </el-dropdown-menu>
    </el-dropdown>
  </div>
</template>
<script>
export default {
  data() {
    return {
      isProfileMenuActive: false
    };
  },

  methods: {
    toggleProfileMenu() {
      this.isProfileMenuActive = !this.isProfileMenuActive;
    }
  }
};
</script>
<style scoped lang="scss">
@import '~/assets/scss/variables.scss';

.app-profile-button-container {
  width: 40px;
  margin-left: 20px;
  cursor: pointer;
}

a {
  text-decoration: none;
  color: $color-1;
}
</style>
