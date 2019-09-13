<template>
  <div class="app-page-header-container el-card is-always-shadow">
    <el-link
      :underline="false"
      class="link-back"
      icon="el-icon-arrow-left"
      @click.prevent="$emit('back')"
    >
      {{ backLabel }}
    </el-link>
    <h2>
      {{ title }}
    </h2>
    <slot />
  </div>
</template>
<script>
export default {
  props: {
    title: {
      type: String,
      required: true
    },

    backLabel: {
      type: String,
      default: 'Retour'
    }
  }
};
</script>
<style scoped lang="scss">
@import '~/assets/scss/variables.scss';

.app-page-header-container {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 30px;
  padding: 20px;

  .link-back {
    margin-right: 20px;
  }
}
</style>
