(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-8c941040"],{4362:function(t,e,n){e.nextTick=function(t){var e=Array.prototype.slice.call(arguments);e.shift(),setTimeout((function(){t.apply(null,e)}),0)},e.platform=e.arch=e.execPath=e.title="browser",e.pid=1,e.browser=!0,e.env={},e.argv=[],e.binding=function(t){throw new Error("No such module. (Possibly not yet loaded)")},function(){var t,r="/";e.cwd=function(){return r},e.chdir=function(e){t||(t=n("df7c")),r=t.resolve(e,r)}}(),e.exit=e.kill=e.umask=e.dlopen=e.uptime=e.memoryUsage=e.uvCounters=function(){},e.features={}},"4fa7":function(t,e,n){"use strict";n("a203")},a203:function(t,e,n){},b907:function(t,e,n){"use strict";n.r(e);var r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"chat_container"},[n("van-nav-bar",{staticClass:"topbar-container",attrs:{title:"智能客服","left-arrow":""},on:{"click-left":function(e){return t.$router.push("/myInfo")}}}),n("van-cell-group",{ref:"list",staticClass:"msg_list"},t._l(t.list,(function(e,r){return n("van-cell",{key:r,class:e.id?"left_text":"right_text",attrs:{title:e.msg,center:""}},[n("van-image",{staticClass:"photo",attrs:{slot:e.id?"icon":"right-icon",round:"",fit:"cover",src:e.id?"https://img01.yzcdn.cn/vant/cat.jpeg":t.userPhoto},slot:e.id?"icon":"right-icon"})],1)})),1),n("van-cell-group",{staticClass:"sendtext_wrap"},[n("van-field",{attrs:{center:"",placeholder:"请输入消息..."},model:{value:t.message,callback:function(e){t.message=e},expression:"message"}},[n("van-button",{attrs:{slot:"button",size:"small",type:"primary"},on:{click:t.onsendMsg},slot:"button"},[t._v("发送")])],1)],1)],1)},s=[],o=n("8e27"),i=n.n(o),c=n("5d2d"),a={name:"UserChat",data:function(){return{list:Object(c["a"])("chat_msg")||[],message:"",scroll_distance:0,timer:null,userPhoto:Object(c["a"])("userPhoto")}},methods:{onsendMsg:function(){var t={msg:this.message,timestamp:Date.now(),id:0};this.$store.socket.emit("sendMsg",t),this.list.push(t),this.message=""},scrollToBottom:function(){var t=this.$refs.list;t.scrollTop=t.scrollHeight}},created:function(){var t=this;this.$store.socket=i()("http://192.168.0.193:3000"),this.$store.socket.on("connect",(function(){console.log("链接成功")})),this.$store.socket.on("sevMsg",(function(e){t.list.push(e)})),this.$store.socket.on("disconnect",(function(){console.log("已断开连接")}))},mounted:function(){this.scrollToBottom()},watch:{list:function(){var t=this;Object(c["c"])("chat_msg",this.list),this.$nextTick((function(){t.scrollToBottom()}))}}},l=a,u=(n("4fa7"),n("2877")),f=Object(u["a"])(l,r,s,!1,null,"f45843b2",null);e["default"]=f.exports},df7c:function(t,e,n){(function(t){function n(t,e){for(var n=0,r=t.length-1;r>=0;r--){var s=t[r];"."===s?t.splice(r,1):".."===s?(t.splice(r,1),n++):n&&(t.splice(r,1),n--)}if(e)for(;n--;n)t.unshift("..");return t}function r(t){"string"!==typeof t&&(t+="");var e,n=0,r=-1,s=!0;for(e=t.length-1;e>=0;--e)if(47===t.charCodeAt(e)){if(!s){n=e+1;break}}else-1===r&&(s=!1,r=e+1);return-1===r?"":t.slice(n,r)}function s(t,e){if(t.filter)return t.filter(e);for(var n=[],r=0;r<t.length;r++)e(t[r],r,t)&&n.push(t[r]);return n}e.resolve=function(){for(var e="",r=!1,o=arguments.length-1;o>=-1&&!r;o--){var i=o>=0?arguments[o]:t.cwd();if("string"!==typeof i)throw new TypeError("Arguments to path.resolve must be strings");i&&(e=i+"/"+e,r="/"===i.charAt(0))}return e=n(s(e.split("/"),(function(t){return!!t})),!r).join("/"),(r?"/":"")+e||"."},e.normalize=function(t){var r=e.isAbsolute(t),i="/"===o(t,-1);return t=n(s(t.split("/"),(function(t){return!!t})),!r).join("/"),t||r||(t="."),t&&i&&(t+="/"),(r?"/":"")+t},e.isAbsolute=function(t){return"/"===t.charAt(0)},e.join=function(){var t=Array.prototype.slice.call(arguments,0);return e.normalize(s(t,(function(t,e){if("string"!==typeof t)throw new TypeError("Arguments to path.join must be strings");return t})).join("/"))},e.relative=function(t,n){function r(t){for(var e=0;e<t.length;e++)if(""!==t[e])break;for(var n=t.length-1;n>=0;n--)if(""!==t[n])break;return e>n?[]:t.slice(e,n-e+1)}t=e.resolve(t).substr(1),n=e.resolve(n).substr(1);for(var s=r(t.split("/")),o=r(n.split("/")),i=Math.min(s.length,o.length),c=i,a=0;a<i;a++)if(s[a]!==o[a]){c=a;break}var l=[];for(a=c;a<s.length;a++)l.push("..");return l=l.concat(o.slice(c)),l.join("/")},e.sep="/",e.delimiter=":",e.dirname=function(t){if("string"!==typeof t&&(t+=""),0===t.length)return".";for(var e=t.charCodeAt(0),n=47===e,r=-1,s=!0,o=t.length-1;o>=1;--o)if(e=t.charCodeAt(o),47===e){if(!s){r=o;break}}else s=!1;return-1===r?n?"/":".":n&&1===r?"/":t.slice(0,r)},e.basename=function(t,e){var n=r(t);return e&&n.substr(-1*e.length)===e&&(n=n.substr(0,n.length-e.length)),n},e.extname=function(t){"string"!==typeof t&&(t+="");for(var e=-1,n=0,r=-1,s=!0,o=0,i=t.length-1;i>=0;--i){var c=t.charCodeAt(i);if(47!==c)-1===r&&(s=!1,r=i+1),46===c?-1===e?e=i:1!==o&&(o=1):-1!==e&&(o=-1);else if(!s){n=i+1;break}}return-1===e||-1===r||0===o||1===o&&e===r-1&&e===n+1?"":t.slice(e,r)};var o="b"==="ab".substr(-1)?function(t,e,n){return t.substr(e,n)}:function(t,e,n){return e<0&&(e=t.length+e),t.substr(e,n)}}).call(this,n("4362"))}}]);
//# sourceMappingURL=chunk-8c941040.491d9f44.js.map