<template>
  <v-app v-if="$store.state.auth.authenticated">
    <template>
      <main-drawer/>
      <main-navbar/>
      <v-snackbar
        v-for="(alert, index) in $store.state.app.alerts"
        :key="'alert-'+index"
        v-model="alert.show"
        :color="alert.status ? 'success':'error'"
        :right="true"
        :top="true"
      >
        {{ alert.message }}
        <v-btn flat icon @click="alert.show = false">
          <v-icon>clear</v-icon>
        </v-btn>
      </v-snackbar>
      <v-content>
        <v-container fluid>
          <router-view :key="$route.params.entity || ''"/>
        </v-container>
      </v-content>
    </template>
  </v-app>
</template>
<script>
import { mapState, mapMutations, mapActions  } from "vuex";
import MainDrawer from "../components/MainDrawer.vue";
import MainNavbar from "../components/MainNavbar.vue";

let notifications;
let retries = 3;
let incremental_retry = 5;

export default {
  components: { MainDrawer, MainNavbar },
  data: () => ({
    last_event_id: null
  }),
  created() {
    this.setupStream();
  },
  computed: {
    ...mapState("auth", ["user"])
  },
  methods: {
    setupStream() {
      notifications = new EventSource(
        `/api/notification_events/subscribe?user_id=${this.user.id}&${
          this.last_event_id ? "last_event_id=" + this.last_event_id : ""
        }`
      );
      notifications.addEventListener(
        "open",
        event => {
          if (retries !== 3 && retries < 2) {
            retries = 3;
            incremental_retry = 5;
            this.$store.state.app.alerts.push({
              show: true,
              status: true,
              message:'Conexión reestablecida'
            })
          }
        },
        false
      );
      notifications.addEventListener(
        "initValues",
        event => {
          const data = JSON.parse(event.data);
          this.last_event_id = event.lastEventId;
          this.setInitialValues(data);
          if(!this.$store.state.app.selectedOffice && this.$store.state.entities.offices.length) {
            this.$store.commit('app/selectOffice', this.$store.state.entities.offices[0])
          }
        },
        false
      );
      notifications.addEventListener(
        "notification",
        event => {
          const data = JSON.parse(event.data);
          this.last_event_id = event.lastEventId;
          this.setNotifications(data);
        },
        false
      );
      notifications.addEventListener(
        "error",
        event => {
          event.target.close();
          if (retries > 0) {
            retries--;
            setTimeout(() => {
              incremental_retry = incremental_retry * 2;
              this.setupStream();
            }, 1000 * incremental_retry);
            if(incremental_retry != 5) {
              this.$store.state.app.alerts.push({
                show: true,
                status: false,
                message: `Hay un error con su conexion, intentando restablecer en ${incremental_retry} segundos`
              })
            }
          } else {
            this.$store.state.app.alerts.push({
              show: true,
              status: false,
              message: `No se ha podido reestablecer la conexion. Verifique su conexion a internet y recargue la pagina`
            })
          }
        },
        false
      );
    },
    closeStream() {
      notifications.close();
    },
    ...mapMutations("entities", ["setInitialValues"]),
    ...mapActions("entities", ["setNotifications"]),
    ...mapActions("auth", ["isAuthenticated", "logout"])
  },
  beforeDestroy() {
    if (notifications) {
      notifications.close();
      notifications = null;
    }
  }
};
</script>
