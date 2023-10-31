(()=>{"use strict";var n={348:(n,e,t)=>{t.d(e,{Z:()=>d});var r=t(81),i=t.n(r),o=t(645),a=t.n(o)()(i());a.push([n.id,"\n.footer{\n    grid-column: 1/3;\n    grid-row: 3/4;\n    width: 100%;\n    height: 100%;\n    background: linear-gradient(to bottom, var(--main-color) 0%, var(--main-color) 50%, var(--orange-accent) 50%, var(--orange-accent) 100%);\n    display: grid;\n    grid-template-columns: 1fr 8fr;\n    grid-template-rows: 1fr 1fr;\n    justify-items: center;\n    border: 1px solid;\n}\n\n.footer .add-task-btn{\n    background: var(--orange-accent);\n    cursor: pointer;\n    grid-row: 1/3;\n    grid-column: 1/3;\n    width: 5.5rem;\n    height: 5.5rem;\n    border-radius: 50%;\n    align-self: center;\n    border: 8px solid var(--main-color);\n    transition: background 0.3s ease-in;\n}\n\n.footer .add-task-btn:hover{\n    background-color: var(--footer-hover);\n}\n\n.footer .menu-btn{\n    grid-column: 1/2;\n    grid-row: 2/3;\n    cursor: pointer;\n    background: none;\n    border: none;\n    outline: none;\n    width: 50%;\n    transition: background 0.3s ease-in;\n}\n@media screen and (max-width: 1024px) {\n    .footer{\n        height: 100%;\n        min-height: 6rem;\n    }\n    .footer .add-task-btn{\n        height: 5rem;\n        width: 5rem;\n    }\n  }\n  ",""]);const d=a},497:(n,e,t)=>{t.d(e,{Z:()=>d});var r=t(81),i=t.n(r),o=t(645),a=t.n(o)()(i());a.push([n.id,".header-container{\n    grid-column: 1/3;\n    display: flex;\n    justify-content: center;\n    padding-top: 2rem;\n}\n.header{\n    width: 230px;\n    height: 100%;\n    justify-self: center;\n    display: flex;\n    justify-content: space-around;\n    align-items: center;\n}",""]);const d=a},20:(n,e,t)=>{t.d(e,{Z:()=>d});var r=t(81),i=t.n(r),o=t(645),a=t.n(o)()(i());a.push([n.id,".sidebar{\n    display: none;\n    width: 0;\n    transition: all 0.3s ease;\n    padding-top: 3rem;\n    border-right: 1px solid var(--main-border);\n    border-top: 1px solid var(--main-border);\n    border-top-right-radius: 10px;\n    box-shadow: 2px 0 5px rgba(0, 0, 0, 0.2);\n    background: var(--sidebar-color);\n    color: var(--dark-accent);\n    grid-template-rows: 0.5fr repeat(3,0.5fr) 5fr;\n    justify-items: center;\n    align-items: center;\n    gap: 1rem;\n}\n\n.inbox{\n    grid-row: 2/3;\n}\n.today{\n    grid-row: 3/4;\n}\n.upcoming{\n    grid-row: 4/5;\n}\n\n.title{\n    opacity: 0;\n    transition: all 1s ease;\n    width: 90%;\n    height: 100%;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    gap: 20px;\n}\n\n.sidebar .inbox, .sidebar .today, .sidebar .upcoming{\n    opacity: 0;\n    transition: all 1s ease;\n    cursor: pointer;\n    display: grid;\n    grid-template-columns: 1fr 2fr 1fr;\n    align-items: center;\n    justify-items: start;\n    gap: 1rem;\n    padding-left: 1rem;\n    width: 90%;\n    height: 70%;\n    background: none;\n    border-radius: 10px;\n    border: none;\n}\n\n.sidebar button:hover{\n    background: var(--main-color);\n}\n\n.projects{\n    opacity: 0;\n    transition: all 1s ease;\n    grid-row: 5/6;\n    width: 90%;\n    height: 90%;\n    display: grid;\n    align-items: center;\n    justify-items: center;\n    grid-template-rows: repeat(auto-fit, 2rem);\n    gap: 1rem;\n}\n.projects-header{\n    opacity: 0;\n    transition: all 1s ease;\n    width: 100%;\n    display:grid;\n    grid-template-columns: 1fr 5fr 1fr;\n}\n\n.projects-header .add-projects{\n    opacity: 0;\n    transition: all 1s ease;\n    grid-column: 3/4;\n    width: 2rem;\n    height: 2rem;\n    border: none;\n    background: none;\n    border-radius: 50%;\n}\n\n@media screen and (max-width: 651px) {\n    .sidebar{\n        width: 0%;\n        height: 0;\n        display: hidden;\n        border-right: initial;\n        border-top: initial;\n        border-top-right-radius: initial;\n        box-shadow: initial;\n        padding-top: 1rem;\n        grid-template-rows: 0.5fr repeat(3,3rem) 5fr;\n    }\n    .title{\n        height: 3rem;\n    }\n    .sidebar .inbox, .sidebar .today, .sidebar .upcoming{\n        grid-template-columns: 0.2fr 2fr 0.4fr;\n    }\n}",""]);const d=a},890:(n,e,t)=>{t.d(e,{Z:()=>p});var r=t(81),i=t.n(r),o=t(645),a=t.n(o),d=t(348),s=t(20),l=t(497),c=a()(i());c.i(d.Z),c.i(s.Z),c.i(l.Z),c.push([n.id,":root{\n    --main-color: #F7F4F3;\n    --orange-accent: #F84312;\n    --plat-accent: #DCE3E4;\n    --rose-accent: #EED3D7;\n    --dark-accent: #090A0B;\n    --footer-hover: #F96339;\n    --sidebar-color: #EFE8E6;\n    --main-border: #ccc;\n    --main-body-height: 40rem;\n}\n\n*{\n    margin: 0;\n    padding: 0;\n    box-sizing: border-box;\n    font-family: 'Josefin Sans', sans-serif;\n}\n.content{\n    /* border: 1px solid black; */\n    background: var(--main-color);\n    width: 100%;\n    min-height: 100vh;\n    height: auto;\n    display: grid;\n    grid-template-columns: minmax(200px, 0.8fr) 5fr;\n}\n\n.main-body{\n    grid-row: 2/3;\n    grid-column: 1/3;\n    min-height: var(--main-body-height);\n    height: auto;\n    width: 100%;\n    /* border: 1px solid black; */\n    display: grid;\n    justify-items: center;\n    align-items: center;\n}\n\n\n",""]);const p=c},645:n=>{n.exports=function(n){var e=[];return e.toString=function(){return this.map((function(e){var t="",r=void 0!==e[5];return e[4]&&(t+="@supports (".concat(e[4],") {")),e[2]&&(t+="@media ".concat(e[2]," {")),r&&(t+="@layer".concat(e[5].length>0?" ".concat(e[5]):""," {")),t+=n(e),r&&(t+="}"),e[2]&&(t+="}"),e[4]&&(t+="}"),t})).join("")},e.i=function(n,t,r,i,o){"string"==typeof n&&(n=[[null,n,void 0]]);var a={};if(r)for(var d=0;d<this.length;d++){var s=this[d][0];null!=s&&(a[s]=!0)}for(var l=0;l<n.length;l++){var c=[].concat(n[l]);r&&a[c[0]]||(void 0!==o&&(void 0===c[5]||(c[1]="@layer".concat(c[5].length>0?" ".concat(c[5]):""," {").concat(c[1],"}")),c[5]=o),t&&(c[2]?(c[1]="@media ".concat(c[2]," {").concat(c[1],"}"),c[2]=t):c[2]=t),i&&(c[4]?(c[1]="@supports (".concat(c[4],") {").concat(c[1],"}"),c[4]=i):c[4]="".concat(i)),e.push(c))}},e}},81:n=>{n.exports=function(n){return n[1]}},379:n=>{var e=[];function t(n){for(var t=-1,r=0;r<e.length;r++)if(e[r].identifier===n){t=r;break}return t}function r(n,r){for(var o={},a=[],d=0;d<n.length;d++){var s=n[d],l=r.base?s[0]+r.base:s[0],c=o[l]||0,p="".concat(l," ").concat(c);o[l]=c+1;var u=t(p),m={css:s[1],media:s[2],sourceMap:s[3],supports:s[4],layer:s[5]};if(-1!==u)e[u].references++,e[u].updater(m);else{var y=i(m,r);r.byIndex=d,e.splice(d,0,{identifier:p,updater:y,references:1})}a.push(p)}return a}function i(n,e){var t=e.domAPI(e);return t.update(n),function(e){if(e){if(e.css===n.css&&e.media===n.media&&e.sourceMap===n.sourceMap&&e.supports===n.supports&&e.layer===n.layer)return;t.update(n=e)}else t.remove()}}n.exports=function(n,i){var o=r(n=n||[],i=i||{});return function(n){n=n||[];for(var a=0;a<o.length;a++){var d=t(o[a]);e[d].references--}for(var s=r(n,i),l=0;l<o.length;l++){var c=t(o[l]);0===e[c].references&&(e[c].updater(),e.splice(c,1))}o=s}}},569:n=>{var e={};n.exports=function(n,t){var r=function(n){if(void 0===e[n]){var t=document.querySelector(n);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(n){t=null}e[n]=t}return e[n]}(n);if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(t)}},216:n=>{n.exports=function(n){var e=document.createElement("style");return n.setAttributes(e,n.attributes),n.insert(e,n.options),e}},565:(n,e,t)=>{n.exports=function(n){var e=t.nc;e&&n.setAttribute("nonce",e)}},795:n=>{n.exports=function(n){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var e=n.insertStyleElement(n);return{update:function(t){!function(n,e,t){var r="";t.supports&&(r+="@supports (".concat(t.supports,") {")),t.media&&(r+="@media ".concat(t.media," {"));var i=void 0!==t.layer;i&&(r+="@layer".concat(t.layer.length>0?" ".concat(t.layer):""," {")),r+=t.css,i&&(r+="}"),t.media&&(r+="}"),t.supports&&(r+="}");var o=t.sourceMap;o&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(o))))," */")),e.styleTagTransform(r,n,e.options)}(e,n,t)},remove:function(){!function(n){if(null===n.parentNode)return!1;n.parentNode.removeChild(n)}(e)}}}},589:n=>{n.exports=function(n,e){if(e.styleSheet)e.styleSheet.cssText=n;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(n))}}}},e={};function t(r){var i=e[r];if(void 0!==i)return i.exports;var o=e[r]={id:r,exports:{}};return n[r](o,o.exports,t),o.exports}t.n=n=>{var e=n&&n.__esModule?()=>n.default:()=>n;return t.d(e,{a:e}),e},t.d=(n,e)=>{for(var r in e)t.o(e,r)&&!t.o(n,r)&&Object.defineProperty(n,r,{enumerable:!0,get:e[r]})},t.o=(n,e)=>Object.prototype.hasOwnProperty.call(n,e),t.nc=void 0,(()=>{var n=t(379),e=t.n(n),r=t(795),i=t.n(r),o=t(569),a=t.n(o),d=t(565),s=t.n(d),l=t(216),c=t.n(l),p=t(589),u=t.n(p),m=t(890),y={};y.styleTagTransform=u(),y.setAttributes=s(),y.insert=a().bind(null,"head"),y.domAPI=i(),y.insertStyleElement=c(),e()(m.Z,y),m.Z&&m.Z.locals&&m.Z.locals;const h=document.querySelector(".content"),g=document.createElement("div");g.classList.add("main-body"),g.textContent="MAIN BODY",h.appendChild(g);let f=(()=>{const n=document.createElement("div");n.classList.add("header-container");const e=document.createElement("div");e.classList.add("header"),e.innerHTML='<i class="icon fa-solid fa-rotate-90 fa-clipboard-list fa-2xl" style="color: #090a0b;"></i><h1>Task Trackr</h1>',n.appendChild(e);const t=document.createElement("div");t.classList.add("sidebar");const r=document.createElement("div");r.classList.add("title"),r.innerHTML='<i class="icon fa-solid fa-rotate-90 fa-clipboard-list fa-xl" style="color: #090a0b;"></i><h2>Task Trackr</h2>',t.appendChild(r);const i=document.createElement("button");i.classList.add("inbox"),i.innerHTML='<i class="fa-solid fa-inbox fa-lg" style="color: #5089ED;"></i><p>Inbox</p>',t.appendChild(i);const o=document.createElement("button");o.classList.add("today"),o.innerHTML='<i class="fa-solid fa-calendar-day fa-lg" style="color: #37A056;"></i><p>Today</p>',t.appendChild(o);const a=document.createElement("button");a.classList.add("upcoming"),a.innerHTML='<i class="fa-solid fa-calendar-week fa-lg" style="color: #A366FF;"></i><p>Upcoming</p>',t.appendChild(a);const d=document.createElement("div");d.classList.add("projects");const s=document.createElement("div");s.classList.add("projects-header"),s.innerHTML="<h2>Projects</h2>",d.appendChild(s);const l=document.createElement("button");l.classList.add("add-projects"),l.innerHTML='<i class="fa-solid fa-plus fa-lg" style="color: #000000;"></i>',s.appendChild(l),t.appendChild(d);const c=document.createElement("div");c.classList.add("footer");const p=document.createElement("button");p.classList.add("menu-btn"),p.innerHTML='<i class="fa-solid fa-bars fa-xl" style="color: #dce3e4;"></i>';const u=document.createElement("button");return u.classList.add("add-task-btn"),u.innerHTML='<i class="fa-solid fa-plus fa-lg" style="color: #dce3e4;"></i>',c.appendChild(u),c.appendChild(p),h.appendChild(n),h.appendChild(c),h.appendChild(t),{menuBtn:p,addTaskBtn:u,sideMenu:t,footer:c,title:r,inbox:i,today:o,upcoming:a,projects:d,addProjects:l,projectsHeader:s,headerContainer:n}})();f.menuBtn.addEventListener("click",(function(){"none"===f.sideMenu.style.display||""===f.sideMenu.style.display?window.innerWidth<=651?(f.sideMenu.style.display="grid",f.sideMenu.style.gridColumn="1/3",f.sideMenu.style.gridRow="1/2",g.style.gridColumn="1/3",f.headerContainer.style.display="none",f.footer.style.gridColumn="1/3",window.scrollTo({top:0,behavior:"smooth"}),f.sideMenu.style.height="100%",f.sideMenu.style.width="100%",f.title.style.opacity="1",f.inbox.style.opacity="1",f.today.style.opacity="1",f.upcoming.style.opacity="1",f.projects.style.opacity="1",f.addProjects.style.opacity="1",f.projectsHeader.style.opacity="1"):(f.sideMenu.style.display="grid",f.sideMenu.style.gridColumn="1/2",f.sideMenu.style.gridRow="1/4",g.style.gridColumn="2/3",f.headerContainer.style.gridColumn="2/3",f.footer.style.gridColumn="2/3",window.scrollTo({top:0,behavior:"smooth"}),f.sideMenu.style.width="100%",f.sideMenu.style.height="100%",f.title.style.opacity="1",f.inbox.style.opacity="1",f.today.style.opacity="1",f.upcoming.style.opacity="1",f.projects.style.opacity="1",f.addProjects.style.opacity="1",f.projectsHeader.style.opacity="1"):(f.sideMenu.style.display="none",g.style.gridColumn="1/3",f.headerContainer.style.display="grid",f.headerContainer.style.gridColumn="1/3",f.headerContainer.style.gridRow="1/2",f.footer.style.gridColumn="1/3",window.scrollTo({top:0,behavior:"smooth"}),f.sideMenu.style.width="0",f.title.style.opacity="0",f.inbox.style.opacity="0",f.today.style.opacity="0",f.upcoming.style.opacity="0",f.projects.style.opacity="0",f.addProjects.style.opacity="0",f.projectsHeader.style.opacity="0",window.innerWidth<=651&&(f.sideMenu.style.height="0"))})),window.addEventListener("resize",(()=>{window.innerWidth,window.innerWidth<=651&&"grid"===f.sideMenu.style.display?(f.sideMenu.style.gridColumn="1/3",f.sideMenu.style.gridRow="1/2",g.style.gridColumn="1/3",f.headerContainer.style.display="none",f.headerContainer.style.gridColumn="1/3",f.footer.style.gridColumn="1/3"):window.innerWidth>651&&"grid"===f.sideMenu.style.display&&(f.sideMenu.style.gridColumn="1/2",f.sideMenu.style.gridRow="1/4",g.style.gridColumn="2/3",f.headerContainer.style.display="grid",f.headerContainer.style.gridColumn="2/3",f.headerContainer.style.gridRow="1/2",f.footer.style.gridColumn="2/3")}))})()})();