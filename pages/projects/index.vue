<template>
  <div class="page-content">
    <app-page-header
      title="Mes Projets"
      @back="$router.push('/')"
    >
      <router-link to="/projects/create">
        <el-button type="primary">
          <i class="el-icon-sunny" />
          Nouveau projet
        </el-button>
      </router-link>
    </app-page-header>

    <div class="projects-container">
      <app-project-card
        v-for="project in projects"
        :key="project.id"
        :project="project"
      />
    </div>
  </div>
</template>

<script>
import AppProjectCard from '~/components/AppProjectCard.vue';
import AppPageHeader from '~/components/AppPageHeader.vue';

export default {
  components: {
    AppProjectCard,
    AppPageHeader
  },

  data() {
    return {
      projects: []
    };
  },

  created() {
    this.fetchData();
  },

  methods: {
    fetchData() {
      this.projects = [
        {
          id: 1,
          title: 'La Quête d\'Ewilan',
          subtitle: 'D\'un Monde à l\'Autre',
          is_public_read: true,
          is_public_review: false,
          presentation: "Ewilan Gil' Sayan est la fille d'Elicia et Altan Gil' Sayan. Elle est née dans un autre monde parallèle : Gwendalavir. Mais pour la protéger d'une guerre naissante, ses parents l'ont envoyée, ainsi que son frère Akiro, dans le nôtre, bloquant ses souvenirs à leur arrivée. Ils ont confié leurs deux enfants à des familles différentes et ont changé leur nom, Ewilan : Camille et Akiro: Mathieu afin qu'ils n'aient aucun contact. C'est dans son monde d'origine qu 'Ewilan, accompagnée de Salim, rencontre Edwin Til' Illan et d'autres compagnons, qu'elle apprend le pouvoir du dessin et que la situation de l'Empire est critique.",
          category: {
            title: 'Heroic Fantasy'
          },
          illustration_url: '/images/projects/1.jpeg',
          nb_views: 12,
          nb_upvotes: 6,
          nb_comments: 3
        },
        {
          id: 2,
          title: 'La Quête d\'Ewilan',
          subtitle: 'Les Frontières de Glace',
          is_public_read: true,
          is_public_review: false,
          presentation: "Le fonctionnement de l'Empire repose en grande partie sur l'Art du Dessin. Cet art qui offre à qui le maîtrise un grand pouvoir, s'utilise au moyen d'une autre dimension : l'Imagination. Les Ts'liches, des créatures maléfiques appartenant à une race vieille de plusieurs millénaires qui subsiste aux dépens d'autres espèces plus ou moins civilisées, ont figé les plus puissants dessinateurs du pays: les Sentinelles, laissant l'Empire affaibli.",
          category: {
            title: 'Heroic Fantasy'
          },
          illustration_url: '/images/projects/2.jpeg',
          nb_views: 12,
          nb_upvotes: 6,
          nb_comments: 3
        },
        {
          id: 3,
          title: 'La Quête d\'Ewilan',
          subtitle: 'L\'Île du Destin',
          is_public_read: false,
          is_public_review: false,
          presentation: "Cherchant à éliminer toute possibilité de résistance, ces créatures maléfiques ont bloqué l'Imagination. Le bras armé des Ts'liches est un peuple quasi sauvage : les Raïs, race n'ayant d'humanoïde que la forme, gouvernés par des rois fous et sanguinaires dont les sujets ne pensent qu'à s'entre-tuer. Exhortés par le pouvoir des Ts'liches, ils mènent des attaques au Nord que les armées alaviriennes peinent de plus en plus à contenir. Ewilan se voit donc chargée d'une mission primordiale : libérer les Sentinelles et sauver l'Empire de la menace Ts'liche. ",
          category: {
            title: 'Heroic Fantasy'
          },
          illustration_url: '/images/projects/3.jpeg',
          nb_views: 12,
          nb_upvotes: 6,
          nb_comments: 3
        }
      ];
    }
  }
};
</script>

<style scoped>
.projects-container {
  display: flex;
  margin: 0 -10px;
}
</style>
