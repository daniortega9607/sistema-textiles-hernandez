<template>
  <v-app id="login">
    <v-content>
      <v-container fluid fill-height>
        <v-layout align-center justify-center>
          <v-flex xs12 sm8 md4>
            <v-card class="elevation-12">
              <v-toolbar dark color="primary">
                <v-toolbar-title>Iniciar Sesión</v-toolbar-title>
                <v-spacer></v-spacer>
              </v-toolbar>
              <v-card-text>
                <v-form v-model="canLogin">
                  <v-text-field
                    prepend-icon="person"
                    name="login"
                    label="Correo Electrónico"
                    type="email"
                    autocomplete="new-password"
                    v-model="email"
                    :rules="rules.email"
                  ></v-text-field>
                  <v-text-field
                    id="password"
                    prepend-icon="lock"
                    name="password"
                    label="Password"
                    type="password"
                    v-model="password"
                    :rules="rules.password"
                  ></v-text-field>
                </v-form>
              </v-card-text>
              <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn color="primary" @click="login" :disabled="!canLogin || loading" :loading="loading">Entrar</v-btn>
              </v-card-actions>
            </v-card>
          </v-flex>
        </v-layout>
      </v-container>
    </v-content>
    <v-snackbar v-model="alert.show" :color="alert.type" :right="true" :top="true">
      {{ alert.message }}
      <v-btn flat icon @click="alert.show = false">
        <v-icon>clear</v-icon>
      </v-btn>
    </v-snackbar>
  </v-app>
</template>

<script>
import { fetch, setHeaders } from "../utils";
import { Required, MinLength, Email } from "../utils/rules";

const rules = {
  email: [Required(), Email()],
  password: [Required()]
};

export default {
  data: () => ({
    alert: { show: null, message:null, type: null },
    email: null,
    password: null,
    canLogin: null,
    loading: null,
    rules
  }),
  created() {
    if (this.$store.state.auth.authenticated) {
      this.$router.push(this.$route.query.redirect || '/');
    }
  },
  methods: {
    async login() {
      if (this.canLogin) {
        this.loading = true;
        const { email, password } = this;
        const [err, res] = await fetch({
          method: "post",
          url: "/api/users/login",
          data: { email, password }
        });
        if (!err) {
          if (res.message) {
            this.alert.type = res.status && 'success' || 'error';
            this.alert.message = res.message;
            this.alert.show = true;
          }
          if (res.status) {
            this.$store.commit('auth/login', res);
            localStorage.token = res.token;
            localStorage.user = JSON.stringify(res.user);
            localStorage.authenticated = true;
            this.$router.push(this.$route.query.redirect || '/');
            setHeaders();
          }
        }
        this.loading = false;
      }
    }
  }
};
</script>
<style scoped>
#login {
  background-image: url('~@/assets/background.jpg');
  background-size: cover;
  background-repeat: no-repeat;
}
</style>
