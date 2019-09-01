<template>
  <div class="projects-container">
    <h1>
      Mes projets
    </h1>

    <br>

    <router-link to="/projects/create">
      <el-button type="primary">
        Nouveau projet
      </el-button>
    </router-link>
  </div>
</template>

<script>
export default {
};
</script>

<style scoped>
.projects-container {
  text-align: center;
  margin-top: 150px;
}
</style>
