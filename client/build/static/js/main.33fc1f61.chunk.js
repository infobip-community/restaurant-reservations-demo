(this["webpackJsonpinfobip-exchange-agenda-demo-client"]=this["webpackJsonpinfobip-exchange-agenda-demo-client"]||[]).push([[0],{188:function(e,t,a){"use strict";var n=a(22),c=a(269),i=a(1),s=["children","value","index"];t.a=function(e){var t=e.children,a=e.value,r=e.index,o=Object(c.a)(e,s);return Object(i.jsx)("div",Object(n.a)(Object(n.a)({role:"tabpanel",hidden:a!==r,id:"full-width-tabpanel-".concat(r),"aria-labelledby":"full-width-tab-".concat(r)},o),{},{children:a===r&&Object(i.jsx)("div",{children:t})}))}},255:function(e,t,a){"use strict";(function(e){var n=a(22),c=a(6),i=a(0),s=a(256),r=a(120),o=a(64),l=a(284),j=a(286),d=a(277),u=a(13),b=a(258),O=a(272),h=a(89),x=a(1),f=function(){var t,a=Object(i.useState)(!1),n=Object(c.a)(a,2),s=n[0],o=n[1],f=Object(i.useState)(h.b),m=Object(c.a)(f,2),p=m[0],v=m[1],g=Object(r.c)().authService,C=null===(t=e)||void 0===t?void 0:Object({NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0,REACT_APP_CLIENT_ID:"eaf2e781440e0124f0e7c68a121c0582",REACT_APP_PROVIDER:"https://portal.infobip.com/conversations/api/amg/exchange/1/oauth",REACT_APP_REDIRECT_URI:"https://restaurant-reservations-demo-oauth.azurewebsites.net/"}).REACT_APP_OAUTH_ACTIVE;return Object(i.useEffect)((function(){if(C)if(g.isAuthenticated()||g.getCodeFromLocation(window.location)){var e=g.getAuthTokens(),t=e.token,a=e.username,n=e.locale;v({token:t,username:a,locale:n,onLogout:function(){g.logout()}}),o(!1)}else o(!0),g.authorize()}),[g,C]),Object(x.jsxs)(x.Fragment,{children:[(!C||g.isAuthenticated())&&Object(x.jsx)(h.a.Provider,{value:p,children:Object(x.jsx)(d.a,{children:Object(x.jsx)(u.c,{children:Object(x.jsxs)(u.a,{path:"/",children:[Object(x.jsx)(u.a,{index:!0,element:Object(x.jsx)(b.a,{})}),Object(x.jsx)(u.a,{path:"config",element:Object(x.jsx)(O.a,{})})]})})})}),s&&Object(x.jsx)(l.a,{open:!0,style:{zIndex:1},children:Object(x.jsx)(j.a,{color:"inherit"})})]})};t.a=function(){var e=Object(i.useState)(o.b),t=Object(c.a)(e,2),a=t[0],l=t[1];return Object(x.jsx)(o.a.Provider,{value:Object(n.a)(Object(n.a)({},a),{},{updateAlertContext:function(e){l(Object(n.a)(Object(n.a)({},a),e))}}),children:Object(x.jsx)(r.a,{authService:s.a,children:Object(x.jsx)(f,{})})})}}).call(this,a(38))},256:function(e,t,a){"use strict";var n=new(a(120).b)({clientId:"eaf2e781440e0124f0e7c68a121c0582",provider:"https://portal.infobip.com/conversations/api/amg/exchange/1/oauth",redirectUri:"https://restaurant-reservations-demo-oauth.azurewebsites.net/",scopes:["conversations"],location:window.location});t.a=n},258:function(e,t,a){"use strict";(function(e){var n=a(6),c=a(0),i=a.n(c),s=a(259),r=a(35),o=a(283),l=a(46),j=a(34),d=a(284),u=a(444),b=a(285),O=a(443),h=a(287),x=a(268),f=a.n(x),m=a(280),p=a(271),v=a.n(p),g=a(286),C=a(188),y=a(64),S=a(281),_=a(89),w=a(1);t.a=function(){var t,a=Object(r.a)(),x=i.a.useState(0),p=Object(n.a)(x,2),T=p[0],R=p[1],F=null===(t=e)||void 0===t?void 0:Object({NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0,REACT_APP_CLIENT_ID:"eaf2e781440e0124f0e7c68a121c0582",REACT_APP_PROVIDER:"https://portal.infobip.com/conversations/api/amg/exchange/1/oauth",REACT_APP_REDIRECT_URI:"https://restaurant-reservations-demo-oauth.azurewebsites.net/"}).REACT_APP_OAUTH_ACTIVE,A=Object(c.useContext)(_.a),E=Object(c.useContext)(y.a);return Object(w.jsx)(o.a,{fixed:!0,children:Object(w.jsxs)(l.a,{container:!0,spacing:2,justifyContent:"center",children:[Object(w.jsx)("br",{}),Object(w.jsx)(l.a,{item:!0,xs:11,md:10,children:Object(w.jsxs)(j.a,{variant:"h4",component:"h4",children:["Awesome Restaurant",F&&(null===A||void 0===A?void 0:A.username)&&Object(w.jsx)(S.a,{})]})}),Object(w.jsx)("br",{}),Object(w.jsxs)(l.a,{item:!0,xs:12,md:10,children:[Object(w.jsx)(d.a,{open:!!E.isLoading,style:{zIndex:1},children:Object(w.jsx)(g.a,{color:"inherit"})}),E.isVisible&&Object(w.jsxs)(w.Fragment,{children:[Object(w.jsx)(u.a,{severity:E.type,action:Object(w.jsx)(b.a,{"aria-label":"close",color:"inherit",size:"small",onClick:function(){E.updateAlertContext({isVisible:!1})},children:Object(w.jsx)(v.a,{fontSize:"inherit"})}),children:E.message}),Object(w.jsx)("br",{})]}),Object(w.jsxs)(O.a,{value:T,onChange:function(e,t){R(t)},"aria-label":"Reservations",children:[Object(w.jsx)(h.a,{value:0,label:"Manage reservations",wrapped:!0}),Object(w.jsx)(h.a,{value:1,label:"Create Reservation"})]}),Object(w.jsxs)(f.a,{axis:"rtl"===a.direction?"x-reverse":"x",index:T,onChangeIndex:function(e){R(e)},children:[Object(w.jsxs)(C.a,{value:T,index:0,dir:a.direction,children:[Object(w.jsx)("br",{}),Object(w.jsx)(s.a,{})]}),Object(w.jsx)(C.a,{value:T,index:1,dir:a.direction,children:Object(w.jsx)(m.a,{})})]})]})]})})}}).call(this,a(38))},259:function(e,t,a){"use strict";var n,c=a(3),i=a(22),s=a(15),r=a(26),o=a(6),l=a(33),j=a(0),d=a(264),u=a.n(d),b=a(52),O=a(66),h=a(46),x=a(129),f=a(193),m=a(451),p=a(130),v=a(452),g=a(34),C=a(450),y=a(445),S=a(442),_=a(446),w=a(453),T=a(435),R=a(436),F=a(437),A=a(438),E=a(439),z=a(440),k=a(156),D=a(104),P=a(448),I=a(441),L=a(64),N=a(1),M=O.a.div(n||(n=Object(l.a)(["\n  & > div {\n    width: 100%;\n  }\n"])));t.a=function(){var e=Object(j.useState)(),t=Object(o.a)(e,2),a=t[0],n=t[1],l=Object(j.useState)(!1),d=Object(o.a)(l,2),O=d[0],U=d[1],H=Object(j.useState)(""),V=Object(o.a)(H,2),W=V[0],Y=V[1],J=Object(j.useState)(),K=Object(o.a)(J,2),B=K[0],q=K[1],Z=Object(j.useState)(),G=Object(o.a)(Z,2),$=G[0],Q=G[1],X=Object(j.useContext)(L.a),ee=function(){var e=Object(r.a)(Object(s.a)().mark((function e(){return Object(s.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!a){e.next=5;break}return e.next=3,fetch("".concat(b.b,"/").concat(a.id),{method:"PUT",headers:{"Content-type":"application/json; charset=UTF-8"},body:JSON.stringify(a)}).catch((function(e){X.updateAlertContext({type:"error",message:e,isVisible:!0,isLoading:!1})}));case 3:X.updateAlertContext({type:"success",message:"Your reservation has been updated succesfully!",isVisible:!0,isLoading:!1}),U(!1);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),te=function(){var e=Object(r.a)(Object(s.a)().mark((function e(){return Object(s.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!a){e.next=4;break}return U(!1),e.next=4,fetch("".concat(b.b,"/").concat(a.id),{method:"DELETE",headers:{"Content-type":"application/json; charset=UTF-8"},body:JSON.stringify(a)}).then((function(){X.updateAlertContext({type:"success",message:"Your reservation has been deleted succesfully!",isVisible:!0,isLoading:!1}),U(!1),Y(""),n(void 0)}));case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),ae=function(e,t){var s,r,o,l,j,d,u=new Date(e||"");switch(r=u.getMinutes(),o=u.getHours(),l=u.getUTCDate(),j=u.getUTCMonth()+1,d=u.getUTCFullYear(),t){case"date":e&&(s="".concat(j,"/").concat(l,"/").concat(d),q(e));break;case"hour":s="".concat(o,":").concat(r&&r<10?"0".concat(r):r),Q(e)}n(Object(i.a)(Object(i.a)({},a),{},Object(c.a)({},t,s)))},ne=function(){Object(r.a)(Object(s.a)().mark((function e(){var t,a;return Object(s.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("".concat(b.b,"/").concat(W));case 2:return t=e.sent,e.next=5,t.json();case 5:(a=e.sent)&&a.id?(n(a),q(new Date(a.date?a.date:"")),Q(new Date(a.hour?"".concat(a.date," ").concat(a.hour):"")),X.updateAlertContext({isVisible:!0,type:"success",isLoading:!1,message:""})):(n(void 0),X.updateAlertContext({type:"error",message:a.error,isVisible:!0,isLoading:!1}));case 7:case"end":return e.stop()}}),e)})))()};return Object(N.jsxs)(N.Fragment,{children:[Object(N.jsxs)(h.a,{container:!0,children:[Object(N.jsx)(h.a,{item:!0,xs:10,md:11,children:Object(N.jsx)(x.a,{fullWidth:!0,type:"search",onChange:function(e){Y(e.currentTarget.value)},label:"Enter your email",onKeyDown:function(e){"Enter"===e.key&&ne()}})}),Object(N.jsx)(h.a,{item:!0,xs:2,md:1,justifyContent:"center",justifyItems:"center",display:"flex",children:Object(N.jsx)(f.a,{disabled:!W.length,onClick:ne,children:"Search"})})]}),Object(N.jsx)("br",{}),a&&Object(N.jsx)(m.a,{variant:"outlined",children:Object(N.jsxs)(p.a,{sx:{m:2,pd:2},children:[Object(N.jsxs)(v.a,{children:[Object(N.jsx)(u.a,{}),Object(N.jsxs)(p.a,{sx:{display:"flex",flexFlow:"row",pt:2},children:[Object(N.jsx)(g.a,{sx:{fontSize:20},variant:"h5",children:"Reservation to:"}),Object(N.jsx)(g.a,{sx:{fontSize:20,ml:1},color:"text.secondary",children:a.host_name})]}),Object(N.jsx)(p.a,{sx:{display:"flex",flexFlow:"row",pt:2},children:O?Object(N.jsxs)(N.Fragment,{children:[Object(N.jsx)(h.a,{item:!0,xs:6,md:6,children:Object(N.jsx)(k.a,{dateAdapter:D.a,children:Object(N.jsx)(M,{children:Object(N.jsx)(P.a,{"data-test-id":"date",label:"Date",inputFormat:"MM/DD/YYYY",value:B,onChange:function(e){return ae(e,"date")},renderInput:function(e){return Object(N.jsx)(x.a,Object(i.a)({},e))}})})})}),Object(N.jsx)(h.a,{item:!0,xs:6,md:6,children:Object(N.jsx)(k.a,{dateAdapter:D.a,children:Object(N.jsx)(h.a,{container:!0,spacing:2,rowSpacing:"1rem",children:Object(N.jsx)(h.a,{item:!0,xs:12,children:Object(N.jsx)(M,{children:Object(N.jsx)(I.a,{"data-test-id":"hour",ampm:!1,label:"Hour",value:$,onChange:function(e){return ae(e,"hour")},renderInput:function(e){return Object(N.jsx)(x.a,Object(i.a)({},e))},minutesStep:30})})})})})})]}):Object(N.jsxs)(N.Fragment,{children:[Object(N.jsx)(g.a,{sx:{fontSize:20,mr:1},variant:"h5",children:Object(N.jsx)(T.a,{})}),Object(N.jsx)(g.a,{sx:{fontSize:20},color:"text.secondary",children:a.date}),Object(N.jsx)(g.a,{sx:{fontSize:20,ml:3},variant:"h5",children:Object(N.jsx)(R.a,{})}),Object(N.jsx)(g.a,{sx:{fontSize:20,ml:1},color:"text.secondary",children:a.hour})]})}),Object(N.jsx)(p.a,{sx:{display:"flex",flexFlow:"row",pt:2},children:O?Object(N.jsxs)(C.a,{fullWidth:!0,children:[Object(N.jsx)(y.a,{id:"demo-simple-select-label",children:Object(N.jsx)(F.a,{})}),Object(N.jsx)(S.a,{name:"party_size",value:a.party_size,label:"size",onChange:function(e){n(Object(i.a)(Object(i.a)({},a),{},Object(c.a)({},e.target.name,e.target.value)))},children:Array.from(Array(22),(function(e,t){return t>0&&Object(N.jsx)(_.a,{value:t,children:"".concat(t<21?t:" "," ").concat(1===t?"person":t<21?"people":"Larger party")},t)}))})]}):Object(N.jsxs)(N.Fragment,{children:[Object(N.jsx)(g.a,{sx:{fontSize:20,pt:.3},variant:"h5",children:Object(N.jsx)(A.a,{})}),Object(N.jsx)(g.a,{sx:{fontSize:20,ml:1},color:"text.secondary",children:a.party_size})]})}),a.additionalFields&&a.additionalFields.map((function(e){return Object(N.jsxs)(p.a,{sx:{display:"flex",flexFlow:"row",pt:2},children:[Object(N.jsxs)(g.a,{sx:{fontSize:20},variant:"h5",children:[e.name,":"]}),Object(N.jsx)(g.a,{sx:{fontSize:20,ml:1},color:"text.secondary",children:e.value})]},e.name)}))]}),Object(N.jsxs)(w.a,{sx:{display:"flex",flexFlow:"row-reverse"},children:[Object(N.jsx)(f.a,{size:"small",onClick:O?function(){U(!1),Object(r.a)(Object(s.a)().mark((function e(){var t,c;return Object(s.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("".concat(b.b,"/").concat(null===a||void 0===a?void 0:a.host_email));case 2:return t=e.sent,e.next=5,t.json();case 5:(c=e.sent)&&c.id&&(n(c),q(new Date(c.date?c.date:"")),Q(new Date(c.hour?"".concat(c.date," ").concat(c.hour):"")));case 7:case"end":return e.stop()}}),e)})))()}:te,startIcon:Object(N.jsx)(E.a,{}),children:O?"Cancel":"Delete"}),Object(N.jsx)(f.a,{size:"small",sx:{pr:5},onClick:O?ee:function(){U(!0)},startIcon:Object(N.jsx)(z.a,{}),children:O?"Save":"Edit"})]})]})})]})}},272:function(e,t,a){"use strict";var n=a(3),c=a(16),i=a(22),s=a(15),r=a(26),o=a(6),l=a(0),j=a(283),d=a(46),u=a(34),b=a(454),O=a(449),h=a(455),x=a(456),f=a(194),m=a(91),p=a(457),v=a(129),g=a(275),C=a.n(g),y=a(276),S=a.n(y),_=a(273),w=a.n(_),T=a(274),R=a.n(T),F=a(52),A=a(1),E={name:"",placeHolder:"",disabled:"false",required:"false",additional:"true",saved:"true"};t.a=function(){var e=Object(l.useState)([]),t=Object(o.a)(e,2),a=t[0],g=t[1];Object(l.useEffect)((function(){Object(r.a)(Object(s.a)().mark((function e(){var t,a;return Object(s.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("".concat(F.a),{});case 2:return t=e.sent,e.next=5,t.json();case 5:(a=e.sent).config&&g(a.config.fields);case 7:case"end":return e.stop()}}),e)})))()}),[]);var y=function(){var e=Object(r.a)(Object(s.a)().mark((function e(t,n){var r,o;return Object(s.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=Object(i.a)(Object(i.a)({},t),{},{disabled:"true"}),(o=Object(c.a)(a)).splice(n,1,r),g(o),e.next=6,fetch("".concat(F.a),{method:"post",headers:{"Content-Type":"application/json"},body:JSON.stringify(o)});case 6:case"end":return e.stop()}}),e)})));return function(t,a){return e.apply(this,arguments)}}(),_=function(e,t,s,r){var o=Object(c.a)(a);o.splice(r,1,Object(i.a)(Object(i.a)({},e),{},Object(n.a)({},t,s))),g(o)};return Object(A.jsx)(j.a,{fixed:!0,children:Object(A.jsxs)(d.a,{container:!0,spacing:2,justifyContent:"center",children:[Object(A.jsx)("br",{}),Object(A.jsxs)(d.a,{item:!0,xs:12,md:10,children:[Object(A.jsx)(u.a,{variant:"h4",component:"h4",children:"Configuration Page"}),Object(A.jsx)("br",{}),Object(A.jsx)(b.a,{component:O.a,children:Object(A.jsxs)(h.a,{sx:{minWidth:650},size:"small","aria-label":"a dense table",children:[Object(A.jsx)(x.a,{children:Object(A.jsxs)(f.a,{children:[Object(A.jsx)(m.a,{children:"Name"}),Object(A.jsx)(m.a,{align:"right",children:"Place Holder"}),Object(A.jsx)(m.a,{align:"right",children:"Actions"})]})}),Object(A.jsxs)(p.a,{children:[a.map((function(e,t){return Object(A.jsxs)(f.a,{sx:{"&:last-child td, &:last-child th":{border:0}},children:[Object(A.jsx)(m.a,{align:"right",children:Object(A.jsx)(v.a,{fullWidth:!0,disabled:"true"===e.disabled,onChange:function(a){return _(e,"name",a.target.value,t)},value:e.name})}),Object(A.jsx)(m.a,{align:"right",children:Object(A.jsx)(v.a,{fullWidth:!0,disabled:"true"===e.disabled,onChange:function(a){return _(e,"placeHolder",a.target.value,t)},value:e.placeHolder})}),Object(A.jsxs)(m.a,{align:"right",children:[Object(A.jsx)(w.a,{onClick:function(){return y(e,t)},color:"false"===e.saved&&"true"===e.disabled||"true"===e.saved&&"true"===e.disabled?"disabled":"primary"}),Object(A.jsx)(R.a,{onClick:function(){return function(e,t){var n=Object(c.a)(a);n.splice(t,1,Object(i.a)(Object(i.a)({},e),{},{disabled:"false"})),g(n)}(e,t)},color:"true"===e.saved?"secondary":"disabled"}),Object(A.jsx)(C.a,{onClick:(n=e,Object(r.a)(Object(s.a)().mark((function e(){var t;return Object(s.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("".concat(F.a,"/additionalFields"),{method:"post",headers:{"Content-Type":"application/json"},body:JSON.stringify(n)});case 2:t=Object(c.a)(a),g(t.filter((function(e){return e.name!==n.name})));case 4:case"end":return e.stop()}}),e)})))),color:"false"===e.saved&&"true"===e.disabled?"disabled":"error"})]})]},t);var n})),Object(A.jsx)(f.a,{children:Object(A.jsx)(m.a,{colSpan:3,align:"center",children:Object(A.jsx)(S.a,{onClick:function(){g([].concat(Object(c.a)(a),[E]))},color:"primary"})})})]})]})})]})]})})}},280:function(e,t,a){"use strict";var n,c,i=a(16),s=a(3),r=a(15),o=a(22),l=a(26),j=a(6),d=a(33),u=a(0),b=a(129),O=a(450),h=a(445),x=a(442),f=a(446),m=a(193),p=a(52),v=a(46),g=a(66),C=a(156),y=a(104),S=a(448),_=a(441),w=a(437),T=/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,R=function(e){var t,a,n={};return null!==(t=e.host_name)&&void 0!==t&&t.trim()||(n.host_name="Please enter a host name"),null!==(a=e.host_email)&&void 0!==a&&a.trim()?T.test(e.host_email)||(n.host_email="Please enter a valid email"):n.host_email="Please enter an email",n},F=a(64),A=a(1),E=new Date,z=E.getMinutes(),k=E.getHours();z>30?z=30:(z=0,k+=1),E.setHours(k),E.setMinutes(z);var D={host_email:"",host_name:"",hour:"".concat(k,":").concat(z<10?"0".concat(z):z),date:"".concat(E.getUTCMonth()+1,"/").concat(E.getUTCDate(),"/").concat(E.getUTCFullYear()),party_size:"2",additionalFields:[]},P=g.a.div(n||(n=Object(d.a)(["\n  display: flex;\n  width: 100%;\n  justify-content: flex-end;\n  & > button {\n    width: 100%;\n  }\n"]))),I=g.a.div(c||(c=Object(d.a)(["\n  & > div {\n    width: 100%;\n  }\n"])));t.a=function(){var e=Object(u.useState)(D),t=Object(j.a)(e,2),a=t[0],n=t[1],c=Object(u.useState)({}),d=Object(j.a)(c,2),g=d[0],T=d[1],z=Object(u.useState)(new Date),k=Object(j.a)(z,2),L=k[0],N=k[1],M=Object(u.useState)(E),U=Object(j.a)(M,2),H=U[0],V=U[1],W=Object(u.useState)(!1),Y=Object(j.a)(W,2),J=Y[0],K=Y[1],B=Object(u.useState)([]),q=Object(j.a)(B,2),Z=q[0],G=q[1],$=u.useContext(F.a),Q=$.updateAlertContext,X=$.isLoading;Object(u.useEffect)((function(){Object(l.a)(Object(r.a)().mark((function e(){var t,c,i,s;return Object(r.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("".concat(p.a,"/additionalFields"),{});case 2:return t=e.sent,e.next=5,t.json();case 5:c=e.sent,i=[],s=c.config.length?c.config:[],G(c.config),s.forEach((function(e){var t={name:e.name,value:""};i.push(t)})),n(Object(o.a)(Object(o.a)({},a),{},{additionalFields:[].concat(i)}));case 11:case"end":return e.stop()}}),e)})))()}),[a]);var ee=function(e,t){var c,i,r,l,j,d,u=new Date(e||"");switch(i=u.getMinutes(),r=u.getHours(),l=u.getUTCDate(),j=u.getUTCMonth()+1,d=u.getUTCFullYear(),t){case"date":e&&(c="".concat(j,"/").concat(l,"/").concat(d),N(e));break;case"hour":c="".concat(r,":").concat(i<10?"0".concat(i):i),V(e)}n(Object(o.a)(Object(o.a)({},a),{},Object(s.a)({},t,c)))},te=function(e){n(Object(o.a)(Object(o.a)({},a),{},Object(s.a)({},e.target.name,e.target.value)));var t=R(a);ae(t)&&Q({isVisible:!1,message:"",isLoading:!1,type:"success"}),T(t)},ae=function(e){return!Object.values(e).length},ne=function(){var e=Object(l.a)(Object(r.a)().mark((function e(){var t,c,i;return Object(r.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t=R(a),K(!0),T(Object(o.a)({},t)),!ae(t)){e.next=14;break}return Q({isLoading:!0}),e.next=7,fetch("".concat(p.b),{method:"post",headers:{"Content-Type":"application/json"},body:JSON.stringify(a)});case 7:return c=e.sent,e.next=10,c.json();case 10:(i=e.sent).id?(Q({type:"success",message:"Your reservation successfully created!",isVisible:!0,isLoading:!1}),n(Object(o.a)({},D))):Q({message:i.error,type:"error",isVisible:!0,isLoading:!1}),e.next=15;break;case 14:Q({type:"error",message:"Please fill required fields",isVisible:!0,isLoading:!1});case 15:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),ce=function(e){var t="";if(a.additionalFields){var n=a.additionalFields.find((function(t){return t.name===e}));n&&(t=n.value)}return t};return Object(A.jsxs)(A.Fragment,{children:[Object(A.jsx)("br",{}),Object(A.jsxs)(v.a,{container:!0,spacing:2,rowSpacing:"1rem",children:[Object(A.jsx)(v.a,{item:!0,xs:6,md:6,children:Object(A.jsx)(C.a,{dateAdapter:y.a,children:Object(A.jsx)(I,{children:Object(A.jsx)(S.a,{"data-test-id":"date",label:"Date",inputFormat:"MM/DD/YYYY",value:L,onChange:function(e){return ee(e,"date")},renderInput:function(e){return Object(A.jsx)(b.a,Object(o.a)({},e))}})})})}),Object(A.jsx)(v.a,{item:!0,xs:6,md:6,children:Object(A.jsx)(C.a,{dateAdapter:y.a,children:Object(A.jsx)(v.a,{container:!0,spacing:2,rowSpacing:"1rem",children:Object(A.jsx)(v.a,{item:!0,xs:12,children:Object(A.jsx)(I,{children:Object(A.jsx)(_.a,{"data-test-id":"hour",ampm:!1,label:"Hour",value:H,onChange:function(e){return ee(e,"hour")},renderInput:function(e){return Object(A.jsx)(b.a,Object(o.a)({},e))},minutesStep:30})})})})})}),Object(A.jsx)(v.a,{item:!0,xs:12,children:Object(A.jsxs)(O.a,{fullWidth:!0,children:[Object(A.jsx)(h.a,{id:"demo-simple-select-label",children:Object(A.jsx)(w.a,{})}),Object(A.jsx)(x.a,{name:"party_size",value:a.party_size,label:"size",onChange:te,children:Array.from(Array(22),(function(e,t){return t>0&&Object(A.jsx)(f.a,{value:t,children:"".concat(t<21?t:" "," ").concat(1===t?"person":t<21?"people":"Larger party")},t)}))})]})}),Object(A.jsx)(v.a,{item:!0,xs:12,children:Object(A.jsx)(b.a,{fullWidth:!0,error:!!g.host_name&&J,name:"host_name",label:"Host Name",value:a.host_name,onChange:te,helperText:J?g.host_name:""})}),Object(A.jsx)(v.a,{item:!0,xs:12,children:Object(A.jsx)(b.a,{fullWidth:!0,error:!!g.host_email&&J,name:"host_email",label:"Host Email",value:a.host_email,onChange:te,helperText:J?g.host_email:""})}),Z&&Z.map((function(e,t){return Object(A.jsx)(v.a,{item:!0,xs:12,children:Object(A.jsx)(b.a,{fullWidth:!0,error:!1,name:e.name,label:e.placeHolder,value:ce(e.name),onChange:function(c){return function(e,t,c){var s,r={name:e,value:t};(s=a.additionalFields?Object(i.a)(a.additionalFields):[])[c]=r,n(Object(o.a)(Object(o.a)({},a),{},{additionalFields:Object(i.a)(s)}))}(e.name,c.target.value,t)}},e.name)},t)})),Object(A.jsx)(v.a,{item:!0,xs:12,md:12,lg:12,children:Object(A.jsx)(P,{children:Object(A.jsx)(m.a,{size:"large",onClick:ne,variant:"contained",disabled:X||J&&!ae(g),children:"Create"})})})]})]})}},281:function(e,t,a){"use strict";var n,c=a(6),i=a(33),s=a(0),r=a(442),o=a(446),l=a(193),j=a(508),d=a(449),u=a(513),b=a(507),O=a(270),h=a.n(O),x=a(89),f=a(66),m=a(1),p=f.a.div(n||(n=Object(i.a)(["\n  float: right;\n"])));t.a=function(){var e=Object(s.useState)(!1),t=Object(c.a)(e,2),a=t[0],n=t[1],i=Object(s.useRef)(null),O=Object(s.useContext)(x.a),f=[{id:13,name:"Arabic",localName:"\u0627\u0644\u0639\u0631\u0628\u064a\u0629",locale:"AR",localeFull:"ar-AE",isRtl:!0},{id:3,name:"German",localName:"Deutsch",locale:"DE",localeFull:"de-DE",localeMoment:"de",isRtl:!1},{id:2,name:"English",localName:"English",locale:"en",localeFull:"en-US",isRtl:!1},{id:41,name:"Spanish (Latin America)",localName:"Espa\xf1ol",locale:"es",localeFull:"es-LA",localeMoment:"es",isRtl:!1},{id:7,name:"French",localName:"Fran\xe7ais",locale:"FR",localeFull:"fr-FR",localeMoment:"fr",isRtl:!1},{id:17,name:"Italian",localName:"Italiano",locale:"IT",localeFull:"it-IT",localeMoment:"it",isRtl:!1},{id:44,name:"Japanese",localName:"\u65e5\u672c\u8a9e",locale:"JA",localeFull:"ja-JP",localeMoment:"ja",isRtl:!1},{id:43,name:"Korean",localName:"\ud55c\uad6d\uc5b4",locale:"KO",localeFull:"ko-KR",localeMoment:"ko",isRtl:!1},{id:21,name:"Portuguese (Brasil)",localName:"Portugu\xeas",locale:"PT",localeFull:"pt-BR",localeMoment:"pt-br",isRtl:!1},{id:9,name:"Russian",localName:"\u0420\u0443\u0441\u0441\u043a\u0438\u0439",locale:"RU",localeFull:"ru-RU",localeMoment:"ru",isRtl:!1},{id:25,name:"Swedish",localName:"Svenska",locale:"SV",localeFull:"sv-SE",localeMoment:"sv",isRtl:!1},{id:16,name:"Turkish",localName:"T\xfcrk\xe7e",locale:"TR",localeFull:"tr-TR",localeMoment:"tr",isRtl:!1},{id:35,name:"Chinese (Simplified)",localName:"\u7b80\u4f53\u4e2d\u6587",locale:"zh",localeFull:"zh-Hans",localeMoment:"zh-cn",isRtl:!1},{id:34,name:"Chinese (Traditional)",localName:"\u7e41\u9ad4\u4e2d\u6587",locale:"zh",localeFull:"zh-TW",localeMoment:"zh-tw",isRtl:!1}];return Object(m.jsxs)(p,{children:[Object(m.jsx)(r.a,{labelId:"demo-simple-select-label",id:"demo-simple-select",value:O.locale,label:"Language",size:"small",children:f.map((function(e){return Object(m.jsx)(o.a,{value:e.localeFull,children:e.name})}))}),Object(m.jsxs)(l.a,{ref:i,id:"composition-button","aria-controls":a?"composition-menu":void 0,"aria-expanded":a?"true":void 0,"aria-haspopup":"true",onClick:function(){n(!a)},style:{marginLeft:"1rem"},children:[Object(m.jsx)(h.a,{fontSize:"small"}),O.username]}),Object(m.jsx)(j.a,{open:a,anchorEl:i.current,onResize:void 0,onResizeCapture:void 0,children:Object(m.jsx)(d.a,{children:Object(m.jsx)(u.a,{children:Object(m.jsx)(o.a,{children:Object(m.jsx)(b.a,{onClick:function(){O.onLogout()},children:"Logout"})})})})})]})}},288:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),i=a(53),s=a(255),r=a(1);i.render(Object(r.jsx)(c.a.StrictMode,{children:Object(r.jsx)(s.a,{})}),document.getElementById("root"))},312:function(e,t){},314:function(e,t){},324:function(e,t){},326:function(e,t){},353:function(e,t){},355:function(e,t){},356:function(e,t){},361:function(e,t){},363:function(e,t){},382:function(e,t){},394:function(e,t){},397:function(e,t){},52:function(e,t,a){"use strict";a.d(t,"b",(function(){return n})),a.d(t,"a",(function(){return c}));var n="exchange/restaurant/reservations",c="exchange/restaurant/config"},64:function(e,t,a){"use strict";a.d(t,"b",(function(){return i})),a.d(t,"a",(function(){return s}));var n=a(22),c=a(0),i={isLoading:!1,isVisible:!1,type:"success",message:"Reservation successfully updated"},s=a.n(c).a.createContext(Object(n.a)({},i))},89:function(e,t,a){"use strict";a.d(t,"b",(function(){return i})),a.d(t,"a",(function(){return s}));var n=a(22),c=a(0),i={token:"",locale:"",username:"",onLogout:function(){}},s=a.n(c).a.createContext(Object(n.a)({},i))}},[[288,1,2]]]);
//# sourceMappingURL=main.33fc1f61.chunk.js.map