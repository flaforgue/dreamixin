<template>
  <div class="app-navbar-container">
    <app-burger-button
      @click="toggleAsidePanel"
    />
    <div class="app-navbar-right-content">
      <ul class="nav-links">
        <li class="nav-link">
          <router-link tag="a" to="/">
            Accueil
          </router-link>
        </li>
        <li class="nav-link">
          <router-link tag="a" to="/discover">
            Découvrir
          </router-link>
        </li>
        <li class="nav-link">
          <router-link tag="a" to="/collaborate">
            Collaborer
          </router-link>
        </li>
        <li class="nav-link">
          <router-link tag="a" to="/projects">
            Mes projets
          </router-link>
        </li>
        <li class="nav-link">
          <router-link tag="a" to="/library">
            Ma bibliothèque
          </router-link>
        </li>
      </ul>

      <app-profile-button />
    </div>

    <el-drawer
      :visible.sync="isAsidePanelActive"
      direction="ltr"
      size="25%"
    >
      <div class="aside-logo-container">
        <app-logo />
      </div>
      <div class="aside-panel-content">
        <h2>Dreamixin</h2>
      </div>
    </el-drawer>
  </div>
</template>
<script>
import AppBurgerButton from '~/components/AppBurgerButton.vue';
import AppProfileButton from '~/components/AppProfileButton.vue';
import AppLogo from '~/components/icons/AppLogo.vue';

export default {
  components: {
    AppBurgerButton,
    AppProfileButton,
    AppLogo
  },

  data() {
    return {
      isAsidePanelActive: false
    };
  },

  methods: {
    toggleAsidePanel() {
      this.isAsidePanelActive = !this.isAsidePanelActive;
    }
  }
};
</script>
<style scoped lang="scss">
@import '~/assets/scss/variables.scss';

.app-navbar-container {
  position: fixed;
  z-index: 2;
  width: 100%;
  height: 50px;
  padding: 0 7.5%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: $color-1;
  border-bottom: 5px solid $color-1-light;

  .app-navbar-right-content {
    display: flex;
  }

  .nav-links {
    padding-left: 0;
    padding-top: 10px;
    list-style-type: none;

    .nav-link {
      margin: 0 10px;
      display: inline-block;

      a {
        color: $color-2;
        text-decoration: none;
        padding: 5px 10px;
        border-radius: 4px;
        transition: background-color 0.2s;
        font-family: $font-stylized;
        font-weight: 600;
        text-transform: uppercase;
        font-size: 16px;

        &.nuxt-link-exact-active, &:hover {
          background-color: $color-2-hover;
        }
      }
    }
  }
}
</style>
