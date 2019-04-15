<template>
  <div>
    <v-toolbar color="white" tabs>
      <v-toolbar-title>
        <h1>Ventas</h1>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn color="success" @click="addSale">Agregar Venta</v-btn>
      <template v-slot:extension>
        <v-tabs v-model="tabs" color="transparent">
          <v-tab v-for="sale in sales" :key="sale.id">Venta #{{ sale.id }}</v-tab>
        </v-tabs>
      </template>
    </v-toolbar>
    <v-tabs-items v-model="tabs">
      <v-tab-item v-for="(sale, i) in sales" :key="i">
        <v-card>
          <v-card-text>
            <v-form v-model="valid">
              <v-container fluid>
                <v-layout>
                  <v-flex :md8="$store.state.auth.user.user_type === 1">
                    <combo-box
                      label="Cliente"
                      :value="sale.customer"
                      :changeHandler="v => {
                        if(v) {
                          if (typeof v === 'string') {
                            sale.customer = v;
                            sale.customer_id = null;
                          }
                          else sale.customer_id = v.value;
                        }
                        else sale.customer_id = null;
                      }"
                      :item="sale"
                      :options="{ fromStore: true, entity: Customer, concatedKeys: ['first_name','last_name'] }"
                    />
                  </v-flex>
                  <v-flex md4 v-if="$store.state.auth.user.user_type === 1">
                    <v-checkbox v-model="sale.update_stock" label="Descontar de Almacen"></v-checkbox>
                  </v-flex>
                </v-layout>
                <v-layout>
                  <v-flex>
                    <combo-box
                      label="Articulo"
                      :ref="'article-'+i"
                      :value="sale.article.description"
                      :changeHandler="v => {
                        if (v) {
                          if (typeof v === 'string') {
                            sale.article.description = v;
                            sale.article.id = null;
                          }
                          else {
                            sale.article.quantity = null;
                            sale.article.id = v.value;
                            $store.state.entities.products.find(item => {
                              if (item.id === v.value) {
                                sale.article.price = item.fabric.buy_price
                              }
                              return item.id === v.value;
                            })
                          }
                        }
                        else sale.article.id = null;
                      }"
                      :item="sale"
                      :options="{ 
                          fromStore: true,
                          entity: Product,
                          concatedKeys: ['sku', 'fabric.name', 'design.name', 'color.name'] 
                        }"
                    />
                  </v-flex>
                </v-layout>
                <v-layout v-if="sale.article.id">
                  <v-flex>
                    <v-card>
                      <v-card-title>
                        <h2>Rollos Disponibles</h2>
                      </v-card-title>
                      <v-card-text>
                        <v-text-field
                          type="number"
                          label="Buscar por cantidad"
                          v-model="sale.article_quantity"
                        />
                        <v-data-table
                          v-model="sale.article_selected"
                          rows-per-page-text="Registros por página"
                          :headers="[
                            {text:'Cantidad', value:'quantity', align:'right'}
                        ]"
                          :items="getStockDetails({office: selectedOffice.id, product:sale.article.id, quantity: sale.article_quantity})"
                          no-results-text="No se encontraron registros"
                          select-all
                        >
                          <template v-slot:items="props">
                            <td>
                              <v-checkbox v-model="props.selected" primary hide-details></v-checkbox>
                            </td>
                            <td class="text-xs-right">{{props.item.quantity}}</td>
                          </template>
                        </v-data-table>
                      </v-card-text>
                    </v-card>
                  </v-flex>
                </v-layout>
                <v-layout>
                  <v-flex v-if="!sale.article.id">
                    <v-text-field
                      :value="sale.article.quantity"
                      label="Cantidad"
                      browser-autocomplete="new-password"
                      @input="v => sale.article.quantity = v"
                    />
                  </v-flex>
                  <v-flex>
                    <v-text-field
                      :value="sale.article.price"
                      :label="sale.article.id ? 'Precio por Metro':'Precio Unitario'"
                      browser-autocomplete="new-password"
                      @input="v => sale.article.price = v"
                    />
                  </v-flex>
                </v-layout>
                <v-layout>
                  <v-spacer></v-spacer>
                  <v-btn color="success" @click="addArticle(sale, i)">Agregar Articulo</v-btn>
                </v-layout>
                <v-data-table
                  v-if="sale.articles.length"
                  rows-per-page-text="Registros por página"
                  :headers="[
                    {text:'Cantidad', value:'quantity'},
                    {text:'Descripcion', value:'description'},
                    {text:'Precio Unitario', value:'price', align:'right'},
                    {text:'Total', value:'total', align:'right'},
                    {text:'', value:''},
                  ]"
                  :items="sale.articles"
                  no-results-text="No se encontraron registros"
                >
                  <template v-slot:items="props">
                    <td>{{props.item.quantity}}</td>
                    <td>{{props.item.description}}</td>
                    <td class="text-xs-right">{{props.item.price}}</td>
                    <td class="text-xs-right">{{props.item.total}}</td>
                    <td class="justify-center layout px-0">
                      <v-icon small @click="deleteArticle(sale, props.item, props.index)">delete</v-icon>
                    </td>
                  </template>
                </v-data-table>
                <v-layout>
                  <v-flex xs7 lg2 offset-lg6>
                    <h1>Total:</h1>
                  </v-flex>
                  <v-flex xs5>
                    <h2 class="text-xs-right">{{sale.total}}</h2>
                  </v-flex>
                </v-layout>
                <v-layout>
                  <v-flex xs7 lg2 offset-lg6>
                    <h1>Saldo:</h1>
                  </v-flex>
                  <v-flex xs5>
                    <h2 class="text-xs-right">{{sale.balance}}</h2>
                  </v-flex>
                </v-layout>
              </v-container>
            </v-form>
          </v-card-text>
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn color="error" @click="confirmDeleteSale(i)">Cancelar Venta</v-btn>
            <v-btn dark @click="showPayments(i)">Abonar Venta</v-btn>
            <v-btn color="primary" @click="saveSale(i, true)">Pagar Venta</v-btn>
            <v-btn color="success" @click="saveSale(i)">Guardar Venta</v-btn>
          </v-card-actions>
        </v-card>
      </v-tab-item>
    </v-tabs-items>
  </div>
