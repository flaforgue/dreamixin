<template>
  <el-row :gutter="10">
    <el-col
      v-for="(category) in categories"
      :key="category.id"
      :span="4"
      :class="{
        active: value === category.id
      }"
      class="card-category"
    >
      <el-card :body-style="{ padding: '0px' }">
        <div @click="$emit('input', category.id)">
          <div
            class="illustration-container"
            :style="{
              backgroundImage: `url('${category.illustrationUrl}')`
            }"
          />
          <div style="padding: 14px;">
            <span class="category-title">
              {{ category.title }}
            </span>
          </div>
        </div>
      </el-card>
    </el-col>
  </el-row>
</template>
<script>
export default {
  props: {
    categories: {
      type: Array,
      required: true
    },
    value: {
      type: String,
      default: ''
    }
  }
};
</script>
<style scoped lang="scss">
@import '~/assets/scss/variables.scss';

.card-category {
  cursor: pointer;
  margin: 5px 0;
  transform: scale(1);
  transition: transform 0.2s;

  &:hover, &.active {
    .category-title {
      color: $color-1-light;
    }

    .el-card {
      box-shadow: 0 2px 12px 0 rgba($color-1-light, 0.75);
      border-color: $color-1-light;
    }
  }

  &.active {
    transform: scale(1.05);
  }

  .illustration-container {
    background-size: cover;
    background-repeat: no-repeat;
    height: 250px;
    width: 100%;
  }
}
</style>
