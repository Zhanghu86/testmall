(function(e){function t(t){for(var o,i,c=t[0],d=t[1],s=t[2],l=0,u=[];l<c.length;l++)i=c[l],Object.prototype.hasOwnProperty.call(a,i)&&a[i]&&u.push(a[i][0]),a[i]=0;for(o in d)Object.prototype.hasOwnProperty.call(d,o)&&(e[o]=d[o]);f&&f(t);while(u.length)u.shift()();return r.push.apply(r,s||[]),n()}function n(){for(var e,t=0;t<r.length;t++){for(var n=r[t],o=!0,i=1;i<n.length;i++){var c=n[i];0!==a[c]&&(o=!1)}o&&(r.splice(t--,1),e=d(d.s=n[0]))}return e}var o={},i={app:0},a={app:0},r=[];function c(e){return d.p+"js/"+({}[e]||e)+"."+{"chunk-02720070":"18afc470","chunk-06a7a0f5":"189eb206","chunk-0e9a3c88":"c62e29ed","chunk-0fc94a2b":"0dd6e7e3","chunk-1ac99f53":"9ef19e0d","chunk-2100a9e1":"dbe688cc","chunk-2c8c0946":"5f54833f","chunk-3b4d0a44":"75c411cf","chunk-40e534e7":"2e9cd829","chunk-417c4b16":"eb9c02fc","chunk-48c13b3f":"5789b078","chunk-55219c35":"8d606c91","chunk-66b04f48":"de9d91b4","chunk-6a58eb2c":"d4dde309","chunk-76f2c2f7":"7cc94336","chunk-7dcedf42":"a702a610","chunk-837d62b6":"9545a8fc","chunk-9a977568":"feb200f0","chunk-a1377806":"aad4c6cc","chunk-b828a62e":"b015b7bc","chunk-b9cdaa38":"3cf6bda6","chunk-bb104d42":"0b18ced4"}[e]+".js"}function d(t){if(o[t])return o[t].exports;var n=o[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,d),n.l=!0,n.exports}d.e=function(e){var t=[],n={"chunk-2100a9e1":1,"chunk-76f2c2f7":1,"chunk-9a977568":1,"chunk-bb104d42":1};i[e]?t.push(i[e]):0!==i[e]&&n[e]&&t.push(i[e]=new Promise((function(t,n){for(var o="css/"+({}[e]||e)+"."+{"chunk-02720070":"31d6cfe0","chunk-06a7a0f5":"31d6cfe0","chunk-0e9a3c88":"31d6cfe0","chunk-0fc94a2b":"31d6cfe0","chunk-1ac99f53":"31d6cfe0","chunk-2100a9e1":"3bc76b58","chunk-2c8c0946":"31d6cfe0","chunk-3b4d0a44":"31d6cfe0","chunk-40e534e7":"31d6cfe0","chunk-417c4b16":"31d6cfe0","chunk-48c13b3f":"31d6cfe0","chunk-55219c35":"31d6cfe0","chunk-66b04f48":"31d6cfe0","chunk-6a58eb2c":"31d6cfe0","chunk-76f2c2f7":"4a063258","chunk-7dcedf42":"31d6cfe0","chunk-837d62b6":"31d6cfe0","chunk-9a977568":"a06e4faa","chunk-a1377806":"31d6cfe0","chunk-b828a62e":"31d6cfe0","chunk-b9cdaa38":"31d6cfe0","chunk-bb104d42":"415f61cb"}[e]+".css",a=d.p+o,r=document.getElementsByTagName("link"),c=0;c<r.length;c++){var s=r[c],l=s.getAttribute("data-href")||s.getAttribute("href");if("stylesheet"===s.rel&&(l===o||l===a))return t()}var u=document.getElementsByTagName("style");for(c=0;c<u.length;c++){s=u[c],l=s.getAttribute("data-href");if(l===o||l===a)return t()}var f=document.createElement("link");f.rel="stylesheet",f.type="text/css",f.onload=t,f.onerror=function(t){var o=t&&t.target&&t.target.src||a,r=new Error("Loading CSS chunk "+e+" failed.\n("+o+")");r.code="CSS_CHUNK_LOAD_FAILED",r.request=o,delete i[e],f.parentNode.removeChild(f),n(r)},f.href=a;var p=document.getElementsByTagName("head")[0];p.appendChild(f)})).then((function(){i[e]=0})));var o=a[e];if(0!==o)if(o)t.push(o[2]);else{var r=new Promise((function(t,n){o=a[e]=[t,n]}));t.push(o[2]=r);var s,l=document.createElement("script");l.charset="utf-8",l.timeout=120,d.nc&&l.setAttribute("nonce",d.nc),l.src=c(e);var u=new Error;s=function(t){l.onerror=l.onload=null,clearTimeout(f);var n=a[e];if(0!==n){if(n){var o=t&&("load"===t.type?"missing":t.type),i=t&&t.target&&t.target.src;u.message="Loading chunk "+e+" failed.\n("+o+": "+i+")",u.name="ChunkLoadError",u.type=o,u.request=i,n[1](u)}a[e]=void 0}};var f=setTimeout((function(){s({type:"timeout",target:l})}),12e4);l.onerror=l.onload=s,document.head.appendChild(l)}return Promise.all(t)},d.m=e,d.c=o,d.d=function(e,t,n){d.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},d.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},d.t=function(e,t){if(1&t&&(e=d(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(d.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)d.d(n,o,function(t){return e[t]}.bind(null,o));return n},d.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return d.d(t,"a",t),t},d.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},d.p="/",d.oe=function(e){throw console.error(e),e};var s=window["webpackJsonp"]=window["webpackJsonp"]||[],l=s.push.bind(s);s.push=t,s=s.slice();for(var u=0;u<s.length;u++)t(s[u]);var f=l;r.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"034b":function(e,t,n){},3824:function(e,t){DJMask={common:{windowW:$(window).width(),windowH:$(window).height(),closeCssAnimate:function(){$("[class*=-close]").css({transition:"all 0.4s ease-in-out","-webkit-transition":"all 0.4s ease-in-out","-ms-transition":"all 0.4s ease-in-out"}).hover((function(){$(this).css({color:"#ff0000",transform:"rotate(360deg)","-webkit-transform":"rotate(360deg)","-ms-transform":"rotate(360deg)"})}),(function(){$(this).css({color:"#666",transform:"rotate(0deg)","-webkit-transform":"rotate(0deg)","-ms-transform":"rotate(0deg)"})}))}},maskBackgroundCss:function(){var e={background:"#000000",opacity:"0.5","-moz-opacity":"0.5","-webkit-opacity":"0.5",filter:"alpha(opacity=50)",width:"100%",height:document.body.scrollHeight,position:"absolute",top:"0px",left:"0px","z-index":"100",display:"none"};return e},init:function(){var e='<div id="dj-mask"></div>';$(e).appendTo("body"),djMaskDomLoaded=$("#dj-mask"),djMaskDomLoaded.css(this.maskBackgroundCss())},show:function(){this.init(),djMaskDomLoaded.show()},hide:function(){djMaskDomLoaded.remove()},loadingCss:function(){this.show();var e={position:"absolute",left:"50%",top:"50%",height:"20px",width:"100px","margin-top":"-10px","margin-left":"-50px","z-index":"999999999"},t={width:"20px",height:"20px","background-color":"#FFF","-moz-border-radius":"50% 50% 50% 50%","-webkit-border-radius":"50% 50% 50% 50%","border-radius":"50% 50% 50% 50%","margin-right":"20px","margin-bottom":"20px",position:"absolute"},n={"-webkit-animation":"object 2s linear infinite","-ms-animation":"object 2s linear infinite",animation:"object 2s linear infinite"},o={"-webkit-animation":"object 2s linear infinite -.4s","-ms-animation":"object 2s linear infinite -.4s",animation:"object 2s linear infinite -.4s"},i={"-webkit-animation":"object 2s linear infinite -.8s","-ms-animation":"object 2s linear infinite -.8s",animation:"object 2s linear infinite -.8s"},a={"-webkit-animation":"object 2s linear infinite -1.2s","-ms-animation":"object 2s linear infinite -1.2s",animation:"object 2s linear infinite -1.2s"},r={"-webkit-animation":"object 2s linear infinite -1.6s","-ms-animation":"object 2s linear infinite -1.6s",animation:"object 2s linear infinite -1.6s"};document.styleSheets.item(0).insertRule("@-webkit-keyframes object{0% { left: 100px; top:0}80% { left: 0; top:0;}85% { left: 0; top: -20px; width: 20px; height: 20px;}90% { width: 40px; height: 15px; }95% { left: 100px; top: -20px; width: 20px; height: 20px;}100% { left: 100px; top:0; }}",0),document.styleSheets.item(0).insertRule("@keyframes object{0% { left: 100px; top:0}80% { left: 0; top:0;}85% { left: 0; top: -20px; width: 20px; height: 20px;}90% { width: 40px; height: 15px; }95% { left: 100px; top: -20px; width: 20px; height: 20px;}100% { left: 100px; top:0; }\t}",0);var c='<div id="dj-mask-loadingBoxCenter"><div class="object" id="objectOne"></div><div class="object" id="objectTwo" style="left:20px;"></div><div class="object" id="objectThree" style="left:40px;"></div><div class="object" id="objectFour" style="left:60px;"></div><div class="object" id="objectFive" style="left:80px;"></div>';$(c).css(e).appendTo("body").children(".object").css(t),$("#objectOne").css(n),$("#objectTwo").css(o),$("#objectThree").css(i),$("#objectFour").css(a),$("#objectFive").css(r)},loading:function(e){"close"==e?(this.hide(),$("#dj-mask-loadingBoxCenter").remove()):this.loadingCss()},closeAll:function(){$("[class^=dj-mask-]").remove(),$("[id^=dj-mask]").remove()},msg:function(e){if(void 0==e||""==e)return!1;var t='<div class="dj-msg-number-'+Math.floor(1e6*Math.random())+'"></div>';$(t).css({overflow:"hidden",background:"rgba(0,0,0,.5)","border-radius":"4px",position:"fixed",top:$(window).height()/2.5+"px",left:$(window).width()/2+"px",padding:"15px",color:"#fff","z-index":"999999",display:"none","max-width":"200px","word-break":"break-all"}).appendTo("body").html(e);var n=$("."+$(t).attr("class"));n.css({"margin-left":"-"+n.width()/2+"px","margin-top":"-"+n.height()/2+"px"}).fadeIn(),setTimeout((function(){$("."+$(t).attr("class")).remove()}),1500)},alertMask:function(){var e='<div id="dj-mask-alert"></div>';$(e).appendTo("body"),alertMaskDomLoaded=$("#dj-mask-alert"),alertMaskDomLoaded.css($.extend(this.maskBackgroundCss(),{"z-index":"200"}))},alert:function(e,t){if(""==e||void 0==e)return!1;this.alertMask(),alertMaskDomLoaded.show();var n='<div class="dj-mask-alert-'+Math.floor(1e6*Math.random())+'"></div>';$(n).css({width:"200px",overflow:"hidden",border:"1px solid #ddd","z-index":"300",background:"#fff","border-radius":"4px",position:"fixed",top:$(window).height()/2.5+"px",left:$(window).width()/2+"px"}).appendTo("body");var o=$("."+$(n).attr("class"));o.css({"margin-left":"-"+o.width()/2+"px","margin-top":"-"+o.height()/2+"px"}).append('<div style="height:30px;border-bottom:1px solid #ddd;line-height:30px;padding-left:10px;font-size:14px;color:#666;background:#fff">提示<span style="float:right;margin-right:10px;cursor:pointer;color:#666;font-size:15px;" class="dj-alert-close">&times;</span></div>').append('<div style="font-size:13px;color:#333;padding:10px;overflow:hidden;word-break:break-all" class="dj-alert-content"></div>').append('<a style="display:block;width:50px;height:25px;line-height:25px;text-align:center;border-radius:4px;background:#428bca;color:#fff;cursor:pointer;float:right;margin:5px;padding:0" class="dj-alert-ok">确定</a>'),this.common.closeCssAnimate(),$(".dj-alert-content").html(e),$(".dj-alert-close").click((function(){o.remove(),alertMaskDomLoaded.remove()})),$(".dj-alert-ok").click((function(){t&&t(),o.remove(),alertMaskDomLoaded.remove()}))},openMask:function(){var e='<div id="dj-mask-open"></div>';$(e).appendTo("body"),openMaskDomLoaded=$("#dj-mask-open"),openMaskDomLoaded.css($.extend(this.maskBackgroundCss(),{"z-index":"150"}))},open:function(e,t){var n={width:"400px",height:"300px",title:"提示",content:"<div>loading.......</div>"},o=$.extend(n,e);this.openMask(),openMaskDomLoaded.show();var i='<div class="dj-mask-content-'+Math.floor(1e6*Math.random())+'"></div>';$(i).css({width:o.width,height:o.height,overflow:"hidden",border:"1px solid #ddd","z-index":"150",background:"#fff","border-radius":"4px",position:"fixed",top:$(window).height()/2.5+"px",left:$(window).width()/2+"px"}).appendTo("body");var a=$("."+$(i).attr("class"));a.css({"margin-left":"-"+a.width()/2+"px","margin-top":"-"+a.height()/2+"px"}).append('<div style="height:30px;border-bottom:1px solid #ddd;line-height:30px;padding-left:10px;font-size:14px;color:#666;background:#fff">'+o.title+'<span style="float:right;margin-right:10px;cursor:pointer;color:#666;font-size:15px;" class="dj-content-close">&times;</span></div>').append('<div style="font-size:13px;color:#333;padding:10px;overflow:hidden;word-break:break-all" class="dj-content-content"></div>'),this.common.closeCssAnimate(),$(".dj-content-content").html(o.content),$(".dj-content-close").click((function(){t&&t(),a.remove(),openMaskDomLoaded.remove()}))},doAjaxMthod:function(){var e={},t=e.ajaxStart_default=function(){DJMask.loading()},n=e.ajaxStop_default=function(){DJMask.loading("close")};$(document).ajaxStart(t),$(document).ajaxStop(n)}()}},"3a10":function(e,t,n){},"56d7":function(e,t,n){"use strict";n.r(t);n("cadf"),n("551c"),n("f751"),n("097d");var o=n("2b0e"),i=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[n("router-view")],1)},a=[],r=n("2877"),c={},d=Object(r["a"])(c,i,a,!1,null,null,null),s=d.exports,l=n("8c4f"),u=[{path:"/login",name:"login",meta:{title:"登录"},component:function(){return n.e("chunk-9a977568").then(n.bind(null,"dd7b"))}},{path:"/reg",name:"reg",meta:{title:"注册"},component:function(){return n.e("chunk-bb104d42").then(n.bind(null,"4649"))}},{path:"/resetpwd",name:"reg",meta:{title:"找回密码"},component:function(){return n.e("chunk-2100a9e1").then(n.bind(null,"0662"))}},{path:"/",name:"index",meta:{title:"首页"},component:function(){return n.e("chunk-66b04f48").then(n.bind(null,"1e4b"))}},{path:"/category",name:"category",meta:{title:"分类商品"},component:function(){return n.e("chunk-48c13b3f").then(n.bind(null,"8fce"))}},{path:"/detail",name:"detail",meta:{title:"商品详情"},component:function(){return n.e("chunk-55219c35").then(n.bind(null,"1000"))}},{path:"/cart",name:"cart",meta:{title:"购物车"},component:function(){return n.e("chunk-0e9a3c88").then(n.bind(null,"da83"))}},{path:"/order",name:"order",meta:{title:"订单确认"},component:function(){return n.e("chunk-2c8c0946").then(n.bind(null,"dbf5"))}},{path:"/pay",name:"pay",meta:{title:"订单确认"},component:function(){return n.e("chunk-1ac99f53").then(n.bind(null,"76e0"))}},{path:"/mine/center",name:"mine-center",meta:{title:"个人中心"},component:function(){return n.e("chunk-417c4b16").then(n.bind(null,"fbf1"))}},{path:"/mine/set",name:"mine-set",meta:{title:"个人资料"},component:function(){return n.e("chunk-76f2c2f7").then(n.bind(null,"751d"))}},{path:"/mine/order",name:"mine-order",meta:{title:"我的订单"},component:function(){return n.e("chunk-06a7a0f5").then(n.bind(null,"9fc3"))}},{path:"/mine/orderdetail",name:"mine-orderdetail",meta:{title:"我的订单"},component:function(){return n.e("chunk-02720070").then(n.bind(null,"3383"))}},{path:"/mine/address",name:"mine-address",meta:{title:"收货地址"},component:function(){return n.e("chunk-6a58eb2c").then(n.bind(null,"68a5"))}},{path:"/mine/coupon",name:"mine-coupon",meta:{title:"优惠券"},component:function(){return n.e("chunk-0fc94a2b").then(n.bind(null,"9d9e"))}},{path:"/mine/pwdmodify",name:"mine-pwdmodify",meta:{title:"修改登录密码"},component:function(){return n.e("chunk-b9cdaa38").then(n.bind(null,"d24d"))}},{path:"/mine/modifystep1",name:"mine-modifystep1",meta:{title:"修改登录密码"},component:function(){return n.e("chunk-837d62b6").then(n.bind(null,"91cf"))}},{path:"/mine/modifystep2",name:"mine-modifystep2",meta:{title:"修改登录密码"},component:function(){return n.e("chunk-3b4d0a44").then(n.bind(null,"4c05"))}},{path:"/mine/modifystep3",name:"mine-modifystep3",meta:{title:"修改登录密码"},component:function(){return n.e("chunk-a1377806").then(n.bind(null,"320d"))}},{path:"/mine/collection",name:"mine-collection",meta:{title:"我的收藏"},component:function(){return n.e("chunk-7dcedf42").then(n.bind(null,"d377"))}},{path:"/mine/refund",name:"mine-refund",meta:{title:"退货/退款"},component:function(){return n.e("chunk-40e534e7").then(n.bind(null,"e58c"))}},{path:"/mine/query",name:"mine-query",meta:{title:"物流查询"},component:function(){return n.e("chunk-b828a62e").then(n.bind(null,"7341"))}}];o["default"].use(l["a"]);var f=new l["a"]({mode:"hash",routes:u});f.beforeEach((function(e,t,n){if(console.log("路由执行前"),e.meta.title&&(document.title=e.meta.title),console.log(e.meta),"login"===e.meta.auth){var o=localStorage.getItem("token");console.log("这里是token:"+o),void 0!==o&&""!==o&&null!=o||(localStorage.setItem("loginUrl",e.fullPath),n({path:"/login"}))}n()})),f.afterEach((function(e,t){console.log("路由执行后")}));var p=f,h=n("e069"),m=n.n(h),b=n("2f62");o["default"].use(b["a"]);var g=new b["a"].Store({state:{},mutations:{},actions:{}}),k=(n("a481"),n("bc3a")),v=n.n(k);v.a.defaults.timeout=1e4,v.a.interceptors.request.use((function(e){var t=localStorage.getItem("token");return t&&(e.headers["Token"]=t),e}),(function(e){return Promise.reject(e)})),v.a.interceptors.response.use((function(e){switch(console.log(e),e.data.code){case"401":localStorage.setItem("loginUrl",p.currentRoute.fullPath),p.replace({path:"/login"});break;default:return e}}),(function(e){console.log(e)}));var w=n("1157"),x=n.n(w);window.$=x.a,window.jQuery=x.a;x.a,n("456d"),n("ac6a");n("3e48"),n("bec5");var y=n("7618");n("c5f6"),n("7cdf"),n("7514"),n("386d"),n("4917"),n("3b2b");(function(e){e.browser=function(){var e=/(webkit)\/([\w.]+)/,t=/(opera)(?:.*version)?[ \/]([\w.]+)/,n=/(msie) ([\w.]+)/,o=/(mozilla)(?:.*? rv:([\w.]+))?/,i={},a=function(i){var a=e.exec(i)||t.exec(i)||n.exec(i)||i.indexOf("compatible")<0&&o.exec(i)||[];return{browser:a[1]||"",version:a[2]||"0"}}(window.navigator.userAgent.toLowerCase());return a.browser&&(i[a.browser]=!0,i.version=a.version,i.language=(window.navigator.browserLanguage||window.navigator.language).toLowerCase()),i}(),e.extend({getUrlParam:function(e){var t=new RegExp("(^|&)"+e+"=([^&]*)(&|$)"),n=window.location.search.substr(1).match(t);return null!=n?decodeURI(n[2]):null},scrollFloor:function(t){var n=e(document.body),o=[],i={floorClass:".scroll-floor",navClass:".scroll-nav",activeClass:"active",activeTop:200,scrollTop:0,delayTime:500};function a(e,t){e.each((function(){var e={};e.$obj=n.find(this),e.$activeTop=n.find(this).offset().top-t.activeTop,e.$scrollTop=n.find(this).offset().top+t.scrollTop,o.push(e)}))}function r(t,n){var i=e(window).scrollTop();e.each(o,(function(e,o){i>o.$activeTop&&t.removeClass(n.activeClass).eq(e).addClass(n.activeClass)}))}var c=e.extend({},i,t),d=n.find(c.floorClass),s=n.find(c.navClass);a(d,c),r(s,c),e(window).bind("scroll",(function(){r(s,c)})),s.bind("click",(function(){var t=n.find(this).index();e("html,body").animate({scrollTop:o[t].$scrollTop},c.delayTime)}))}}),e.fn.extend({onlyReg:function(t){var n=t&&t.reg?t.reg:/[^0-9.]/g;e(this).bind("input propertychange",(function(){e(this).val(e(this).val().replace(n,""))}))},txtaAutoHeight:function(){return this.each((function(){var n=e(this);n.attr("initAttrH")||n.attr("initAttrH",n.outerHeight()),t(this).on("input",(function(){t(this)}))}));function t(t){var n=e(t);return n.css({height:n.attr("initAttrH"),"overflow-y":"hidden"}).height(t.scrollHeight)}},smartFloat:function(t){t=Number.isInteger(t)?t:250;var n=function(n){var o=n.offset().top,i=n.css("position");e(window).scroll((function(){var a=e(this).scrollTop();a+t>o?window.XMLHttpRequest?n.css({position:"fixed",top:t}):n.css({top:a}):n.css({position:i,top:o})}))};return e(this).each((function(){n(e(this))}))},toTop:function(t){var n=this,o=e(window),i=e("html, body"),a=e.extend({autohide:!0,offset:450,speed:500,position:!0,right:0,bottom:52},t);n.css({cursor:"pointer"}),a.autohide&&n.css("display","none"),a.position&&n.css({position:"fixed",right:a.right,bottom:a.bottom}),n.click((function(){i.animate({scrollTop:0},a.speed)})),o.scroll((function(){var e=o.scrollTop();a.autohide&&(e>a.offset?n.fadeIn(a.speed):n.fadeOut(a.speed))}))}})})(jQuery),String.prototype.format=function(e){if(arguments.length>0){var t=this;if(1==arguments.length&&"object"==Object(y["a"])(e))for(var n in e){var o=new RegExp("({"+n+"})","g");t=t.replace(o,e[n])}else for(var i=0;i<arguments.length;i++){if(void 0==arguments[i])return"";o=new RegExp("({["+i+"]})","g");t=t.replace(o,arguments[i])}return t}return this};n("3824"),n("3a10"),n("aede"),n("df25"),n("455b"),n("7b9e"),n("034b"),n("dcad"),n("5b36");o["default"].use(m.a,{transfer:!0,size:"large"}),m.a.Notice.config({top:50,duration:3}),o["default"].config.productionTip=!1,new o["default"]({router:p,store:g,render:function(e){return e(s)}}).$mount("#app")},"7b9e":function(e,t,n){},aede:function(e,t,n){},bec5:function(e,t,n){"use strict";(function(e){n("4917"),n("6b54"),n("28a5"),n("a481"),n("7514"),n("7618"),n("ac6a")}).call(this,n("dd40")(e))},df25:function(e,t,n){}});
//# sourceMappingURL=app.1e79e154.js.map