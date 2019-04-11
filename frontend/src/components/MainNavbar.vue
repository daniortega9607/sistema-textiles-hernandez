<template>
  <v-toolbar color="blue" dark fixed app clipped-left>
    <v-toolbar-side-icon @click.stop="$store.state.app.drawer = !$store.state.app.drawer"/>
    <!-- <v-toolbar-title @click="$router.push('/')">
      {{ $store.state.auth.user.details.team.name }}
    </v-toolbar-title>-->
    <v-menu :nudge-width="100">
      <template v-slot:activator="{ on }">
        <v-toolbar-title v-on="on">
          <span>
            {{
            $store.state.app.selectedOffice && $store.state.app.selectedOffice.name || 'Textiles Hernandez'
            }}
          </span>
          <v-icon dark>arrow_drop_down</v-icon>
        </v-toolbar-title>
      </template>

      <v-list>
        <v-list-tile v-for="item in $store.state.entities.offices" :key="item.id">
          <v-list-tile-content @click="$store.commit('app/selectOffice', item)">
            <v-list-tile-title>{{ item.name }}</v-list-tile-title>
            <v-list-tile-sub-title>{{ item.address }}</v-list-tile-sub-title>
          </v-list-tile-content>
          <v-list-tile-action
            v-if="$store.state.app.selectedOffice && item.id === $store.state.app.selectedOffice.id"
          >
            <v-btn icon @click="$store.commit('app/selectOffice', item)">
              <v-icon>check</v-icon>
            </v-btn>
          </v-list-tile-action>
        </v-list-tile>
      </v-list>
    </v-menu>
    <v-spacer/>
    <v-btn icon @click="logout">
      <v-icon>logout</v-icon>
    </v-btn>
  </v-toolbar>
</template>

<script>
export default {
  data() {
    return {
      showNotifications: null,
      showOffices: null,
      notifications: [{ id: 1 }, { id: 2 }]
    };
  },
  methods: {
    dismissNotification(id) {
      const index = this.notifications.findIndex(item => item.id === id);
      if (index !== -1) {
        this.notifications.splice(index, 1);
      }
    },
    async logout() {
      this.$store.commit("entities/reset");
      this.$store.commit("auth/logout");
      localStorage.clear();
      this.$router.push("/login");
    }
  }
};
</script>
