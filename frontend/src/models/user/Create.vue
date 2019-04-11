<template>
  <v-card>
    <v-toolbar dark color="primary">
      <v-btn v-if="isMobile" icon dark @click="cancel">
        <v-icon>close</v-icon>
      </v-btn>
      <v-toolbar-title>Nuevo Usuario</v-toolbar-title>
      <v-spacer/>
      <v-toolbar-items v-if="isMobile">
        <v-btn dark flat @click="save">Guardar</v-btn>
      </v-toolbar-items>
    </v-toolbar>
    <v-card-text>
      <v-form ref="form" @submit.prevent="save"></v-form>
    </v-card-text>
    <v-card-actions v-if="!isMobile">
      <v-spacer/>
      <v-btn color="blue darken-1" flat @click="cancel">Cancelar</v-btn>
      <v-btn color="blue darken-1" flat @click="save">Guardar</v-btn>
    </v-card-actions>
  </v-card>
</template>
<script>
export default {
  props: { cancel: { required:true } },
  computed: {
    isMobile() {
      return (
        this.$vuetify.breakpoint.name === "sm" ||
        this.$vuetify.breakpoint.name === "xs"
      );
    }
  }
};
</script>
