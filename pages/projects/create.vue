<template>
  <div class="page-content">
    <el-card class="box-card">
      <div slot="header" class="clearfix">
        <h3>Création d'un nouveau projet</h3>
      </div>

      <el-steps finish-status="success" :active="activeFormPart" :simple="true">
        <el-step title="Univers" icon="el-icon-picture-outline-round" />
        <el-step title="Infos" icon="el-icon-tickets" />
        <el-step title="Collaboration" icon="el-icon-share" />
      </el-steps>

      <form v-if="activeFormPart === 0">
        <app-category-selector v-model="project.categoryId" :categories="categories" />
      </form>

      <form v-if="activeFormPart === 1">
        <app-project-form-infos v-model="project" />
      </form>

      <form v-if="activeFormPart === 2">
        <app-project-form-sharing v-model="sharingReadOptions" title="Lecture" />
        <el-divider />
        <app-project-form-sharing v-model="sharingReviewOptions" title="Review" />
      </form>

      <el-row class="form-row">
        <el-button plain type="info" @click="previous">
          <template v-if="isFirstPanel">
            Annuler
          </template>
          <template v-else>
            Précédent
          </template>
        </el-button>

        <el-button plain type="success" @click="next">
          <template v-if="isLastPanel">
            Valider
          </template>
          <template v-else>
            Suivant
          </template>
        </el-button>
      </el-row>
    </el-card>
  </div>
</template>

<script>
import AppCategorySelector from '~/components/AppCategorySelector.vue';
import AppProjectFormInfos from '~/components/AppProjectFormInfos.vue';
import AppProjectFormSharing from '~/components/AppProjectFormSharing.vue';

export default {
  components: {
    AppCategorySelector,
    AppProjectFormInfos,
    AppProjectFormSharing
  },

  data() {
    return {
      nbFormparts: 3,
      activeFormPart: 0,

      project: {
        title: '',
        subtitle: '',
        isPublicRead: false,
        isPublicReview: false,
        presentation: '',
        categoryId: null,
        illustrationUrl: null
      },
      sharingReadOptions: {
        isPublic: false,
        users: []
      },
      sharingReviewOptions: {
        isPublic: false,
        users: []
      }
    };
  },

  computed: {
    categories() {
      return [
        {
          title: 'Heroic Fantasy',
          illustrationUrl: '/images/categories/heroic-fantasy.jpeg',
          id: '0'
        },
        {
          title: 'Science Fiction',
          illustrationUrl: '/images/categories/sci-fi.jpeg',
          id: '1'
        },
        {
          title: 'Steam Punk',
          illustrationUrl: '/images/categories/steampunk.jpeg',
          id: '2'
        },
        {
          title: 'Cyber Punk',
          illustrationUrl: '/images/categories/cyberpunk.jpeg',
          id: '3'
        },
        {
          title: 'Contemporain',
          illustrationUrl: '/images/categories/contemporain.jpeg',
          id: '4'
        },
        {
          title: 'Historique',
          illustrationUrl: '/images/categories/historic.jpeg',
          id: '5'
        }
      ];
    },

    isFirstPanel() {
      return this.activeFormPart === 0;
    },

    isLastPanel() {
      return this.activeFormPart === this.nbFormparts - 1;
    }
  },

  methods: {
    next() {
      if (this.isLastPanel) {
        this.submit();
      } else {
        this.activeFormPart++;
      }
    },

    previous() {
      if (this.isFirstPanel) {
        this.$router.push('/projects');
      } else {
        this.activeFormPart--;
      }
    },

    submit() {
      this.$router.push('/projects');
    }
  }
};
</script>

<style scoped>
form {
  margin-top: 20px;
  margin-bottom: 30px;
}
</style>
