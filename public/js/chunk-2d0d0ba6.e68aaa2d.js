(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d0d0ba6"],{"68e3":function(t,e,i){"use strict";i.r(e);var n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return t.entity?i("v-card",[i("v-card-title",{attrs:{"primary-title":""}},[i("h1",[t._v(t._s(t.entity.display_name_plural))]),i("v-spacer"),i("v-dialog",{attrs:{"max-width":"690px",transition:t.isMobile?"dialog-bottom-transition":"dialog-transition",scrollable:"",fullscreen:t.isMobile},scopedSlots:t._u([t.entity.hideAddButton?null:{key:"activator",fn:function(e){var n=e.on;return[i("v-btn",t._g({attrs:{color:"success"},on:{click:t.setDefaultValues}},n),[t._v("\n          Agregar\n        ")])]}}],null,!0),model:{value:t.dialog,callback:function(e){t.dialog=e},expression:"dialog"}},[i("v-card",[i("v-toolbar",{attrs:{dark:"",color:"primary"}},[t.isMobile?i("v-btn",{attrs:{icon:"",dark:""},on:{click:function(e){t.dialog=!1}}},[i("v-icon",[t._v("close")])],1):t._e(),i("v-toolbar-title",[t._v(t._s(t.formTitle))]),i("v-spacer"),t.item.updated_at&&!t.isMobile?i("v-subheader",[t._v("\n            Ultima modificacion: "+t._s(t.moment(t.item.updated_at).fromNow())+"\n          ")]):t._e(),t.isMobile?i("v-toolbar-items",[i("v-btn",{attrs:{dark:"",flat:""},on:{click:t.save}},[t._v("\n              Guardar\n            ")])],1):t._e()],1),i("v-card-text",[i("v-form",{ref:"form",on:{submit:function(e){return e.preventDefault(),t.save(e)}}},[t._l(t.getEntityForm(t.entity,-1!==t.editedIndex),function(e){return[i("render-field",{key:"item-form-"+e,attrs:{entity:t.entity,field:e,item:t.item,"edited-index":t.editedIndex,rules:t.getFieldValidations(t.entity,e,t.item),"change-handler":function(i){return t.item[e]=i}}})]})],2)],1),t.isMobile?t._e():i("v-card-actions",[i("v-spacer"),i("v-btn",{attrs:{color:"blue darken-1",flat:""},on:{click:t.close}},[t._v("\n            Cancelar\n          ")]),i("v-btn",{attrs:{color:"blue darken-1",flat:""},on:{click:t.save}},[t._v("\n            Guardar\n          ")])],1)],1)],1)],1),i("div",[i("v-toolbar",{attrs:{flat:"",color:"white"}},[i("v-text-field",{attrs:{"append-icon":"search",label:"Buscar","single-line":""},model:{value:t.search,callback:function(e){t.search=e},expression:"search"}})],1),i("v-data-table",{staticClass:"elevation-1",attrs:{headers:t.getEntityHeaders(t.entity),search:t.search,items:t.getItems({entity:t.entity.apiUrl,params:{office:t.$store.state.app.selectedOffice}}),"custom-filter":t.customFilter,"no-results-text":"No se encontraron registros","rows-per-page-text":"Registros por página","rows-per-page-items":t.rowsPerPage},scopedSlots:t._u([{key:"items",fn:function(e){return[t._l(Object.keys(t.entity.field_configs.list),function(n){return i("td",{key:"item-"+e.index+"-"+n,class:{"text-xs-center":"center"===t.entity.field_configs.list[n].align,"text-xs-right":"right"===t.entity.field_configs.list[n].align,"text-xs-left":"left"===t.entity.field_configs.list[n].align},on:{click:function(i){return t.editItem(e.item)}}},[t.entity.field_configs.list[n].formatter?i(t.entity.field_configs.list[n].formatter,t._b({tag:"component"},"component",e.item,!1)):i("div",[t._v("\n            "+t._s(e.item[n])+"\n          ")])],1)}),t.entity.no_actions?t._e():i("td",{staticClass:"justify-center layout px-0"},[i("v-icon",{staticClass:"mr-2",attrs:{small:""},on:{click:function(i){return t.editItem(e.item)}}},[t._v("\n            edit\n          ")]),i("v-icon",{attrs:{small:""},on:{click:function(i){return t.deleteItem(e.item)}}},[t._v("\n            delete\n          ")])],1)]}},{key:"no-data",fn:function(){return[i("v-btn",{attrs:{color:"primary"},on:{click:t.initialize}},[t._v("\n          Reset\n        ")])]},proxy:!0}],null,!1,228961364)})],1)],1):t._e()},r=[],a=(i("28a5"),i("386d"),i("6b54"),i("a4bb")),s=i.n(a),o=i("768b"),c=(i("96cf"),i("3b8d")),l=(i("a481"),i("5176")),d=i.n(l),u=(i("7f7f"),i("cebc")),f=i("6d31"),m=i("ed08"),h=i("7f8c"),p=i("2f62"),b=i("c1df"),v=i.n(b);v.a.locale("es");var y={components:{RenderField:h["a"]},data:function(){return{search:"",dialog:!1,entity:null,editedIndex:-1,item:null,rowsPerPage:[5,10,25,{text:"Todos",value:-1}]}},computed:Object(u["a"])({formTitle:function(){return-1===this.editedIndex?"Crear ".concat(this.entity.display_name):"Editar ".concat(this.entity.display_name)},isMobile:function(){return"sm"===this.$vuetify.breakpoint.name||"xs"===this.$vuetify.breakpoint.name}},Object(p["c"])("entities",["getItems"])),watch:{dialog:function(t){t||this.close(),this.$refs.form.resetValidation()}},created:function(){this.initialize()},methods:{initialize:function(){if(Object(f["f"])({url:"almacen"}))return this.entity=Object(f["d"])({url:"almacen"}),this.item=d()({},Object(f["a"])(this.entity)),void(this.$store.state.entities[this.entity.apiUrl].length||this.$store.dispatch("entities/read",{entity:this.entity.apiUrl}));this.$router.replace("/")},editItem:function(t){this.editedIndex=this.$store.state.entities[this.entity.apiUrl].indexOf(t),this.item=d()({},t),this.dialog=!0},deleteItem:function(){var t=Object(c["a"])(regeneratorRuntime.mark(function t(e){var i,n,r,a,s;return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:if(i=this.$store.state.entities[this.entity.apiUrl].indexOf(e),!window.confirm("¿Esta seguro de eliminar este registro?")){t.next=9;break}return t.next=4,this.$store.dispatch("entities/delete",{deletedItem:i,entity:this.entity.apiUrl,item:e});case 4:n=t.sent,r=Object(o["a"])(n,2),a=r[0],s=r[1],a||this.$store.commit("app/showAlert",s);case 9:case"end":return t.stop()}},t,this)}));function e(e){return t.apply(this,arguments)}return e}(),close:function(){var t=this;this.dialog=!1,setTimeout(function(){t.item=d()({},Object(f["a"])(t.entity)),t.editedIndex=-1},300)},save:function(){var t=Object(c["a"])(regeneratorRuntime.mark(function t(){var e,i,n,r,a,c,l,d,f,m,h=this;return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:if(!this.$refs.form.validate()){t.next=20;break}if(!(this.editedIndex>-1)){t.next=11;break}return t.next=4,this.$store.dispatch("entities/update",{updatedItem:this.editedIndex,entity:this.entity.apiUrl,item:this.item});case 4:e=t.sent,i=Object(o["a"])(e,2),n=i[0],r=i[1],n?n.response&&n.response.data&&n.response.data.error&&(a=n.response.data,this.$store.commit("app/showAlert",Object(u["a"])({},a,{message:a.error[s()(a.error)[0]][0]}))):(this.$store.commit("app/showAlert",r),this.close()),t.next=18;break;case 11:return t.next=13,this.$store.dispatch("entities/create",{entity:this.entity.apiUrl,item:this.item});case 13:c=t.sent,l=Object(o["a"])(c,2),d=l[0],f=l[1],d?d.response&&d.response.data&&d.response.data.error&&(m=d.response.data,this.$store.commit("app/showAlert",Object(u["a"])({},m,{message:m.error[s()(m.error)[0]][0]}))):(this.$store.commit("app/showAlert",f),this.close());case 18:t.next=22;break;case 20:this.$refs.form.resetValidation(),setTimeout(function(){h.$refs.form.validate()},400);case 22:case"end":return t.stop()}},t,this)}));function e(){return t.apply(this,arguments)}return e}(),customFilter:function(t,e,i){var n=e.toString().toLowerCase();if(""===n.trim())return t;var r=this.entity.field_configs.search;return t.filter(function(t){return(r||s()(t)).some(function(e){return i(Object(m["b"])(t,e.split(".")),n)})})},setDefaultValues:function(){this.item.office_id=this.$store.state.app.selectedOffice.id},getEntityHeaders:f["c"],getEntityForm:f["b"],getFieldValidations:f["e"],moment:v.a}},g=y,_=i("2877"),x=i("6544"),k=i.n(x),w=i("8336"),$=i("b0af"),V=i("99d9"),O=i("12b2"),I=i("8fea"),j=i("169a"),T=i("4bd4"),C=i("132d"),F=i("9910"),U=i("e0c7"),A=i("2677"),E=i("71d9"),M=i("2a7f"),R=Object(_["a"])(g,n,r,!1,null,null,null);e["default"]=R.exports;k()(R,{VBtn:w["a"],VCard:$["a"],VCardActions:V["a"],VCardText:V["b"],VCardTitle:O["a"],VDataTable:I["a"],VDialog:j["a"],VForm:T["a"],VIcon:C["a"],VSpacer:F["a"],VSubheader:U["a"],VTextField:A["a"],VToolbar:E["a"],VToolbarItems:M["a"],VToolbarTitle:M["b"]})}}]);
//# sourceMappingURL=chunk-2d0d0ba6.e68aaa2d.js.map