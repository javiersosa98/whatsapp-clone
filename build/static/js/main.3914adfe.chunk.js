(this["webpackJsonpwhatsapp-clone"]=this["webpackJsonpwhatsapp-clone"]||[]).push([[0],{100:function(e,t,c){},101:function(e,t,c){},102:function(e,t,c){},103:function(e,t,c){"use strict";c.r(t);var a=c(4),s=c.n(a),n=c(39),j=c.n(n),i=c(12),r=(c(86),c(45)),b=c(16),o=c(119),d=c(117),l=c(57),O=c.n(l),h=c(56),u=c.n(h),m=c(72),x=c.n(m),p=c(73),f=c.n(p),v=c(74),g=c.n(v),_=c(66),N=c(32),S=c(58),w=Object(_.a)({apiKey:"AIzaSyAKzb4GJk19TdeP1ab5Ty0CZvlLDlkfWZQ",authDomain:"whatsapp-clone-e29ba.firebaseapp.com",projectId:"whatsapp-clone-e29ba",storageBucket:"whatsapp-clone-e29ba.appspot.com",messagingSenderId:"760851288080",appId:"1:760851288080:web:cdaeba9214982b46ed3a95",measurementId:"G-5TRXDZ4Q82"}),C=Object(N.d)(w),y=Object(S.b)(w),I=new S.a,k=C,D=c(9),E=Object(a.createContext)(),L=function(e){var t=e.reducer,c=e.initialState,s=e.children;return Object(D.jsx)(E.Provider,{value:Object(a.useReducer)(t,c),children:s})},T=function(){return Object(a.useContext)(E)},R=c(49);c(90);var A=function(){var e=Object(a.useState)(""),t=Object(i.a)(e,2),c=t[0],s=t[1],n=Object(a.useState)(""),j=Object(i.a)(n,2),r=j[0],l=j[1],h=Object(b.f)().roomId,m=Object(a.useState)(""),p=Object(i.a)(m,2),v=p[0],_=p[1],S=Object(a.useState)([]),w=Object(i.a)(S,2),C=w[0],y=w[1],I=T(),E=Object(i.a)(I,2),L=E[0].user;return E[1],Object(a.useEffect)((function(){if(h){Object(N.e)(Object(N.c)(k,"rooms","".concat(h)),(function(e){_(e.data().name)}));var e=Object(N.g)(Object(N.b)(k,"rooms","".concat(h),"messages"),Object(N.f)("timestamp","asc"));Object(N.e)(e,(function(e){y(e.docs.map((function(e){return e.data()})))}))}}),[h]),Object(a.useEffect)((function(){l(Math.floor(5e3*Math.random()))}),[h]),Object(D.jsxs)("div",{className:"chat",children:[Object(D.jsxs)("div",{className:"chat__header",children:[Object(D.jsx)(o.a,{src:"https://avatars.dicebear.com/api/human/".concat(r,".svg")}),Object(D.jsxs)("div",{className:"chat__headerInfo",children:[Object(D.jsx)("h3",{children:v}),Object(D.jsxs)("p",{children:["Last seen "," "," ",function(){var e,t;return C.length>0?new Date(null===(e=C[C.length-1])||void 0===e||null===(t=e.timestamp)||void 0===t?void 0:t.toDate()).toLocaleString():"..."}()]})]}),Object(D.jsxs)("div",{className:"chat__headerRight",children:[Object(D.jsx)(d.a,{children:Object(D.jsx)(u.a,{})}),Object(D.jsx)(d.a,{children:Object(D.jsx)(x.a,{})}),Object(D.jsx)(d.a,{children:Object(D.jsx)(O.a,{})})]})]}),Object(D.jsx)("div",{className:"chat__body",children:C.map((function(e){var t;return Object(D.jsxs)("p",{className:"chat__message ".concat(e.name===L.displayName&&"chat__reciever"),children:[Object(D.jsx)("span",{className:"chat__name",children:e.name}),e.message,Object(D.jsx)("span",{className:"chat__timestamp",children:new Date(null===(t=e.timestamp)||void 0===t?void 0:t.toDate()).toLocaleString()})]})}))}),Object(D.jsxs)("div",{className:"chat__footer",children:[Object(D.jsx)(d.a,{children:Object(D.jsx)(f.a,{})}),Object(D.jsxs)("form",{children:[Object(D.jsx)("input",{value:c,onChange:function(e){return s(e.target.value)},placeholder:"Type a message",type:"text"}),Object(D.jsx)("button",{onClick:function(e){e.preventDefault(),console.log("You type >>> ",c),Object(N.a)(Object(N.b)(k,"rooms","".concat(h),"messages"),{message:c,name:L.displayName,timestamp:Object(R.h)()}),s("")},type:"submit",children:"Send a message"})]}),Object(D.jsx)(d.a,{children:Object(D.jsx)(g.a,{})})]})]})},M=c(75),P=c.n(M),F=c(76),W=c.n(F);c(99);var B=function(e){var t,c=e.id,s=e.name,n=e.addNewChat,j=Object(a.useState)(""),b=Object(i.a)(j,2),d=b[0],l=b[1],O=Object(a.useState)([]),h=Object(i.a)(O,2),u=h[0],m=h[1];return Object(a.useEffect)((function(){if(c){var e=Object(N.g)(Object(N.b)(k,"rooms","".concat(c),"messages"),Object(N.f)("timestamp","desc"));Object(N.e)(e,(function(e){m(e.docs.map((function(e){return e.data()})))}))}}),[c]),Object(a.useEffect)((function(){l(Math.floor(5e3*Math.random()))}),[]),n?Object(D.jsx)("div",{onClick:function(){var e=prompt("Please enter name for chat room");e&&Object(N.a)(Object(N.b)(k,"rooms"),{name:e})},className:"sidebarChat",children:Object(D.jsx)("h2",{children:"Add new chat"})}):Object(D.jsx)(r.b,{to:"/rooms/".concat(c),children:Object(D.jsxs)("div",{className:"sidebarChat",children:[Object(D.jsx)(o.a,{src:"https://avatars.dicebear.com/api/human/".concat(d,".svg")}),Object(D.jsxs)("div",{className:"sidebarChat__info",children:[Object(D.jsx)("h2",{children:s}),Object(D.jsx)("p",{children:null===(t=u[0])||void 0===t?void 0:t.message})]})]})})};c(100);var G=function(){var e=Object(a.useState)([]),t=Object(i.a)(e,2),c=t[0],s=t[1],n=T(),j=Object(i.a)(n,2),r=j[0].user;return j[1],Object(a.useEffect)((function(){Object(N.e)(Object(N.b)(k,"rooms"),(function(e){s(e.docs.map((function(e){return{id:e.id,data:e.data()}})))}))}),[]),Object(D.jsxs)("div",{className:"sidebar",children:[Object(D.jsxs)("div",{className:"sidebar__header",children:[Object(D.jsx)(o.a,{src:null===r||void 0===r?void 0:r.photoURL}),Object(D.jsxs)("div",{className:"sidebar__headerRight",children:[Object(D.jsx)(d.a,{children:Object(D.jsx)(P.a,{})}),Object(D.jsx)(d.a,{children:Object(D.jsx)(W.a,{})}),Object(D.jsx)(d.a,{children:Object(D.jsx)(O.a,{})})]})]}),Object(D.jsx)("div",{className:"sidebar__search",children:Object(D.jsxs)("div",{className:"sidebar__searchContainer",children:[Object(D.jsx)(u.a,{}),Object(D.jsx)("input",{placeholder:"Search or start new chat",type:"text"})]})}),Object(D.jsxs)("div",{className:"sidebar__chats",children:[Object(D.jsx)(B,{addNewChat:!0}),c.map((function(e){return Object(D.jsx)(B,{id:e.id,name:e.data.name},e.id)}))]})]})},J=c(77),Z=c(118),z=c(65),K="SET_USER",Q=function(e,t){return console.log(t),t.type===K?Object(z.a)(Object(z.a)({},e),{},{user:t.user}):e};c(101);var U=function(){var e=T(),t=Object(i.a)(e,2);Object(J.a)(t[0]);var c=t[1];return Object(D.jsx)("div",{className:"login",children:Object(D.jsxs)("div",{className:"login__container",children:[Object(D.jsx)("img",{src:"https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg",alt:""}),Object(D.jsx)("div",{className:"login__text",children:Object(D.jsx)("h1",{children:"Sign in to WhatsApp"})}),Object(D.jsx)(Z.a,{onClick:function(){Object(S.c)(y,I).then((function(e){c({type:K,user:e.user})})).catch((function(e){return alert(e.message)}))},children:"Sign In With Google"})]})})};var X=function(){var e=T(),t=Object(i.a)(e,2),c=t[0].user;return t[1],Object(D.jsx)("div",{className:"app",children:c?Object(D.jsx)("div",{className:"app__body",children:Object(D.jsxs)(r.a,{children:[Object(D.jsx)(G,{}),Object(D.jsxs)(b.c,{children:[Object(D.jsx)(b.a,{path:"/rooms/:roomId",children:Object(D.jsx)(A,{})}),Object(D.jsx)(b.a,{path:"/",children:Object(D.jsx)(A,{})})]})]})}):Object(D.jsx)(U,{})})},Y=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,120)).then((function(t){var c=t.getCLS,a=t.getFID,s=t.getFCP,n=t.getLCP,j=t.getTTFB;c(e),a(e),s(e),n(e),j(e)}))};c(102);j.a.render(Object(D.jsx)(s.a.StrictMode,{children:Object(D.jsx)(L,{initialState:{user:null},reducer:Q,children:Object(D.jsx)(X,{})})}),document.getElementById("root")),Y()},86:function(e,t,c){},90:function(e,t,c){},99:function(e,t,c){}},[[103,1,2]]]);
//# sourceMappingURL=main.3914adfe.chunk.js.map