(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-840b10ae"],{5899:function(e,t){e.exports="\t\n\v\f\r                　\u2028\u2029\ufeff"},"58a8":function(e,t,n){var r=n("1d80"),a=n("5899"),c="["+a+"]",i=RegExp("^"+c+c+"*"),s=RegExp(c+c+"*$"),o=function(e){return function(t){var n=String(r(t));return 1&e&&(n=n.replace(i,"")),2&e&&(n=n.replace(s,"")),n}};e.exports={start:o(1),end:o(2),trim:o(3)}},"63d4":function(e,t,n){"use strict";n("fb34")},7156:function(e,t,n){var r=n("861d"),a=n("d2bb");e.exports=function(e,t,n){var c,i;return a&&"function"==typeof(c=t.constructor)&&c!==n&&r(i=c.prototype)&&i!==n.prototype&&a(e,i),e}},"97c3":function(e,t,n){"use strict";n.r(t);var r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"channel_container"},[n("van-cell",{attrs:{border:!1}},[n("div",{staticClass:"channel_title",attrs:{slot:"title"},slot:"title"},[e._v("我的频道")]),n("van-button",{staticClass:"my_edit",attrs:{slot:"right-icon",type:"danger",size:"mini",plain:"",round:""},on:{click:function(t){e.isEdit=!e.isEdit}},slot:"right-icon"},[e._v(e._s(e.isEdit?"完成":"编辑"))])],1),n("van-grid",{attrs:{gutter:10,direction:"horizontal"}},e._l(e.channelList,(function(t,r){return n("van-grid-item",{key:t.id,class:{grid_item:!0,active:r==e.activeIndex},attrs:{text:t.name},on:{click:function(t){return e.checkChennel(r)}}},[0!==r&&e.isEdit?n("van-icon",{attrs:{slot:"icon",name:"clear"},on:{click:function(n){return e.onUserChennelEdit(t.id,r)}},slot:"icon"}):e._e()],1)})),1),n("van-cell",{attrs:{border:!1}},[n("div",{staticClass:"channel_title",attrs:{slot:"title"},slot:"title"},[e._v("频道推荐")])]),n("van-grid",{attrs:{gutter:10}},e._l(e.recomnedChannels,(function(t){return n("van-grid-item",{key:t.id,staticClass:"grid_item",attrs:{text:t.name},on:{click:function(n){return e.addChannel(t)}}})})),1)],1)},a=[],c=n("1da1"),i=n("5530"),s=(n("96cf"),n("a9e3"),n("4160"),n("159b"),n("a434"),n("3191")),o=n("2f62"),l=n("5d2d"),u={name:"ChannelEdit",data:function(){return{allChannels:[],isEdit:!1}},props:{channelList:{type:Array,required:!0},activeIndex:{type:Number,required:!0}},computed:Object(i["a"])(Object(i["a"])({},Object(o["c"])(["userToken"])),{},{recomnedChannels:function(){var e=this,t=[];return this.allChannels.forEach((function(n){for(var r=!1,a=0;a<e.channelList.length;a++)if(n.id===e.channelList[a].id){r=!0;break}r||t.push(n)})),t}}),methods:{reqAllChannels:function(){var e=this;return Object(c["a"])(regeneratorRuntime.mark((function t(){var n,r,a;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,Object(s["e"])();case 3:n=t.sent,r=n.data,a=r.data.channels,e.allChannels=a,t.next=12;break;case 9:t.prev=9,t.t0=t["catch"](0),console.log(t.t0);case 12:case"end":return t.stop()}}),t,null,[[0,9]])})))()},addChannel:function(e){var t=this;return Object(c["a"])(regeneratorRuntime.mark((function n(){return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:if(t.channelList.push(e),!t.userToken){n.next=12;break}return n.prev=2,n.next=5,Object(s["c"])(id);case 5:n.next=10;break;case 7:n.prev=7,n.t0=n["catch"](2),console.log(n.t0);case 10:n.next=13;break;case 12:Object(l["c"])("user_chennels",t.channelList);case 13:case"end":return n.stop()}}),n,null,[[2,7]])})))()},onUserChennelEdit:function(e,t){var n=this;return Object(c["a"])(regeneratorRuntime.mark((function r(){var a;return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:if(n.channelList.splice(t,1),t<=n.activeIndex&&n.$emit("deleteChannel",n.activeIndex-1),!n.userToken){r.next=15;break}return r.prev=3,r.next=6,Object(s["b"])(e);case 6:a=r.sent,console.log(a),r.next=13;break;case 10:r.prev=10,r.t0=r["catch"](3),console.log(r.t0);case 13:r.next=16;break;case 15:Object(l["c"])("user_chennels",n.channelList);case 16:case"end":return r.stop()}}),r,null,[[3,10]])})))()},checkChennel:function(e){this.isEdit&&this.$emit("changeChannel",e)}},created:function(){this.reqAllChannels()}},d=u,h=(n("63d4"),n("2877")),f=Object(h["a"])(d,r,a,!1,null,"ee910362",null);t["default"]=f.exports},a9e3:function(e,t,n){"use strict";var r=n("83ab"),a=n("da84"),c=n("94ca"),i=n("6eeb"),s=n("5135"),o=n("c6b6"),l=n("7156"),u=n("c04e"),d=n("d039"),h=n("7c73"),f=n("241c").f,p=n("06cf").f,v=n("9bf2").f,b=n("58a8").trim,g="Number",m=a[g],k=m.prototype,x=o(h(k))==g,C=function(e){var t,n,r,a,c,i,s,o,l=u(e,!1);if("string"==typeof l&&l.length>2)if(l=b(l),t=l.charCodeAt(0),43===t||45===t){if(n=l.charCodeAt(2),88===n||120===n)return NaN}else if(48===t){switch(l.charCodeAt(1)){case 66:case 98:r=2,a=49;break;case 79:case 111:r=8,a=55;break;default:return+l}for(c=l.slice(2),i=c.length,s=0;s<i;s++)if(o=c.charCodeAt(s),o<48||o>a)return NaN;return parseInt(c,r)}return+l};if(c(g,!m(" 0o1")||!m("0b1")||m("+0x1"))){for(var E,_=function(e){var t=arguments.length<1?0:e,n=this;return n instanceof _&&(x?d((function(){k.valueOf.call(n)})):o(n)!=g)?l(new m(C(t)),n,_):C(t)},I=r?f(m):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger,fromString,range".split(","),N=0;I.length>N;N++)s(m,E=I[N])&&!s(_,E)&&v(_,E,p(m,E));_.prototype=k,k.constructor=_,i(a,g,_)}},fb34:function(e,t,n){}}]);
//# sourceMappingURL=chunk-840b10ae.8984777e.js.map