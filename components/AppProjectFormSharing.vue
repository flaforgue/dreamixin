<template>
  <div>
    <el-row :gutter="20" type="flex" align="flex-start">
      <el-col :span="3">
        <p class="form-row-title">
          {{ title }}
        </p>
      </el-col>
      <el-col :span="4">
        <el-switch
          :value="sharingOptions.isPublic"
          active-text="Public"
          inactive-text="Privé"
          class="form-row"
          @input="update('isPublic', $event)"
        />
      </el-col>
      <el-col v-if="!sharingOptions.isPublic" :span="6">
        <el-autocomplete
          v-model="queryString"
          :fetch-suggestions="querySearchAsync"
          placeholder="Entrez un nom d'utilisateur"
          @select="addUser"
        />
      </el-col>
      <el-col v-if="!sharingOptions.isPublic" :span="11">
        <ul class="list-of-users">
          <li
            v-for="user in sharingOptions.users"
            :key="user.id"
          >
            <el-button
              type="danger"
              size="micro"
              icon="el-icon-close"
              circle
              @click="removeUser(user)"
            />
            <span class="user-name">
              {{ user.value }}
            </span>
          </li>
          <li v-if="sharingOptions.users.length === 0">
            Aucun utilisateur n'a accès au projet
          </li>
        </ul>
      </el-col>
    </el-row>
  </div>
</template>
<script>
export default {
  props: {
    title: {
      type: String,
      required: true
    },

    value: {
      type: Object,
      default: () => { return {}; }
    }
  },

  data() {
    return {
      queryString: ''
    };
  },

  computed: {
    sharingOptions() {
      const defaultValue = {
        isPublic: false,
        users: []
      };

      return this.value ? this.value : defaultValue;
    }
  },

  methods: {
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

    update(key, value) {
      this.$emit('input', { ...this.sharingOptions, [key]: value });
    },

    addUser(user) {
      if (!this.sharingOptions.users.find(item => item.id === user.id)) {
        this.update('users', this.sharingOptions.users.concat(user));
      }

      this.queryString = '';
    },

    removeUser(user) {
      const index = this.sharingOptions.users.indexOf(user);

      if (index > -1) {
        this.update('users', this.sharingOptions.users.splice(index, 1));
      }
    }
  }
};
</script>
<style scoped lang="scss">
@import '~/assets/scss/variables.scss';

.list-of-users {
  list-style-type: none;
  background-color: $color-el-grey-lighter;
  border-radius: 4px;
  padding: 6px 20px;

  li {
    font-size: $font-size-text;
    margin: 5px 0;

    .user-name {
      margin-left: 5px;
      vertical-align: top;
    }
  }
}
</style>