</template>
<script>
import { mapState, mapMutations, mapGetters } from "vuex";
import AutocompleteBox from "../components/form/AutocompleteBox.vue";
import ComboBox from "../components/form/ComboBox.vue";
import Customer from "../utils/entities/customer";
import Product from "../utils/entities/product";
import { fetch } from '../utils';

export default {
  components: { AutocompleteBox, ComboBox },
  methods: {
    confirmDeleteSale(id) {
      if (confirm("¿Esta seguro de cancelar esta venta?")) {
        this.deleteSale(id);
      }
    },
    calculateTotal(sale) {
      sale.total = 0;
      sale.articles.forEach(item => (sale.total += item.price * item.quantity));
      sale.balance = sale.total;
    },
    addArticle(sale,i) {
      const { article } = sale;
      if (article.id) {
        sale.article_selected.forEach(item => {
          const total = parseFloat(item.quantity * article.price).toFixed(2);
          sale.articles.push({
            stock_detail_id: item.id,
            description: item.product,
            price: total,
            quantity: 1,
            total,
            detail: { ...item }
          });
          const stock = this.$store.state.entities.stocks.find(stock => {
            return stock.product_id === item.product_id;
          });
          if (stock) {
            const detail = stock.details.findIndex(
              detail => detail.id === item.id
            );
            if (detail !== -1) {
              stock.details.splice(detail, 1);
            }
          }
        });
        article.id = null;
      }
      article.quantity = null;
      article.price = null;
      article.description = null;
      sale.article_selected = [];
      this.$refs['article-'+i][0].search = '';
      this.$refs['article-'+i][0].selected_items = [];
      this.calculateTotal(sale);
    },
    deleteArticle(sale, item, index) {
      const stock = this.$store.state.entities.stocks.find(stock => {
        return stock.product_id === item.detail.product_id;
      });
      if (stock) {
        stock.details.push({...item.detail})
      }
      sale.articles.splice(index, 1);
    },
    async saveSale(index, payed) {
      const data = {
        office_id: this.$store.state.app.selectedOffice.id
      }
      const [err, res] = await fetch({url:'/api/sales',data,method:'post'})
      if (!err) {
        this.$store.commit('app/showAlert', res);
        this.deleteSale(index);
      }
    },
    ...mapMutations("app", ["addSale", "deleteSale"])
  },
  computed: {
    ...mapState("app", ["sales", "selectedOffice"]),
    ...mapGetters("entities", ["getStockDetails"])
  },
  data: () => ({
    tabs: null,
    valid: false,
    firstname: "",
    lastname: "",
    nameRules: [
      v => !!v || "Name is required",
      v => v.length <= 10 || "Name must be less than 10 characters"
    ],
    email: "",
    emailRules: [
      v => !!v || "E-mail is required",
      v => /.+@.+/.test(v) || "E-mail must be valid"
    ],
    Customer,
    Product
  })
};
</script>