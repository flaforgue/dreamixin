<template>
  <div class="page-content">
    <el-card class="box-card">
      <div slot="header" class="clearfix">
        <h3>Nouveau projet</h3>
      </div>

      <el-steps
        finish-status="success"
        :active="activeFormPart"
        :align-center="true"
        :simple="true"
      >
        <el-step
          title="Univers"
          icon="el-icon-picture-outline-round"
        />
        <el-step
          title="Infos"
          icon="el-icon-tickets"
        />
        <el-step
          title="Partage"
          icon="el-icon-share"
        />
      </el-steps>

      <form v-if="activeFormPart === 0">
        <el-row :gutter="10">
          <el-col
            v-for="(category) in categoriesOptions"
            :key="category.id"
            :span="4"
            :class="{
              active: newProject.categoryId === category.id
            }"
            class="card-category"
          >
            <el-card :body-style="{ padding: '0px' }">
              <div @click="selectCategory(category.id)">
                <div
                  class="illustration-container"
                  :style="{
                    backgroundImage: `url('${category.illustrationUrl}')`
                  }"
                />
                <div style="padding: 14px;">
                  <span class="category-title">{{ category.title }}</span>
                </div>
              </div>
            </el-card>
          </el-col>
        </el-row>
      </form>

      <form v-if="activeFormPart === 1">
        <el-row :gutter="20" type="flex">
          <el-col :span="12">
            <el-input
              v-model="newProject.title"
              placeholder="Titre du projet"
              class="form-row"
            />
            <el-input
              v-model="newProject.title"
              placeholder="Sous-titre du projet"
              class="form-row"
            />
            <el-input
              v-model="newProject.presentation"
              placeholder="Présentez votre projet"
              type="textarea"
              :rows="4"
            />
          </el-col>
          <el-col :span="12">
            <el-upload
              class="avatar-uploader form-row"
              name="illustration"
              action=""
              accept=".png,.jpg"
              :http-request="handleIllustrationUpload"
              :drag="true"
              :multiple="false"
              :show-file-list="false"
            >
              <img
                v-if="newProject.illustrationUrl"
                :src="newProject.illustrationUrl"
                class="illustration-preview"
              >
              <i v-else class="el-icon-plus avatar-uploader-icon" />
            </el-upload>
          </el-col>
        </el-row>
      </form>

      <form v-if="activeFormPart === 2">
        <el-row :gutter="20" type="flex" align="center">
          <el-col :span="3">
            <p>Lecture</p>
          </el-col>
          <el-col :span="4">
            <el-switch
              v-model="newProject.isPublicRead"
              active-text="Public"
              inactive-text="Privé"
              class="form-row"
            />
          </el-col>
          <el-col v-if="!newProject.isPublicRead" :span="6">
            <el-autocomplete
              v-model="readerQueryString"
              :fetch-suggestions="querySearchAsync"
              placeholder="Entrez un nom d'utilisateur"
              @select="addReader"
            />
          </el-col>
          <el-col v-if="!newProject.isPublicRead" :span="11">
            <ul class="list-of-users">
              <li
                v-for="reader in readers"
                :key="reader.id"
              >
                {{ reader.value }}
              </li>
            </ul>
          </el-col>
        </el-row>

        <el-divider />

        <el-row :gutter="20" type="flex" align="center">
          <el-col :span="3">
            <p>Review</p>
          </el-col>
          <el-col :span="4">
            <el-switch
              v-model="newProject.isPublicReview"
              active-text="Public"
              inactive-text="Privé"
              class="form-row"
            />
          </el-col>
          <el-col v-if="!newProject.isPublicReview" :span="6">
            <el-autocomplete
              v-model="reviewerQueryString"
              :fetch-suggestions="querySearchAsync"
              placeholder="Entrez un nom d'utilisateur"
              @select="addReviewer"
            />
          </el-col>
          <el-col v-if="!newProject.isPublicReview" :span="11">
            <ul class="list-of-users">
              <li
                v-for="reviewer in reviewers"
                :key="reviewer.id"
              >
                {{ reviewer.value }}
              </li>
            </ul>
          </el-col>
        </el-row>
      </form>

      <el-row class="form-row">
        <el-button
          plain
          type="info"
          @click="previous"
        >
          <template v-if="isFirstPanel">
            Annuler
          </template>
          <template v-else>
            Précédent
          </template>
        </el-button>

        <el-button
          plain
          type="success"
          @click="next"
        >
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
export default {
  data() {
    return {
      nbFormparts: 3,
      activeFormPart: 0,

      newProject: {
        title: '',
        subTitle: '',
        isPublicRead: false,
        isPublicReview: false,
        presentation: '',
        categoryId: null,
        illustrationUrl: null
      },

      readerQueryString: '',
      readers: [],
      reviewerQueryString: '',
      reviewers: []
    };
  },

  computed: {
    categoriesOptions() {
      return [
        {
          title: 'Heroic Fantasy',
          illustrationUrl: 'http://cdn-uploads.gameblog.fr/images/blogs/50278/233724_med.jpg',
          id: 0
        },
        {
          title: 'Science Fiction',
          illustrationUrl: 'https://img.maxisciences.com/article/international/la-science-fiction-reflete-les-questionnements-de-notre-societe-selon-le-centre-d-analyse-strategique_b6ebe05eeb7b927891a77fe67d6cd4561d9dbc61.jpg',
          id: 1
        },
        {
          title: 'Steam Punk',
          illustrationUrl: 'http://www.sclance.com/wallpapers/steampunk-wallpapers/steampunk-wallpapers_1671434.jpg',
          id: 2
        },
        {
          title: 'Cyber Punk',
          illustrationUrl: 'https://wallpaperaccess.com/full/675994.jpg',
          id: 3
        },
        {
          title: 'Contemporain',
          illustrationUrl: 'https://i.pinimg.com/originals/9a/f3/36/9af336625332313269206c7e37e18226.jpg',
          id: 4
        },
        {
          title: 'Historique',
          illustrationUrl: 'https://images.fineartamerica.com/images-medium/balmoral-castle-tower-sarah-e-ethridge.jpg',
          id: 5
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
    handleIllustrationUpload(request) {
      const reader = new FileReader();
      const vueComponent = this;
      reader.onload = function(e) {
        vueComponent.newProject.illustrationUrl = e.target.result;
      };

      reader.readAsDataURL(request.file);
    },

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
    },

    selectCategory(categoryId) {
      console.log(categoryId);
      this.newProject.categoryId = categoryId;
    },

    querySearchAsync(queryString, cb) {
      const options = [
        {
          value: 'Florian Laforgue',
          id: 0
        },
        {
          value: 'Claire Thiel',
          id: 1
        },
        {
          value: 'Edgar Lecoq',
          id: 2
        }
      ];

      cb(options.filter(element => element.value.includes(queryString)));
    },

    addReader(reader) {
      if (!this.readers.find(item => item.id === reader.id)) {
        this.readers.push(reader);
      }

      this.readerQueryString = '';
    },

    addReviewer(reviewer) {
      if (!this.reviewers.find(item => item.id === reviewer.id)) {
        this.reviewers.push(reviewer);
      }

      this.reviewerQueryString = '';
    }
  }
};
</script>

<style scoped lang="scss">
@import '~/assets/scss/variables.scss';

.form-row {
  margin-top: 10px;
  margin-bottom: 10px;
}

form {
  margin-top: 10px;
}

.avatar-uploader {
  height: 206px;
  margin-bottom: 0;
}

.illustration-preview {
  max-height: 100%;
  max-width: 100%;
}

.list-of-users {
  li {
    margin: 5px 0;
  }
}

form {
  margin-top: 20px;
  margin-bottom: 30px;
}

.card-category {
  cursor: pointer;
  margin: 5px 0;

  &:hover, &.active {
    .category-title {
      color: $color-1-light;
    }

    .el-card {
      box-shadow: 0 2px 12px 0 rgba($color-1-light, 0.75);
      border-color: $color-1-light;
    }
  }

  .illustration-container {
    background-size: cover;
    background-repeat: no-repeat;
    height: 300px;
    width: 100%;
  }
}
</style>
