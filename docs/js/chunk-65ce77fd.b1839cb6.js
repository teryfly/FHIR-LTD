(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-65ce77fd"],{"1f6b":function(t,e,s){"use strict";s("4d14")},"4d14":function(t,e,s){},"7d01":function(t,e,s){"use strict";s("9eb5")},"8d3c":function(t,e,s){},"9eb5":function(t,e,s){},a614:function(t,e,s){"use strict";s("8d3c")},a816:function(t,e,s){"use strict";s.r(e);var a=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("fhiry-page",{staticClass:"recruit",attrs:{banners:t.banners}},[s("div",{staticClass:"recruit-wrapper"},[s("div",{staticClass:"inner-wrapper"},t._l(t.stations,(function(e,a){return s("div",{key:a,staticClass:"station"},[s("header",{staticClass:"station-header"},[s("h1",[t._v(t._s(e.stationName))])]),s("section",{staticClass:"duty station-content"},[s("h2",[t._v("【岗位职责】")]),s("ul",{staticClass:"list"},t._l(e.duty,(function(e,a){return s("li",{key:a},[s("span",[t._v(t._s(a+1)+".")]),s("span",[t._v(t._s(e))])])})),0)]),s("section",{staticClass:"require station-content"},[s("h2",[t._v("【岗位要求】")]),s("ul",{staticClass:"list"},t._l(e.require,(function(e,a){return s("li",{key:a},[s("span",[t._v(t._s(a+1)+".")]),s("span",[t._v(t._s(e))])])})),0)])])})),0)])])},n=[],i=s("edef"),r=s("0c6d"),c={name:"recruit",created:function(){this.getRecruitAjax()},data:function(){return{banners:[],stations:[]}},methods:{getRecruitAjax:function(){var t=this;Object(r["k"])().then((function(e){t.banners=e.banners,t.stations=e.stations}))}},components:{FhiryPage:i["a"]}},l=c,u=(s("a614"),s("2877")),o=Object(u["a"])(l,a,n,!1,null,"ede70a5c",null);e["default"]=o.exports},edef:function(t,e,s){"use strict";var a=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"fhiry-page"},[s("header",{staticClass:"fhiry-page-header"},[s("fhiry-carousel",{attrs:{data:t.banners}})],1),s("div",{staticClass:"content"},[t._t("default")],2)])},n=[],i=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"fhiry-carousel"},[s("el-carousel",{staticClass:"carousel"},t._l(t.data,(function(e,a){return s("el-carousel-item",{key:a},[s("div",{staticClass:"pc-banner"},[s("img",{attrs:{src:e.img,alt:""}}),void 0!=e.type?s("div",{staticClass:"pc-banner-content"},[s("h1",[t._v(t._s(e.title))]),"text"==e.type?s("div",{staticClass:"text item"},t._l(e.text,(function(e,a){return s("p",{key:a},[t._v(t._s(e))])})),0):t._e(),"list"==e.type?s("ul",{staticClass:"list item"},t._l(e.text,(function(e,a){return s("li",{key:a},[t._v(t._s(e))])})),0):t._e()]):t._e()])])})),1),s("swipe",{staticClass:"carousel-phone",attrs:{"indicator-color":"white",autoplay:3e3}},t._l(t.data,(function(e,a){return s("swipe-item",{key:a},[s("div",{staticClass:"phone-banner"},[s("img",{attrs:{src:e.img,alt:""}}),void 0!=e.type?s("div",{staticClass:"phone-banner-content"},[s("h1",[t._v(t._s(e.title))]),"text"==e.type?s("div",{staticClass:"text item"},t._l(e.text,(function(e,a){return s("p",{key:a},[t._v(t._s(e))])})),0):t._e(),"list"==e.type?s("ul",{staticClass:"list item"},t._l(e.text,(function(e,a){return s("li",{key:a},[t._v(t._s(e))])})),0):t._e()]):t._e()])])})),1)],1)},r=[],c=s("5530"),l=s("5880"),u=s("3089"),o={name:"fhiry-carousel",props:{data:{type:Array,default:function(){return[]}}},computed:Object(c["a"])({},Object(l["mapState"])(["imgBaseURL"])),components:{Swipe:u["Swipe"],SwipeItem:u["SwipeItem"]}},p=o,d=(s("7d01"),s("2877")),f=Object(d["a"])(p,i,r,!1,null,null,null),_=f.exports,v={name:"fhiry-page",props:{banners:{type:Array,default:function(){return[]}}},components:{FhiryCarousel:_}},h=v,y=(s("1f6b"),Object(d["a"])(h,a,n,!1,null,"4424df32",null));e["a"]=y.exports}}]);
//# sourceMappingURL=chunk-65ce77fd.b1839cb6.js.map