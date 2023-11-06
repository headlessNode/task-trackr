(()=>{"use strict";var e={74:(e,n,t)=>{t.d(n,{Z:()=>d});var r=t(81),o=t.n(r),i=t(645),a=t.n(i)()(o());a.push([e.id,'.task-dialog{\n    top: 50%;\n    margin: 0 auto 0 auto;\n    width: 350px;\n    display: none;\n    opacity: 0;\n    border: none;\n    border-radius: 10px;\n    padding: 1rem;\n    background: var(--dialog-background);\n    transition: opacity 1s ease, top 0.3s ease;\n}\n\n.task-dialog .dialog-form{\n    display: grid;\n    justify-items: center;\n    align-items: center;\n    gap: 20px;\n}\n\n.task-dialog input[type="text"], .task-dialog input[type="date"], .task-dialog fieldset {\n    width: 80%;\n}\n\n.task-dialog input[type="text"], .task-dialog input[type="date"]{\n\n}\n\n.task-dialog fieldset{\n    display: grid;\n    gap: 10px;\n    padding: 10px;\n}\n\n.task-dialog fieldset div{\n    margin-left: 10px;\n    display: flex;\n    gap: 5px;\n}\n\n.task-dialog button{\n    border: 1px solid var(--dark-accent);\n    padding: 10px;\n    width: 40%;\n    background: none;\n}\n\n.task-dialog button:hover{\n    background: rgb(var(--orange-accent));\n    color: var(--dialog-background);\n    border: 1px solid var(--dialog-background);\n}',""]);const d=a},348:(e,n,t)=>{t.d(n,{Z:()=>d});var r=t(81),o=t.n(r),i=t(645),a=t.n(i)()(o());a.push([e.id,"\n.footer{\n    grid-column: 1/3;\n    grid-row: 3/4;\n    width: 100%;\n    bottom: 0;\n    position: sticky;\n    /* background: linear-gradient(to bottom, rgba(247, 244, 243, 0) 0%, rgba(247, 244, 243, 0) 50%, rgba(248, 67, 18, 1) 50%, rgba(248, 67, 18, 1) 100%); */\n    background: linear-gradient(to bottom, rgba(var(--main-color), 0) 0%, rgba(var(--main-color), 0) 50%, rgba(var(--orange-accent), 1) 50%, rgba(var(--orange-accent), 1) 100%);\n    display: grid;\n    grid-template-columns: 1fr 8fr;\n    grid-template-rows: 1fr 1fr;\n    justify-items: center;\n    /* border: 1px solid; */\n}\n\n.footer .add-task-btn{\n    background: rgb(var(--orange-accent));\n    cursor: pointer;\n    grid-row: 1/3;\n    grid-column: 1/3;\n    width: 5.5rem;\n    height: 5.5rem;\n    border-radius: 50%;\n    align-self: center;\n    border: 8px solid rgb(var(--main-color));\n    transition: background 0.3s ease-in;\n}\n\n.footer .add-task-btn:hover{\n    background-color: var(--footer-hover);\n}\n\n.footer .menu-btn{\n    grid-column: 1/2;\n    grid-row: 2/3;\n    cursor: pointer;\n    background: none;\n    border: none;\n    outline: none;\n    width: 50%;\n    transition: background 0.3s ease-in;\n}\n@media screen and (max-width: 1024px) {\n    .footer{\n        height: 100%;\n        min-height: 6rem;\n    }\n    .footer .add-task-btn{\n        height: 5.5rem;\n        width: 5.5rem;\n    }\n  }\n  ",""]);const d=a},497:(e,n,t)=>{t.d(n,{Z:()=>d});var r=t(81),o=t.n(r),i=t(645),a=t.n(i)()(o());a.push([e.id,".header-container{\n    grid-column: 1/3;\n    display: flex;\n    justify-content: center;\n    padding-top: 2rem;\n}\n.header{\n    width: 230px;\n    height: 100%;\n    justify-self: center;\n    display: flex;\n    justify-content: space-around;\n    align-items: center;\n}",""]);const d=a},20:(e,n,t)=>{t.d(n,{Z:()=>d});var r=t(81),o=t.n(r),i=t(645),a=t.n(i)()(o());a.push([e.id,".sidebar{\n    display: none;\n    width: 0;\n    transition: all 0.3s ease;\n    padding-top: 50px;\n    border-right: 1px solid var(--main-border);\n    border-top: 1px solid var(--main-border);\n    border-top-right-radius: 10px;\n    box-shadow: 2px 0 5px rgba(0, 0, 0, 0.2);\n    background: var(--sidebar-color);\n    color: var(--dark-accent);\n    grid-template-rows: repeat(4,50px) 5fr;\n    justify-items: center;\n    gap: 20px;\n}\n\n.inbox{\n    grid-row: 2/3;\n}\n.today{\n    grid-row: 3/4;\n}\n.upcoming{\n    grid-row: 4/5;\n}\n\n.title{\n    opacity: 0;\n    transition: all 1s ease;\n    width: 90%;\n    height: 100%;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    gap: 20px;\n}\n\n.sidebar .inbox, .sidebar .today, .sidebar .upcoming{\n    opacity: 0;\n    transition: all 1s ease;\n    cursor: pointer;\n    display: grid;\n    grid-template-columns: 1fr 2fr 1fr;\n    align-items: center;\n    justify-items: start;\n    gap: 1rem;\n    padding-left: 20px;\n    width: 90%;\n    height: 50px;\n    background: none;\n    border-radius: 10px;\n    border: none;\n}\n\n.sidebar button:hover{\n    background: rgb(var(--main-color));\n}\n\n.projects{\n    opacity: 0;\n    transition: all 1s ease;\n    grid-row: 5/6;\n    width: 90%;\n    display: grid;\n    align-items: center;\n    justify-items: center;\n    grid-template-rows: repeat(auto-fit, 50px);\n    gap: 1rem;\n}\n.projects-header{\n    opacity: 0;\n    transition: all 1s ease;\n    width: 100%;\n    display:grid;\n    grid-template-columns: 1fr 5fr 1fr;\n}\n\n.projects-header .add-projects{\n    opacity: 0;\n    transition: all 1s ease;\n    grid-column: 3/4;\n    width: 2rem;\n    height: 2rem;\n    border: none;\n    background: none;\n    border-radius: 50%;\n}\n\n@media screen and (max-width: 651px) {\n    .sidebar{\n        width: 0%;\n        height: 0;\n        display: hidden;\n        border-right: initial;\n        border-top: initial;\n        border-top-right-radius: initial;\n        box-shadow: initial;\n        padding-top: 1rem;\n        grid-template-rows: 0.5fr repeat(3,3rem) 5fr;\n    }\n    .title{\n        height: 3rem;\n    }\n    .sidebar .inbox, .sidebar .today, .sidebar .upcoming{\n        grid-template-columns: 0.2fr 2fr 0.4fr;\n    }\n}",""]);const d=a},890:(e,n,t)=>{t.d(n,{Z:()=>u});var r=t(81),o=t.n(r),i=t(645),a=t.n(i),d=t(348),s=t(20),l=t(497),c=t(74),p=a()(o());p.i(d.Z),p.i(s.Z),p.i(l.Z),p.i(c.Z),p.push([e.id,":root{\n    --main-color: 247, 244, 243;\n    --orange-accent: 248, 67, 18;\n    --plat-accent: #DCE3E4;\n    --rose-accent: #EED3D7;\n    --dark-accent: #090A0B;\n    --footer-hover: #F96339;\n    --sidebar-color: #EFE8E6;\n    --dialog-background: #F7F4F3;\n    --main-border: #ccc;\n    --main-body-height: 40rem;\n}\n\n*{\n    margin: 0;\n    padding: 0;\n    box-sizing: border-box;\n    font-family: 'Josefin Sans', sans-serif;\n}\n.content{\n    /* border: 1px solid black; */\n    background: rgb(var(--main-color));\n    width: 100%;\n    height: auto;\n    min-height: 100vh;\n    display: grid;\n    grid-template-columns: minmax(200px, 0.8fr) 5fr;\n    grid-template-rows: auto auto 120px;\n}\n\n.main-body{\n    grid-row: 2/3;\n    grid-column: 1/3;\n    min-height: var(--main-body-height);\n    height: auto !important;\n    width: 100%;\n    border: 1px solid black;\n    display: grid;\n    grid-template-columns: repeat(2, 50px) auto;\n    grid-template-rows: max(50px) 8fr;\n    padding: 0 1rem 0 1rem;\n}\n\n.main-body h2{\n    grid-row: 1/2;\n    grid-column: 1/3;\n    padding-top: 10px;\n    text-align: center;\n    border: 1px solid;\n}\n\n.main-body-content{\n    grid-row: 2/3;\n    grid-column: 2/4;\n    border: 1px solid;\n    padding: 0 1rem 0 1rem;\n    display: grid;\n    grid-template-rows: repeat(6, 100px);\n}\n\n.task-container{\n    display: grid;\n    grid-template-columns: 20px 3fr 1fr 1fr;\n    height: 100px;\n    align-items: center;\n}\n\n@media screen and (max-width: 370px) {\n    .main-body-content{\n        grid-column: 1/4;\n    }\n}\n\n@media screen and (max-width: 651px) {\n    .main-body{\n        padding: 0;\n    }\n}",""]);const u=p},645:e=>{e.exports=function(e){var n=[];return n.toString=function(){return this.map((function(n){var t="",r=void 0!==n[5];return n[4]&&(t+="@supports (".concat(n[4],") {")),n[2]&&(t+="@media ".concat(n[2]," {")),r&&(t+="@layer".concat(n[5].length>0?" ".concat(n[5]):""," {")),t+=e(n),r&&(t+="}"),n[2]&&(t+="}"),n[4]&&(t+="}"),t})).join("")},n.i=function(e,t,r,o,i){"string"==typeof e&&(e=[[null,e,void 0]]);var a={};if(r)for(var d=0;d<this.length;d++){var s=this[d][0];null!=s&&(a[s]=!0)}for(var l=0;l<e.length;l++){var c=[].concat(e[l]);r&&a[c[0]]||(void 0!==i&&(void 0===c[5]||(c[1]="@layer".concat(c[5].length>0?" ".concat(c[5]):""," {").concat(c[1],"}")),c[5]=i),t&&(c[2]?(c[1]="@media ".concat(c[2]," {").concat(c[1],"}"),c[2]=t):c[2]=t),o&&(c[4]?(c[1]="@supports (".concat(c[4],") {").concat(c[1],"}"),c[4]=o):c[4]="".concat(o)),n.push(c))}},n}},81:e=>{e.exports=function(e){return e[1]}},379:e=>{var n=[];function t(e){for(var t=-1,r=0;r<n.length;r++)if(n[r].identifier===e){t=r;break}return t}function r(e,r){for(var i={},a=[],d=0;d<e.length;d++){var s=e[d],l=r.base?s[0]+r.base:s[0],c=i[l]||0,p="".concat(l," ").concat(c);i[l]=c+1;var u=t(p),m={css:s[1],media:s[2],sourceMap:s[3],supports:s[4],layer:s[5]};if(-1!==u)n[u].references++,n[u].updater(m);else{var y=o(m,r);r.byIndex=d,n.splice(d,0,{identifier:p,updater:y,references:1})}a.push(p)}return a}function o(e,n){var t=n.domAPI(n);return t.update(e),function(n){if(n){if(n.css===e.css&&n.media===e.media&&n.sourceMap===e.sourceMap&&n.supports===e.supports&&n.layer===e.layer)return;t.update(e=n)}else t.remove()}}e.exports=function(e,o){var i=r(e=e||[],o=o||{});return function(e){e=e||[];for(var a=0;a<i.length;a++){var d=t(i[a]);n[d].references--}for(var s=r(e,o),l=0;l<i.length;l++){var c=t(i[l]);0===n[c].references&&(n[c].updater(),n.splice(c,1))}i=s}}},569:e=>{var n={};e.exports=function(e,t){var r=function(e){if(void 0===n[e]){var t=document.querySelector(e);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(e){t=null}n[e]=t}return n[e]}(e);if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(t)}},216:e=>{e.exports=function(e){var n=document.createElement("style");return e.setAttributes(n,e.attributes),e.insert(n,e.options),n}},565:(e,n,t)=>{e.exports=function(e){var n=t.nc;n&&e.setAttribute("nonce",n)}},795:e=>{e.exports=function(e){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var n=e.insertStyleElement(e);return{update:function(t){!function(e,n,t){var r="";t.supports&&(r+="@supports (".concat(t.supports,") {")),t.media&&(r+="@media ".concat(t.media," {"));var o=void 0!==t.layer;o&&(r+="@layer".concat(t.layer.length>0?" ".concat(t.layer):""," {")),r+=t.css,o&&(r+="}"),t.media&&(r+="}"),t.supports&&(r+="}");var i=t.sourceMap;i&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(i))))," */")),n.styleTagTransform(r,e,n.options)}(n,e,t)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(n)}}}},589:e=>{e.exports=function(e,n){if(n.styleSheet)n.styleSheet.cssText=e;else{for(;n.firstChild;)n.removeChild(n.firstChild);n.appendChild(document.createTextNode(e))}}}},n={};function t(r){var o=n[r];if(void 0!==o)return o.exports;var i=n[r]={id:r,exports:{}};return e[r](i,i.exports,t),i.exports}t.n=e=>{var n=e&&e.__esModule?()=>e.default:()=>e;return t.d(n,{a:n}),n},t.d=(e,n)=>{for(var r in n)t.o(n,r)&&!t.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:n[r]})},t.o=(e,n)=>Object.prototype.hasOwnProperty.call(e,n),t.nc=void 0,(()=>{var e=t(379),n=t.n(e),r=t(795),o=t.n(r),i=t(569),a=t.n(i),d=t(565),s=t.n(d),l=t(216),c=t.n(l),p=t(589),u=t.n(p),m=t(890),y={};function g(e){document.querySelector(".content").appendChild(e)}y.styleTagTransform=u(),y.setAttributes=s(),y.insert=a().bind(null,"head"),y.domAPI=o(),y.insertStyleElement=c(),n()(m.Z,y),m.Z&&m.Z.locals&&m.Z.locals;class h{constructor(e,n,t,r){this.title=e,this.description=n,this.dueDate=t,this.priority=r}}function f(){const e=document.querySelector(".sidebar"),n=document.querySelector(".main-body"),t=document.querySelector(".header-container"),r=document.querySelector(".footer"),o=document.querySelector(".title"),i=document.querySelector(".inbox"),a=document.querySelector(".today"),d=document.querySelector(".upcoming"),s=document.querySelector(".projects"),l=document.querySelector(".add-projects"),c=document.querySelector(".projects-header");"none"===e.style.display||""===e.style.display?window.innerWidth<=651?(e.style.display="grid",e.style.gridColumn="1/3",e.style.gridRow="1/2",n.style.gridColumn="1/3",t.style.display="none",r.style.gridColumn="1/3",window.scrollTo({top:0,behavior:"smooth"}),e.style.height="100%",e.style.width="100%",o.style.opacity="1",i.style.opacity="1",a.style.opacity="1",d.style.opacity="1",s.style.opacity="1",l.style.opacity="1",c.style.opacity="1"):(e.style.display="grid",e.style.gridColumn="1/2",e.style.gridRow="1/4",n.style.gridColumn="2/3",t.style.gridColumn="2/3",r.style.gridColumn="2/3",window.scrollTo({top:0,behavior:"smooth"}),e.style.width="100%",e.style.height="100%",o.style.opacity="1",i.style.opacity="1",a.style.opacity="1",d.style.opacity="1",s.style.opacity="1",l.style.opacity="1",c.style.opacity="1"):(e.style.display="none",n.style.gridColumn="1/3",t.style.display="grid",t.style.gridColumn="1/3",t.style.gridRow="1/2",r.style.gridColumn="1/3",window.scrollTo({top:0,behavior:"smooth"}),e.style.width="0",o.style.opacity="0",i.style.opacity="0",a.style.opacity="0",d.style.opacity="0",s.style.opacity="0",l.style.opacity="0",c.style.opacity="0",window.innerWidth<=651&&(e.style.height="0"))}const b=()=>{const e=document.querySelector(".sidebar"),n=document.querySelector(".main-body"),t=document.querySelector(".header-container"),r=document.querySelector(".footer");window.innerWidth,window.innerWidth<=651&&"grid"===e.style.display?(e.style.gridColumn="1/3",e.style.gridRow="1/2",n.style.gridColumn="1/3",t.style.display="none",t.style.gridColumn="1/3",r.style.gridColumn="1/3"):window.innerWidth>651&&"grid"===e.style.display&&(e.style.gridColumn="1/2",e.style.gridRow="1/4",n.style.gridColumn="2/3",t.style.display="grid",t.style.gridColumn="2/3",t.style.gridRow="1/2",r.style.gridColumn="2/3")};function v(e){const n=document.querySelector(".task-dialog");e.preventDefault();const t=new FormData(e.target),r={};for(const[e,n]of t.entries())r[e]=n;n.close(),n.style.top="50%",n.style.opacity="0",n.style.display="none",function(e){var n;n=new h(e.title,e.description,e.dueDate,e.priority),console.log(n),function(e){const n=document.querySelector(".main-body-content"),t=document.createElement("div");t.classList.add("task-container");const r=document.createElement("input");r.setAttribute("type","checkbox"),r.setAttribute("id","task-checkbox"),t.appendChild(r);const o=document.createElement("p");o.classList.add("task-title"),o.textContent=e.title,t.appendChild(o);const i=document.createElement("p");i.classList.add("task-priority"),i.textContent=e.priority,t.appendChild(i);const a=document.createElement("p");a.classList.add("task-duedate"),a.textContent=e.dueDate,t.appendChild(a),n.appendChild(t)}(n)}(r)}function x(e){e.preventDefault();const n=document.querySelector(".task-dialog");"grid"===n.style.display&&"Escape"===e.key&&(n.close(),n.style.top="50%",n.style.opacity="0",n.style.display="none")}function w(){console.log("addTaskBtn clicked"),function(){const e=document.querySelector(".task-dialog");e.style.display="grid",e.showModal(),e.style.top="30%",e.style.opacity="1"}()}const k=function(){const e=document.createElement("div");e.classList.add("header-container");const n=document.createElement("div");return n.classList.add("header"),n.innerHTML='<i class="icon fa-solid fa-rotate-90 fa-clipboard-list fa-2xl" style="color: #090a0b;"></i><h1>Task Trackr</h1>',e.appendChild(n),e}(),C=function(){const e=document.createElement("div");e.classList.add("main-body");const n=document.createElement("h2");n.textContent="Header";const t=document.createElement("div");return t.classList.add("main-body-content"),e.appendChild(n),e.appendChild(t),e}(),E=function(){const e=document.createElement("div");e.classList.add("sidebar");const n=document.createElement("div");n.classList.add("title"),n.innerHTML='<i class="icon fa-solid fa-rotate-90 fa-clipboard-list fa-xl" style="color: #090a0b;"></i><h2>Task Trackr</h2>',e.appendChild(n);const t=document.createElement("button");t.classList.add("inbox"),t.innerHTML='<i class="fa-solid fa-inbox fa-lg" style="color: #5089ED;"></i><p>Inbox</p>',e.appendChild(t);const r=document.createElement("button");r.classList.add("today"),r.innerHTML='<i class="fa-solid fa-calendar-day fa-lg" style="color: #37A056;"></i><p>Today</p>',e.appendChild(r);const o=document.createElement("button");o.classList.add("upcoming"),o.innerHTML='<i class="fa-solid fa-calendar-week fa-lg" style="color: #A366FF;"></i><p>Upcoming</p>',e.appendChild(o);const i=document.createElement("div");i.classList.add("projects");const a=document.createElement("div");a.classList.add("projects-header"),a.innerHTML="<h2>Projects</h2>",i.appendChild(a);const d=document.createElement("button");return d.classList.add("add-projects"),d.innerHTML='<i class="fa-solid fa-plus fa-lg" style="color: #000000;"></i>',a.appendChild(d),e.appendChild(i),e}(),L=function(){const e=document.createElement("div");e.classList.add("footer");const n=document.createElement("button");n.classList.add("menu-btn"),n.innerHTML='<i class="fa-solid fa-bars fa-xl" style="color: #dce3e4;"></i>';const t=document.createElement("button");return t.classList.add("add-task-btn"),t.innerHTML='<i class="fa-solid fa-plus fa-lg" style="color: #dce3e4;"></i>',e.appendChild(t),e.appendChild(n),e}(),S=function(){const e=document.createElement("dialog");e.classList.add("task-dialog");const n=document.createElement("form");n.classList.add("dialog-form");const t=document.createElement("input");t.setAttribute("name","title"),t.setAttribute("type","text"),t.setAttribute("placeholder","Title"),t.setAttribute("required","true");const r=document.createElement("input");r.setAttribute("type","text"),r.setAttribute("name","description"),r.setAttribute("placeholder","Description"),r.setAttribute("required","true");const o=document.createElement("input");o.setAttribute("type","date"),o.setAttribute("name","dueDate"),o.setAttribute("required","true");const i=document.createElement("fieldset"),a=document.createElement("legend");a.textContent="Select task priority:",i.appendChild(a);const d=document.createElement("div");d.classList.add("high-priority"),d.innerHTML='<input type="radio" id="high" name="priority" value="high" checked /><label for="high">High</label>',i.appendChild(d);const s=document.createElement("div");s.classList.add("medium-priority"),s.innerHTML='<input type="radio" id="medium" name="priority" value="medium" /><label for="medium">Medium</label>',i.appendChild(s);const l=document.createElement("div");l.classList.add("low-priority"),l.innerHTML='<input type="radio" id="low" name="priority" value="low" /><label for="low">Low</label>',i.appendChild(l);const c=document.createElement("button");return c.classList.add("submit-btn"),c.setAttribute("type","submit"),c.textContent="Submit",n.appendChild(t),n.appendChild(r),n.appendChild(o),n.appendChild(i),n.appendChild(c),e.appendChild(n),e}();g(k),g(C),g(E),g(L),g(S),document.querySelector(".menu-btn").addEventListener("click",f),window.addEventListener("resize",b),document.querySelector(".add-task-btn").addEventListener("click",w),document.querySelector(".dialog-form").addEventListener("submit",v),document.addEventListener("keydown",x)})()})();