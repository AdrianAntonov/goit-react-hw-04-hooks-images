(this["webpackJsonpgoit-react-hw-03-image-finder"]=this["webpackJsonpgoit-react-hw-03-image-finder"]||[]).push([[0],{27:function(e,t,c){},68:function(e,t,c){"use strict";c.r(t);var a=c(0),n=c.n(a),r=c(5),i=c.n(r),o=c(4),s=c(6),u=(c(12),c(27),c(1));var l=function(e){var t=e.onSubmit,c=Object(a.useState)(""),n=Object(o.a)(c,2),r=n[0],i=n[1];return Object(u.jsx)("header",{className:"Searchbar",children:Object(u.jsxs)("form",{className:"SearchForm",onSubmit:function(e){""===r.trim()&&Object(s.b)("Not valid input! Try again!"),e.preventDefault(),t(r),i("")},children:[Object(u.jsx)("button",{type:"submit",className:"SearchForm-button",children:Object(u.jsx)("span",{className:"SearchForm-button-label",children:"Search"})}),Object(u.jsx)("input",{className:"SearchForm-input",type:"text",value:r,autoComplete:"off",autoFocus:!0,placeholder:"Search images and photos",onChange:function(e){i(e.target.value)}})]})})},j=c(9),d=c(21),b=c.n(d);var m={fetching:function(e,t){return b.a.get("".concat("https://pixabay.com/api/","?q=").concat(e,"&page=").concat(t,"&key=").concat("23540624-9aec9adb1c30af208be906523","&image_type=photo&orientation=horizontal&per_page=12"))}},h=c(22),O=c.n(h);var f=function(){return Object(u.jsxs)("div",{children:[Object(u.jsx)(O.a,{type:"ThreeDots",color:"#00BFFF",height:100,width:100,timeout:3e3,className:"Loader"})," "]})};var g=function(e){var t=e.data;return Object(u.jsx)("button",{className:"Button",onClick:t,children:"Load More"})},p=document.querySelector("#modal-root");var v=function(e){var t=e.onClose,c=e.children,n=function(e){"Escape"===e.code&&t()};return Object(a.useEffect)((function(){return window.addEventListener("keydown",n),function(){window.removeEventListener("keydown",n)}})),Object(r.createPortal)(Object(u.jsx)("div",{className:"Overlay",onClick:function(e){e.currentTarget===e.target&&t()},children:Object(u.jsx)("div",{className:"Modal",children:c})}),p)};var x=function(e){var t=e.id,c=e.picture,n=e.modalPicture,r=Object(a.useState)(!1),i=Object(o.a)(r,2),s=i[0],l=i[1],j=function(){l(!s)},d=function(e){t===+e.target.id&&j()};return Object(u.jsxs)("li",{className:"ImageGalleryItem",children:[s&&Object(u.jsx)(v,{onClose:j,children:Object(u.jsx)("img",{onClick:d,id:t,src:n,alt:t,className:"ImageGalleryItem-image"})}),Object(u.jsx)("img",{onClick:d,id:t,src:c,alt:t,className:"ImageGalleryItem-image"})]},t)};var S=function(e){var t=e.searchValue,c=Object(a.useState)([]),n=Object(o.a)(c,2),r=n[0],i=n[1],l=Object(a.useState)(1),d=Object(o.a)(l,2),b=d[0],h=d[1],O=Object(a.useState)(""),p=Object(o.a)(O,2),v=p[0],S=p[1],y=Object(a.useState)("idle"),N=Object(o.a)(y,2),w=N[0],k=N[1];return Object(a.useEffect)((function(){h(1),i([])}),[t]),Object(a.useEffect)((function(){""!==t&&(1===b&&k("pending"),m.fetching(t,b).then((function(e){0===e.data.hits.length&&Object(s.b)("Not valid input! Try again!"),i(1===b?Object(j.a)(e.data.hits):function(t){return[].concat(Object(j.a)(t),Object(j.a)(e.data.hits))}),k("resolved"),b>1&&window.scrollTo({top:document.documentElement.scrollHeight,behavior:"smooth"})})).catch((function(e){S(e),k("rejected")})))}),[b,t]),"idle"===w?null:"pending"===w?Object(u.jsx)(f,{}):"rejected"===w?Object(u.jsx)("h2",{children:v.message}):"resolved"===w?Object(u.jsxs)("div",{children:[Object(u.jsx)("ul",{className:"ImageGallery",children:r.map((function(e){return Object(u.jsx)(x,{id:e.id,picture:e.webformatURL,modalPicture:e.largeImageURL},e.id)}))}),r.length>0&&Object(u.jsx)("div",{className:"DivButton",children:Object(u.jsx)(g,{data:function(){return h((function(e){return e+1}))}})})]}):void 0};var y=function(){var e=Object(a.useState)(""),t=Object(o.a)(e,2),c=t[0],n=t[1];return Object(u.jsxs)("div",{className:"App",children:[Object(u.jsx)(l,{onSubmit:function(e){n(e)}}),Object(u.jsx)(S,{searchValue:c}),Object(u.jsx)(s.a,{position:"top-center",autoClose:3e3})]})};i.a.render(Object(u.jsx)(n.a.StrictMode,{children:Object(u.jsx)(y,{})}),document.getElementById("root"))}},[[68,1,2]]]);
//# sourceMappingURL=main.bba4f7e4.chunk.js.map