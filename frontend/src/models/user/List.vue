<template>
  <v-card>
    <v-card-title primary-title>
      <h1>Usuarios</h1>
      <v-spacer/>
      <v-dialog
        v-model="dialog"
        max-width="690px"
        :transition="isMobile ? 'dialog-bottom-transition' : 'dialog-transition'"
        scrollable
        :fullscreen="isMobile"
      >
        <template v-slot:activator="{ on }">
          <v-btn color="success" v-on="on">Agregar</v-btn>
        </template>
        <!-- <component :is="user && user.id ? 'Edit' : 'Create'" v-bind="user"/> -->
      </v-dialog>
    </v-card-title>
    <v-data-table v-model="selected" :headers="[]" :items="items.models" select-all>
      <template v-slot:headers="props">
        <tr>
          <th>
            <v-checkbox
              :input-value="props.all"
              :indeterminate="props.indeterminate"
              primary
              hide-details
              @click.stop="toggleAll"
            ></v-checkbox>
          </th>
          <!-- <th
          v-for="header in props.headers"
          :key="header.text"
          :class="['column sortable', pagination.descending ? 'desc' : 'asc', header.value === pagination.sortBy ? 'active' : '']"
          @click="changeSort(header.value)"
        >
          <v-icon small>arrow_upward</v-icon>
          {{ header.text }}
          </th>-->
        </tr>
      </template>
      <template v-slot:items="props">
        <tr :active="props.selected" @click="props.selected = !props.selected">
          <td>
            <v-checkbox :input-value="props.selected" primary hide-details></v-checkbox>
          </td>
          <td>{{ props.item.name }}</td>
          <td class="justify-center layout px-0">
            <v-icon small class="mr-2" @click="editItem(props.item)">edit</v-icon>
            <v-icon small @click="deleteItem(props.item)">delete</v-icon>
          </td>
        </tr>
      </template>
    </v-data-table>
  </v-card>
</template>
<script>
//import Create from "./Create.vue";
//import Edit from "./Edit.vue";
import { User, UserList } from "./";

export default {
  //components: { Create, Edit },
  data: () => ({
    selected: [],
    items: [],
    dialog: null,
    user: null
  }),
  created() {
    this.items = new UserList(this.$store.state.entities.users);
  },
  methods: {
    toggleAll() {
      if (this.selected.length) this.selected = [];
      else this.selected = this.items.models.slice();
    },
    editItem(item){
        console.log(item.save())
    }
  },
  watch: {
    "$store.state.entities.users"(val) {
      this.items = new UserList(val);
    }
  },
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
