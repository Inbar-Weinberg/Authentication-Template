(this.webpackJsonpauthentication=this.webpackJsonpauthentication||[]).push([[0],{42:function(e,t,n){e.exports={navbar:"Navbar_navbar__1WE_a"}},43:function(e,t,n){e.exports={home:"Home_home__3G4Yd"}},77:function(e,t,n){},78:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(25),i=n.n(c),s=n(10),o=n.n(s),j=n(18),b=n(6),l=n(81),u=n(41),m=n.n(u),d=n(26),h=n(22),O=n.n(h),p={name:O.a.get("name"),loggedIn:O.a.get("loggedIn"),email:O.a.get("email")},x=Object(d.b)({name:"login",initialState:p,reducers:{update:function(e){e.name=O.a.get("name"),e.loggedIn=O.a.get("loggedIn"),e.email=O.a.get("email")}}}),g=x.actions.update,f=function(e){return e.login.loggedIn},w=function(e){return e.login.name},v=x.reducer,y=Object(d.a)({reducer:{login:v}}),F=m.a.create({withCredentials:!0});F.interceptors.response.use((function(e){return y.dispatch(g()),e.data}),(function(e){if(y.dispatch(g()),e.response)throw e.response.data;if(e.request)throw e.request;throw e.message}));var S,k,E,C,I,P,_,z,D=F,N=n(17),q=n(15),B=n(42),H=n.n(B),L=n(1),R=function(){return Object(L.jsxs)("nav",{className:H.a.navbar,children:[Object(L.jsx)(N.b,{to:"/",children:"Home"}),Object(q.b)(f)?Object(L.jsx)(N.b,{to:"/logout",children:"Logout"}):Object(L.jsxs)(L.Fragment,{children:[Object(L.jsx)(N.b,{to:"/register",children:"Register"}),Object(L.jsx)(N.b,{to:"/login",children:"Login"})]})]})},A=n(43),G=n.n(A),J=function(){var e=Object(q.b)(w),t=Object(q.b)(f);return Object(L.jsxs)("div",{className:G.a.home,children:[Object(L.jsx)("h2",{children:"Home Page"}),t&&Object(L.jsxs)("h3",{children:["hello ",e]})]})},W=n(13),M=n(16),Y=n(11),K=Y.b.form(S||(S=Object(M.a)(["\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  flex-direction: column;\n  margin: auto;\n  width: 50%;\n  margin: auto;\n  margin-top: 3rem;\n"]))),Q=Y.b.button(k||(k=Object(M.a)(["\n  font-size: 1em;\n  margin: 1em;\n  padding: 0.25em 1em;\n  border-radius: 3px;\n  color: ",";\n"])),(function(e){return e.theme.main})),T=Y.b.input(E||(E=Object(M.a)(["\n  padding: 0.5rem;\n  margin-top: 0rem;\n  margin-bottom: 1rem;\n  width: 50ch;\n"]))),U=Y.b.h2(C||(C=Object(M.a)(["\n  margin: 0;\n"]))),V=function(){var e=Object(a.useState)("Inbar.weinberg@gmail.com"),t=Object(W.a)(e,2),n=t[0],r=t[1],c=Object(a.useState)("123"),i=Object(W.a)(c,2),s=i[0],b=i[1],l=Object(a.useState)("not logged in"),u=Object(W.a)(l,2),m=u[0],d=u[1];function h(){return(h=Object(j.a)(o.a.mark((function e(t){return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),e.t0=d,e.next=4,D.post("/users/login",{email:n,password:s});case 4:e.t1=e.sent,(0,e.t0)(e.t1);case 6:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var O=function(e){var t=e.target;switch(t.name){case"Email":r(t.value);break;case"Password":b(t.value)}};return Object(L.jsx)(L.Fragment,{children:Object(L.jsxs)(K,{children:[Object(L.jsxs)("label",{htmlFor:"email",children:[Object(L.jsx)(U,{children:"Email (unique):"})," "]}),Object(L.jsx)(T,{id:"email",value:n,onChange:O,name:"Email"}),Object(L.jsx)("label",{htmlFor:"password",children:Object(L.jsx)(U,{children:"Password:"})}),Object(L.jsx)(T,{id:"password",type:"password",value:s,onChange:O,name:"Password"})," ",Object(L.jsx)(Q,{type:"submit",onClick:function(e){return h.apply(this,arguments)},children:"Login"}),m&&Object(L.jsx)("p",{children:m})]})})},X=Y.b.form(I||(I=Object(M.a)(["\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  flex-direction: column;\n  margin: auto;\n  width: 50%;\n  max-width: 150ch;\n  margin-top: 3rem;\n  border-bottom: 1px solid black;\n"]))),Z=Y.b.button(P||(P=Object(M.a)(["\n  font-size: 1em;\n  margin: 1em;\n  padding: 0.25em 1em;\n  border-radius: 3px;\n  color: ",";\n"])),(function(e){return e.theme.main})),$=Y.b.input(_||(_=Object(M.a)(["\n  padding: 0.5rem;\n  margin-top: 0rem;\n  margin-bottom: 2rem;\n  width: 50ch;\n"]))),ee=Y.b.h2(z||(z=Object(M.a)(["\n  margin: 0;\n"]))),te=function(){var e=Object(a.useState)("Inbar.weinberg@gmail.com"),t=Object(W.a)(e,2),n=t[0],r=t[1],c=Object(a.useState)("123"),i=Object(W.a)(c,2),s=i[0],b=i[1],l=Object(a.useState)("inbar"),u=Object(W.a)(l,2),m=u[0],d=u[1],h=Object(a.useState)(),O=Object(W.a)(h,2),p=O[0],x=O[1];function g(){return(g=Object(j.a)(o.a.mark((function e(t){return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),e.t0=x,e.next=4,D.post("/users/register",{name:m,email:n,password:s});case 4:e.t1=e.sent,(0,e.t0)(e.t1);case 6:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var f=function(e){var t=e.target;switch(t.name){case"Email":r(t.value);break;case"Password":b(t.value);break;case"Name":d(t.value)}};return Object(L.jsxs)(X,{children:[Object(L.jsx)("label",{htmlFor:"name",children:Object(L.jsx)(ee,{children:"Name:"})}),Object(L.jsx)($,{id:"name",value:m,onChange:f,name:"Name"}),Object(L.jsxs)("label",{htmlFor:"email",children:[Object(L.jsx)(ee,{children:"Email (unique):"})," "]}),Object(L.jsx)($,{id:"email",value:n,onChange:f,name:"Email"}),Object(L.jsx)("label",{htmlFor:"password",children:Object(L.jsx)(ee,{children:"Password:"})}),Object(L.jsx)($,{id:"password",type:"password",value:s,onChange:f,name:"Password"}),Object(L.jsx)(Z,{type:"submit",onClick:function(e){return g.apply(this,arguments)},children:"Register"}),p&&Object(L.jsx)("p",{children:p})]})},ne=function(){var e=Object(a.useState)(),t=Object(W.a)(e,2),n=t[0],r=t[1];return Object(a.useEffect)((function(){function e(){return(e=Object(j.a)(o.a.mark((function e(){return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.t0=r,e.next=3,D.post("/users/logout");case 3:e.t1=e.sent,(0,e.t0)(e.t1);case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[n]),Object(L.jsx)("div",{children:null!==n&&void 0!==n?n:Object(L.jsx)(b.a,{to:"/"})})};var ae=function(){return Object(l.a)("authorization",Object(j.a)(o.a.mark((function e(){return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,D.get("/authorization");case 2:case"end":return e.stop()}}),e)}))),{retry:1}),Object(L.jsxs)(L.Fragment,{children:[Object(L.jsx)(R,{}),Object(L.jsxs)(b.d,{children:[Object(L.jsx)(b.b,{path:"/",exact:!0,children:Object(L.jsx)(J,{})}),Object(L.jsx)(b.b,{path:"/register",exact:!0,children:Object(q.b)(f)?Object(L.jsx)(b.a,{to:"/"}):Object(L.jsx)(te,{})}),Object(L.jsx)(b.b,{path:"/login",exact:!0,children:Object(q.b)(f)?Object(L.jsx)(b.a,{to:"/"}):Object(L.jsx)(V,{})}),Object(L.jsx)(b.b,{path:"/logout",exact:!0,children:Object(L.jsx)(ne,{})}),Object(L.jsx)(b.a,{to:"/"})]})]})},re={main:"red",colors:{powderWhite:"#FFFDF9",persianGreen:"#06B49A",lightBlue:"#AFDBD2",onyx:"#36313D"},fonts:["sans-serif","Roboto"],fontSize:"1.2rem",fontSizes:{small:"1em",medium:"2em",large:"3em"}},ce=function(e){var t=e.children;return Object(L.jsx)(Y.a,{theme:re,children:t})},ie=(n(77),n(80)),se=n(47),oe=new ie.a;i.a.render(Object(L.jsx)(r.a.StrictMode,{children:Object(L.jsx)(se.a,{client:oe,contextSharing:!0,children:Object(L.jsx)(ce,{children:Object(L.jsx)(q.a,{store:y,children:Object(L.jsx)(N.a,{children:Object(L.jsx)(ae,{})})})})})}),document.getElementById("root"))}},[[78,1,2]]]);
//# sourceMappingURL=main.bf8bdb25.chunk.js.map