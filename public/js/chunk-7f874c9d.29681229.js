(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-7f874c9d"],{"0832":function(t,e,i){},"26e5":function(t,e,i){},"2a7f":function(t,e,i){"use strict";i.d(e,"b",function(){return a}),i.d(e,"a",function(){return o});var n=i("80d2"),s=i("71d9"),r=i("706c"),a=Object(n["e"])("v-toolbar__title"),o=Object(n["e"])("v-toolbar__items");s["a"],r["a"]},"4bd4":function(t,e,i){"use strict";i("26e5");var n=i("94ab");e["a"]={name:"v-form",mixins:[Object(n["b"])("form")],inheritAttrs:!1,props:{value:Boolean,lazyValidation:Boolean},data:function(){return{inputs:[],watchers:[],errorBag:{}}},watch:{errorBag:{handler:function(){var t=Object.values(this.errorBag).includes(!0);this.$emit("input",!t)},deep:!0,immediate:!0}},methods:{watchInput:function(t){var e=this,i=function(t){return t.$watch("hasError",function(i){e.$set(e.errorBag,t._uid,i)},{immediate:!0})},n={_uid:t._uid,valid:void 0,shouldValidate:void 0};return this.lazyValidation?n.shouldValidate=t.$watch("shouldValidate",function(s){s&&(e.errorBag.hasOwnProperty(t._uid)||(n.valid=i(t)))}):n.valid=i(t),n},validate:function(){var t=this.inputs.filter(function(t){return!t.validate(!0)}).length;return!t},reset:function(){for(var t=this,e=this.inputs.length;e--;)this.inputs[e].reset();this.lazyValidation&&setTimeout(function(){t.errorBag={}},0)},resetValidation:function(){for(var t=this,e=this.inputs.length;e--;)this.inputs[e].resetValidation();this.lazyValidation&&setTimeout(function(){t.errorBag={}},0)},register:function(t){var e=this.watchInput(t);this.inputs.push(t),this.watchers.push(e)},unregister:function(t){var e=this.inputs.find(function(e){return e._uid===t._uid});if(e){var i=this.watchers.find(function(t){return t._uid===e._uid});i.valid&&i.valid(),i.shouldValidate&&i.shouldValidate(),this.watchers=this.watchers.filter(function(t){return t._uid!==e._uid}),this.inputs=this.inputs.filter(function(t){return t._uid!==e._uid}),this.$delete(this.errorBag,e._uid)}}},render:function(t){var e=this;return t("form",{staticClass:"v-form",attrs:Object.assign({novalidate:!0},this.$attrs),on:{submit:function(t){return e.$emit("submit",t)}}},this.$slots.default)}}},"58dbb":function(t,e,i){},"706c":function(t,e,i){"use strict";var n=i("afdd"),s=i("9d26"),r=i("2b0e");e["a"]=r["a"].extend({name:"v-toolbar-side-icon",functional:!0,render:function(t,e){var i=e.slots,r=e.listeners,a=e.props,o=e.data,l=o.staticClass?o.staticClass+" v-toolbar__side-icon":"v-toolbar__side-icon",c=Object.assign(o,{staticClass:l,props:Object.assign(a,{icon:!0}),on:r}),u=i().default;return t(n["a"],c,u||[t(s["a"],"$vuetify.icons.menu")])}})},7514:function(t,e,i){"use strict";var n=i("5ca1"),s=i("0a49")(5),r="find",a=!0;r in[]&&Array(1)[r](function(){a=!1}),n(n.P+n.F*a,"Array",{find:function(t){return s(this,t,arguments.length>1?arguments[1]:void 0)}}),i("9c6c")(r)},bb51:function(t,e,i){"use strict";i.r(e);var n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("Sales")},s=[],r=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-container",[i("v-layout",{attrs:{"text-xs-center":"",wrap:""}},[i("v-flex",{attrs:{"mb-4":""}},[i("h1",{staticClass:"display-2 font-weight-bold mb-3"},[t._v("\n        Bienvenido a "+t._s(t.$store.state.auth.user.details.team.name)+"\n      ")])])],1)],1)},a=[],o={props:{msg:{type:String,default:""}},data:function(){return{ecosystem:[{text:"vuetify-loader",href:"https://github.com/vuetifyjs/vuetify-loader"},{text:"github",href:"https://github.com/vuetifyjs/vuetify"},{text:"awesome-vuetify",href:"https://github.com/vuetifyjs/awesome-vuetify"}],importantLinks:[{text:"Documentation",href:"https://vuetifyjs.com"},{text:"Chat",href:"https://community.vuetifyjs.com"},{text:"Made with Vuetify",href:"https://madewithvuetifyjs.com"},{text:"Twitter",href:"https://twitter.com/vuetifyjs"},{text:"Articles",href:"https://medium.com/vuetify"}],whatsNext:[{text:"Explore components",href:"https://vuetifyjs.com/components/api-explorer"},{text:"Select a layout",href:"https://vuetifyjs.com/layout/pre-defined"},{text:"Frequently Asked Questions",href:"https://vuetifyjs.com/getting-started/frequently-asked-questions"}]}}},l=o,c=i("2877"),u=i("6544"),h=i.n(u),d=i("a523"),f=i("0e8f"),v=i("a722"),p=Object(c["a"])(l,r,a,!1,null,null,null);p.exports;h()(p,{VContainer:d["a"],VFlex:f["a"],VLayout:v["a"]});var m=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[i("v-toolbar",{attrs:{color:"white",tabs:""},scopedSlots:t._u([{key:"extension",fn:function(){return[i("v-tabs",{attrs:{color:"transparent"},model:{value:t.tabs,callback:function(e){t.tabs=e},expression:"tabs"}},t._l(t.sales,function(e){return i("v-tab",{key:e.id},[t._v("Venta #"+t._s(e.id))])}),1)]},proxy:!0}])},[i("v-toolbar-title",[i("h1",[t._v("Ventas")])]),i("v-spacer"),i("v-btn",{attrs:{color:"success"},on:{click:t.addSale}},[t._v("Agregar Venta")])],1),i("v-tabs-items",{model:{value:t.tabs,callback:function(e){t.tabs=e},expression:"tabs"}},t._l(t.sales,function(e,n){return i("v-tab-item",{key:n},[i("v-card",[i("v-card-text",[i("v-form",{model:{value:t.valid,callback:function(e){t.valid=e},expression:"valid"}},[i("v-container",{attrs:{fluid:""}},[i("v-layout",[i("v-flex",{attrs:{md8:1===t.$store.state.auth.user.user_type}},[i("combo-box",{attrs:{label:"Cliente",value:e.customer,changeHandler:function(t){t?"string"===typeof t?(e.customer=t,e.customer_id=null):e.customer_id=t.value:e.customer_id=null},item:e,options:{fromStore:!0,entity:t.Customer,concatedKeys:["first_name","last_name"]}}})],1),1===t.$store.state.auth.user.user_type?i("v-flex",{attrs:{md4:""}},[i("v-checkbox",{attrs:{label:"Descontar de Almacen"},model:{value:e.update_stock,callback:function(i){t.$set(e,"update_stock",i)},expression:"sale.update_stock"}})],1):t._e()],1),i("v-layout",[i("v-flex",[i("combo-box",{ref:"article-"+n,refInFor:!0,attrs:{label:"Articulo",value:e.article.description,changeHandler:function(i){i?"string"===typeof i?(e.article.description=i,e.article.id=null):(e.article.quantity=null,e.article.id=i.value,t.$store.state.entities.products.find(function(t){return t.id===i.value&&(e.article.price=t.fabric.buy_price),t.id===i.value})):e.article.id=null},item:e,options:{fromStore:!0,entity:t.Product,concatedKeys:["sku","fabric.name","design.name","color.name"]}}})],1)],1),e.article.id?i("v-layout",[i("v-flex",[i("v-card",[i("v-card-title",[i("h2",[t._v("Rollos Disponibles")])]),i("v-card-text",[i("v-text-field",{attrs:{type:"number",label:"Buscar por cantidad"},model:{value:e.article_quantity,callback:function(i){t.$set(e,"article_quantity",i)},expression:"sale.article_quantity"}}),i("v-data-table",{attrs:{"rows-per-page-text":"Registros por página",headers:[{text:"Cantidad",value:"quantity",align:"right"}],items:t.getStockDetails({office:t.selectedOffice.id,product:e.article.id,quantity:e.article_quantity}),"no-results-text":"No se encontraron registros","select-all":""},scopedSlots:t._u([{key:"items",fn:function(e){return[i("td",[i("v-checkbox",{attrs:{primary:"","hide-details":""},model:{value:e.selected,callback:function(i){t.$set(e,"selected",i)},expression:"props.selected"}})],1),i("td",{staticClass:"text-xs-right"},[t._v(t._s(e.item.quantity))])]}}],null,!0),model:{value:e.article_selected,callback:function(i){t.$set(e,"article_selected",i)},expression:"sale.article_selected"}})],1)],1)],1)],1):t._e(),i("v-layout",[e.article.id?t._e():i("v-flex",[i("v-text-field",{attrs:{value:e.article.quantity,label:"Cantidad","browser-autocomplete":"new-password"},on:{input:function(t){return e.article.quantity=t}}})],1),i("v-flex",[i("v-text-field",{attrs:{value:e.article.price,label:e.article.id?"Precio por Metro":"Precio Unitario","browser-autocomplete":"new-password"},on:{input:function(t){return e.article.price=t}}})],1)],1),i("v-layout",[i("v-spacer"),i("v-btn",{attrs:{color:"success"},on:{click:function(i){return t.addArticle(e,n)}}},[t._v("Agregar Articulo")])],1),e.articles.length?i("v-data-table",{attrs:{"rows-per-page-text":"Registros por página",headers:[{text:"Cantidad",value:"quantity"},{text:"Descripcion",value:"description"},{text:"Precio Unitario",value:"price",align:"right"},{text:"Total",value:"total",align:"right"},{text:"",value:""}],items:e.articles,"no-results-text":"No se encontraron registros"},scopedSlots:t._u([{key:"items",fn:function(n){return[i("td",[t._v(t._s(n.item.quantity))]),i("td",[t._v(t._s(n.item.description))]),i("td",{staticClass:"text-xs-right"},[t._v(t._s(n.item.price))]),i("td",{staticClass:"text-xs-right"},[t._v(t._s(n.item.total))]),i("td",{staticClass:"justify-center layout px-0"},[i("v-icon",{attrs:{small:""},on:{click:function(i){return t.deleteArticle(e,n.item,n.index)}}},[t._v("delete")])],1)]}}],null,!0)}):t._e(),i("v-layout",[i("v-flex",{attrs:{xs7:"",lg2:"","offset-lg6":""}},[i("h1",[t._v("Total:")])]),i("v-flex",{attrs:{xs5:""}},[i("h2",{staticClass:"text-xs-right"},[t._v(t._s(e.total))])])],1),i("v-layout",[i("v-flex",{attrs:{xs7:"",lg2:"","offset-lg6":""}},[i("h1",[t._v("Saldo:")])]),i("v-flex",{attrs:{xs5:""}},[i("h2",{staticClass:"text-xs-right"},[t._v(t._s(e.balance))])])],1)],1)],1)],1),i("v-card-actions",[i("v-spacer"),i("v-btn",{attrs:{color:"error"},on:{click:function(e){return t.confirmDeleteSale(n)}}},[t._v("Cancelar Venta")]),i("v-btn",{attrs:{dark:""},on:{click:function(e){return t.showPayments(n)}}},[t._v("Abonar Venta")]),i("v-btn",{attrs:{color:"primary"},on:{click:function(e){return t.saveSale(n,!0)}}},[t._v("Pagar Venta")]),i("v-btn",{attrs:{color:"success"},on:{click:function(e){return t.saveSale(n)}}},[t._v("Guardar Venta")])],1)],1)],1)}),1)],1)},b=[],g=i("768b"),y=(i("96cf"),i("3b8d")),w=(i("20d6"),i("7514"),i("59ad")),x=i.n(w),_=(i("ac6a"),i("cebc")),V=i("2f62"),O=i("c6e8"),$=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-combobox",{attrs:{value:t.value,loading:t.loading,"search-input":t.search,items:t.items,label:t.label,"cache-items":"",rules:t.rules,"hide-no-data":"",clearable:!0},on:{"update:searchInput":function(e){t.search=e},"update:search-input":function(e){t.search=e},change:t.changeHandler}})},k=[],I=(i("386d"),i("c5f6"),i("2ef0")),T=i("ed08"),C={props:{label:{type:String,default:""},rules:{type:Array,default:function(){return[]}},value:{type:[String,Object,Number],default:null},changeHandler:{type:Function,required:!0},item:{type:Object,default:function(){return{}}},options:{type:Object,default:function(){return{}}}},data:function(){return{loading:!1,items:[],search:null}},watch:{search:function(t){t&&t!==this.value&&!this.options.fromStore&&this.debounce("querySelections",t)},"item.id":function(t){t&&null!==this.value&&!this.options.fromStore&&this.getItem(this.value)}},created:function(){if(this.options.fromStore){var t=1===this.$store.state.auth.user.user_type?null:this.$store.state.auth.user.id;this.items=this.$store.getters["entities/getSearchableItems"]({entity:this.options.entity.apiUrl,keys:this.options.concatedKeys,user_id:t})}},methods:{debounce:Object(I["debounce"])(function(t,e){this[t](e)},600),getItem:function(){var t=Object(y["a"])(regeneratorRuntime.mark(function t(e){var i,n,s,r;return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:if(this.options.fromStore){t.next=8;break}return t.next=3,Object(T["a"])({url:"/api/".concat(this.options.entity.apiUrl),params:{id:e,search:!0}});case 3:i=t.sent,n=Object(g["a"])(i,2),s=n[0],r=n[1],s||(this.items=r);case 8:case"end":return t.stop()}},t,this)}));function e(e){return t.apply(this,arguments)}return e}(),querySelections:function(){var t=Object(y["a"])(regeneratorRuntime.mark(function t(e){var i,n,s,r;return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:if(this.loading=!0,!this.options.entity.apiUrl){t.next=9;break}return t.next=4,Object(T["a"])({url:"/api/".concat(this.options.entity.apiUrl),params:{search:this.search}});case 4:i=t.sent,n=Object(g["a"])(i,2),s=n[0],r=n[1],s||(this.items=r.filter(function(t){return(t.text||"").toLowerCase().indexOf((e||"").toLowerCase())>-1}));case 9:this.loading=!1;case 10:case"end":return t.stop()}},t,this)}));function e(e){return t.apply(this,arguments)}return e}()}},j=C,S=i("2b5d"),A=Object(c["a"])(j,$,k,!1,null,null,null),B=A.exports;h()(A,{VCombobox:S["a"]});var E=i("8ec5"),q=i("b456"),R={components:{AutocompleteBox:O["a"],ComboBox:B},methods:Object(_["a"])({confirmDeleteSale:function(t){confirm("¿Esta seguro de cancelar esta venta?")&&this.deleteSale(t)},calculateTotal:function(t){t.total=0,t.articles.forEach(function(e){return t.total+=e.price*e.quantity}),t.balance=t.total},addArticle:function(t,e){var i=this,n=t.article;n.id&&(t.article_selected.forEach(function(e){var s=x()(e.quantity*n.price).toFixed(2);t.articles.push({stock_detail_id:e.id,description:e.product,price:s,quantity:1,total:s,detail:Object(_["a"])({},e)});var r=i.$store.state.entities.stocks.find(function(t){return t.product_id===e.product_id});if(r){var a=r.details.findIndex(function(t){return t.id===e.id});-1!==a&&r.details.splice(a,1)}}),n.id=null),n.quantity=null,n.price=null,n.description=null,t.article_selected=[],this.$refs["article-"+e][0].search="",this.$refs["article-"+e][0].selected_items=[],this.calculateTotal(t)},deleteArticle:function(t,e,i){var n=this.$store.state.entities.stocks.find(function(t){return t.product_id===e.detail.product_id});n&&n.details.push(Object(_["a"])({},e.detail)),t.articles.splice(i,1)},saveSale:function(){var t=Object(y["a"])(regeneratorRuntime.mark(function t(e,i){var n,s,r,a,o;return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return n={office_id:this.$store.state.app.selectedOffice.id},t.next=3,Object(T["a"])({url:"/api/sales",data:n,method:"post"});case 3:s=t.sent,r=Object(g["a"])(s,2),a=r[0],o=r[1],a||(this.$store.commit("app/showAlert",o),this.deleteSale(e));case 8:case"end":return t.stop()}},t,this)}));function e(e,i){return t.apply(this,arguments)}return e}()},Object(V["d"])("app",["addSale","deleteSale"])),computed:Object(_["a"])({},Object(V["e"])("app",["sales","selectedOffice"]),Object(V["c"])("entities",["getStockDetails"])),data:function(){return{tabs:null,valid:!1,firstname:"",lastname:"",nameRules:[function(t){return!!t||"Name is required"},function(t){return t.length<=10||"Name must be less than 10 characters"}],email:"",emailRules:[function(t){return!!t||"E-mail is required"},function(t){return/.+@.+/.test(t)||"E-mail must be valid"}],Customer:E["a"],Product:q["a"]}}},L=R,P=i("8336"),M=i("b0af"),z=i("99d9"),X=i("12b2"),N=i("ac7c"),W=i("8fea"),D=i("4bd4"),H=i("132d"),G=i("9910"),Y=i("2464"),F=i("0d01"),U=i("6a18"),K=i("80d2"),J=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var i=arguments[e];for(var n in i)Object.prototype.hasOwnProperty.call(i,n)&&(t[n]=i[n])}return t},Q={name:"v-tab",mixins:[F["a"],Object(Y["a"])("tabGroup"),U["a"]],props:{ripple:{type:[Boolean,Object],default:!0}},computed:{classes:function(){return J({"v-tabs__item":!0,"v-tabs__item--disabled":this.disabled},this.groupClasses)},value:function(){var t=this.to||this.href||"";if(this.$router&&this.to===Object(this.to)){var e=this.$router.resolve(this.to,this.$route,this.append);t=e.href}return t.replace("#","")}},watch:{$route:"onRouteChange"},mounted:function(){this.onRouteChange()},methods:{click:function(t){this.href&&this.href.indexOf("#")>-1&&t.preventDefault(),this.$emit("click",t),this.to||this.toggle()},onRouteChange:function(){var t=this;if(this.to&&this.$refs.link){var e="_vnode.data.class."+this.activeClass;this.$nextTick(function(){Object(K["j"])(t.$refs.link,e)&&t.toggle()})}}},render:function(t){var e=this.generateRouteLink(this.classes),i=e.data,n=this.disabled?"div":e.tag;return i.ref="link",t("div",{staticClass:"v-tabs__div"},[t(n,i,this.$slots.default)])}},Z=i("3e79"),tt=i("c341"),et=i("58df"),it=Object(et["a"])(Z["a"],Object(Y["a"])("windowGroup","v-window-item","v-window")).extend({name:"v-window-item",directives:{Touch:tt["a"]},props:{reverseTransition:{type:[Boolean,String],default:void 0},transition:{type:[Boolean,String],default:void 0},value:{required:!1}},data:function(){return{done:null,isActive:!1,wasCancelled:!1}},computed:{computedTransition:function(){return this.windowGroup.internalReverse?"undefined"!==typeof this.reverseTransition?this.reverseTransition||"":this.windowGroup.computedTransition:"undefined"!==typeof this.transition?this.transition||"":this.windowGroup.computedTransition}},mounted:function(){this.$el.addEventListener("transitionend",this.onTransitionEnd,!1)},beforeDestroy:function(){this.$el.removeEventListener("transitionend",this.onTransitionEnd,!1)},methods:{genDefaultSlot:function(){return this.$slots.default},onAfterEnter:function(){var t=this;this.wasCancelled?this.wasCancelled=!1:requestAnimationFrame(function(){t.windowGroup.internalHeight=void 0,t.windowGroup.isActive=!1})},onBeforeEnter:function(){this.windowGroup.isActive=!0},onLeave:function(t){this.windowGroup.internalHeight=Object(K["c"])(t.clientHeight)},onEnterCancelled:function(){this.wasCancelled=!0},onEnter:function(t,e){var i=this,n=this.windowGroup.isBooted;n&&(this.done=e),requestAnimationFrame(function(){if(!i.computedTransition)return e();i.windowGroup.internalHeight=Object(K["c"])(t.clientHeight),!n&&setTimeout(e,100)})},onTransitionEnd:function(t){"transform"===t.propertyName&&t.target===this.$el&&this.done&&(this.done(),this.done=null)}},render:function(t){var e=t("div",{staticClass:"v-window-item",directives:[{name:"show",value:this.isActive}],on:this.$listeners},this.showLazyContent(this.genDefaultSlot()));return t("transition",{props:{name:this.computedTransition},on:{afterEnter:this.onAfterEnter,beforeEnter:this.onBeforeEnter,leave:this.onLeave,enter:this.onEnter,enterCancelled:this.onEnterCancelled}},[e])}}),nt=i("d9bd"),st=it.extend({name:"v-tab-item",props:{id:String},render:function(t){var e=it.options.render.call(this,t);return this.id&&(Object(nt["d"])("id","value",this),e.data.domProps=e.data.domProps||{},e.data.domProps.id=this.id),e}}),rt=(i("f413"),i("58dbb"),i("2b0e"));function at(t,e,i){return e in t?Object.defineProperty(t,e,{value:i,enumerable:!0,configurable:!0,writable:!0}):t[e]=i,t}function ot(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"value",e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"change";return rt["a"].extend({name:"proxyable",model:{prop:t,event:e},props:at({},t,{required:!1}),data:function(){return{internalLazyValue:this[t]}},computed:{internalValue:{get:function(){return this.internalLazyValue},set:function(t){t!==this.internalLazyValue&&(this.internalLazyValue=t,this.$emit(e,t))}}},watch:at({},t,function(t){this.internalLazyValue=t})})}var lt=ot(),ct=lt,ut=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var i=arguments[e];for(var n in i)Object.prototype.hasOwnProperty.call(i,n)&&(t[n]=i[n])}return t},ht=Object(et["a"])(ct,U["a"]).extend({name:"base-item-group",props:{activeClass:{type:String,default:"v-item--active"},mandatory:Boolean,max:{type:[Number,String],default:null},multiple:Boolean},data:function(){return{internalLazyValue:void 0!==this.value?this.value:this.multiple?[]:void 0,items:[]}},computed:{classes:function(){return ut({},this.themeClasses)},selectedItems:function(){var t=this;return this.items.filter(function(e,i){return t.toggleMethod(t.getValue(e,i))})},selectedValues:function(){return Array.isArray(this.internalValue)?this.internalValue:[this.internalValue]},toggleMethod:function(){var t=this;if(!this.multiple)return function(e){return t.internalValue===e};var e=this.internalValue;return Array.isArray(e)?function(t){return e.includes(t)}:function(){return!1}}},watch:{internalValue:function(){this.$nextTick(this.updateItemsState)}},created:function(){this.multiple&&!Array.isArray(this.internalValue)&&Object(nt["c"])("Model must be bound to an array if the multiple property is true.",this)},methods:{getValue:function(t,e){return null==t.value||""===t.value?e:t.value},onClick:function(t,e){this.updateInternalValue(this.getValue(t,e))},register:function(t){var e=this,i=this.items.push(t)-1;t.$on("change",function(){return e.onClick(t,i)}),this.mandatory&&null==this.internalLazyValue&&this.updateMandatory(),this.updateItem(t,i)},unregister:function(t){if(!this._isDestroyed){var e=this.items.indexOf(t),i=this.getValue(t,e);this.items.splice(e,1);var n=this.selectedValues.indexOf(i);if(!(n<0)){if(!this.mandatory)return this.updateInternalValue(i);this.multiple&&Array.isArray(this.internalValue)?this.internalValue=this.internalValue.filter(function(t){return t!==i}):this.internalValue=void 0,this.selectedItems.length||this.updateMandatory(!0)}}},updateItem:function(t,e){var i=this.getValue(t,e);t.isActive=this.toggleMethod(i)},updateItemsState:function(){if(this.mandatory&&!this.selectedItems.length)return this.updateMandatory();this.items.forEach(this.updateItem)},updateInternalValue:function(t){this.multiple?this.updateMultiple(t):this.updateSingle(t)},updateMandatory:function(t){if(this.items.length){var e=t?this.items.length-1:0;this.updateInternalValue(this.getValue(this.items[e],e))}},updateMultiple:function(t){var e=Array.isArray(this.internalValue)?this.internalValue:[],i=e.slice(),n=i.findIndex(function(e){return e===t});this.mandatory&&n>-1&&i.length-1<1||null!=this.max&&n<0&&i.length+1>this.max||(n>-1?i.splice(n,1):i.push(t),this.internalValue=i)},updateSingle:function(t){var e=t===this.internalValue;this.mandatory&&e||(this.internalValue=e?void 0:t)}},render:function(t){return t("div",{staticClass:"v-item-group",class:this.classes},this.$slots.default)}}),dt=(ht.extend({name:"v-item-group",provide:function(){return{itemGroup:this}}}),{computed:{activeTab:function(){if(this.selectedItems.length)return this.selectedItems[0]},containerStyles:function(){return this.height?{height:parseInt(this.height,10)+"px"}:null},hasArrows:function(){return(this.showArrows||!this.isMobile)&&this.isOverflowing},isMobile:function(){return this.$vuetify.breakpoint.width<this.mobileBreakPoint},sliderStyles:function(){return{left:this.sliderLeft+"px",transition:null!=this.sliderLeft?null:"none",width:this.sliderWidth+"px"}}}}),ft=(i("0832"),ht.extend({name:"v-window",provide:function(){return{windowGroup:this}},directives:{Touch:tt["a"]},props:{mandatory:{type:Boolean,default:!0},reverse:{type:Boolean,default:void 0},touch:Object,touchless:Boolean,value:{required:!1},vertical:Boolean},data:function(){return{internalHeight:void 0,isActive:!1,isBooted:!1,isReverse:!1}},computed:{computedTransition:function(){if(!this.isBooted)return"";var t=this.vertical?"y":"x",e=this.internalReverse===!this.$vuetify.rtl?"-reverse":"";return"v-window-"+t+e+"-transition"},internalIndex:function(){var t=this;return this.items.findIndex(function(e,i){return t.internalValue===t.getValue(e,i)})},internalReverse:function(){return void 0!==this.reverse?this.reverse:this.isReverse}},watch:{internalIndex:"updateReverse"},mounted:function(){var t=this;this.$nextTick(function(){return t.isBooted=!0})},methods:{genContainer:function(){return this.$createElement("div",{staticClass:"v-window__container",class:{"v-window__container--is-active":this.isActive},style:{height:this.internalHeight}},this.$slots.default)},next:function(){this.isReverse=!1;var t=(this.internalIndex+1)%this.items.length,e=this.items[t];this.internalValue=this.getValue(e,t)},prev:function(){this.isReverse=!0;var t=(this.internalIndex+this.items.length-1)%this.items.length,e=this.items[t];this.internalValue=this.getValue(e,t)},updateReverse:function(t,e){this.isReverse=t<e}},render:function(t){var e={staticClass:"v-window",directives:[]};if(!this.touchless){var i=this.touch||{left:this.next,right:this.prev};e.directives.push({name:"touch",value:i})}return t("div",e,[this.genContainer()])}})),vt=ft.extend({name:"v-tabs-items",inject:{registerItems:{default:null},tabProxy:{default:null},unregisterItems:{default:null}},props:{cycle:Boolean},watch:{internalValue:function(t){this.tabProxy&&this.tabProxy(t)}},created:function(){this.registerItems&&this.registerItems(this.changeModel)},beforeDestroy:function(){this.unregisterItems&&this.unregisterItems()},methods:{changeModel:function(t){this.internalValue=t},getValue:function(t,e){return t.id?t.id:ft.options.methods.getValue.call(this,t,e)},next:function(){(this.cycle||this.internalIndex!==this.items.length-1)&&ft.options.methods.next.call(this)},prev:function(){(this.cycle||0!==this.internalIndex)&&ft.options.methods.prev.call(this)}}}),pt=i("b64a"),mt={name:"v-tabs-slider",mixins:[pt["a"]],render:function(t){return t("div",this.setBackgroundColor(this.color||"accent",{staticClass:"v-tabs__slider"}))}},bt=i("9d26"),gt={methods:{genBar:function(t){return this.$createElement("div",this.setBackgroundColor(this.color,{staticClass:"v-tabs__bar",class:this.themeClasses,ref:"bar"}),[this.genTransition("prev"),this.genWrapper(this.genContainer(t)),this.genTransition("next")])},genContainer:function(t){return this.$createElement("div",{staticClass:"v-tabs__container",class:{"v-tabs__container--align-with-title":this.alignWithTitle,"v-tabs__container--centered":this.centered,"v-tabs__container--fixed-tabs":this.fixedTabs,"v-tabs__container--grow":this.grow,"v-tabs__container--icons-and-text":this.iconsAndText,"v-tabs__container--overflow":this.isOverflowing,"v-tabs__container--right":this.right},style:this.containerStyles,ref:"container"},t)},genIcon:function(t){var e=this;return this.hasArrows&&this[t+"IconVisible"]?this.$createElement(bt["a"],{staticClass:"v-tabs__icon v-tabs__icon--"+t,props:{disabled:!this[t+"IconVisible"]},on:{click:function(){return e.scrollTo(t)}}},this[t+"Icon"]):null},genItems:function(t,e){return t.length>0?t:e.length?this.$createElement(vt,e):null},genTransition:function(t){return this.$createElement("transition",{props:{name:"fade-transition"}},[this.genIcon(t)])},genWrapper:function(t){var e=this;return this.$createElement("div",{staticClass:"v-tabs__wrapper",class:{"v-tabs__wrapper--show-arrows":this.hasArrows},ref:"wrapper",directives:[{name:"touch",value:{start:function(t){return e.overflowCheck(t,e.onTouchStart)},move:function(t){return e.overflowCheck(t,e.onTouchMove)},end:function(t){return e.overflowCheck(t,e.onTouchEnd)}}}]},[t])},genSlider:function(t){return t.length||(t=[this.$createElement(mt,{props:{color:this.sliderColor}})]),this.$createElement("div",{staticClass:"v-tabs__slider-wrapper",style:this.sliderStyles},t)}}},yt={props:{activeClass:{type:String,default:"v-tabs__item--active"},alignWithTitle:Boolean,centered:Boolean,fixedTabs:Boolean,grow:Boolean,height:{type:[Number,String],default:void 0,validator:function(t){return!isNaN(parseInt(t))}},hideSlider:Boolean,iconsAndText:Boolean,mandatory:{type:Boolean,default:!0},mobileBreakPoint:{type:[Number,String],default:1264,validator:function(t){return!isNaN(parseInt(t))}},nextIcon:{type:String,default:"$vuetify.icons.next"},prevIcon:{type:String,default:"$vuetify.icons.prev"},right:Boolean,showArrows:Boolean,sliderColor:{type:String,default:"accent"},value:[Number,String]}},wt={methods:{newOffset:function(t){var e=this.$refs.wrapper.clientWidth;return"prev"===t?Math.max(this.scrollOffset-e,0):Math.min(this.scrollOffset+e,this.$refs.container.clientWidth-e)},onTouchStart:function(t){this.startX=this.scrollOffset+t.touchstartX,this.$refs.container.style.transition="none",this.$refs.container.style.willChange="transform"},onTouchMove:function(t){this.scrollOffset=this.startX-t.touchmoveX},onTouchEnd:function(){var t=this.$refs.container,e=this.$refs.wrapper,i=t.clientWidth-e.clientWidth;t.style.transition=null,t.style.willChange=null,this.scrollOffset<0||!this.isOverflowing?this.scrollOffset=0:this.scrollOffset>=i&&(this.scrollOffset=i)}}},xt={watch:{activeTab:function(t,e){this.setOverflow(),t&&(this.tabItems&&this.tabItems(this.getValue(t,this.items.indexOf(t))),null!=e&&this.updateTabsView())},alignWithTitle:"callSlider",centered:"callSlider",fixedTabs:"callSlider",hasArrows:function(t){t||(this.scrollOffset=0)},internalValue:function(t){this.$listeners["input"]&&this.$emit("input",t)},lazyValue:"updateTabs",right:"callSlider","$vuetify.application.left":"onResize","$vuetify.application.right":"onResize",scrollOffset:function(t){this.$refs.container.style.transform="translateX("+-t+"px)",this.hasArrows&&(this.prevIconVisible=this.checkPrevIcon(),this.nextIconVisible=this.checkNextIcon())}}},_t=i("b57a"),Vt=i("0d3d"),Ot=i("bfc5"),$t=ht.extend({name:"v-tabs",directives:{Resize:Vt["a"],Touch:tt["a"]},mixins:[pt["a"],_t["a"],dt,yt,gt,wt,xt,U["a"]],provide:function(){return{tabGroup:this,tabProxy:this.tabProxy,registerItems:this.registerItems,unregisterItems:this.unregisterItems}},data:function(){return{bar:[],content:[],isOverflowing:!1,nextIconVisible:!1,prevIconVisible:!1,resizeTimeout:null,scrollOffset:0,sliderWidth:null,sliderLeft:null,startX:0,tabItems:null,transitionTime:300,widths:{bar:0,container:0,wrapper:0}}},watch:{items:"onResize",tabs:"onResize"},mounted:function(){this.init()},methods:{checkIcons:function(){this.prevIconVisible=this.checkPrevIcon(),this.nextIconVisible=this.checkNextIcon()},checkPrevIcon:function(){return this.scrollOffset>0},checkNextIcon:function(){return this.widths.container>this.scrollOffset+this.widths.wrapper},callSlider:function(){var t=this;if(this.hideSlider||!this.activeTab)return!1;var e=this.activeTab;this.$nextTick(function(){e&&e.$el&&(t.sliderWidth=e.$el.scrollWidth,t.sliderLeft=e.$el.offsetLeft)})},init:function(){this.$listeners["input"]&&Object(nt["d"])("@input","@change",this)},onResize:function(){if(!this._isDestroyed){this.setWidths();var t=this.isBooted?this.transitionTime:0;clearTimeout(this.resizeTimeout),this.resizeTimeout=setTimeout(this.updateTabsView,t)}},overflowCheck:function(t,e){this.isOverflowing&&e(t)},scrollTo:function(t){this.scrollOffset=this.newOffset(t)},setOverflow:function(){this.isOverflowing=this.widths.bar<this.widths.container},setWidths:function(){var t=this.$refs.bar?this.$refs.bar.clientWidth:0,e=this.$refs.container?this.$refs.container.clientWidth:0,i=this.$refs.wrapper?this.$refs.wrapper.clientWidth:0;this.widths={bar:t,container:e,wrapper:i},this.setOverflow()},parseNodes:function(){for(var t=[],e=[],i=[],n=[],s=(this.$slots.default||[]).length,r=0;r<s;r++){var a=this.$slots.default[r];if(a.componentOptions)switch(a.componentOptions.Ctor.options.name){case"v-tabs-slider":i.push(a);break;case"v-tabs-items":e.push(a);break;case"v-tab-item":t.push(a);break;default:n.push(a)}else n.push(a)}return{tab:n,slider:i,items:e,item:t}},registerItems:function(t){this.tabItems=t,t(this.internalValue)},unregisterItems:function(){this.tabItems=null},updateTabsView:function(){this.callSlider(),this.scrollIntoView(),this.checkIcons()},scrollIntoView:function(){if(this.activeTab){if(!this.isOverflowing)return this.scrollOffset=0;var t=this.widths.wrapper+this.scrollOffset,e=this.activeTab.$el,i=e.clientWidth,n=e.offsetLeft,s=i+n,r=.3*i;this.activeTab===this.items[this.items.length-1]&&(r=0),n<this.scrollOffset?this.scrollOffset=Math.max(n-r,0):t<s&&(this.scrollOffset-=t-s-r)}},tabProxy:function(t){this.internalValue=t}},render:function(t){var e=this.parseNodes(),i=e.tab,n=e.slider,s=e.items,r=e.item;return t("div",{staticClass:"v-tabs",directives:[{name:"resize",modifiers:{quiet:!0},value:this.onResize}]},[this.genBar([this.hideSlider?null:this.genSlider(n),i]),t(Ot["a"],{props:{dark:this.theme.isDark,light:!this.theme.isDark}},[this.genItems(s,r)])])}}),kt=i("2677"),It=i("71d9"),Tt=i("2a7f"),Ct=Object(c["a"])(L,m,b,!1,null,null,null),jt=Ct.exports;h()(Ct,{VBtn:P["a"],VCard:M["a"],VCardActions:z["a"],VCardText:z["b"],VCardTitle:X["a"],VCheckbox:N["a"],VContainer:d["a"],VDataTable:W["a"],VFlex:f["a"],VForm:D["a"],VIcon:H["a"],VLayout:v["a"],VSpacer:G["a"],VTab:Q,VTabItem:st,VTabs:$t,VTabsItems:vt,VTextField:kt["a"],VToolbar:It["a"],VToolbarTitle:Tt["b"]});var St={components:{Sales:jt}},At=St,Bt=Object(c["a"])(At,n,s,!1,null,null,null);e["default"]=Bt.exports},c341:function(t,e,i){"use strict";var n=i("80d2"),s=function(t){var e=t.touchstartX,i=t.touchendX,n=t.touchstartY,s=t.touchendY,r=.5,a=16;t.offsetX=i-e,t.offsetY=s-n,Math.abs(t.offsetY)<r*Math.abs(t.offsetX)&&(t.left&&i<e-a&&t.left(t),t.right&&i>e+a&&t.right(t)),Math.abs(t.offsetX)<r*Math.abs(t.offsetY)&&(t.up&&s<n-a&&t.up(t),t.down&&s>n+a&&t.down(t))};function r(t,e){var i=t.changedTouches[0];e.touchstartX=i.clientX,e.touchstartY=i.clientY,e.start&&e.start(Object.assign(t,e))}function a(t,e){var i=t.changedTouches[0];e.touchendX=i.clientX,e.touchendY=i.clientY,e.end&&e.end(Object.assign(t,e)),s(e)}function o(t,e){var i=t.changedTouches[0];e.touchmoveX=i.clientX,e.touchmoveY=i.clientY,e.move&&e.move(Object.assign(t,e))}function l(t){var e={touchstartX:0,touchstartY:0,touchendX:0,touchendY:0,touchmoveX:0,touchmoveY:0,offsetX:0,offsetY:0,left:t.left,right:t.right,up:t.up,down:t.down,start:t.start,move:t.move,end:t.end};return{touchstart:function(t){return r(t,e)},touchend:function(t){return a(t,e)},touchmove:function(t){return o(t,e)}}}function c(t,e,i){var s=e.value,r=s.parent?t.parentElement:t,a=s.options||{passive:!0};if(r){var o=l(e.value);r._touchHandlers=Object(r._touchHandlers),r._touchHandlers[i.context._uid]=o,Object(n["q"])(o).forEach(function(t){r.addEventListener(t,o[t],a)})}}function u(t,e,i){var s=e.value.parent?t.parentElement:t;if(s&&s._touchHandlers){var r=s._touchHandlers[i.context._uid];Object(n["q"])(r).forEach(function(t){s.removeEventListener(t,r[t])}),delete s._touchHandlers[i.context._uid]}}e["a"]={inserted:c,unbind:u}},f413:function(t,e,i){}}]);
//# sourceMappingURL=chunk-7f874c9d.29681229.js.map