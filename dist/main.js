!function(e){var t={};function n(o){if(t[o])return t[o].exports;var r=t[o]={i:o,l:!1,exports:{}};return e[o].call(r.exports,r,r.exports,n),r.l=!0,r.exports}n.m=e,n.c=t,n.d=function(e,t,o){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:o})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(n.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)n.d(o,r,function(t){return e[t]}.bind(null,r));return o},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=4)}([function(e,t,n){var o=n(1),r=n(2);"string"==typeof(r=r.__esModule?r.default:r)&&(r=[[e.i,r,""]]);var c={insert:"head",singleton:!1},i=(o(r,c),r.locals?r.locals:{});e.exports=i},function(e,t,n){"use strict";var o,r=function(){return void 0===o&&(o=Boolean(window&&document&&document.all&&!window.atob)),o},c=function(){var e={};return function(t){if(void 0===e[t]){var n=document.querySelector(t);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(e){n=null}e[t]=n}return e[t]}}(),i=[];function a(e){for(var t=-1,n=0;n<i.length;n++)if(i[n].identifier===e){t=n;break}return t}function l(e,t){for(var n={},o=[],r=0;r<e.length;r++){var c=e[r],l=t.base?c[0]+t.base:c[0],u=n[l]||0,d="".concat(l," ").concat(u);n[l]=u+1;var s=a(d),f={css:c[1],media:c[2],sourceMap:c[3]};-1!==s?(i[s].references++,i[s].updater(f)):i.push({identifier:d,updater:h(f,t),references:1}),o.push(d)}return o}function u(e){var t=document.createElement("style"),o=e.attributes||{};if(void 0===o.nonce){var r=n.nc;r&&(o.nonce=r)}if(Object.keys(o).forEach((function(e){t.setAttribute(e,o[e])})),"function"==typeof e.insert)e.insert(t);else{var i=c(e.insert||"head");if(!i)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");i.appendChild(t)}return t}var d,s=(d=[],function(e,t){return d[e]=t,d.filter(Boolean).join("\n")});function f(e,t,n,o){var r=n?"":o.media?"@media ".concat(o.media," {").concat(o.css,"}"):o.css;if(e.styleSheet)e.styleSheet.cssText=s(t,r);else{var c=document.createTextNode(r),i=e.childNodes;i[t]&&e.removeChild(i[t]),i.length?e.insertBefore(c,i[t]):e.appendChild(c)}}function p(e,t,n){var o=n.css,r=n.media,c=n.sourceMap;if(r?e.setAttribute("media",r):e.removeAttribute("media"),c&&btoa&&(o+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(c))))," */")),e.styleSheet)e.styleSheet.cssText=o;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(o))}}var m=null,b=0;function h(e,t){var n,o,r;if(t.singleton){var c=b++;n=m||(m=u(t)),o=f.bind(null,n,c,!1),r=f.bind(null,n,c,!0)}else n=u(t),o=p.bind(null,n,t),r=function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(n)};return o(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap)return;o(e=t)}else r()}}e.exports=function(e,t){(t=t||{}).singleton||"boolean"==typeof t.singleton||(t.singleton=r());var n=l(e=e||[],t);return function(e){if(e=e||[],"[object Array]"===Object.prototype.toString.call(e)){for(var o=0;o<n.length;o++){var r=a(n[o]);i[r].references--}for(var c=l(e,t),u=0;u<n.length;u++){var d=a(n[u]);0===i[d].references&&(i[d].updater(),i.splice(d,1))}n=c}}}},function(e,t,n){(t=n(3)(!1)).push([e.i,"html, body {\n    background-color: rgb(165, 62, 62);\n    margin: 0px;\n    height: 100%;\n}\n\n\nheader {\n    height: 75px;\n    border: 1px solid black;\n}\n\n.form-button {\n    margin: 20px;\n}\n\n#content {\n    display: flex;\n    flex-direction: row;\n    min-height: 100%;\n    \n}\n\n#project-container {\n    width: 35%;\n    text-align: center;\n    \n    border: 1px solid black;\n}\n\n#task-container {\n    width: 65%;\n    text-align: center;\n    \n    border: 1px solid black;\n}\n\n.modal-background {\n    display: flex;\n    \n    align-items: center;\n    justify-content: center;\n    left: 0;\n    top: 0;\n    right: 0;\n    position: fixed;\n    height: 100vh;\n    \n    background-color: rgba(25, 25, 25, 0.5);\n}\n\nform {\n    background-color: white;\n}\n\n#project-list {\n\n}\n.individual-project-container {\n    display: flex;\n    justify-content: center;\n    color: white;\n    border: 1px solid black;\n    margin: 5px;\n    padding: 25px;\n\n}\n\n.delete-project-button {\n\n}\n",""]),e.exports=t},function(e,t,n){"use strict";e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var n=function(e,t){var n=e[1]||"",o=e[3];if(!o)return n;if(t&&"function"==typeof btoa){var r=(i=o,a=btoa(unescape(encodeURIComponent(JSON.stringify(i)))),l="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(a),"/*# ".concat(l," */")),c=o.sources.map((function(e){return"/*# sourceURL=".concat(o.sourceRoot||"").concat(e," */")}));return[n].concat(c).concat([r]).join("\n")}var i,a,l;return[n].join("\n")}(t,e);return t[2]?"@media ".concat(t[2]," {").concat(n,"}"):n})).join("")},t.i=function(e,n,o){"string"==typeof e&&(e=[[null,e,""]]);var r={};if(o)for(var c=0;c<this.length;c++){var i=this[c][0];null!=i&&(r[i]=!0)}for(var a=0;a<e.length;a++){var l=[].concat(e[a]);o&&r[l[0]]||(n&&(l[2]?l[2]="".concat(n," and ").concat(l[2]):l[2]=n),t.push(l))}},t}},function(e,t,n){"use strict";n.r(t);n(0);const o=e=>({name:e,id:void 0,tasks:[]}),r=document.getElementById("project-list");let c=0;function i(){for(console.log(l);r.firstChild;)r.removeChild(r.firstChild);l.forEach(a)}function a(e){e.id=c+1,c++;const t=document.createElement("div");t.textContent=e.name,t.classList.add("individual-project-container");const n=document.createElement("button");n.classList.add("delete-project-button"),n.setAttribute("id",`project-${e.id}-delete`),n.textContent="X",n.addEventListener("click",(function(){console.log("delete button pressed"),console.log(e.name),confirm(`Are you sure you want to delete ${e.name}?`)&&(l.splice(e.id-1,1),console.log(l),i())})),t.appendChild(n),r.appendChild(t),console.log("project: "+e.name)}let l=[],u=o("Example Project");function d(e){e.preventDefault();const t=document.getElementById("project-name").value;if(""!==t){let e=o(t);console.log(`new project added: ${e.name}`),l.push(e),console.log(l),i(),function(){const e=document.querySelector("body"),t=document.querySelector(".modal-background");document.getElementById("project-form").reset(),e.style.overflow="visible",t.style.display="none"}()}}function s(){document.querySelector(".modal-background").style.display="none",console.log(l)}l.push(u),function(){const e=document.querySelector("body"),t=document.createElement("div");t.classList.add("modal-background"),e.style.overflow="hidden",e.appendChild(t);const n=document.createElement("form");!function(e,t,o,r){const c=document.createElement("input");c.setAttribute("type",e),c.setAttribute("id",t),c.setAttribute("name",o),c.setAttribute("placeholder",r),n.appendChild(c)}("text","project-name","project-name","Project Name (Required)");const o=document.createElement("div"),r=document.createElement("button");r.textContent="Create",r.type="submit",r.setAttribute("id","submit-project-button"),o.appendChild(r);const c=document.createElement("button");c.textContent="Cancel",c.type="button",c.setAttribute("id","cancel-project-button"),o.appendChild(c),n.appendChild(o),n.setAttribute("id","project-form"),t.appendChild(n),t.style.display="none"}(),i(),document.querySelector("#project-button").addEventListener("click",(function(){document.querySelector(".modal-background").style.display="flex",document.getElementById("submit-project-button").addEventListener("click",d),document.getElementById("cancel-project-button").addEventListener("click",s)}))}]);