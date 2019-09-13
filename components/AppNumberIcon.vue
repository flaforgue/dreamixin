<template>
  <div class="app-number-icon-container">
    <i
      class="icon"
      :class="`el-icon-${icon}`"
      :style="{ fontSize: `${fontSize}px` }"
    />

    <span
      class="number"
      :style="{ fontSize: `${fontSize - 2}px` }"
    >
      {{ number }}
    </span>
  </div>
</template>
<script>
export default {
  props: {
    icon: {
      type: String,
      required: true
    },
    number: {
      type: Number,
      required: true
    },
    fontSize: {
      type: Number,
      default: 20
    }
  }
};
</script>
<style scoped lang="scss">
@import '~/assets/scss/variables.scss';

.app-number-icon-container {
  margin-top: 10px;
}

.icon {
  color: $color-el-blue;
  margin-right: 10px;
}

.number {
  color: $color-grey;
}
</style>
