(()=>{"use strict";var n={917:(n,e,t)=>{t.d(e,{Z:()=>c});var r=t(81),o=t.n(r),a=t(645),i=t.n(a)()(o());i.push([n.id,"/*\nhtml5doctor.com Reset Stylesheet\nv1.6.1\nLast Updated: 2010-09-17\nAuthor: Richard Clark - http://richclarkdesign.com\nTwitter: @rich_clark\n*/\n\nhtml, body, div, span, object, iframe,\nh1, h2, h3, h4, h5, h6, p, blockquote, pre,\nabbr, address, cite, code,\ndel, dfn, em, img, ins, kbd, q, samp,\nsmall, strong, sub, sup, var,\nb, i,\ndl, dt, dd, ol, ul, li,\nfieldset, form, label, legend,\ntable, caption, tbody, tfoot, thead, tr, th, td,\narticle, aside, canvas, details, figcaption, figure,\nfooter, header, hgroup, menu, nav, section, summary,\ntime, mark, audio, video {\n    margin:0;\n    padding:0;\n    border:0;\n    outline:0;\n    font-size:100%;\n    vertical-align:baseline;\n    background:transparent;\n}\n\nbody {\n    line-height:1;\n}\n\narticle,aside,details,figcaption,figure,\nfooter,header,hgroup,menu,nav,section {\n    display:block;\n}\n\nnav ul {\n    list-style:none;\n}\n\nblockquote, q {\n    quotes:none;\n}\n\nblockquote:before, blockquote:after,\nq:before, q:after {\n    content:'';\n    content:none;\n}\n\na {\n    margin:0;\n    padding:0;\n    font-size:100%;\n    vertical-align:baseline;\n    background:transparent;\n}\n\n/* change colours to suit your needs */\nins {\n    background-color:#ff9;\n    color:#000;\n    text-decoration:none;\n}\n\n/* change colours to suit your needs */\nmark {\n    background-color:#ff9;\n    color:#000;\n    font-style:italic;\n    font-weight:bold;\n}\n\ndel {\n    text-decoration: line-through;\n}\n\nabbr[title], dfn[title] {\n    border-bottom:1px dotted;\n    cursor:help;\n}\n\ntable {\n    border-collapse:collapse;\n    border-spacing:0;\n}\n\n/* change border colour to suit your needs */\nhr {\n    display:block;\n    height:1px;\n    border:0;  \n    border-top:1px solid #cccccc;\n    margin:1em 0;\n    padding:0;\n}\n\ninput, select {\n    vertical-align:middle;\n}",""]);const c=i},426:(n,e,t)=>{t.d(e,{Z:()=>c});var r=t(81),o=t.n(r),a=t(645),i=t.n(a)()(o());i.push([n.id,".content {\n    background-color: black;\n    /* display: flex;\n    flex-direction: column;\n    justify-content: center; */\n}\n\n.content * {\n    margin: auto;\n}\n\n.testing {\n    color: white;\n}\n\n.imgSliderContainer {\n    border: 1px solid green;\n    width: 80%;\n    height: 800px;\n}\n\n.imgContainer {\n    position: relative;\n    border: 1px solid yellow;\n    width: 80%;\n    height: 500px;\n    margin-top: 25px;\n}\n\n.imgOrderContainer {\n    border: 1px solid pink;\n    width: 50%;\n    height: 35px;\n    margin-top: 5px;\n}\n\n.btnLeftContainer, .btnRightContainer {\n    position: absolute;\n    border: 1px solid blue;\n    width: 64px;\n    height: 64px;\n}\n\n.btnLeftContainer {\n    top: 50%;\n    transform: translate(-50%, -50%);\n}\n\n.btnRightContainer {\n    top: 50%;\n    right: 0;\n    transform: translate(50%, -50%);\n}\n\n",""]);const c=i},645:n=>{n.exports=function(n){var e=[];return e.toString=function(){return this.map((function(e){var t="",r=void 0!==e[5];return e[4]&&(t+="@supports (".concat(e[4],") {")),e[2]&&(t+="@media ".concat(e[2]," {")),r&&(t+="@layer".concat(e[5].length>0?" ".concat(e[5]):""," {")),t+=n(e),r&&(t+="}"),e[2]&&(t+="}"),e[4]&&(t+="}"),t})).join("")},e.i=function(n,t,r,o,a){"string"==typeof n&&(n=[[null,n,void 0]]);var i={};if(r)for(var c=0;c<this.length;c++){var s=this[c][0];null!=s&&(i[s]=!0)}for(var d=0;d<n.length;d++){var l=[].concat(n[d]);r&&i[l[0]]||(void 0!==a&&(void 0===l[5]||(l[1]="@layer".concat(l[5].length>0?" ".concat(l[5]):""," {").concat(l[1],"}")),l[5]=a),t&&(l[2]?(l[1]="@media ".concat(l[2]," {").concat(l[1],"}"),l[2]=t):l[2]=t),o&&(l[4]?(l[1]="@supports (".concat(l[4],") {").concat(l[1],"}"),l[4]=o):l[4]="".concat(o)),e.push(l))}},e}},81:n=>{n.exports=function(n){return n[1]}},379:n=>{var e=[];function t(n){for(var t=-1,r=0;r<e.length;r++)if(e[r].identifier===n){t=r;break}return t}function r(n,r){for(var a={},i=[],c=0;c<n.length;c++){var s=n[c],d=r.base?s[0]+r.base:s[0],l=a[d]||0,u="".concat(d," ").concat(l);a[d]=l+1;var p=t(u),f={css:s[1],media:s[2],sourceMap:s[3],supports:s[4],layer:s[5]};if(-1!==p)e[p].references++,e[p].updater(f);else{var h=o(f,r);r.byIndex=c,e.splice(c,0,{identifier:u,updater:h,references:1})}i.push(u)}return i}function o(n,e){var t=e.domAPI(e);return t.update(n),function(e){if(e){if(e.css===n.css&&e.media===n.media&&e.sourceMap===n.sourceMap&&e.supports===n.supports&&e.layer===n.layer)return;t.update(n=e)}else t.remove()}}n.exports=function(n,o){var a=r(n=n||[],o=o||{});return function(n){n=n||[];for(var i=0;i<a.length;i++){var c=t(a[i]);e[c].references--}for(var s=r(n,o),d=0;d<a.length;d++){var l=t(a[d]);0===e[l].references&&(e[l].updater(),e.splice(l,1))}a=s}}},569:n=>{var e={};n.exports=function(n,t){var r=function(n){if(void 0===e[n]){var t=document.querySelector(n);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(n){t=null}e[n]=t}return e[n]}(n);if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(t)}},216:n=>{n.exports=function(n){var e=document.createElement("style");return n.setAttributes(e,n.attributes),n.insert(e,n.options),e}},565:(n,e,t)=>{n.exports=function(n){var e=t.nc;e&&n.setAttribute("nonce",e)}},795:n=>{n.exports=function(n){var e=n.insertStyleElement(n);return{update:function(t){!function(n,e,t){var r="";t.supports&&(r+="@supports (".concat(t.supports,") {")),t.media&&(r+="@media ".concat(t.media," {"));var o=void 0!==t.layer;o&&(r+="@layer".concat(t.layer.length>0?" ".concat(t.layer):""," {")),r+=t.css,o&&(r+="}"),t.media&&(r+="}"),t.supports&&(r+="}");var a=t.sourceMap;a&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a))))," */")),e.styleTagTransform(r,n,e.options)}(e,n,t)},remove:function(){!function(n){if(null===n.parentNode)return!1;n.parentNode.removeChild(n)}(e)}}}},589:n=>{n.exports=function(n,e){if(e.styleSheet)e.styleSheet.cssText=n;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(n))}}}},e={};function t(r){var o=e[r];if(void 0!==o)return o.exports;var a=e[r]={id:r,exports:{}};return n[r](a,a.exports,t),a.exports}t.n=n=>{var e=n&&n.__esModule?()=>n.default:()=>n;return t.d(e,{a:e}),e},t.d=(n,e)=>{for(var r in e)t.o(e,r)&&!t.o(n,r)&&Object.defineProperty(n,r,{enumerable:!0,get:e[r]})},t.o=(n,e)=>Object.prototype.hasOwnProperty.call(n,e),t.nc=void 0,(()=>{var n=t(379),e=t.n(n),r=t(795),o=t.n(r),a=t(569),i=t.n(a),c=t(565),s=t.n(c),d=t(216),l=t.n(d),u=t(589),p=t.n(u),f=t(917),h={};h.styleTagTransform=p(),h.setAttributes=s(),h.insert=i().bind(null,"head"),h.domAPI=o(),h.insertStyleElement=l(),e()(f.Z,h),f.Z&&f.Z.locals&&f.Z.locals;var m=t(426),b={};b.styleTagTransform=p(),b.setAttributes=s(),b.insert=i().bind(null,"head"),b.domAPI=o(),b.insertStyleElement=l(),e()(m.Z,b),m.Z&&m.Z.locals&&m.Z.locals,(n=>{const e=document.querySelector(".content"),t=document.createElement("div");t.classList.add("imgSliderContainer");const r=document.createElement("div");r.classList.add("imgContainer");const o=document.createElement("div");o.classList.add("btnLeftContainer");const a=document.createElement("div");a.classList.add("btnRightContainer");const i=document.createElement("div");i.classList.add("imgOrderContainer"),r.appendChild(o),r.appendChild(a),t.appendChild(r),t.appendChild(i),e.appendChild(t)})()})()})();