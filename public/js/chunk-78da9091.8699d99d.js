(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-78da9091"],{"0094":function(t,e,i){},"14ec":function(t,e,i){"use strict";i("f7dc");var n=i("80d2"),s=i("2b0e");e["a"]=s["a"].extend().extend({name:"overlayable",props:{hideOverlay:Boolean},data:function(){return{overlay:null,overlayOffset:0,overlayTimeout:void 0,overlayTransitionDuration:650}},watch:{hideOverlay:function(t){t?this.removeOverlay():this.genOverlay()}},beforeDestroy:function(){this.removeOverlay()},methods:{genOverlay:function(){var t=this;if(!this.isActive||this.hideOverlay||this.isActive&&this.overlayTimeout||this.overlay)return clearTimeout(this.overlayTimeout),this.overlay&&this.overlay.classList.add("v-overlay--active");this.overlay=document.createElement("div"),this.overlay.className="v-overlay",this.absolute&&(this.overlay.className+=" v-overlay--absolute"),this.hideScroll();var e=this.absolute?this.$el.parentNode:document.querySelector("[data-app]");return e&&e.insertBefore(this.overlay,e.firstChild),this.overlay.clientHeight,requestAnimationFrame(function(){t.overlay&&(t.overlay.className+=" v-overlay--active",void 0!==t.activeZIndex&&(t.overlay.style.zIndex=String(t.activeZIndex-1)))}),!0},removeOverlay:function(){var t=this,e=!(arguments.length>0&&void 0!==arguments[0])||arguments[0];if(!this.overlay)return e&&this.showScroll();this.overlay.classList.remove("v-overlay--active"),this.overlayTimeout=window.setTimeout(function(){try{t.overlay&&t.overlay.parentNode&&t.overlay.parentNode.removeChild(t.overlay),t.overlay=null,e&&t.showScroll()}catch(i){console.log(i)}clearTimeout(t.overlayTimeout),t.overlayTimeout=void 0},this.overlayTransitionDuration)},scrollListener:function(t){if("keydown"===t.type){if(["INPUT","TEXTAREA","SELECT"].includes(t.target.tagName)||t.target.isContentEditable)return;var e=[n["p"].up,n["p"].pageup],i=[n["p"].down,n["p"].pagedown];if(e.includes(t.keyCode))t.deltaY=-1;else{if(!i.includes(t.keyCode))return;t.deltaY=1}}(t.target===this.overlay||"keydown"!==t.type&&t.target===document.body||this.checkPath(t))&&t.preventDefault()},hasScrollbar:function(t){if(!t||t.nodeType!==Node.ELEMENT_NODE)return!1;var e=window.getComputedStyle(t);return["auto","scroll"].includes(e.overflowY)&&t.scrollHeight>t.clientHeight},shouldScroll:function(t,e){return 0===t.scrollTop&&e<0||t.scrollTop+t.clientHeight===t.scrollHeight&&e>0},isInside:function(t,e){return t===e||null!==t&&t!==document.body&&this.isInside(t.parentNode,e)},checkPath:function(t){var e=t.path||this.composedPath(t),i=t.deltaY;if("keydown"===t.type&&e[0]===document.body){var n=this.$refs.dialog,s=window.getSelection().anchorNode;return!(n&&this.hasScrollbar(n)&&this.isInside(s,n))||this.shouldScroll(n,i)}for(var o=0;o<e.length;o++){var a=e[o];if(a===document)return!0;if(a===document.documentElement)return!0;if(a===this.$refs.content)return!0;if(this.hasScrollbar(a))return this.shouldScroll(a,i)}return!0},composedPath:function(t){if(t.composedPath)return t.composedPath();var e=[],i=t.target;while(i){if(e.push(i),"HTML"===i.tagName)return e.push(document),e.push(window),e;i=i.parentElement}return e},hideScroll:function(){this.$vuetify.breakpoint.smAndDown?document.documentElement.classList.add("overflow-y-hidden"):(Object(n["a"])(window,"wheel",this.scrollListener,{passive:!1}),window.addEventListener("keydown",this.scrollListener))},showScroll:function(){document.documentElement.classList.remove("overflow-y-hidden"),window.removeEventListener("wheel",this.scrollListener),window.removeEventListener("keydown",this.scrollListener)}}})},"2a7f":function(t,e,i){"use strict";i.d(e,"b",function(){return a}),i.d(e,"a",function(){return r});var n=i("80d2"),s=i("71d9"),o=i("706c"),a=Object(n["e"])("v-toolbar__title"),r=Object(n["e"])("v-toolbar__items");s["a"],o["a"]},"2db4":function(t,e,i){"use strict";i("0094");var n=i("b64a"),s=i("98a1"),o=i("c22b"),a=i("58df");e["a"]=Object(a["a"])(n["a"],s["a"],Object(o["b"])(["absolute","top","bottom","left","right"])).extend({name:"v-snackbar",props:{autoHeight:Boolean,multiLine:Boolean,timeout:{type:Number,default:6e3},vertical:Boolean},data:function(){return{activeTimeout:-1}},computed:{classes:function(){return{"v-snack--active":this.isActive,"v-snack--absolute":this.absolute,"v-snack--auto-height":this.autoHeight,"v-snack--bottom":this.bottom||!this.top,"v-snack--left":this.left,"v-snack--multi-line":this.multiLine&&!this.vertical,"v-snack--right":this.right,"v-snack--top":this.top,"v-snack--vertical":this.vertical}}},watch:{isActive:function(){this.setTimeout()}},mounted:function(){this.setTimeout()},methods:{setTimeout:function(){var t=this;window.clearTimeout(this.activeTimeout),this.isActive&&this.timeout&&(this.activeTimeout=window.setTimeout(function(){t.isActive=!1},this.timeout))}},render:function(t){return t("transition",{attrs:{name:"v-snack-transition"}},this.isActive&&[t("div",{staticClass:"v-snack",class:this.classes,on:this.$listeners},[t("div",this.setBackgroundColor(this.color,{staticClass:"v-snack__wrapper"}),[t("div",{staticClass:"v-snack__content"},this.$slots.default)])])])}})},3385:function(t,e,i){},"6de2":function(t,e,i){},"706c":function(t,e,i){"use strict";var n=i("afdd"),s=i("9d26"),o=i("2b0e");e["a"]=o["a"].extend({name:"v-toolbar-side-icon",functional:!0,render:function(t,e){var i=e.slots,o=e.listeners,a=e.props,r=e.data,c=r.staticClass?r.staticClass+" v-toolbar__side-icon":"v-toolbar__side-icon",l=Object.assign(r,{staticClass:c,props:Object.assign(a,{icon:!0}),on:o}),u=i().default;return t(n["a"],l,u||[t(s["a"],"$vuetify.icons.menu")])}})},7496:function(t,e,i){"use strict";i("3385");var n=i("d9bd");function s(t){var e=void 0;if("number"===typeof t)e=t;else{if("string"!==typeof t)throw new TypeError("Colors can only be numbers or strings, recieved "+(null==t?t:t.constructor.name)+" instead");var i="#"===t[0]?t.substring(1):t;3===i.length&&(i=i.split("").map(function(t){return t+t}).join("")),6!==i.length&&Object(n["c"])("'"+t+"' is not a valid rgb color"),e=parseInt(i,16)}return e<0?(Object(n["c"])("Colors cannot be negative: '"+t+"'"),e=0):(e>16777215||isNaN(e))&&(Object(n["c"])("'"+t+"' is not a valid rgb color"),e=16777215),e}function o(t){var e=t.toString(16);return e.length<6&&(e="0".repeat(6-e.length)+e),"#"+e}function a(t){return o(s(t))}var r=[[3.2406,-1.5372,-.4986],[-.9689,1.8758,.0415],[.0557,-.204,1.057]],c=function(t){return t<=.0031308?12.92*t:1.055*Math.pow(t,1/2.4)-.055},l=[[.4124,.3576,.1805],[.2126,.7152,.0722],[.0193,.1192,.9505]],u=function(t){return t<=.04045?t/12.92:Math.pow((t+.055)/1.055,2.4)};function h(t){return Math.max(0,Math.min(1,t))}function d(t){for(var e=Array(3),i=c,n=r,s=0;s<3;++s)e[s]=Math.round(255*h(i(n[s][0]*t[0]+n[s][1]*t[1]+n[s][2]*t[2])));return(e[0]<<16)+(e[1]<<8)+(e[2]<<0)}function v(t){for(var e=[0,0,0],i=u,n=l,s=i((t>>16&255)/255),o=i((t>>8&255)/255),a=i((t>>0&255)/255),r=0;r<3;++r)e[r]=n[r][0]*s+n[r][1]*o+n[r][2]*a;return e}var f=.20689655172413793,p=function(t){return t>Math.pow(f,3)?Math.cbrt(t):t/(3*Math.pow(f,2))+4/29},m=function(t){return t>f?Math.pow(t,3):3*Math.pow(f,2)*(t-4/29)};function y(t){var e=p,i=e(t[1]);return[116*i-16,500*(e(t[0]/.95047)-i),200*(i-e(t[2]/1.08883))]}function b(t){var e=m,i=(t[0]+16)/116;return[.95047*e(i+t[1]/500),e(i),1.08883*e(i-t[2]/200)]}var g=function(){function t(t,e){var i=[],n=!0,s=!1,o=void 0;try{for(var a,r=t[Symbol.iterator]();!(n=(a=r.next()).done);n=!0)if(i.push(a.value),e&&i.length===e)break}catch(c){s=!0,o=c}finally{try{!n&&r["return"]&&r["return"]()}finally{if(s)throw o}}return i}return function(e,i){if(Array.isArray(e))return e;if(Symbol.iterator in Object(e))return t(e,i);throw new TypeError("Invalid attempt to destructure non-iterable instance")}}(),w="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"===typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t};function _(t){for(var e=arguments.length>1&&void 0!==arguments[1]&&arguments[1],i=Object.keys(t),n={},o=0;o<i.length;++o){var r=i[o],c=t[r];e?("base"===r||r.startsWith("lighten")||r.startsWith("darken"))&&(n[r]=a(c)):"object"===("undefined"===typeof c?"undefined":w(c))?n[r]=_(c,!0):n[r]=A(r,s(c))}return n}var $=function(t,e){return"\n."+t+" {\n  background-color: "+e+" !important;\n  border-color: "+e+" !important;\n}\n."+t+"--text {\n  color: "+e+" !important;\n  caret-color: "+e+" !important;\n}"},k=function(t,e,i){var n=e.split(/(\d)/,2),s=g(n,2),o=s[0],a=s[1];return"\n."+t+"."+o+"-"+a+" {\n  background-color: "+i+" !important;\n  border-color: "+i+" !important;\n}\n."+t+"--text.text--"+o+"-"+a+" {\n  color: "+i+" !important;\n  caret-color: "+i+" !important;\n}"},T=function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"base";return"--v-"+t+"-"+e},O=function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"base";return"var("+T(t,e)+")"};function x(t){var e=arguments.length>1&&void 0!==arguments[1]&&arguments[1],i=Object.keys(t);if(!i.length)return"";var n="",s="",o=e?O("primary"):t.primary.base;s+="a { color: "+o+"; }";for(var a=0;a<i.length;++a){var r=i[a],c=t[r];if("object"===("undefined"===typeof c?"undefined":w(c))){s+=$(r,e?O(r):c.base),e&&(n+="  "+T(r)+": "+c.base+";\n");for(var l=Object.keys(c),u=0;u<l.length;++u){var h=l[u],d=c[h];"base"!==h&&(s+=k(r,h,e?O(r,h):d),e&&(n+="  "+T(r,h)+": "+d+";\n"))}}}return e&&(n=":root {\n"+n+"}\n\n"),n+s}function A(t,e){for(var i={base:o(e)},n=5;n>0;--n)i["lighten"+n]=o(S(e,n));for(var s=1;s<=4;++s)i["darken"+s]=o(C(e,s));return i}function S(t,e){var i=y(v(t));return i[0]=i[0]+10*e,d(b(i))}function C(t,e){var i=y(v(t));return i[0]=i[0]-10*e,d(b(i))}var N={data:function(){return{style:null}},computed:{parsedTheme:function(){return _(this.$vuetify.theme)},generatedStyles:function(){var t=this.parsedTheme,e=void 0;return null!=this.$vuetify.options.themeCache&&(e=this.$vuetify.options.themeCache.get(t),null!=e)?e:(e=x(t,this.$vuetify.options.customProperties),null!=this.$vuetify.options.minifyTheme&&(e=this.$vuetify.options.minifyTheme(e)),null!=this.$vuetify.options.themeCache&&this.$vuetify.options.themeCache.set(t,e),e)},vueMeta:function(){if(!1===this.$vuetify.theme)return{};var t={cssText:this.generatedStyles,id:"vuetify-theme-stylesheet",type:"text/css"};return this.$vuetify.options.cspNonce&&(t.nonce=this.$vuetify.options.cspNonce),{style:[t]}}},metaInfo:function(){return this.vueMeta},head:function(){return this.vueMeta},watch:{generatedStyles:function(){!this.meta&&this.applyTheme()}},created:function(){if(!1!==this.$vuetify.theme)if(this.$meta);else if("undefined"===typeof document&&this.$ssrContext){var t=this.$vuetify.options.cspNonce?' nonce="'+this.$vuetify.options.cspNonce+'"':"";this.$ssrContext.head=this.$ssrContext.head||"",this.$ssrContext.head+='<style type="text/css" id="vuetify-theme-stylesheet"'+t+">"+this.generatedStyles+"</style>"}else"undefined"!==typeof document&&(this.genStyle(),this.applyTheme())},methods:{applyTheme:function(){this.style&&(this.style.innerHTML=this.generatedStyles)},genStyle:function(){var t=document.getElementById("vuetify-theme-stylesheet");t||(t=document.createElement("style"),t.type="text/css",t.id="vuetify-theme-stylesheet",this.$vuetify.options.cspNonce&&t.setAttribute("nonce",this.$vuetify.options.cspNonce),document.head.appendChild(t)),this.style=t}}},j=i("6a18"),E=i("0d3d"),V=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var i=arguments[e];for(var n in i)Object.prototype.hasOwnProperty.call(i,n)&&(t[n]=i[n])}return t};e["a"]={name:"v-app",directives:{Resize:E["a"]},mixins:[N,j["a"]],props:{id:{type:String,default:"app"},dark:Boolean},computed:{classes:function(){return V({"application--is-rtl":this.$vuetify.rtl},this.themeClasses)}},watch:{dark:function(){this.$vuetify.dark=this.dark}},mounted:function(){this.$vuetify.dark=this.dark},render:function(t){var e={staticClass:"application",class:this.classes,attrs:{"data-app":!0},domProps:{id:this.id}},i=t("div",{staticClass:"application--wrap"},this.$slots.default);return t("div",e,[i])}}},"918c":function(t,e,i){"use strict";i.r(e);var n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return t.$store.state.auth.authenticated?i("v-app",[[i("main-drawer"),i("main-navbar"),t._l(t.$store.state.app.alerts,function(e,n){return i("v-snackbar",{key:"alert-"+n,attrs:{color:e.status?"success":"error",right:!0,top:!0},model:{value:e.show,callback:function(i){t.$set(e,"show",i)},expression:"alert.show"}},[t._v("\n      "+t._s(e.message)+"\n      "),i("v-btn",{attrs:{flat:"",icon:""},on:{click:function(t){e.show=!1}}},[i("v-icon",[t._v("clear")])],1)],1)}),i("v-content",[i("v-container",{attrs:{fluid:""}},[i("router-view",{key:t.$route.params.entity||""})],1)],1)]],2):t._e()},s=[],o=i("cebc"),a=i("2f62"),r=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-navigation-drawer",{attrs:{fixed:"",app:"",clipped:""},model:{value:t.$store.state.app.drawer,callback:function(e){t.$set(t.$store.state.app,"drawer",e)},expression:"$store.state.app.drawer"}},[i("v-list",{attrs:{dense:""}},[i("v-list-tile",{on:{click:function(e){return t.$router.push("/")}}},[i("v-list-tile-action",[i("v-icon",[t._v("home")])],1),i("v-list-tile-content",[i("v-list-tile-title",[t._v("Inicio")])],1)],1),1==t.$store.state.auth.user.user_type?i("v-list-tile",{on:{click:function(e){return t.$router.push("/almacen")}}},[i("v-list-tile-action",[i("v-icon",[t._v("storage")])],1),i("v-list-tile-content",[i("v-list-tile-title",[t._v("Almacen")])],1)],1):t._e(),1==t.$store.state.auth.user.user_type||2==t.$store.state.auth.user.user_type?i("v-list-tile",{on:{click:function(e){return t.$router.push("/ventas")}}},[i("v-list-tile-action",[i("v-icon",[t._v("attach_money")])],1),i("v-list-tile-content",[i("v-list-tile-title",[t._v("Ventas")])],1)],1):t._e(),1==t.$store.state.auth.user.user_type?i("v-list-group",{attrs:{"prepend-icon":t.item.model?t.item.icon:t.item["icon-alt"],"append-icon":""},scopedSlots:t._u([{key:"activator",fn:function(){return[i("v-list-tile",[i("v-list-tile-content",[i("v-list-tile-title",[t._v(t._s(t.item.text))])],1)],1)]},proxy:!0}],null,!1,430879209),model:{value:t.item.model,callback:function(e){t.$set(t.item,"model",e)},expression:"item.model"}},t._l(t.item.children,function(e,n){return i("v-list-tile",{key:n,on:{click:function(i){return t.$router.push(e.path)}}},[e.icon?i("v-list-tile-action",[i("v-icon",[t._v(t._s(e.icon))])],1):t._e(),i("v-list-tile-content",[i("v-list-tile-title",[t._v(t._s(e.text))])],1)],1)}),1):t._e(),i("v-list-tile",{on:{click:function(e){return t.$router.push("/ajustes")}}},[i("v-list-tile-action",[i("v-icon",[t._v("settings")])],1),i("v-list-tile-content",[i("v-list-tile-title",[t._v("Ajustes")])],1)],1)],1)],1)},c=[],l={data:function(){return{office:null,item:{icon:"keyboard_arrow_up","icon-alt":"keyboard_arrow_down",text:"Gestión",model:!1,children:[{text:"Colores",path:"/colores"},{text:"Diseños",path:"/disenos"},{text:"Telas",path:"/telas"},{text:"Modelos",path:"/modelos"},{text:"Sucursales",path:"/sucursales"},{text:"Clientes",path:"/clientes"},{text:"Proveedores",path:"/proveedores"},{text:"Usuarios",path:"/usuarios"}]}}}},u=l,h=i("2877"),d=i("6544"),v=i.n(d),f=i("132d"),p=i("8860"),m=i("56b0"),y=i("ba95"),b=i("40fe"),g=i("5d23"),w=(i("6de2"),i("c6f7")),_=i("c69d"),$=i("14ec"),k=i("b57a"),T=i("6a18"),O=i("c584"),x=i("0d3d"),A=i("c341"),S=i("80d2"),C=i("58df"),N=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var i=arguments[e];for(var n in i)Object.prototype.hasOwnProperty.call(i,n)&&(t[n]=i[n])}return t},j=Object(C["a"])(Object(w["a"])("left",["miniVariant","right","width"]),_["a"],$["a"],k["a"],T["a"]).extend({name:"v-navigation-drawer",directives:{ClickOutside:O["a"],Resize:x["a"],Touch:A["a"]},props:{clipped:Boolean,disableRouteWatcher:Boolean,disableResizeWatcher:Boolean,height:{type:[Number,String],default:"100%"},floating:Boolean,miniVariant:Boolean,miniVariantWidth:{type:[Number,String],default:80},mobileBreakPoint:{type:[Number,String],default:1264},permanent:Boolean,right:Boolean,stateless:Boolean,temporary:Boolean,touchless:Boolean,width:{type:[Number,String],default:300},value:{required:!1}},data:function(){return{isActive:!1,touchArea:{left:0,right:0}}},computed:{applicationProperty:function(){return this.right?"right":"left"},calculatedTransform:function(){return this.isActive?0:this.right?this.calculatedWidth:-this.calculatedWidth},calculatedWidth:function(){return parseInt(this.miniVariant?this.miniVariantWidth:this.width)},classes:function(){return N({"v-navigation-drawer":!0,"v-navigation-drawer--absolute":this.absolute,"v-navigation-drawer--clipped":this.clipped,"v-navigation-drawer--close":!this.isActive,"v-navigation-drawer--fixed":!this.absolute&&(this.app||this.fixed),"v-navigation-drawer--floating":this.floating,"v-navigation-drawer--is-mobile":this.isMobile,"v-navigation-drawer--mini-variant":this.miniVariant,"v-navigation-drawer--open":this.isActive,"v-navigation-drawer--right":this.right,"v-navigation-drawer--temporary":this.temporary},this.themeClasses)},hasApp:function(){return this.app&&!this.isMobile&&!this.temporary},isMobile:function(){return!this.stateless&&!this.permanent&&!this.temporary&&this.$vuetify.breakpoint.width<parseInt(this.mobileBreakPoint,10)},marginTop:function(){if(!this.hasApp)return 0;var t=this.$vuetify.application.bar;return t+=this.clipped?this.$vuetify.application.top:0,t},maxHeight:function(){if(!this.hasApp)return null;var t=this.$vuetify.application.bottom+this.$vuetify.application.footer+this.$vuetify.application.bar;return this.clipped?t+this.$vuetify.application.top:t},reactsToClick:function(){return!this.stateless&&!this.permanent&&(this.isMobile||this.temporary)},reactsToMobile:function(){return!this.disableResizeWatcher&&!this.stateless&&!this.permanent&&!this.temporary},reactsToRoute:function(){return!this.disableRouteWatcher&&!this.stateless&&(this.temporary||this.isMobile)},resizeIsDisabled:function(){return this.disableResizeWatcher||this.stateless},showOverlay:function(){return this.isActive&&(this.isMobile||this.temporary)},styles:function(){var t={height:Object(S["c"])(this.height),marginTop:this.marginTop+"px",maxHeight:null!=this.maxHeight?"calc(100% - "+ +this.maxHeight+"px)":void 0,transform:"translateX("+this.calculatedTransform+"px)",width:this.calculatedWidth+"px"};return t}},watch:{$route:function(){this.reactsToRoute&&this.closeConditional()&&(this.isActive=!1)},isActive:function(t){this.$emit("input",t),this.callUpdate()},isMobile:function(t,e){!t&&this.isActive&&!this.temporary&&this.removeOverlay(),null!=e&&!this.resizeIsDisabled&&this.reactsToMobile&&(this.isActive=!t,this.callUpdate())},permanent:function(t){t&&(this.isActive=!0),this.callUpdate()},showOverlay:function(t){t?this.genOverlay():this.removeOverlay()},temporary:function(){this.callUpdate()},value:function(t){if(!this.permanent){var e=this;if(null==t)return e.init();t!==this.isActive&&(this.isActive=t)}}},beforeMount:function(){this.init()},methods:{calculateTouchArea:function(){if(this.$el.parentNode){var t=this.$el.parentNode.getBoundingClientRect();this.touchArea={left:t.left+50,right:t.right-50}}},closeConditional:function(){return this.isActive&&this.reactsToClick},genDirectives:function(){var t=this,e=[{name:"click-outside",value:function(){return t.isActive=!1},args:{closeConditional:this.closeConditional,include:this.getOpenDependentElements}}];return!this.touchless&&e.push({name:"touch",value:{parent:!0,left:this.swipeLeft,right:this.swipeRight}}),e},init:function(){this.permanent?this.isActive=!0:this.stateless||null!=this.value?this.isActive=this.value:this.temporary||(this.isActive=!this.isMobile)},swipeRight:function(t){this.isActive&&!this.right||(this.calculateTouchArea(),Math.abs(t.touchendX-t.touchstartX)<100||(!this.right&&t.touchstartX<=this.touchArea.left?this.isActive=!0:this.right&&this.isActive&&(this.isActive=!1)))},swipeLeft:function(t){this.isActive&&this.right||(this.calculateTouchArea(),Math.abs(t.touchendX-t.touchstartX)<100||(this.right&&t.touchstartX>=this.touchArea.right?this.isActive=!0:!this.right&&this.isActive&&(this.isActive=!1)))},updateApplication:function(){return!this.isActive||this.temporary||this.isMobile?0:this.calculatedWidth}},render:function(t){var e=this,i={class:this.classes,style:this.styles,directives:this.genDirectives(),on:{click:function(){e.miniVariant&&e.$emit("update:miniVariant",!1)},transitionend:function(t){if(t.target===t.currentTarget){e.$emit("transitionend",t);var i=document.createEvent("UIEvents");i.initUIEvent("resize",!0,!1,window,0),window.dispatchEvent(i)}}}};return t("aside",i,[this.$slots.default,t("div",{class:"v-navigation-drawer__border"})])}}),E=Object(h["a"])(u,r,c,!1,null,null,null),V=E.exports;v()(E,{VIcon:f["a"],VList:p["a"],VListGroup:m["a"],VListTile:y["a"],VListTileAction:b["a"],VListTileContent:g["a"],VListTileTitle:g["c"],VNavigationDrawer:j});var L,M=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-toolbar",{attrs:{color:"blue",dark:"",fixed:"",app:"","clipped-left":""}},[i("v-toolbar-side-icon",{on:{click:function(e){e.stopPropagation(),t.$store.state.app.drawer=!t.$store.state.app.drawer}}}),i("v-menu",{attrs:{"nudge-width":100},scopedSlots:t._u([{key:"activator",fn:function(e){var n=e.on;return[i("v-toolbar-title",t._g({},n),[i("span",[t._v("\n          "+t._s(t.$store.state.app.selectedOffice&&t.$store.state.app.selectedOffice.name||"Textiles Hernandez")+"\n        ")]),i("v-icon",{attrs:{dark:""}},[t._v("arrow_drop_down")])],1)]}}])},[i("v-list",t._l(t.$store.state.entities.offices,function(e){return i("v-list-tile",{key:e.id},[i("v-list-tile-content",{on:{click:function(i){return t.$store.commit("app/selectOffice",e)}}},[i("v-list-tile-title",[t._v(t._s(e.name))]),i("v-list-tile-sub-title",[t._v(t._s(e.address))])],1),t.$store.state.app.selectedOffice&&e.id===t.$store.state.app.selectedOffice.id?i("v-list-tile-action",[i("v-btn",{attrs:{icon:""},on:{click:function(i){return t.$store.commit("app/selectOffice",e)}}},[i("v-icon",[t._v("check")])],1)],1):t._e()],1)}),1)],1),i("v-spacer"),i("v-menu",{attrs:{"nudge-width":260,"offset-x":""},scopedSlots:t._u([{key:"activator",fn:function(e){var n=e.on;return[i("v-btn",t._g({attrs:{icon:""}},n),[i("v-badge",{attrs:{overlap:"",color:"red"},scopedSlots:t._u([t.$store.getters["entities/getNotifications"]({user_id:t.$store.state.auth.user.id}).length?{key:"badge",fn:function(){return[t._v("\n            "+t._s(t.$store.getters["entities/getNotifications"]({user_id:t.$store.state.auth.user.id}).length)+"\n          ")]},proxy:!0}:null],null,!0)},[i("v-icon",[t._v("notifications")])],1)],1)]}}]),model:{value:t.showNotifications,callback:function(e){t.showNotifications=e},expression:"showNotifications"}},[i("v-card",[i("v-list",[t._l(t.$store.getters["entities/getNotifications"]({user_id:t.$store.state.auth.user.id}),function(e){return i("v-list-tile",{key:e.id},[i("v-list-tile-content",[i("v-list-tile-title",[t._v(t._s(e.message))]),i("v-list-tile-sub-title")],1),i("v-list-tile-action",[i("v-btn",{attrs:{icon:""},on:{click:function(i){return t.dismissNotification(e.id)}}},[i("v-icon",[t._v("check")])],1)],1)],1)}),t.$store.getters["entities/getNotifications"]({user_id:t.$store.state.auth.user.id}).length?t._e():i("v-list-tile",[i("v-list-tile-content",[i("v-list-tile-sub-title",[t._v("No hay notificaciones recientes")])],1)],1)],2)],1)],1),i("v-btn",{attrs:{icon:""},on:{click:t.logout}},[i("v-icon",[t._v("logout")])],1)],1)},B=[],I=(i("96cf"),i("3b8d")),X=i("ed08"),H={data:function(){return{showNotifications:null,showOffices:null}},methods:{dismissNotification:function(){var t=Object(I["a"])(regeneratorRuntime.mark(function t(e){return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,Object(X["a"])({url:"api/notifications/".concat(e),method:"put",data:{status:2}});case 2:case"end":return t.stop()}},t)}));function e(e){return t.apply(this,arguments)}return e}(),logout:function(){var t=Object(I["a"])(regeneratorRuntime.mark(function t(){return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:this.$store.commit("entities/reset"),this.$store.commit("auth/logout"),localStorage.clear(),this.$router.push("/login");case 4:case"end":return t.stop()}},t,this)}));function e(){return t.apply(this,arguments)}return e}()}},Y=H,R=(i("d4c0"),i("b64a")),P=i("98a1"),D=i("c22b"),W=i("2b0e"),z=W["a"].extend({name:"transitionable",props:{mode:String,origin:String,transition:String}}),U=Object(C["a"])(R["a"],P["a"],Object(D["b"])(["left","bottom"]),z).extend({name:"v-badge",props:{color:{type:String,default:"primary"},overlap:Boolean,transition:{type:String,default:"fab-transition"},value:{default:!0}},computed:{classes:function(){return{"v-badge--bottom":this.bottom,"v-badge--left":this.left,"v-badge--overlap":this.overlap}}},render:function(t){var e=this.$slots.badge&&[t("span",this.setBackgroundColor(this.color,{staticClass:"v-badge__badge",attrs:this.$attrs,directives:[{name:"show",value:this.isActive}]}),this.$slots.badge)];return t("span",{staticClass:"v-badge",class:this.classes},[this.$slots.default,t("transition",{props:{name:this.transition,origin:this.origin,mode:this.mode}},e)])}}),q=i("8336"),J=i("b0af"),G=i("e449"),Z=i("9910"),F=i("71d9"),K=i("706c"),Q=i("2a7f"),tt=Object(h["a"])(Y,M,B,!1,null,null,null),et=tt.exports;v()(tt,{VBadge:U,VBtn:q["a"],VCard:J["a"],VIcon:f["a"],VList:p["a"],VListTile:y["a"],VListTileAction:b["a"],VListTileContent:g["a"],VListTileSubTitle:g["b"],VListTileTitle:g["c"],VMenu:G["a"],VSpacer:Z["a"],VToolbar:F["a"],VToolbarSideIcon:K["a"],VToolbarTitle:Q["b"]});var it=3,nt=5,st={components:{MainDrawer:V,MainNavbar:et},data:function(){return{last_event_id:null}},created:function(){this.setupStream()},computed:Object(o["a"])({},Object(a["e"])("auth",["user"])),methods:Object(o["a"])({setupStream:function(){var t=this;L=new EventSource("/api/notification_events/subscribe?user_id=".concat(this.user.id,"&").concat(this.last_event_id?"last_event_id="+this.last_event_id:"")),L.addEventListener("open",function(e){3!==it&&it<2&&(it=3,nt=5,t.$store.state.app.alerts.push({show:!0,status:!0,message:"Conexión reestablecida"}))},!1),L.addEventListener("initValues",function(e){var i=JSON.parse(e.data);t.last_event_id=e.lastEventId,t.setInitialValues(i),!t.$store.state.app.selectedOffice&&t.$store.state.entities.offices.length&&t.$store.commit("app/selectOffice",t.$store.state.entities.offices[0])},!1),L.addEventListener("notification",function(e){var i=JSON.parse(e.data);t.last_event_id=e.lastEventId,t.setNotifications(i)},!1),L.addEventListener("error",function(e){e.target.close(),it>0?(it--,setTimeout(function(){nt*=2,t.setupStream()},1e3*nt),5!=nt&&t.$store.state.app.alerts.push({show:!0,status:!1,message:"Hay un error con su conexion, intentando restablecer en ".concat(nt," segundos")})):t.$store.state.app.alerts.push({show:!0,status:!1,message:"No se ha podido reestablecer la conexion. Verifique su conexion a internet y recargue la pagina"})},!1)},closeStream:function(){L.close()}},Object(a["d"])("entities",["setInitialValues"]),Object(a["b"])("entities",["setNotifications"]),Object(a["b"])("auth",["isAuthenticated","logout"])),beforeDestroy:function(){L&&(L.close(),L=null)}},ot=st,at=i("7496"),rt=i("a523"),ct=i("549c"),lt=i("2db4"),ut=Object(h["a"])(ot,n,s,!1,null,null,null);e["default"]=ut.exports;v()(ut,{VApp:at["a"],VBtn:q["a"],VContainer:rt["a"],VContent:ct["a"],VIcon:f["a"],VSnackbar:lt["a"]})},c341:function(t,e,i){"use strict";var n=i("80d2"),s=function(t){var e=t.touchstartX,i=t.touchendX,n=t.touchstartY,s=t.touchendY,o=.5,a=16;t.offsetX=i-e,t.offsetY=s-n,Math.abs(t.offsetY)<o*Math.abs(t.offsetX)&&(t.left&&i<e-a&&t.left(t),t.right&&i>e+a&&t.right(t)),Math.abs(t.offsetX)<o*Math.abs(t.offsetY)&&(t.up&&s<n-a&&t.up(t),t.down&&s>n+a&&t.down(t))};function o(t,e){var i=t.changedTouches[0];e.touchstartX=i.clientX,e.touchstartY=i.clientY,e.start&&e.start(Object.assign(t,e))}function a(t,e){var i=t.changedTouches[0];e.touchendX=i.clientX,e.touchendY=i.clientY,e.end&&e.end(Object.assign(t,e)),s(e)}function r(t,e){var i=t.changedTouches[0];e.touchmoveX=i.clientX,e.touchmoveY=i.clientY,e.move&&e.move(Object.assign(t,e))}function c(t){var e={touchstartX:0,touchstartY:0,touchendX:0,touchendY:0,touchmoveX:0,touchmoveY:0,offsetX:0,offsetY:0,left:t.left,right:t.right,up:t.up,down:t.down,start:t.start,move:t.move,end:t.end};return{touchstart:function(t){return o(t,e)},touchend:function(t){return a(t,e)},touchmove:function(t){return r(t,e)}}}function l(t,e,i){var s=e.value,o=s.parent?t.parentElement:t,a=s.options||{passive:!0};if(o){var r=c(e.value);o._touchHandlers=Object(o._touchHandlers),o._touchHandlers[i.context._uid]=r,Object(n["q"])(r).forEach(function(t){o.addEventListener(t,r[t],a)})}}function u(t,e,i){var s=e.value.parent?t.parentElement:t;if(s&&s._touchHandlers){var o=s._touchHandlers[i.context._uid];Object(n["q"])(o).forEach(function(t){s.removeEventListener(t,o[t])}),delete s._touchHandlers[i.context._uid]}}e["a"]={inserted:l,unbind:u}},d4c0:function(t,e,i){},f7dc:function(t,e,i){}}]);
//# sourceMappingURL=chunk-78da9091.8699d99d.js.map