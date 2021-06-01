(function(t){function i(i){for(var a,s,o=i[0],l=i[1],c=i[2],p=0,f=[];p<o.length;p++)s=o[p],Object.prototype.hasOwnProperty.call(n,s)&&n[s]&&f.push(n[s][0]),n[s]=0;for(a in l)Object.prototype.hasOwnProperty.call(l,a)&&(t[a]=l[a]);u&&u(i);while(f.length)f.shift()();return r.push.apply(r,c||[]),e()}function e(){for(var t,i=0;i<r.length;i++){for(var e=r[i],a=!0,o=1;o<e.length;o++){var l=e[o];0!==n[l]&&(a=!1)}a&&(r.splice(i--,1),t=s(s.s=e[0]))}return t}var a={},n={app:0},r=[];function s(i){if(a[i])return a[i].exports;var e=a[i]={i:i,l:!1,exports:{}};return t[i].call(e.exports,e,e.exports,s),e.l=!0,e.exports}s.m=t,s.c=a,s.d=function(t,i,e){s.o(t,i)||Object.defineProperty(t,i,{enumerable:!0,get:e})},s.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},s.t=function(t,i){if(1&i&&(t=s(t)),8&i)return t;if(4&i&&"object"===typeof t&&t&&t.__esModule)return t;var e=Object.create(null);if(s.r(e),Object.defineProperty(e,"default",{enumerable:!0,value:t}),2&i&&"string"!=typeof t)for(var a in t)s.d(e,a,function(i){return t[i]}.bind(null,a));return e},s.n=function(t){var i=t&&t.__esModule?function(){return t["default"]}:function(){return t};return s.d(i,"a",i),i},s.o=function(t,i){return Object.prototype.hasOwnProperty.call(t,i)},s.p="/";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],l=o.push.bind(o);o.push=i,o=o.slice();for(var c=0;c<o.length;c++)i(o[c]);var u=l;r.push([0,"chunk-vendors"]),e()})({0:function(t,i,e){t.exports=e("56d7")},"38be":function(t,i,e){},"4bfd":function(t,i,e){},"56d7":function(t,i,e){"use strict";e.r(i);e("e260"),e("e6cf"),e("cca6"),e("a79d");var a=e("2b0e"),n=function(){var t=this,i=t.$createElement,e=t._self._c||i;return e("div",{attrs:{id:"app"}},[e("Header",{on:{searchQuery:t.searching}}),e("Main",{attrs:{filmList:t.filmList,tvList:t.tvList}})],1)},r=[],s=e("bc3a"),o=e.n(s),l=function(){var t=this,i=t.$createElement,e=t._self._c||i;return e("header",{staticClass:"container"},[t._m(0),e("div",{staticClass:"input-research"},[e("input",{directives:[{name:"model",rawName:"v-model.trim",value:t.apiQuery,expression:"apiQuery",modifiers:{trim:!0}}],attrs:{type:"text",placeholder:"Cerca..."},domProps:{value:t.apiQuery},on:{keyup:function(i){return!i.type.indexOf("key")&&t._k(i.keyCode,"enter",13,i.key,"Enter")?null:t.sendQuery()},input:function(i){i.target.composing||(t.apiQuery=i.target.value.trim())},blur:function(i){return t.$forceUpdate()}}}),e("button",{on:{click:function(i){return t.sendQuery()}}},[t._v("CERCA")])])])},c=[function(){var t=this,i=t.$createElement,e=t._self._c||i;return e("div",{staticClass:"logo"},[e("h1",[t._v("BOOLFLIX")])])}],u={name:"Header",data:function(){return{apiQuery:""}},methods:{sendQuery:function(){this.$emit("searchQuery",this.apiQuery),this.apiQuery=""}}},p=u,f=(e("a0aa"),e("2877")),h=Object(f["a"])(p,l,c,!1,null,"27fc40a6",null),v=h.exports,g=function(){var t=this,i=t.$createElement,e=t._self._c||i;return e("main",{staticClass:"container"},[0!=this.filmList.length?e("h3",[t._v("Film")]):t._e(),e("div",{staticClass:"box-card"},t._l(t.filmList,(function(t){return e("FilmCard",{key:t.id,attrs:{film:t}})})),1),e("div",{staticClass:"boxNotFound"},[0===this.filmList.length?e("h2",[t._v("Nessun Film trovato!")]):t._e()]),0!=this.tvList.length?e("h3",[t._v("Serie TV")]):t._e(),e("div",{staticClass:"box-card"},t._l(t.tvList,(function(t){return e("TvCard",{key:t.id,attrs:{show:t}})})),1),e("div",{staticClass:"boxNotFound"},[0===this.tvList.length?e("h2",[t._v("Nessuna Serie TV trovata!")]):t._e()])])},d=[],m=function(){var t=this,i=t.$createElement,e=t._self._c||i;return e("section",[e("div",{staticClass:"card"},[e("div",{staticClass:"flip-card"},[e("div",{staticClass:"flip-card-inner"},[e("div",{staticClass:"flip-card-front"},[null!=t.film.poster_path?e("img",{attrs:{src:"https://image.tmdb.org/t/p/w300"+t.film.poster_path,alt:t.film.name}}):null===t.film.poster_path?e("img",{attrs:{src:"https://via.placeholder.com/250x400/000/FFF.png?text=img+not+found",alt:t.film.title}}):t._e()]),e("div",{staticClass:"flip-card-back"},[e("div",{staticClass:"overview-container"},[e("ul",[e("li",[e("span",[t._v("Titolo:")]),t._v(" "+t._s(t.film.title))]),e("li",[e("span",[t._v("Titolo originale:")]),t._v(" "+t._s(t.film.original_title))]),e("li",[e("span",[t._v("Lingua originale:")]),t._v(" "),e("CountryFlag",{attrs:{country:this.filterLang,size:"small"}})],1),e("li",[e("span",[t._v("Voto: ")]),e("span",t._l(this.convertVote,(function(t,i){return e("i",{key:i,staticClass:"fas fa-star"})})),0),e("span",t._l(5-this.convertVote,(function(t,i){return e("i",{key:i,staticClass:"far fa-star"})})),0)]),""!=t.film.overview?e("li",[e("span",[t._v("Overview:")]),t._v(" "+t._s(t.film.overview))]):""===t.film.overview?e("li",[e("h5",[t._v("Nessuna overview trovata")])]):t._e()])])])])])])])},_=[],y=e("eea2"),b={name:"FilmCard",components:{CountryFlag:y["a"]},props:{film:Object},computed:{filterLang:function(){return"en"===this.film.original_language?"gb":"ja"===this.film.original_language?"jp":"zh"===this.film.original_language?"cn":"hi"===this.film.original_language?"in":"he"===this.film.original_language?"il":"cs"===this.film.original_language?"cz":"ar"===this.film.original_language?"sa":"ko"===this.film.original_language?"kr":"sv"===this.film.original_language?"se":this.film.original_language},convertVote:function(){return Math.ceil(5*this.film.vote_average/10)}}},w=b,C=Object(f["a"])(w,m,_,!1,null,"4c9b6598",null),L=C.exports,k=function(){var t=this,i=t.$createElement,e=t._self._c||i;return e("section",[e("div",{staticClass:"card"},[e("div",{staticClass:"flip-card"},[e("div",{staticClass:"flip-card-inner"},[e("div",{staticClass:"flip-card-front"},[null!=t.show.backdrop_path?e("img",{attrs:{src:"https://image.tmdb.org/t/p/w300"+t.show.backdrop_path,alt:t.show.name}}):null===t.show.backdrop_path?e("img",{attrs:{src:"https://via.placeholder.com/250x200/000/FFF.png?text=img+not+found",alt:t.show.name}}):t._e()]),e("div",{staticClass:"flip-card-back"},[e("div",{staticClass:"overview-container"},[e("ul",[e("li",[e("span",[t._v("Titolo:")]),t._v(" "+t._s(t.show.name))]),e("li",[e("span",[t._v("Titolo originale:")]),t._v(" "+t._s(t.show.original_name))]),e("li",[e("span",[t._v("Lingua originale:")]),t._v(" "),e("CountryFlag",{attrs:{country:this.filterLang,size:"small"}})],1),e("li",[e("span",[t._v("Voto: ")]),e("span",t._l(this.convertVote,(function(t,i){return e("i",{key:i,staticClass:"fas fa-star"})})),0),e("span",t._l(5-this.convertVote,(function(t,i){return e("i",{key:i,staticClass:"far fa-star"})})),0)]),""!=t.show.overview?e("li",[e("span",[t._v("Overview: ")]),t._v(" "+t._s(t.show.overview))]):""===t.show.overview?e("li",[e("h5",[t._v("Nessuna overview trovata")])]):t._e()])])])])])])])},O=[],x={name:"TvCard",components:{CountryFlag:y["a"]},props:{show:Object},computed:{filterLang:function(){return"en"===this.show.original_language?"gb":"ja"===this.show.original_language?"jp":"zh"===this.show.original_language?"cn":"hi"===this.show.original_language?"in":"he"===this.show.original_language?"il":"cs"===this.show.original_language?"cz":"ar"===this.show.original_language?"sa":"ko"===this.show.original_language?"kr":"sv"===this.show.original_language?"se":this.show.original_language},convertVote:function(){return Math.ceil(5*this.show.vote_average/10)}}},j=x,F=(e("cd5b"),Object(f["a"])(j,k,O,!1,null,"2dc5fe21",null)),Q=F.exports,T={name:"Main",components:{FilmCard:L,TvCard:Q},props:{filmList:Array,tvList:Array}},M=T,P=(e("d791"),Object(f["a"])(M,g,d,!1,null,"08d51672",null)),V=P.exports,$={name:"App",components:{Header:v,Main:V},data:function(){return{apiMoviesURL:"https://api.themoviedb.org/3/search/movie",apiTvURL:"https://api.themoviedb.org/3/search/tv",apiKey:"822d16617b418ef00732254ac6e85f68",apiLang:"it-IT",apiPage:1,apiQuery:"",filmList:[],tvList:[]}},methods:{searching:function(t){var i=this;this.apiQuery=t;var e={params:{api_key:this.apiKey,query:this.apiQuery,language:this.apiLang,page:this.apiPage}};""!=t&&o.a.all([o.a.get(this.apiMoviesURL,e),o.a.get(this.apiTvURL,e)]).then(o.a.spread((function(t,e){i.filmList=t.data.results,i.tvList=e.data.results}))).catch((function(t){console.log(t)}))}}},E=$,N=(e("5c0b"),Object(f["a"])(E,n,r,!1,null,null,null)),S=N.exports;a["a"].config.productionTip=!1,new a["a"]({render:function(t){return t(S)}}).$mount("#app")},"5c0b":function(t,i,e){"use strict";e("9c0c")},8936:function(t,i,e){},"9c0c":function(t,i,e){},a0aa:function(t,i,e){"use strict";e("38be")},cd5b:function(t,i,e){"use strict";e("8936")},d791:function(t,i,e){"use strict";e("4bfd")}});
//# sourceMappingURL=app.2909ef31.js.map