(this["webpackJsonpinfobip-exchange-agenda-demo-client"]=this["webpackJsonpinfobip-exchange-agenda-demo-client"]||[]).push([[0],{188:function(e,t,a){"use strict";var n=a(22),c=a(269),i=a(1),r=["children","value","index"];t.a=function(e){var t=e.children,a=e.value,s=e.index,l=Object(c.a)(e,r);return Object(i.jsx)("div",Object(n.a)(Object(n.a)({role:"tabpanel",hidden:a!==s,id:"full-width-tabpanel-".concat(s),"aria-labelledby":"full-width-tab-".concat(s)},l),{},{children:a===s&&Object(i.jsx)("div",{children:t})}))}},255:function(e,t,a){"use strict";(function(e){var n=a(22),c=a(6),i=a(0),r=a(256),s=a(120),l=a(65),o=a(284),j=a(286),d=a(277),u=a(13),b=a(258),h=a(272),O=a(89),x=a(1),f=function(){var t,a=Object(i.useState)(!1),n=Object(c.a)(a,2),r=n[0],l=n[1],f=Object(i.useState)(O.b),m=Object(c.a)(f,2),p=m[0],v=m[1],g=Object(s.c)().authService,y=null===(t=e)||void 0===t?void 0:"true";return Object(i.useEffect)((function(){if(y)if(g.isAuthenticated()||g.getCodeFromLocation(window.location)){var e=g.getAuthTokens(),t=e.token,a=e.username,n=e.locale;v({token:t,username:a,locale:n,onLogout:function(){localStorage.clear(),g.logout()}}),l(!1)}else l(!0),g.authorize()}),[g,y]),Object(x.jsxs)(x.Fragment,{children:[(!y||g.isAuthenticated())&&Object(x.jsx)(O.a.Provider,{value:p,children:Object(x.jsx)(d.a,{children:Object(x.jsx)(u.c,{children:Object(x.jsxs)(u.a,{path:"/",children:[Object(x.jsx)(u.a,{index:!0,element:Object(x.jsx)(b.a,{})}),Object(x.jsx)(u.a,{path:"config",element:Object(x.jsx)(h.a,{})})]})})})}),r&&Object(x.jsx)(o.a,{open:!0,style:{zIndex:1},children:Object(x.jsx)(j.a,{color:"inherit"})})]})};t.a=function(){var e=Object(i.useState)(l.b),t=Object(c.a)(e,2),a=t[0],o=t[1];return Object(x.jsx)(l.a.Provider,{value:Object(n.a)(Object(n.a)({},a),{},{updateAlertContext:function(e){o(Object(n.a)(Object(n.a)({},a),e))}}),children:Object(x.jsx)(s.a,{authService:r.a,children:Object(x.jsx)(f,{})})})}}).call(this,a(38))},256:function(e,t,a){"use strict";var n=new(a(120).b)({clientId:'"2b2f095ff4569879f7f234a84214b32e"',provider:"https://portal.infobip.com/conversations/api/amg/exchange/1/oauth",redirectUri:"https://restaurant-reservations-demo-oauth.azurewebsites.net/",scopes:["conversations"],location:window.location});t.a=n},258:function(e,t,a){"use strict";(function(e){var n=a(6),c=a(0),i=a.n(c),r=a(259),s=a(35),l=a(283),o=a(46),j=a(34),d=a(284),u=a(444),b=a(285),h=a(443),O=a(287),x=a(268),f=a.n(x),m=a(280),p=a(271),v=a.n(p),g=a(286),y=a(188),C=a(65),w=a(281),S=a(89),F=a(1);t.a=function(){var t,a=Object(s.a)(),x=i.a.useState(0),p=Object(n.a)(x,2),z=p[0],k=p[1],R=null===(t=e)||void 0===t?void 0:"true",A=Object(c.useContext)(S.a),T=Object(c.useContext)(C.a);return Object(F.jsx)(l.a,{fixed:!0,children:Object(F.jsxs)(o.a,{container:!0,spacing:2,justifyContent:"center",children:[Object(F.jsx)("br",{}),Object(F.jsx)(o.a,{item:!0,xs:11,md:10,children:Object(F.jsxs)(j.a,{variant:"h4",component:"h4",children:["Awesome Restaurant",R&&(null===A||void 0===A?void 0:A.username)&&Object(F.jsx)(w.a,{})]})}),Object(F.jsx)("br",{}),Object(F.jsxs)(o.a,{item:!0,xs:12,md:10,children:[Object(F.jsx)(d.a,{open:!!T.isLoading,style:{zIndex:1},children:Object(F.jsx)(g.a,{color:"inherit"})}),T.isVisible&&Object(F.jsxs)(F.Fragment,{children:[Object(F.jsx)(u.a,{severity:T.type,action:Object(F.jsx)(b.a,{"aria-label":"close",color:"inherit",size:"small",onClick:function(){T.updateAlertContext({isVisible:!1})},children:Object(F.jsx)(v.a,{fontSize:"inherit"})}),children:T.message}),Object(F.jsx)("br",{})]}),Object(F.jsxs)(h.a,{value:z,onChange:function(e,t){k(t)},"aria-label":"Reservations",children:[Object(F.jsx)(O.a,{value:0,label:"Manage reservations",wrapped:!0}),Object(F.jsx)(O.a,{value:1,label:"Create Reservation"})]}),Object(F.jsxs)(f.a,{axis:"rtl"===a.direction?"x-reverse":"x",index:z,onChangeIndex:function(e){k(e)},children:[Object(F.jsxs)(y.a,{value:z,index:0,dir:a.direction,children:[Object(F.jsx)("br",{}),Object(F.jsx)(r.a,{})]}),Object(F.jsx)(y.a,{value:z,index:1,dir:a.direction,children:Object(F.jsx)(m.a,{})})]})]})]})})}}).call(this,a(38))},259:function(e,t,a){"use strict";var n,c=a(3),i=a(22),r=a(15),s=a(26),l=a(6),o=a(32),j=a(0),d=a(264),u=a.n(d),b=a(52),h=a(60),O=a(46),x=a(129),f=a(193),m=a(451),p=a(130),v=a(452),g=a(34),y=a(450),C=a(445),w=a(442),S=a(446),F=a(453),z=a(435),k=a(436),R=a(437),A=a(438),T=a(439),M=a(440),L=a(156),_=a(104),D=a(448),N=a(441),E=a(65),I=a(1),U=h.a.div(n||(n=Object(o.a)(["\n  & > div {\n    width: 100%;\n  }\n"])));t.a=function(){var e=Object(j.useState)(),t=Object(l.a)(e,2),a=t[0],n=t[1],o=Object(j.useState)(!1),d=Object(l.a)(o,2),h=d[0],H=d[1],Y=Object(j.useState)(""),P=Object(l.a)(Y,2),V=P[0],J=P[1],W=Object(j.useState)(),K=Object(l.a)(W,2),B=K[0],q=K[1],Z=Object(j.useState)(),G=Object(l.a)(Z,2),$=G[0],Q=G[1],X=Object(j.useContext)(E.a),ee=function(){var e=Object(s.a)(Object(r.a)().mark((function e(){return Object(r.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!a){e.next=5;break}return e.next=3,fetch("".concat(b.b,"/").concat(a.id),{method:"PUT",headers:{"Content-type":"application/json; charset=UTF-8"},body:JSON.stringify(a)}).catch((function(e){X.updateAlertContext({type:"error",message:e,isVisible:!0,isLoading:!1})}));case 3:X.updateAlertContext({type:"success",message:"Your reservation has been updated succesfully!",isVisible:!0,isLoading:!1}),H(!1);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),te=function(){var e=Object(s.a)(Object(r.a)().mark((function e(){return Object(r.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!a){e.next=4;break}return H(!1),e.next=4,fetch("".concat(b.b,"/").concat(a.id),{method:"DELETE",headers:{"Content-type":"application/json; charset=UTF-8"},body:JSON.stringify(a)}).then((function(){X.updateAlertContext({type:"success",message:"Your reservation has been deleted succesfully!",isVisible:!0,isLoading:!1}),H(!1),J(""),n(void 0)}));case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),ae=function(e,t){var r,s,l,o,j,d,u=new Date(e||"");switch(s=u.getMinutes(),l=u.getHours(),o=u.getUTCDate(),j=u.getUTCMonth()+1,d=u.getUTCFullYear(),t){case"date":e&&(r="".concat(j,"/").concat(o,"/").concat(d),q(e));break;case"hour":r="".concat(l,":").concat(s&&s<10?"0".concat(s):s),Q(e)}n(Object(i.a)(Object(i.a)({},a),{},Object(c.a)({},t,r)))},ne=function(){Object(s.a)(Object(r.a)().mark((function e(){var t,a;return Object(r.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("".concat(b.b,"/").concat(V));case 2:return t=e.sent,e.next=5,t.json();case 5:(a=e.sent)&&a.id?(n(a),q(new Date(a.date?a.date:"")),Q(new Date(a.hour?"".concat(a.date," ").concat(a.hour):"")),X.updateAlertContext({isVisible:!0,type:"success",isLoading:!1,message:""})):(n(void 0),X.updateAlertContext({type:"error",message:a.error,isVisible:!0,isLoading:!1}));case 7:case"end":return e.stop()}}),e)})))()};return Object(I.jsxs)(I.Fragment,{children:[Object(I.jsxs)(O.a,{container:!0,children:[Object(I.jsx)(O.a,{item:!0,xs:10,md:11,children:Object(I.jsx)(x.a,{fullWidth:!0,type:"search",onChange:function(e){J(e.currentTarget.value)},label:"Enter your email",onKeyDown:function(e){"Enter"===e.key&&ne()}})}),Object(I.jsx)(O.a,{item:!0,xs:2,md:1,justifyContent:"center",justifyItems:"center",display:"flex",children:Object(I.jsx)(f.a,{disabled:!V.length,onClick:ne,children:"Search"})})]}),Object(I.jsx)("br",{}),a&&Object(I.jsx)(m.a,{variant:"outlined",children:Object(I.jsxs)(p.a,{sx:{m:2,pd:2},children:[Object(I.jsxs)(v.a,{children:[Object(I.jsx)(u.a,{}),Object(I.jsxs)(p.a,{sx:{display:"flex",flexFlow:"row",pt:2},children:[Object(I.jsx)(g.a,{sx:{fontSize:20},variant:"h5",children:"Reservation to:"}),Object(I.jsx)(g.a,{sx:{fontSize:20,ml:1},color:"text.secondary",children:a.host_name})]}),Object(I.jsx)(p.a,{sx:{display:"flex",flexFlow:"row",pt:2},children:h?Object(I.jsxs)(I.Fragment,{children:[Object(I.jsx)(O.a,{item:!0,xs:6,md:6,children:Object(I.jsx)(L.a,{dateAdapter:_.a,children:Object(I.jsx)(U,{children:Object(I.jsx)(D.a,{"data-test-id":"date",label:"Date",inputFormat:"MM/DD/YYYY",value:B,onChange:function(e){return ae(e,"date")},renderInput:function(e){return Object(I.jsx)(x.a,Object(i.a)({},e))}})})})}),Object(I.jsx)(O.a,{item:!0,xs:6,md:6,children:Object(I.jsx)(L.a,{dateAdapter:_.a,children:Object(I.jsx)(O.a,{container:!0,spacing:2,rowSpacing:"1rem",children:Object(I.jsx)(O.a,{item:!0,xs:12,children:Object(I.jsx)(U,{children:Object(I.jsx)(N.a,{"data-test-id":"hour",ampm:!1,label:"Hour",value:$,onChange:function(e){return ae(e,"hour")},renderInput:function(e){return Object(I.jsx)(x.a,Object(i.a)({},e))},minutesStep:30})})})})})})]}):Object(I.jsxs)(I.Fragment,{children:[Object(I.jsx)(g.a,{sx:{fontSize:20,mr:1},variant:"h5",children:Object(I.jsx)(z.a,{})}),Object(I.jsx)(g.a,{sx:{fontSize:20},color:"text.secondary",children:a.date}),Object(I.jsx)(g.a,{sx:{fontSize:20,ml:3},variant:"h5",children:Object(I.jsx)(k.a,{})}),Object(I.jsx)(g.a,{sx:{fontSize:20,ml:1},color:"text.secondary",children:a.hour})]})}),Object(I.jsx)(p.a,{sx:{display:"flex",flexFlow:"row",pt:2},children:h?Object(I.jsxs)(y.a,{fullWidth:!0,children:[Object(I.jsx)(C.a,{id:"demo-simple-select-label",children:Object(I.jsx)(R.a,{})}),Object(I.jsx)(w.a,{name:"party_size",value:a.party_size,label:"size",onChange:function(e){n(Object(i.a)(Object(i.a)({},a),{},Object(c.a)({},e.target.name,e.target.value)))},children:Array.from(Array(22),(function(e,t){return t>0&&Object(I.jsx)(S.a,{value:t,children:"".concat(t<21?t:" "," ").concat(1===t?"person":t<21?"people":"Larger party")},t)}))})]}):Object(I.jsxs)(I.Fragment,{children:[Object(I.jsx)(g.a,{sx:{fontSize:20,pt:.3},variant:"h5",children:Object(I.jsx)(A.a,{})}),Object(I.jsx)(g.a,{sx:{fontSize:20,ml:1},color:"text.secondary",children:a.party_size})]})}),a.additionalFields&&a.additionalFields.map((function(e){return Object(I.jsxs)(p.a,{sx:{display:"flex",flexFlow:"row",pt:2},children:[Object(I.jsxs)(g.a,{sx:{fontSize:20},variant:"h5",children:[e.name,":"]}),Object(I.jsx)(g.a,{sx:{fontSize:20,ml:1},color:"text.secondary",children:e.value})]},e.name)}))]}),Object(I.jsxs)(F.a,{sx:{display:"flex",flexFlow:"row-reverse"},children:[Object(I.jsx)(f.a,{size:"small",onClick:h?function(){H(!1),Object(s.a)(Object(r.a)().mark((function e(){var t,c;return Object(r.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("".concat(b.b,"/").concat(null===a||void 0===a?void 0:a.host_email));case 2:return t=e.sent,e.next=5,t.json();case 5:(c=e.sent)&&c.id&&(n(c),q(new Date(c.date?c.date:"")),Q(new Date(c.hour?"".concat(c.date," ").concat(c.hour):"")));case 7:case"end":return e.stop()}}),e)})))()}:te,startIcon:Object(I.jsx)(T.a,{}),children:h?"Cancel":"Delete"}),Object(I.jsx)(f.a,{size:"small",sx:{pr:5},onClick:h?ee:function(){H(!0)},startIcon:Object(I.jsx)(M.a,{}),children:h?"Save":"Edit"})]})]})})]})}},272:function(e,t,a){"use strict";var n=a(3),c=a(16),i=a(22),r=a(15),s=a(26),l=a(6),o=a(0),j=a(283),d=a(46),u=a(34),b=a(454),h=a(449),O=a(455),x=a(456),f=a(194),m=a(91),p=a(457),v=a(129),g=a(275),y=a.n(g),C=a(276),w=a.n(C),S=a(273),F=a.n(S),z=a(274),k=a.n(z),R=a(52),A=a(1),T={name:"",placeHolder:"",disabled:"false",required:"false",additional:"true",saved:"true"};t.a=function(){var e=Object(o.useState)([]),t=Object(l.a)(e,2),a=t[0],g=t[1];Object(o.useEffect)((function(){Object(s.a)(Object(r.a)().mark((function e(){var t,a;return Object(r.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("".concat(R.a),{});case 2:return t=e.sent,e.next=5,t.json();case 5:(a=e.sent).config&&g(a.config.fields);case 7:case"end":return e.stop()}}),e)})))()}),[]);var C=function(){var e=Object(s.a)(Object(r.a)().mark((function e(t,n){var s,l;return Object(r.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return s=Object(i.a)(Object(i.a)({},t),{},{disabled:"true"}),(l=Object(c.a)(a)).splice(n,1,s),g(l),e.next=6,fetch("".concat(R.a),{method:"post",headers:{"Content-Type":"application/json"},body:JSON.stringify(l)});case 6:case"end":return e.stop()}}),e)})));return function(t,a){return e.apply(this,arguments)}}(),S=function(e,t,r,s){var l=Object(c.a)(a);l.splice(s,1,Object(i.a)(Object(i.a)({},e),{},Object(n.a)({},t,r))),g(l)};return Object(A.jsx)(j.a,{fixed:!0,children:Object(A.jsxs)(d.a,{container:!0,spacing:2,justifyContent:"center",children:[Object(A.jsx)("br",{}),Object(A.jsxs)(d.a,{item:!0,xs:12,md:10,children:[Object(A.jsx)(u.a,{variant:"h4",component:"h4",children:"Configuration Page"}),Object(A.jsx)("br",{}),Object(A.jsx)(b.a,{component:h.a,children:Object(A.jsxs)(O.a,{sx:{minWidth:650},size:"small","aria-label":"a dense table",children:[Object(A.jsx)(x.a,{children:Object(A.jsxs)(f.a,{children:[Object(A.jsx)(m.a,{children:"Name"}),Object(A.jsx)(m.a,{align:"right",children:"Place Holder"}),Object(A.jsx)(m.a,{align:"right",children:"Actions"})]})}),Object(A.jsxs)(p.a,{children:[a.map((function(e,t){return Object(A.jsxs)(f.a,{sx:{"&:last-child td, &:last-child th":{border:0}},children:[Object(A.jsx)(m.a,{align:"right",children:Object(A.jsx)(v.a,{fullWidth:!0,disabled:"true"===e.disabled,onChange:function(a){return S(e,"name",a.target.value,t)},value:e.name})}),Object(A.jsx)(m.a,{align:"right",children:Object(A.jsx)(v.a,{fullWidth:!0,disabled:"true"===e.disabled,onChange:function(a){return S(e,"placeHolder",a.target.value,t)},value:e.placeHolder})}),Object(A.jsxs)(m.a,{align:"right",children:[Object(A.jsx)(F.a,{onClick:function(){return C(e,t)},color:"false"===e.saved&&"true"===e.disabled||"true"===e.saved&&"true"===e.disabled?"disabled":"primary"}),Object(A.jsx)(k.a,{onClick:function(){return function(e,t){var n=Object(c.a)(a);n.splice(t,1,Object(i.a)(Object(i.a)({},e),{},{disabled:"false"})),g(n)}(e,t)},color:"true"===e.saved?"secondary":"disabled"}),Object(A.jsx)(y.a,{onClick:(n=e,Object(s.a)(Object(r.a)().mark((function e(){var t;return Object(r.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("".concat(R.a,"/additionalFields"),{method:"post",headers:{"Content-Type":"application/json"},body:JSON.stringify(n)});case 2:t=Object(c.a)(a),g(t.filter((function(e){return e.name!==n.name})));case 4:case"end":return e.stop()}}),e)})))),color:"false"===e.saved&&"true"===e.disabled?"disabled":"error"})]})]},t);var n})),Object(A.jsx)(f.a,{children:Object(A.jsx)(m.a,{colSpan:3,align:"center",children:Object(A.jsx)(w.a,{onClick:function(){g([].concat(Object(c.a)(a),[T]))},color:"primary"})})})]})]})})]})]})})}},280:function(e,t,a){"use strict";var n,c,i=a(16),r=a(3),s=a(15),l=a(22),o=a(26),j=a(6),d=a(32),u=a(0),b=a(129),h=a(450),O=a(445),x=a(442),f=a(446),m=a(193),p=a(52),v=a(46),g=a(60),y=a(156),C=a(104),w=a(448),S=a(441),F=a(437),z=/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,k=function(e){var t,a,n={};return null!==(t=e.host_name)&&void 0!==t&&t.trim()||(n.host_name="Please enter a host name"),null!==(a=e.host_email)&&void 0!==a&&a.trim()?z.test(e.host_email)||(n.host_email="Please enter a valid email"):n.host_email="Please enter an email",n},R=a(65),A=a(1),T=new Date,M=T.getMinutes(),L=T.getHours();M>30?M=30:(M=0,L+=1),T.setHours(L),T.setMinutes(M);var _={host_email:"",host_name:"",hour:"".concat(L,":").concat(M<10?"0".concat(M):M),date:"".concat(T.getUTCMonth()+1,"/").concat(T.getUTCDate(),"/").concat(T.getUTCFullYear()),party_size:"2",additionalFields:[]},D=g.a.div(n||(n=Object(d.a)(["\n  display: flex;\n  width: 100%;\n  justify-content: flex-end;\n  & > button {\n    width: 100%;\n  }\n"]))),N=g.a.div(c||(c=Object(d.a)(["\n  & > div {\n    width: 100%;\n  }\n"])));t.a=function(){var e=Object(u.useState)(_),t=Object(j.a)(e,2),a=t[0],n=t[1],c=Object(u.useState)({}),d=Object(j.a)(c,2),g=d[0],z=d[1],M=Object(u.useState)(new Date),L=Object(j.a)(M,2),E=L[0],I=L[1],U=Object(u.useState)(T),H=Object(j.a)(U,2),Y=H[0],P=H[1],V=Object(u.useState)(!1),J=Object(j.a)(V,2),W=J[0],K=J[1],B=Object(u.useState)([]),q=Object(j.a)(B,2),Z=q[0],G=q[1],$=u.useContext(R.a),Q=$.updateAlertContext,X=$.isLoading;Object(u.useEffect)((function(){Object(o.a)(Object(s.a)().mark((function e(){var t,c,i,r;return Object(s.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("".concat(p.a,"/additionalFields"),{});case 2:return t=e.sent,e.next=5,t.json();case 5:c=e.sent,i=[],r=c.config.length?c.config:[],G(c.config),r.forEach((function(e){var t={name:e.name,value:""};i.push(t)})),n(Object(l.a)(Object(l.a)({},a),{},{additionalFields:[].concat(i)}));case 11:case"end":return e.stop()}}),e)})))()}),[a]);var ee=function(e,t){var c,i,s,o,j,d,u=new Date(e||"");switch(i=u.getMinutes(),s=u.getHours(),o=u.getUTCDate(),j=u.getUTCMonth()+1,d=u.getUTCFullYear(),t){case"date":e&&(c="".concat(j,"/").concat(o,"/").concat(d),I(e));break;case"hour":c="".concat(s,":").concat(i<10?"0".concat(i):i),P(e)}n(Object(l.a)(Object(l.a)({},a),{},Object(r.a)({},t,c)))},te=function(e){n(Object(l.a)(Object(l.a)({},a),{},Object(r.a)({},e.target.name,e.target.value)));var t=k(a);ae(t)&&Q({isVisible:!1,message:"",isLoading:!1,type:"success"}),z(t)},ae=function(e){return!Object.values(e).length},ne=function(){var e=Object(o.a)(Object(s.a)().mark((function e(){var t,c,i;return Object(s.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t=k(a),K(!0),z(Object(l.a)({},t)),!ae(t)){e.next=14;break}return Q({isLoading:!0}),e.next=7,fetch("".concat(p.b),{method:"post",headers:{"Content-Type":"application/json"},body:JSON.stringify(a)});case 7:return c=e.sent,e.next=10,c.json();case 10:(i=e.sent).id?(Q({type:"success",message:"Your reservation successfully created!",isVisible:!0,isLoading:!1}),n(Object(l.a)({},_))):Q({message:i.error,type:"error",isVisible:!0,isLoading:!1}),e.next=15;break;case 14:Q({type:"error",message:"Please fill required fields",isVisible:!0,isLoading:!1});case 15:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),ce=function(e){var t="";if(a.additionalFields){var n=a.additionalFields.find((function(t){return t.name===e}));n&&(t=n.value)}return t};return Object(A.jsxs)(A.Fragment,{children:[Object(A.jsx)("br",{}),Object(A.jsxs)(v.a,{container:!0,spacing:2,rowSpacing:"1rem",children:[Object(A.jsx)(v.a,{item:!0,xs:6,md:6,children:Object(A.jsx)(y.a,{dateAdapter:C.a,children:Object(A.jsx)(N,{children:Object(A.jsx)(w.a,{"data-test-id":"date",label:"Date",inputFormat:"MM/DD/YYYY",value:E,onChange:function(e){return ee(e,"date")},renderInput:function(e){return Object(A.jsx)(b.a,Object(l.a)({},e))}})})})}),Object(A.jsx)(v.a,{item:!0,xs:6,md:6,children:Object(A.jsx)(y.a,{dateAdapter:C.a,children:Object(A.jsx)(v.a,{container:!0,spacing:2,rowSpacing:"1rem",children:Object(A.jsx)(v.a,{item:!0,xs:12,children:Object(A.jsx)(N,{children:Object(A.jsx)(S.a,{"data-test-id":"hour",ampm:!1,label:"Hour",value:Y,onChange:function(e){return ee(e,"hour")},renderInput:function(e){return Object(A.jsx)(b.a,Object(l.a)({},e))},minutesStep:30})})})})})}),Object(A.jsx)(v.a,{item:!0,xs:12,children:Object(A.jsxs)(h.a,{fullWidth:!0,children:[Object(A.jsx)(O.a,{id:"demo-simple-select-label",children:Object(A.jsx)(F.a,{})}),Object(A.jsx)(x.a,{name:"party_size",value:a.party_size,label:"size",onChange:te,children:Array.from(Array(22),(function(e,t){return t>0&&Object(A.jsx)(f.a,{value:t,children:"".concat(t<21?t:" "," ").concat(1===t?"person":t<21?"people":"Larger party")},t)}))})]})}),Object(A.jsx)(v.a,{item:!0,xs:12,children:Object(A.jsx)(b.a,{fullWidth:!0,error:!!g.host_name&&W,name:"host_name",label:"Host Name",value:a.host_name,onChange:te,helperText:W?g.host_name:""})}),Object(A.jsx)(v.a,{item:!0,xs:12,children:Object(A.jsx)(b.a,{fullWidth:!0,error:!!g.host_email&&W,name:"host_email",label:"Host Email",value:a.host_email,onChange:te,helperText:W?g.host_email:""})}),Z&&Z.map((function(e,t){return Object(A.jsx)(v.a,{item:!0,xs:12,children:Object(A.jsx)(b.a,{fullWidth:!0,error:!1,name:e.name,label:e.placeHolder,value:ce(e.name),onChange:function(c){return function(e,t,c){var r,s={name:e,value:t};(r=a.additionalFields?Object(i.a)(a.additionalFields):[])[c]=s,n(Object(l.a)(Object(l.a)({},a),{},{additionalFields:Object(i.a)(r)}))}(e.name,c.target.value,t)}},e.name)},t)})),Object(A.jsx)(v.a,{item:!0,xs:12,md:12,lg:12,children:Object(A.jsx)(D,{children:Object(A.jsx)(m.a,{size:"large",onClick:ne,variant:"contained",disabled:X||W&&!ae(g),children:"Create"})})})]})]})}},281:function(e,t,a){"use strict";var n,c,i=a(6),r=a(32),s=a(0),l=a(193),o=a(508),j=a(449),d=a(513),u=a(446),b=a(507),h=a(270),O=a.n(h),x=a(89),f=a(60),m=a(1),p=f.a.div(n||(n=Object(r.a)(["\n  float: right;\n"]))),v=f.a.label(c||(c=Object(r.a)(["\n  font-weight: 300;\n  font-size: smaller;\n"])));t.a=function(){var e,t=Object(s.useState)(!1),a=Object(i.a)(t,2),n=a[0],c=a[1],r=Object(s.useRef)(null),h=Object(s.useContext)(x.a),f=[{id:13,name:"Arabic",localName:"\u0627\u0644\u0639\u0631\u0628\u064a\u0629",locale:"AR",localeFull:"ar-AE",isRtl:!0},{id:3,name:"German",localName:"Deutsch",locale:"DE",localeFull:"de-DE",localeMoment:"de",isRtl:!1},{id:2,name:"English",localName:"English",locale:"en",localeFull:"en-US",isRtl:!1},{id:41,name:"Spanish (Latin America)",localName:"Espa\xf1ol",locale:"es",localeFull:"es-LA",localeMoment:"es",isRtl:!1},{id:7,name:"French",localName:"Fran\xe7ais",locale:"FR",localeFull:"fr-FR",localeMoment:"fr",isRtl:!1},{id:17,name:"Italian",localName:"Italiano",locale:"IT",localeFull:"it-IT",localeMoment:"it",isRtl:!1},{id:44,name:"Japanese",localName:"\u65e5\u672c\u8a9e",locale:"JA",localeFull:"ja-JP",localeMoment:"ja",isRtl:!1},{id:43,name:"Korean",localName:"\ud55c\uad6d\uc5b4",locale:"KO",localeFull:"ko-KR",localeMoment:"ko",isRtl:!1},{id:21,name:"Portuguese (Brasil)",localName:"Portugu\xeas",locale:"PT",localeFull:"pt-BR",localeMoment:"pt-br",isRtl:!1},{id:9,name:"Russian",localName:"\u0420\u0443\u0441\u0441\u043a\u0438\u0439",locale:"RU",localeFull:"ru-RU",localeMoment:"ru",isRtl:!1},{id:25,name:"Swedish",localName:"Svenska",locale:"SV",localeFull:"sv-SE",localeMoment:"sv",isRtl:!1},{id:16,name:"Turkish",localName:"T\xfcrk\xe7e",locale:"TR",localeFull:"tr-TR",localeMoment:"tr",isRtl:!1},{id:35,name:"Chinese (Simplified)",localName:"\u7b80\u4f53\u4e2d\u6587",locale:"zh",localeFull:"zh-Hans",localeMoment:"zh-cn",isRtl:!1},{id:34,name:"Chinese (Traditional)",localName:"\u7e41\u9ad4\u4e2d\u6587",locale:"zh",localeFull:"zh-TW",localeMoment:"zh-tw",isRtl:!1}];return Object(m.jsxs)(p,{children:[Object(m.jsx)(v,{children:null===(e=f.find((function(e){return e.localeFull===h.locale})))||void 0===e?void 0:e.name}),Object(m.jsxs)(l.a,{ref:r,id:"composition-button","aria-controls":n?"composition-menu":void 0,"aria-expanded":n?"true":void 0,"aria-haspopup":"true",onClick:function(){c(!n)},style:{marginLeft:"1rem"},children:[Object(m.jsx)(O.a,{fontSize:"small"}),h.username]}),Object(m.jsx)(o.a,{open:n,anchorEl:r.current,onResize:void 0,onResizeCapture:void 0,children:Object(m.jsx)(j.a,{children:Object(m.jsx)(d.a,{children:Object(m.jsx)(u.a,{children:Object(m.jsx)(b.a,{onClick:function(){h.onLogout()},children:"Logout"})})})})})]})}},288:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),i=a(53),r=a(255),s=a(1);i.render(Object(s.jsx)(c.a.StrictMode,{children:Object(s.jsx)(r.a,{})}),document.getElementById("root"))},312:function(e,t){},314:function(e,t){},324:function(e,t){},326:function(e,t){},353:function(e,t){},355:function(e,t){},356:function(e,t){},361:function(e,t){},363:function(e,t){},382:function(e,t){},394:function(e,t){},397:function(e,t){},52:function(e,t,a){"use strict";a.d(t,"b",(function(){return n})),a.d(t,"a",(function(){return c}));var n="exchange/restaurant/reservations",c="exchange/restaurant/config"},65:function(e,t,a){"use strict";a.d(t,"b",(function(){return i})),a.d(t,"a",(function(){return r}));var n=a(22),c=a(0),i={isLoading:!1,isVisible:!1,type:"success",message:"Reservation successfully updated"},r=a.n(c).a.createContext(Object(n.a)({},i))},89:function(e,t,a){"use strict";a.d(t,"b",(function(){return i})),a.d(t,"a",(function(){return r}));var n=a(22),c=a(0),i={token:"",locale:"",username:"",onLogout:function(){}},r=a.n(c).a.createContext(Object(n.a)({},i))}},[[288,1,2]]]);
//# sourceMappingURL=main.419088c8.chunk.js.map