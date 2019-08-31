<template>
  <div class="burger-button" @click="$emit('click')">
    <div class="burger-bar" />
    <div class="burger-bar" />
    <div class="burger-bar" />
  </div>
</template>
<style scoped lang="scss">
@import '~/assets/scss/variables.scss';

.burger-button {
  width: 38px;
  height: 38px;
  border-radius: 25px;
  transition: background-color 0.2s;
  cursor: pointer;

  &:hover {
    background-color: $color-2-hover;
  }

  .burger-bar {
    background-color: $color-2;
    margin: 4px 9px;
    height: 2px;
    width: 20px;

    &:first-child {
      margin-top: 12px
    }
  }
}
</style>
