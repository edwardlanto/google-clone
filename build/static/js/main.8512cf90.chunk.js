(this["webpackJsonpmern-tracker"]=this["webpackJsonpmern-tracker"]||[]).push([[1],{14:function(e,n,t){"use strict";t.d(n,"a",(function(){return c})),t.d(n,"b",(function(){return i}));var r=t(0),a=t.n(r),o=Object(r.createContext)(),c=function(e){var n=e.reducer,t=e.initialState,c=e.children;return a.a.createElement(o.Provider,{value:Object(r.useReducer)(n,t)},c)},i=function(){return Object(r.useContext)(o)}},19:function(e,n,t){e.exports=t(30)},24:function(e,n,t){},30:function(e,n,t){"use strict";t.r(n);var r=t(0),a=t.n(r),o=t(15),c=t.n(o),i=(t(24),t(13)),l=t(1),u=a.a.lazy((function(){return Promise.all([t.e(0),t.e(4)]).then(t.bind(null,101))})),s=a.a.lazy((function(){return Promise.all([t.e(0),t.e(5)]).then(t.bind(null,104))}));var d=function(){return a.a.createElement(i.a,null,a.a.createElement("div",null,a.a.createElement(l.c,null,a.a.createElement(r.Suspense,{fallback:a.a.createElement("div",null)},a.a.createElement(l.a,{exact:!0,path:"/search"},a.a.createElement(s,null)),a.a.createElement(l.a,{exact:!0,path:"/"},a.a.createElement(u,null))))))},f=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function h(e,n){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var t=e.installing;null!=t&&(t.onstatechange=function(){"installed"===t.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://bit.ly/CRA-PWA."),n&&n.onUpdate&&n.onUpdate(e)):(console.log("Content is cached for offline use."),n&&n.onSuccess&&n.onSuccess(e)))})}})).catch((function(e){console.error("Error during service worker registration:",e)}))}var v=t(9),m=t(14);c.a.render(a.a.createElement(a.a.StrictMode,null,a.a.createElement(m.a,{initialState:v.c,reducer:v.b},a.a.createElement(d,null))),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",(function(){var n="".concat("","/service-worker.js");f?(!function(e,n){fetch(e,{headers:{"Service-Worker":"script"}}).then((function(t){var r=t.headers.get("content-type");404===t.status||null!=r&&-1===r.indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):h(e,n)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(n,e),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://bit.ly/CRA-PWA")}))):h(n,e)}))}}()},9:function(e,n,t){"use strict";t.d(n,"c",(function(){return a})),t.d(n,"a",(function(){return o}));var r=t(12),a={term:null},o={SET_SEARCH_TERM:"SET_SEARCH_TERM"};n.b=function(e,n){switch(n.type){case o.SET_SEARCH_TERM:return Object(r.a)(Object(r.a)({},e),{},{term:n.term});default:return e}}}},[[19,2,3]]]);
//# sourceMappingURL=main.8512cf90.chunk.js.map