<template>
  <el-row :gutter="20" type="flex">
    <el-col :span="12">
      <el-input
        :value="project.title"
        placeholder="Titre du projet"
        class="form-row"
        @input="update('title', $event)"
      />
      <el-input
        :value="project.subtitle"
        placeholder="Sous-titre du projet"
        class="form-row"
        @input="update('subtitle', $event)"
      />
      <el-input
        :value="project.presentation"
        placeholder="Présentez votre projet"
        type="textarea"
        :rows="6"
        @input="update('presentation', $event)"
      />
    </el-col>
    <el-col :span="12">
      <el-upload
        drag
        action=""
        accept=".png,.jpg"
        name="illustration"
        class="avatar-uploader form-row"
        :http-request="handleIllustrationUpload"
        :multiple="false"
        :show-file-list="false"
      >
        <img
          v-if="project.illustrationUrl"
          :src="project.illustrationUrl"
          class="illustration-preview"
        >
        <i v-else class="el-icon-picture avatar-uploader-icon" />
        <label v-if="!project.illustrationUrl">
          Illustration
        </label>
      </el-upload>
    </el-col>
  </el-row>
</template>
<script>
export default {
  props: {
    value: {
      type: Object,
      required: true
    }
  },

  computed: {
    project() {
      const defaultValue = {
        title: '',
        subtitle: '',
        presentation: '',
        illustrationUrl: ''
      };

      return this.value ? this.value : defaultValue;
    }
  },

  methods: {
    update(key, value) {
      this.$emit('input', { ...this.project, [key]: value });
    },

    handleIllustrationUpload(request) {
      const reader = new FileReader();
      const vueComponent = this;
      reader.onload = function(e) {
        vueComponent.$emit('input', { ...vueComponent.project, 'illustrationUrl': e.target.result });
      };

      reader.readAsDataURL(request.file);
    }
  }
};
</script>
<style scoped>
.avatar-uploader {
  height: 248px;
  margin-bottom: 0;
}

.illustration-preview {
  max-height: 100%;
  max-width: 100%;
}
</style>
