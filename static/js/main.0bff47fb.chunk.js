(this["webpackJsonpgoit-react-hw-03-image-finder"]=this["webpackJsonpgoit-react-hw-03-image-finder"]||[]).push([[0],{25:function(e,t,c){},66:function(e,t,c){"use strict";c.r(t);var a=c(0),n=c.n(a),r=c(6),o=c.n(r),i=c(4),s=(c(25),c(1));var l=function(e){var t=e.onSubmit,c=Object(a.useState)(""),n=Object(i.a)(c,2),r=n[0],o=n[1];return Object(s.jsx)("header",{className:"Searchbar",children:Object(s.jsxs)("form",{className:"SearchForm",onSubmit:function(e){""!==r.trim()?(e.preventDefault(),t(r),o("")):alert("Wrong input!")},children:[Object(s.jsx)("button",{type:"submit",className:"SearchForm-button",children:Object(s.jsx)("span",{className:"SearchForm-button-label",children:"Search"})}),Object(s.jsx)("input",{className:"SearchForm-input",type:"text",value:r,autoComplete:"off",autoFocus:!0,placeholder:"Search images and photos",onChange:function(e){o(e.target.value)}})]})})},u=c(10),d=c(19),j=c.n(d);var b={fetching:function(e,t){return j.a.get("".concat("https://pixabay.com/api/","?q=").concat(e,"&page=").concat(t,"&key=").concat("23540624-9aec9adb1c30af208be906523","&image_type=photo&orientation=horizontal&per_page=12"))}},m=c(20),h=c.n(m);var O=function(e){var t=e.data;return Object(s.jsx)("button",{className:"Button",onClick:t,children:"Load More"})},f=document.querySelector("#modal-root");var g=function(e){var t=e.onClose,c=e.children,n=function(e){"Escape"===e.code&&t()};return Object(a.useEffect)((function(){return window.addEventListener("keydown",n),function(){window.removeEventListener("keydown",n)}})),Object(r.createPortal)(Object(s.jsx)("div",{className:"Overlay",onClick:function(e){e.currentTarget===e.target&&t()},children:Object(s.jsx)("div",{className:"Modal",children:c})}),f)};var p=function(e){var t=e.id,c=e.picture,n=e.modalPicture,r=Object(a.useState)(!1),o=Object(i.a)(r,2),l=o[0],u=o[1],d=function(){u(!l)},j=function(e){t===+e.target.id&&d()};return Object(s.jsxs)("li",{className:"ImageGalleryItem",children:[l&&Object(s.jsx)(g,{onClose:d,children:Object(s.jsx)("img",{onClick:j,id:t,src:n,alt:t,className:"ImageGalleryItem-image"})}),Object(s.jsx)("img",{onClick:j,id:t,src:c,alt:t,className:"ImageGalleryItem-image"})]},t)};var v=function(e){var t=e.searchValue,c=Object(a.useState)([]),n=Object(i.a)(c,2),r=n[0],o=n[1],l=Object(a.useState)(1),d=Object(i.a)(l,2),j=d[0],m=d[1],f=Object(a.useState)(!1),g=Object(i.a)(f,2),v=g[0],x=g[1],S=Object(a.useState)(""),y=Object(i.a)(S,2),w=y[0],N=y[1],k=Object(a.useState)("idle"),I=Object(i.a)(k,2),C=I[0],E=I[1];return Object(a.useEffect)((function(){""!==t&&(x(!1),b.fetching(t,j).then((function(e){0===e.data.hits.length&&alert("Not valid input! Try again!"),E("pending"),o((function(t){return[].concat(Object(u.a)(t),Object(u.a)(e.data.hits))})),E("resolved"),v&&window.scrollBy({top:document.documentElement.clientHeight-160,behavior:"smooth"})})).catch((function(e){N(e),E("rejected")})))}),[j,v,t]),"idle"===C?null:"pending"===C?Object(s.jsx)(h.a,{type:"ThreeDots",color:"#00BFFF",height:100,width:100,timeout:3e3,className:"Loader"}):"rejected"===C?Object(s.jsx)("h2",{children:w.message}):"resolved"===C?Object(s.jsxs)("div",{children:[Object(s.jsx)("ul",{className:"ImageGallery",children:r.map((function(e){return Object(s.jsx)(p,{id:e.id,picture:e.webformatURL,modalPicture:e.largeImageURL},e.id)}))}),r.length>0&&Object(s.jsx)("div",{className:"DivButton",children:Object(s.jsx)(O,{data:function(){x(!0),m((function(e){return e+1})),window.scrollTo({top:document.documentElement.scrollHeight,behavior:"smooth"})}})})]}):void 0};var x=function(){var e=Object(a.useState)(""),t=Object(i.a)(e,2),c=t[0],n=t[1];return Object(s.jsxs)("div",{className:"App",children:[Object(s.jsx)(l,{onSubmit:function(e){n(e)}}),Object(s.jsx)(v,{searchValue:c})]})};o.a.render(Object(s.jsx)(n.a.StrictMode,{children:Object(s.jsx)(x,{})}),document.getElementById("root"))}},[[66,1,2]]]);
//# sourceMappingURL=main.0bff47fb.chunk.js.map