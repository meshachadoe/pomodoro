(this.webpackJsonppomodoro=this.webpackJsonppomodoro||[]).push([[0],{116:function(e,a,t){e.exports=t.p+"static/media/bith.55bb85a4.png"},117:function(e,a,t){e.exports=t.p+"static/media/yoda.39f95198.png"},123:function(e,a,t){e.exports=t(415)},128:function(e,a,t){},129:function(e,a,t){},411:function(e,a,t){},412:function(e,a,t){var n={"./bith.png":116,"./yoda.png":117};function r(e){var a=c(e);return t(a)}function c(e){if(!t.o(n,e)){var a=new Error("Cannot find module '"+e+"'");throw a.code="MODULE_NOT_FOUND",a}return n[e]}r.keys=function(){return Object.keys(n)},r.resolve=c,e.exports=r,r.id=412},413:function(e,a,t){},414:function(e,a,t){},415:function(e,a,t){"use strict";t.r(a);var n=t(1),r=t.n(n),c=t(118),o=t.n(c),l=(t(128),t(18)),s=t(3);t(129);var m=function(){return r.a.createElement("div",{className:"landing"},r.a.createElement("h1",null,"Welcome to Mos Eisley Cantina"),r.a.createElement("h2",null,"welcome to mos eisley cantina"),r.a.createElement(l.b,{to:"/dashboard"},r.a.createElement("button",null,"enter cantina")))},i=t(47);t(134),t(411);var u=function(e){var a=Object(n.useState)(parseInt(e.duration)),c=Object(i.a)(a,2),o=c[0],s=c[1],m=Object(n.useState)({minutes:0,seconds:0}),u=Object(i.a)(m,2),d=u[0],E=u[1],b=Object(n.useState)(0),h=Object(i.a)(b,2),p=h[0],f=h[1],v={backgroundColor:"".concat(e.color)};function g(){s((function(e){return e-1}))}return Object(n.useEffect)((function(){0===p&&o>0&&f(setInterval(g,1e3))}),[p]),Object(n.useEffect)((function(){0===o&&clearInterval(p);var e=Math.floor(o/60);E({minutes:e,seconds:o%60})}),[o]),r.a.createElement("div",{style:v,className:"countdown"},r.a.createElement(l.b,{to:"/dashboard"},"study"===e.mode?r.a.createElement("button",{className:"nav-button"},"leave yoda"):r.a.createElement("button",{className:"nav-button"},"leave bar")),r.a.createElement("div",{className:"countdown__timer"},r.a.createElement("img",{src:t(412)("./"+e.image),alt:"Star Wars Character"}),r.a.createElement("div",null,"study"===e.mode?r.a.createElement("h2",null,"remaining ",r.a.createElement("br",null)," time to focus"):r.a.createElement("h2",null,"time for ",r.a.createElement("br",null)," a break"),d.seconds>=10?r.a.createElement("h3",null,d.minutes,":",d.seconds):r.a.createElement("h3",null,d.minutes,":0",d.seconds))),r.a.createElement("footer",null,r.a.createElement("p",null,"characters owned by Star Wars.",r.a.createElement("br",null),"i do not own any of the characters."),r.a.createElement("button",{className:"display-toggle"},"dark mode",r.a.createElement("label",{className:"switch"},r.a.createElement("input",{type:"checkbox"}),r.a.createElement("span",{className:"slider round"})))))};t(413);var d=function(){return r.a.createElement("div",{className:"dashboard"},r.a.createElement(l.b,{to:"/"},r.a.createElement("button",{className:"nav-button"},"leave cantina")),r.a.createElement("div",{className:"dashboard__component__wrapper"},r.a.createElement("div",{className:"dashboard__component aqua"},r.a.createElement(l.b,{to:"/study"},r.a.createElement("img",{src:t(117),alt:"Star Wars Character"})),r.a.createElement("h2",null,"focus with yoda")),r.a.createElement("div",{className:"dashboard__component orange"},r.a.createElement(l.b,{to:"/break"},r.a.createElement("img",{src:t(116),alt:"Star Wars Character"})),r.a.createElement("h2",null,"chill at the bar"))),r.a.createElement("footer",null,r.a.createElement("p",null,"characters owned by Star Wars.",r.a.createElement("br",null),"i do not own any of the characters."),r.a.createElement("button",{className:"display-toggle"},"dark mode",r.a.createElement("label",{className:"switch"},r.a.createElement("input",{type:"checkbox"}),r.a.createElement("span",{className:"slider round"})))))};t(414);var E=function(){return r.a.createElement(l.a,{basename:"/pomodoro"},r.a.createElement("div",{className:"App"},r.a.createElement(s.c,null,r.a.createElement(s.a,{path:"/",exact:!0,component:m}),r.a.createElement(s.a,{path:"/dashboard",component:d}),r.a.createElement(s.a,{path:"/study",render:function(e){return r.a.createElement(u,Object.assign({},e,{duration:"1500",color:"#63bfac",mode:"study",image:"yoda.png"}))}}),r.a.createElement(s.a,{path:"/break",render:function(e){return r.a.createElement(u,Object.assign({},e,{duration:"300",color:"#E17E56",mode:"break",image:"bith.png"}))}}))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(E,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[123,1,2]]]);
//# sourceMappingURL=main.89554d7d.chunk.js.map