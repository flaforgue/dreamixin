<template>
  <el-card class="project-card">
    <div class="card-content">
      <div class="project-image">
        <app-image
          :src="project.illustration_url"
          height="250px"
          fit="cover"
        />
      </div>
      <div class="project-aside">
        <div class="project-infos">
          <h4>{{ project.title }}</h4>
          <h5>{{ project.subtitle }}</h5>
          <div class="icons-container">
            <app-number-icon
              icon="view"
              :number="project.nb_views"
            />
            <app-number-icon
              icon="chat-dot-round"
              :number="project.nb_comments"
            />
            <app-number-icon
              icon="star-off"
              :number="project.nb_upvotes"
            />
          </div>
        </div>

        <el-button type="primary">
          Écrire la suite
          <i class="el-icon-edit" />
        </el-button>
      </div>
    </div>
  </el-card>
</template>
<script>
import AppNumberIcon from '~/components/AppNumberIcon.vue';
import AppImage from '~/components/AppImage.vue';

export default {
  components: {
    AppNumberIcon,
    AppImage
  },

  props: {
    project: {
      type: Object,
      required: true
    }
  }
};
</script>
<style scoped lang="scss">
.project-card {
  flex: 1;
  margin: 10px;

  h5 {
    margin-top: 5px;
  }

  .card-content {
    display: flex;

    .project-image,
    .project-aside {
      flex: 1;
    }

    .project-aside {
      margin-left: 20px;
      display: flex;
      flex-direction: column;
      justify-content: space-between;

      .icons-container {
        margin-top: 20px;
        margin-bottom: 20px;
      }
    }
  }
}
</style>
