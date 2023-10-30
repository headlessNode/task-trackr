(()=>{"use strict";var n={348:(n,e,t)=>{t.d(e,{Z:()=>d});var r=t(81),o=t.n(r),a=t(645),i=t.n(a)()(o());i.push([n.id,"\n.footer{\n    grid-column: 1/3;\n    grid-row: 3/4;\n    width: 100%;\n    background: var(--orange-accent);\n    display: grid;\n    grid-template-columns: 1fr 8fr;\n    grid-template-rows: 2.5fr 1fr;\n    justify-items: center;\n}\n\n.empty-container{\n    grid-row: 1/2;\n    grid-column: 1/3;\n    width: 100%;\n    background: var(--main-color);\n}\n\n.footer .add-task-btn{\n    background: var(--orange-accent);\n    cursor: pointer;\n    grid-row: 1/3;\n    grid-column: 1/3;\n    width: 4rem;\n    height: 4rem;\n    border-radius: 50%;\n    position: relative;\n    top: 80px;\n    border: 6px solid var(--main-color);\n    transition: background 0.3s ease-in;\n}\n\n.footer .add-task-btn:hover{\n    background-color: var(--footer-hover);\n}\n\n.footer .menu-btn{\n    grid-column: 1/2;\n    grid-row: 2/3;\n    cursor: pointer;\n    background: none;\n    border: none;\n    outline: none;\n    width: 50%;\n    transition: background 0.3s ease-in;\n}",""]);const d=i},20:(n,e,t)=>{t.d(e,{Z:()=>d});var r=t(81),o=t.n(r),a=t(645),i=t.n(a)()(o());i.push([n.id,".sidebar{\n    display: none;\n    padding-top: 10px;\n    border-right: 1px solid var(--main-border);\n    border-top: 1px solid var(--main-border);\n    border-top-right-radius: 10px;\n    box-shadow: 2px 0 5px rgba(0, 0, 0, 0.2);\n    background: var(--sidebar-color);\n    color: var(--dark-accent);\n    grid-template-rows: repeat(3,0.5fr) 5fr;\n    justify-items: center;\n    align-items: center;\n    gap: 1rem;\n}\n\n.sidebar button{\n    cursor: pointer;\n    display: grid;\n    grid-template-columns: 1fr 5fr 1fr;\n    align-items: center;\n    justify-items: start;\n    gap: 1rem;\n    padding-left: 1rem;\n    width: 90%;\n    height: 100%;\n    background: none;\n    border-radius: 10px;\n    border: none;\n}\n\n.sidebar button:hover{\n    background: var(--main-color);\n}\n\n.projects{\n    grid-row: 4/5;\n    width: 90%;\n    height: 90%;\n    display: grid;\n    grid-template-rows: repeat(9,1fr);\n}\n.projects button{\n    width: 100%;\n}",""]);const d=i},890:(n,e,t)=>{t.d(e,{Z:()=>l});var r=t(81),o=t.n(r),a=t(645),i=t.n(a),d=t(348),s=t(20),c=i()(o());c.i(d.Z),c.i(s.Z),c.push([n.id,":root{\n    --main-color: #F7F4F3;\n    --orange-accent: #F84312;\n    --plat-accent: #DCE3E4;\n    --rose-accent: #EED3D7;\n    --dark--accent: #090A0B;\n    --footer-hover: #F96339;\n    --sidebar-color: #EFE8E6;\n    --main-border: #ccc;\n}\n\n*{\n    margin: 0;\n    padding: 0;\n    box-sizing: border-box;\n}\n.content{\n    background: var(--main-color);\n    width: 100%;\n    height: 100vh;\n    display: grid;\n    grid-template-columns: 1fr 4fr;\n    grid-template-rows: 0.5fr 4fr 1fr;\n}\n\n.main-body{\n    grid-row: 2/3;\n    grid-column: 1/3;\n    width: 100%;\n}",""]);const l=c},645:n=>{n.exports=function(n){var e=[];return e.toString=function(){return this.map((function(e){var t="",r=void 0!==e[5];return e[4]&&(t+="@supports (".concat(e[4],") {")),e[2]&&(t+="@media ".concat(e[2]," {")),r&&(t+="@layer".concat(e[5].length>0?" ".concat(e[5]):""," {")),t+=n(e),r&&(t+="}"),e[2]&&(t+="}"),e[4]&&(t+="}"),t})).join("")},e.i=function(n,t,r,o,a){"string"==typeof n&&(n=[[null,n,void 0]]);var i={};if(r)for(var d=0;d<this.length;d++){var s=this[d][0];null!=s&&(i[s]=!0)}for(var c=0;c<n.length;c++){var l=[].concat(n[c]);r&&i[l[0]]||(void 0!==a&&(void 0===l[5]||(l[1]="@layer".concat(l[5].length>0?" ".concat(l[5]):""," {").concat(l[1],"}")),l[5]=a),t&&(l[2]?(l[1]="@media ".concat(l[2]," {").concat(l[1],"}"),l[2]=t):l[2]=t),o&&(l[4]?(l[1]="@supports (".concat(l[4],") {").concat(l[1],"}"),l[4]=o):l[4]="".concat(o)),e.push(l))}},e}},81:n=>{n.exports=function(n){return n[1]}},379:n=>{var e=[];function t(n){for(var t=-1,r=0;r<e.length;r++)if(e[r].identifier===n){t=r;break}return t}function r(n,r){for(var a={},i=[],d=0;d<n.length;d++){var s=n[d],c=r.base?s[0]+r.base:s[0],l=a[c]||0,p="".concat(c," ").concat(l);a[c]=l+1;var u=t(p),f={css:s[1],media:s[2],sourceMap:s[3],supports:s[4],layer:s[5]};if(-1!==u)e[u].references++,e[u].updater(f);else{var m=o(f,r);r.byIndex=d,e.splice(d,0,{identifier:p,updater:m,references:1})}i.push(p)}return i}function o(n,e){var t=e.domAPI(e);return t.update(n),function(e){if(e){if(e.css===n.css&&e.media===n.media&&e.sourceMap===n.sourceMap&&e.supports===n.supports&&e.layer===n.layer)return;t.update(n=e)}else t.remove()}}n.exports=function(n,o){var a=r(n=n||[],o=o||{});return function(n){n=n||[];for(var i=0;i<a.length;i++){var d=t(a[i]);e[d].references--}for(var s=r(n,o),c=0;c<a.length;c++){var l=t(a[c]);0===e[l].references&&(e[l].updater(),e.splice(l,1))}a=s}}},569:n=>{var e={};n.exports=function(n,t){var r=function(n){if(void 0===e[n]){var t=document.querySelector(n);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(n){t=null}e[n]=t}return e[n]}(n);if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(t)}},216:n=>{n.exports=function(n){var e=document.createElement("style");return n.setAttributes(e,n.attributes),n.insert(e,n.options),e}},565:(n,e,t)=>{n.exports=function(n){var e=t.nc;e&&n.setAttribute("nonce",e)}},795:n=>{n.exports=function(n){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var e=n.insertStyleElement(n);return{update:function(t){!function(n,e,t){var r="";t.supports&&(r+="@supports (".concat(t.supports,") {")),t.media&&(r+="@media ".concat(t.media," {"));var o=void 0!==t.layer;o&&(r+="@layer".concat(t.layer.length>0?" ".concat(t.layer):""," {")),r+=t.css,o&&(r+="}"),t.media&&(r+="}"),t.supports&&(r+="}");var a=t.sourceMap;a&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a))))," */")),e.styleTagTransform(r,n,e.options)}(e,n,t)},remove:function(){!function(n){if(null===n.parentNode)return!1;n.parentNode.removeChild(n)}(e)}}}},589:n=>{n.exports=function(n,e){if(e.styleSheet)e.styleSheet.cssText=n;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(n))}}}},e={};function t(r){var o=e[r];if(void 0!==o)return o.exports;var a=e[r]={id:r,exports:{}};return n[r](a,a.exports,t),a.exports}t.n=n=>{var e=n&&n.__esModule?()=>n.default:()=>n;return t.d(e,{a:e}),e},t.d=(n,e)=>{for(var r in e)t.o(e,r)&&!t.o(n,r)&&Object.defineProperty(n,r,{enumerable:!0,get:e[r]})},t.o=(n,e)=>Object.prototype.hasOwnProperty.call(n,e),t.nc=void 0,(()=>{var n=t(379),e=t.n(n),r=t(795),o=t.n(r),a=t(569),i=t.n(a),d=t(565),s=t.n(d),c=t(216),l=t.n(c),p=t(589),u=t.n(p),f=t(890),m={};m.styleTagTransform=u(),m.setAttributes=s(),m.insert=i().bind(null,"head"),m.domAPI=o(),m.insertStyleElement=l(),e()(f.Z,m),f.Z&&f.Z.locals&&f.Z.locals;const g=document.querySelector(".content"),v=document.createElement("div");v.classList.add("main-body"),v.textContent="MAIN BODY";const h=document.createElement("div");h.classList.add("footer");const b=document.createElement("button");b.classList.add("menu-btn"),b.innerHTML='<i class="fa-solid fa-bars fa-xl" style="color: #dce3e4;"></i>';const y=document.createElement("div");y.classList.add("empty-container");const x=document.createElement("button");x.classList.add("add-task-btn"),x.innerHTML='<i class="fa-solid fa-plus fa-lg" style="color: #dce3e4;"></i>',h.appendChild(y),h.appendChild(x),h.appendChild(b);const w=document.createElement("div");w.classList.add("sidebar");const C=document.createElement("button");C.classList.add("inbox"),C.innerHTML='<i class="fa-solid fa-inbox fa-lg" style="color: #5089ED;"></i><p>Inbox</p>',w.appendChild(C);const E=document.createElement("button");E.classList.add("today"),E.innerHTML='<i class="fa-solid fa-calendar-day fa-lg" style="color: #37A056;"></i><p>Today</p>',w.appendChild(E);const L=document.createElement("button");L.classList.add("upcoming"),L.innerHTML='<i class="fa-solid fa-calendar-week fa-lg" style="color: #A366FF;"></i><p>Upcoming</p>',w.appendChild(L);const k=document.createElement("div");k.classList.add("projects");const T=document.createElement("div");T.innerHTML="<h2>Projects</h2>",k.appendChild(T);const M=document.createElement("button");M.classList.add("add-projects"),M.innerHTML='<i class="fa-solid fa-plus fa-lg" style="color: #000000;"></i><p>Add Project</p>',k.appendChild(M),w.appendChild(k),g.appendChild(v),g.appendChild(h),g.appendChild(w),b.addEventListener("click",(()=>{"none"===w.style.display||""===w.style.display?(w.style.display="grid",w.style.gridColumn="1/2",w.style.gridRow="2/4",v.style.gridColumn="2/3",h.style.gridColumn="2/3"):(w.style.display="none",v.style.gridColumn="1/3",h.style.gridColumn="1/3")}))})()})();