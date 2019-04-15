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
    <v-menu
      v-model="showNotifications"
      :nudge-width="260"
      offset-x
    >
      <template v-slot:activator="{ on }">
        <v-btn
          icon
          v-on="on"
        >
          <v-badge
            overlap
            color="red"
          >
            <template
              v-if="$store.getters['entities/getNotifications']({
                user_id: $store.state.auth.user.id
              }).length"
              v-slot:badge
            >
              {{ $store.getters['entities/getNotifications']({
                user_id: $store.state.auth.user.id
              }).length }}
            </template>
            <v-icon>notifications</v-icon>
          </v-badge>
        </v-btn>
      </template>
      <v-card>
        <v-list>
          <v-list-tile
            v-for="item in $store.getters['entities/getNotifications']({
              user_id: $store.state.auth.user.id
            })"
            :key="item.id"
          >
            <v-list-tile-content>
              <v-list-tile-title>{{item.message}}</v-list-tile-title>
              <v-list-tile-sub-title></v-list-tile-sub-title>
            </v-list-tile-content>
            <v-list-tile-action>
              <v-btn
                icon
                @click="dismissNotification(item.id)"
              >
                <v-icon>check</v-icon>
              </v-btn>
            </v-list-tile-action>
          </v-list-tile>
          <v-list-tile v-if="!$store.getters['entities/getNotifications']({
            user_id: $store.state.auth.user.id
          }).length">
            <v-list-tile-content>
              <v-list-tile-sub-title>No hay notificaciones recientes</v-list-tile-sub-title>
            </v-list-tile-content>
          </v-list-tile>
        </v-list>
      </v-card>
    </v-menu>
    <v-btn icon @click="logout">
      <v-icon>logout</v-icon>
    </v-btn>
  </v-toolbar>
</template>

<script>
import { fetch } from '../utils';

export default {
  data() {
    return {
      showNotifications: null,
      showOffices: null,
    };
  },
  methods: {
    async dismissNotification(id) {
      await fetch({ url:`api/notifications/${id}`, method:'put', data: {status:2}});
      /*const index = this.notifications.findIndex(item => item.id === id);
      if (index !== -1) {
        this.notifications.splice(index, 1);
      }*/
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
