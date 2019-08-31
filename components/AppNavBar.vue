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

    <div
      class="aside-panel"
      :class="{
        active: isAsidePanelActive
      }"
    >
      <div class="logo-container">
        <app-logo />
        <div class="aside-panel-content">
          <h2>Dreamixin</h2>
        </div>
      </div>
    </div>
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

$aside-width: 300px;

.app-navbar-container {
  position: fixed;
  z-index: 2;
  width: 100%;
  height: 50px;
  padding: 0 60px;
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
    padding-top: 6px;
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

        &:hover {
          background-color: $color-2-hover;
        }
      }
    }
  }

  .aside-panel {
    height: 100%;
    position: fixed;
    top: 50px;
    left: -1 * $aside-width;
    width: $aside-width;
    background-color: $color-white;
    border-right: 1px solid $color-border;
    transition: left 0.2s;

    &.active {
      left: 0;
    }

    .logo-container {
      width: 100%;
      height: 100px;
      margin-top: 40px;
    }

    .aside-panel-content {
      padding: 0px 40px 40px 40px;

      h2 {
        color: $color-3;
        font-size: 32px;
        text-align: center;
        font-family: $font-stylized;
      }
    }
  }
}
</style>
