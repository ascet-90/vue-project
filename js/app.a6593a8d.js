(function(t){function a(a){for(var n,r,s=a[0],c=a[1],u=a[2],f=0,h=[];f<s.length;f++)r=s[f],i[r]&&h.push(i[r][0]),i[r]=0;for(n in c)Object.prototype.hasOwnProperty.call(c,n)&&(t[n]=c[n]);l&&l(a);while(h.length)h.shift()();return o.push.apply(o,u||[]),e()}function e(){for(var t,a=0;a<o.length;a++){for(var e=o[a],n=!0,s=1;s<e.length;s++){var c=e[s];0!==i[c]&&(n=!1)}n&&(o.splice(a--,1),t=r(r.s=e[0]))}return t}var n={},i={app:0},o=[];function r(a){if(n[a])return n[a].exports;var e=n[a]={i:a,l:!1,exports:{}};return t[a].call(e.exports,e,e.exports,r),e.l=!0,e.exports}r.m=t,r.c=n,r.d=function(t,a,e){r.o(t,a)||Object.defineProperty(t,a,{enumerable:!0,get:e})},r.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},r.t=function(t,a){if(1&a&&(t=r(t)),8&a)return t;if(4&a&&"object"===typeof t&&t&&t.__esModule)return t;var e=Object.create(null);if(r.r(e),Object.defineProperty(e,"default",{enumerable:!0,value:t}),2&a&&"string"!=typeof t)for(var n in t)r.d(e,n,function(a){return t[a]}.bind(null,n));return e},r.n=function(t){var a=t&&t.__esModule?function(){return t["default"]}:function(){return t};return r.d(a,"a",a),a},r.o=function(t,a){return Object.prototype.hasOwnProperty.call(t,a)},r.p="/";var s=window["webpackJsonp"]=window["webpackJsonp"]||[],c=s.push.bind(s);s.push=a,s=s.slice();for(var u=0;u<s.length;u++)a(s[u]);var l=c;o.push([0,"chunk-vendors"]),e()})({0:function(t,a,e){t.exports=e("56d7")},"034f":function(t,a,e){"use strict";var n=e("64a9"),i=e.n(n);i.a},"0cba":function(t,a,e){"use strict";var n=e("fac0"),i=e.n(n);i.a},"56d7":function(t,a,e){"use strict";e.r(a);e("cadf"),e("551c"),e("f751"),e("097d");var n=e("2b0e"),i=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{attrs:{id:"app"}},[e("div",{attrs:{id:"nav"}},[e("router-link",{attrs:{to:"/"}},[t._v("Home")]),t._v(" |\n    "),e("router-link",{attrs:{to:"/about"}},[t._v("About")])],1),e("router-view")],1)},o=[],r=(e("034f"),e("2877")),s={},c=Object(r["a"])(s,i,o,!1,null,null,null),u=c.exports,l=e("8c4f"),f=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"container"},[e("div",{staticClass:"row top-row"},[e("div",{staticClass:"column"},[e("div",{staticClass:"logo"},[e("router-link",{attrs:{to:"/"}},[e("span",[t._v("LOGO")])])],1)]),e("div",{staticClass:"column three-columns"},[e("SearchBar",{attrs:{onSubmit:t.searchGifs,searchText:t.searchText},on:{"search-change":function(a){t.searchText=a}}})],1)]),0!==t.gifs.length?e("div",{staticClass:"row"},t._l(t.gifs,function(t,a){return e("div",{key:a+"+"+t.id,staticClass:"column"},[e("Gif",{attrs:{gifData:t}})],1)}),0):t._e(),t.pagination&&0===t.pagination.count?e("div",{staticClass:"row"},[t._m(0)]):t._e()])},h=[function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"column full-width"},[e("h1",[t._v("No Gifs Found")]),e("img",{attrs:{src:"https://media3.giphy.com/media/YyKPbc5OOTSQE/giphy.gif",alt:"Not Found"}})])}],d=e("75fc"),p=e("f7fe"),g=e.n(p),v=e("55da"),m=e.n(v),_=e("c5ec"),b=e.n(_),y={searchGifs:function(t,a){b.a.get("https://api.giphy.com/v1/gifs/search?api_key=OHmzUo01WAYi2XU4iUwKKgNJB7QoaEUv&q=".concat(t,"&limit=24&offset=0&rating=G&lang=en"),a)},getRandomGifs:function(t){b.a.get("https://api.giphy.com/v1/gifs/trending?api_key=OHmzUo01WAYi2XU4iUwKKgNJB7QoaEUv&limit=24&rating=G",t)},searchGifById:function(t,a){b.a.get("https://api.giphy.com/v1/gifs/".concat(t,"?api_key=OHmzUo01WAYi2XU4iUwKKgNJB7QoaEUv"),a)}},w=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"search-bar"},[e("form",{attrs:{action:""},on:{submit:function(a){return a.preventDefault(),t.onSubmit(a)}}},[e("button",{staticClass:"icon-search",attrs:{type:"submit"}}),e("input",{attrs:{type:"search",placeholder:"Search",autocomplete:"on"},domProps:{value:t.searchText},on:{input:function(a){return t.$emit("search-change",a.target.value)}},nativeOn:{keyup:function(a){return!a.type.indexOf("key")&&t._k(a.keyCode,"enter",13,a.key,"Enter")?null:t.onSubmit(a)}}})])])},O=[],x={name:"search-bar",props:["onSubmit","searchText"]},S=x,C=Object(r["a"])(S,w,O,!1,null,null,null),G=C.exports,D=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("transition",{attrs:{appear:"","appear-class":"slide-enter","appear-to-class":"slide-leave-to","appear-active-class":"slide-enter-active"}},[e("div",{staticClass:"gif"},[e("router-link",{attrs:{to:"/gif/"+t.gifData.id}},[e("img",{staticClass:"img-responsive",attrs:{alt:"Gif",src:t.gifData.images.fixed_height.url}})])],1)])},$=[],k={name:"gif",props:["gifData"]},T=k,U=Object(r["a"])(T,D,$,!1,null,null,null),q=U.exports,j={name:"home",data:function(){return{searchText:void 0,gifs:[],pagination:null,debouncedSearch:null,debouncedRandom:null,infScroll:null}},components:{SearchBar:G,Gif:q},computed:{gifsCount:function(){return this.gifs.length}},methods:{getRandomGifs:function(){this.infScroll&&!this.infScroll.option.loadOnScroll&&this.infScroll.option({loadOnScroll:!0});var t=this;y.getRandomGifs(function(a){t.gifs=a.data,t.pagination=a.pagination})},searchDebounceGifs:function(){this.debouncedSearch()},searchGifs:function(){var t=this;t.infScroll&&!t.infScroll.option.loadOnScroll&&t.infScroll.option({loadOnScroll:!0}),void 0===t.searchText||""===t.searchText?(t.$router.push("/search?q="),t.getRandomGifs()):y.searchGifs(t.searchText,function(a){t.gifs=a.data,t.pagination=a.pagination})}},watch:{searchText:function(t,a){if(void 0===a&&""!==t&&this.$route.query.q)this.searchGifs();else if(""!==t)this.searchDebounceGifs();else if(a&&""===t)return this.$router.push("/search?q="),this.debouncedSearch.cancel(),void this.debouncedRandom();void 0!==t&&this.$router.push("/search?q=".concat(t))},"$route.query.q":{immediate:!0,handler:function(t){void 0!==t&&(this.searchText=t)}},"$route.path":function(t){"/"===t&&(this.searchText="")}},mounted:function(){void 0!==this.$route.query.q&&""!==this.$route.query.q||this.getRandomGifs(),this.debouncedSearch=g()(this.searchGifs,1e3),this.debouncedRandom=g()(this.getRandomGifs,1e3);var t=this;this.infScroll=new m.a(".container",{path:function(){return void 0===t.$route.query.q||""===t.$route.query.q?"https://api.giphy.com/v1/gifs/trending?api_key=OHmzUo01WAYi2XU4iUwKKgNJB7QoaEUv&limit=24&rating=G&offset=".concat(t.gifsCount):"https://api.giphy.com/v1/gifs/search?api_key=OHmzUo01WAYi2XU4iUwKKgNJB7QoaEUv&q=".concat(t.searchText,"&limit=24&rating=G&lang=en&offset=").concat(t.gifsCount)},responseType:"text",history:!1}),this.infScroll.on("load",function(a){var e=JSON.parse(a);t.gifs=[].concat(Object(d["a"])(t.gifs),Object(d["a"])(e.data))}),this.infScroll.on("request",function(){t.pagination&&0===t.pagination.count&&this.option({loadOnScroll:!1})})}},E=j,N=Object(r["a"])(E,f,h,!1,null,null,null),B=N.exports,K=function(){var t=this,a=t.$createElement,e=t._self._c||a;return t.gifData?e("div",{staticClass:"gif-single"},[e("h1",[t._v(t._s(t.gifData.title))]),e("span",{directives:[{name:"show",rawName:"v-show",value:t.loading,expression:"loading"}],staticClass:"icon-spin5"}),e("img",{directives:[{name:"show",rawName:"v-show",value:!t.loading,expression:"!loading"}],attrs:{src:t.gifData.images.downsized.url,alt:"Gif Image"},on:{load:function(a){t.loading=!1}}}),t.gifData.user?e("p",[t._v(" Author: "),e("router-link",{attrs:{to:"/author/"+t.gifData.id}},[t._v(t._s(t.gifData.user.display_name))])],1):t._e()]):t._e()},A=[],P={name:"gif-single",data:function(){return{gifData:null,loading:!0}},mounted:function(){var t=this;y.searchGifById(this.$route.params.id,function(a){t.gifData=a.data})}},R=P,I=(e("0cba"),Object(r["a"])(R,K,A,!1,null,null,null)),J=I.exports,z=function(){var t=this,a=t.$createElement,e=t._self._c||a;return t.authorData&&t.authorData.user?e("div",{staticClass:"container author"},[e("div",{staticClass:"row top-row v-align"},[e("div",{staticClass:"column"},[e("div",{staticClass:"logo"},[e("router-link",{attrs:{to:"/"}},[e("span",[t._v("LOGO")])])],1)]),e("div",{staticClass:"column column-right"},[e("div",{staticClass:"author-gif"},[e("router-link",{attrs:{to:"/gif/"+t.authorData.gifId}},[t._v("Back To Gif")])],1)])]),e("div",{staticClass:"row"},[e("div",{staticClass:"column full-width"},[e("h1",[t._v(t._s(t.authorData.user.display_name))]),e("span",{directives:[{name:"show",rawName:"v-show",value:t.loading,expression:"loading"}],staticClass:"icon-spin5"}),e("img",{directives:[{name:"show",rawName:"v-show",value:!t.loading,expression:"!loading"}],staticClass:"avatar",attrs:{src:t.authorData.user.avatar_url,alt:"Author Avatar"},on:{load:t.onLoad}}),e("p",[t._v("Author Profile: "),e("a",{attrs:{href:t.authorData.user.profile_url}},[t._v(t._s(t.authorData.user.username))])])])])]):t._e()},H=[],Q={name:"author-page",data:function(){return{loading:!0,authorData:null}},mounted:function(){var t=this;y.searchGifById(this.$route.params.gifId,function(a){t.authorData={gifId:a.data.id,user:a.data.user}})},methods:{onLoad:function(){this.loading=!1}}},Y=Q,W=(e("e84c"),Object(r["a"])(Y,z,H,!1,null,null,null)),X=W.exports,L=function(){var t=this,a=t.$createElement;t._self._c;return t._m(0)},M=[function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"about"},[e("h1",[t._v("This is an about page")])])}],F={},V=Object(r["a"])(F,L,M,!1,null,null,null),Z=V.exports;n["a"].use(l["a"]);var tt=new l["a"]({routes:[{path:"/",name:"home",component:B},{path:"/search",name:"search",component:B},{path:"/gif/:id",name:"gif-single",component:J},{path:"/author/:gifId",name:X,component:X},{path:"/about",name:"about",component:Z},{path:"*",redirect:{name:"home"}}],mode:"history"});e("de31"),e("d1d1");n["a"].config.productionTip=!1,new n["a"]({router:tt,render:function(t){return t(u)}}).$mount("#app")},"64a9":function(t,a,e){},"73af":function(t,a,e){},d1d1:function(t,a,e){},de31:function(t,a,e){},e84c:function(t,a,e){"use strict";var n=e("73af"),i=e.n(n);i.a},fac0:function(t,a,e){}});
//# sourceMappingURL=app.a6593a8d.js.map