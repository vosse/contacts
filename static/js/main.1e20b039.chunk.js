(this.webpackJsonpcontacts=this.webpackJsonpcontacts||[]).push([[0],{21:function(e,t,a){e.exports=a(33)},26:function(e,t,a){},33:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(19),l=a.n(c),s=(a(26),a(5)),m=a(2),o=a.n(m),i=a(4),u=a(9),p=a(1),b=function(e){var t=e.isAuth,a=e.setAuth,n=r.a.createElement("div",{className:"navbar-nav"},r.a.createElement("a",{className:"nav-item nav-link",href:"/login"},"Sign In"),r.a.createElement("a",{className:"nav-item nav-link",href:"/signup"},"Sign Up")),c=r.a.createElement("div",{className:"navbar-nav"},r.a.createElement(u.b,{className:"nav-item nav-link",to:"/new"},"New contact"),r.a.createElement(u.b,{onClick:function(e){return a(!1),void localStorage.removeItem("token")},className:"cursor nav-item nav-link"},"Logout"));return r.a.createElement("nav",{className:"navbar navbar-expand-lg navbar-light bg-light"},r.a.createElement("a",{className:"navbar-brand",href:"/"},r.a.createElement("div",{id:"pic",className:"d-inline-block align-top ml-3"}),r.a.createElement("div",{className:"ml-3 d-inline-block"},"Contacts")),r.a.createElement("button",{className:"outline-del navbar-toggler",type:"button","data-toggle":"collapse","data-target":"#navbarNavAltMarkup","aria-controls":"navbarNavAltMarkup","aria-expanded":"false","aria-label":"Toggle navigation"},r.a.createElement("span",{className:"navbar-toggler-icon"})),r.a.createElement("div",{className:"collapse navbar-collapse flex-row-reverse",id:"navbarNavAltMarkup"},t?c:n))},d=a(11),v=a(10),f=function(e){var t=e.setAuth,a=Object(n.useState)({email:"",pass:""}),c=Object(s.a)(a,2),l=c[0],m=c[1],p=l.email,b=l.pass,f=function(e){m(Object(v.a)(Object(v.a)({},l),{},Object(d.a)({},e.target.name,e.target.value)))},E=function(){var e=Object(i.a)(o.a.mark((function e(a){var n,r,c;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a.preventDefault(),n={email:p,pass:b},e.prev=2,e.next=5,fetch("https://vosse-contactsapi.glitch.me/auth/login",{method:"POST",headers:{"Content-type":"application/json"},body:JSON.stringify(n)});case 5:return r=e.sent,e.next=8,r.json();case 8:(c=e.sent).jwtToken?(localStorage.setItem("token",c.jwtToken),t(!0)):t(!1),e.next=15;break;case 12:e.prev=12,e.t0=e.catch(2),console.error(e.t0.message);case 15:case"end":return e.stop()}}),e,null,[[2,12]])})));return function(t){return e.apply(this,arguments)}}();return r.a.createElement(n.Fragment,null,r.a.createElement("div",{className:"auth-card mt-5 min-width"},r.a.createElement("div",{className:"mb-5 bold-text"},"Sign in to your account"),r.a.createElement("form",{onSubmit:E},r.a.createElement("div",{className:"form-group mb-4"},r.a.createElement("label",{htmlFor:"exampleInputEmail1"},"Email address"),r.a.createElement("input",{className:"form-control","aria-describedby":"emailHelp",type:"text",name:"email",value:p,onChange:function(e){return f(e)}})),r.a.createElement("div",{className:"form-group mb-4"},r.a.createElement("label",{htmlFor:"exampleInputPassword1"},"Password"),r.a.createElement("input",{name:"pass",className:"form-control",type:"password",value:b,onChange:function(e){return f(e)}})),r.a.createElement("button",{type:"submit",className:"outline-del bold-text mt-2 mb-2 center crimson btn"},"Continue"))),r.a.createElement("div",{className:"font-s mt-3 center text-center"},"Don't have an account? ",r.a.createElement(u.b,{className:"bold-text cornflowerblue",to:"/signup"},"Sign Up")))},E=function(e){var t=e.setAuth,a=Object(n.useState)({email:"",name:"",pass:""}),c=Object(s.a)(a,2),l=c[0],m=c[1],p=l.email,b=l.name,f=l.pass,E=function(e){m(Object(v.a)(Object(v.a)({},l),{},Object(d.a)({},e.target.name,e.target.value)))},h=function(){var e=Object(i.a)(o.a.mark((function e(a){var n,r,c;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a.preventDefault(),e.prev=1,n={email:p,name:b,pass:f},e.next=5,fetch("https://vosse-contactsapi.glitch.me/auth/signup",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(n)});case 5:return r=e.sent,e.next=8,r.json();case 8:(c=e.sent).jwtToken?(localStorage.setItem("token",c.jwtToken),t(!0)):t(!1),e.next=15;break;case 12:e.prev=12,e.t0=e.catch(1),console.error(e.t0.message);case 15:case"end":return e.stop()}}),e,null,[[1,12]])})));return function(t){return e.apply(this,arguments)}}();return r.a.createElement(n.Fragment,null,r.a.createElement("div",{className:"auth-card mt-5 min-width"},r.a.createElement("div",{className:"mb-5 bold-text"},"Create your Contacts account"),r.a.createElement("form",{onSubmit:h},r.a.createElement("div",{class:"form-group mb-4"},r.a.createElement("label",{htmlFor:"exampleInputEmail1"},"Email address"),r.a.createElement("input",{type:"email",className:"form-control",id:"exampleInputEmail1","aria-describedby":"emailHelp",name:"email",value:p,placeholder:"name@company.com",onChange:function(e){return E(e)}})),r.a.createElement("div",{className:"form-group mb-4"},r.a.createElement("label",{htmlFor:"username"},"Username"),r.a.createElement("input",{type:"text",className:"form-control",name:"name",placeholder:"username",value:b,onChange:function(e){return E(e)}})),r.a.createElement("div",{className:"form-group mb-4"},r.a.createElement("label",{htmlFor:"exampleInputPassword1"},"Password"),r.a.createElement("input",{type:"password",className:"form-control",id:"exampleInputPassword1",name:"pass",placeholder:"********",value:f,onChange:function(e){return E(e)}})),r.a.createElement("button",{type:"submit",className:"outline-del bold-text mt-2 mb-2 center crimson btn"},"Continue"))),r.a.createElement("div",{className:"font-s mt-3 center text-center"},"Have an account? ",r.a.createElement(u.b,{className:"bold-text cornflowerblue",to:"/login"},"Sign In")))},h=function(e){e.setContactsChange;var t=e.allContacts,a=Object(n.useState)([]),c=Object(s.a)(a,2),l=c[0],m=c[1];return Object(n.useEffect)((function(){m(t)}),[t]),0!==l.length&&null!==l[0].contact_id?r.a.createElement("div",{className:"contacts-table"},r.a.createElement("table",{className:"mt-5 table table-borderless"},r.a.createElement("thead",null,r.a.createElement("tr",null,r.a.createElement("th",{className:"mr-2 th-style",scope:"col"},"Name"),r.a.createElement("th",{className:"email mr-2 th-style",scope:"col"},"Email"),r.a.createElement("th",{className:"mr-2 th-style",scope:"col"},"Number"))),r.a.createElement("tbody",null,0!==l.length&&null!==l[0].contact_id&&l.map((function(e){return r.a.createElement("tr",{key:e.contact_id},r.a.createElement("td",{className:"mr-2 th-style"},e.contact_first_name," ",e.contact_last_name),r.a.createElement("td",{className:"email mr-2 th-style"},e.contact_email),r.a.createElement("td",{className:"mr-2 th-style"},e.contact_number))}))))):r.a.createElement(n.Fragment,null,r.a.createElement("div",{className:"jumbotron mt-5 shadows"},r.a.createElement("h1",{className:"display-4"},"Hello! "),r.a.createElement("p",{className:"lead"},"This is a simple React application I made for storing all your contacts."),r.a.createElement("p",null,"It uses Express & PostgreSQL for storing and retrieving data."),r.a.createElement("p",null,"API is publicly available on my ",r.a.createElement("a",{className:"cornflowerblue",href:"http://www.github.com/vosse"},"github")),r.a.createElement("p",null,"You can reach me at ",r.a.createElement("a",{className:"cornflowerblue",href:"mailto:relja.jovicevic@gmail.com"},"relja.jovicevic@gmail.com")),r.a.createElement(u.b,{className:"btn cfb-bg text-white btn-lg",to:"/new",role:"button"},"Create contact")))},g=function(e){e.setAuth,e.isAuth;var t=Object(n.useState)([]),a=Object(s.a)(t,2),c=a[0],l=a[1],m=Object(n.useState)(!1),u=Object(s.a)(m,2),p=u[0],b=u[1],d=function(){var e=Object(i.a)(o.a.mark((function e(){var t,a;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch("https://vosse-contactsapi.glitch.me/contacts/",{method:"GET",headers:{jwt_token:localStorage.token}});case 3:return t=e.sent,e.next=6,t.json();case 6:a=e.sent,l(a),e.next=13;break;case 10:e.prev=10,e.t0=e.catch(0),console.error(e.t0.message);case 13:case"end":return e.stop()}}),e,null,[[0,10]])})));return function(){return e.apply(this,arguments)}}();return Object(n.useEffect)((function(){d(),b(!1)}),[p]),r.a.createElement("div",{className:"d-flex mt-3 justify-content-around"},r.a.createElement(h,{setContactsChange:b,allContacts:c}))},N=function(e){e.setContactChange;var t=Object(n.useState)({first_name:"",last_name:"",email:"",number:""}),a=Object(s.a)(t,2),c=a[0],l=a[1],m=c.first_name,u=c.last_name,p=c.email,b=c.number,f=function(e){l(Object(v.a)(Object(v.a)({},c),{},Object(d.a)({},e.target.name,e.target.value)))},E=function(){var e=Object(i.a)(o.a.mark((function e(t){var a,n,r,c;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),(a=new Headers).append("Content-Type","application/json"),a.append("jwt_token",localStorage.token),e.prev=4,n={first_name:m,last_name:u,email:p,number:b},e.next=8,fetch("https://vosse-contactsapi.glitch.me/contacts/new",{method:"POST",headers:a,body:JSON.stringify(n)});case 8:return r=e.sent,e.next=11,r.json();case 11:c=e.sent,console.log(c),console.log(r),l([]),window.location="/",e.next=21;break;case 18:e.prev=18,e.t0=e.catch(4),console.error(e.t0.message);case 21:case"end":return e.stop()}}),e,null,[[4,18]])})));return function(t){return e.apply(this,arguments)}}();return r.a.createElement(n.Fragment,null,r.a.createElement("div",{className:"auth-card mt-5 min-width mb-5"},r.a.createElement("div",{className:"mb-5 bold-text"},"Create new contact"),r.a.createElement("form",{onSubmit:E},r.a.createElement("div",{className:"form-group mb-2"},r.a.createElement("label",{forHtml:"first-name"},"First name"),r.a.createElement("input",{className:"form-control","aria-describedby":"firstNameHelp",type:"text",value:m,name:"first_name",onChange:function(e){return f(e)}})),r.a.createElement("div",{className:"form-group mb-2"},r.a.createElement("label",{htmlFor:"exampleInputEmail1"},"Last name"),r.a.createElement("input",{className:"form-control","aria-describedby":"emailHelp",type:"text",value:u,name:"last_name",onChange:function(e){return f(e)}})),r.a.createElement("div",{className:"form-group mb-2"},r.a.createElement("label",{htmlFor:"exampleInputEmail1"},"Email"),r.a.createElement("input",{className:"form-control","aria-describedby":"emailHelp",type:"email",value:p,name:"email",onChange:function(e){return f(e)}})),r.a.createElement("div",{className:"form-group mb-2"},r.a.createElement("label",{htmlFor:"inlineFormInputGroup"},"Number"),r.a.createElement("div",{className:"input-group"},r.a.createElement("div",{className:"input-group-prepend"},r.a.createElement("div",{className:"input-group-text"},"+")),r.a.createElement("input",{id:"inlineFormInputGroup",type:"number",className:"form-control",value:b,name:"number",onChange:function(e){return f(e)}}))),r.a.createElement("button",{type:"submit",className:"outline-del bold-text mt-2 mb-2 center crimson btn"},"Continue"))))};var j=function(){var e=function(){var e=Object(i.a)(o.a.mark((function e(){var t,a;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch("https://vosse-contactsapi.glitch.me/auth/verify",{method:"POST",headers:{jwt_token:localStorage.token}});case 3:return t=e.sent,e.next=6,t.json();case 6:a=e.sent,l(!0===a),e.next=13;break;case 10:e.prev=10,e.t0=e.catch(0),console.error(e.t0.message);case 13:case"end":return e.stop()}}),e,null,[[0,10]])})));return function(){return e.apply(this,arguments)}}();Object(n.useEffect)((function(){e()}),[]);var t=Object(n.useState)(!1),a=Object(s.a)(t,2),c=a[0],l=a[1],m=function(e){l(e)};return r.a.createElement("div",{className:"App"},r.a.createElement(u.a,{basename:""},r.a.createElement(n.Fragment,null,r.a.createElement(b,{isAuth:c,setAuth:m}),r.a.createElement(p.d,null,r.a.createElement(p.b,{exact:!0,path:"/new",render:function(e){return c?r.a.createElement(N,null):r.a.createElement(p.a,{to:"/login"})}}),r.a.createElement(p.b,{exact:!0,path:"/",render:function(e){return c?r.a.createElement(g,Object.assign({isAuth:c},e)):r.a.createElement(p.a,{to:"/signup"})}}),r.a.createElement(p.b,{exact:!0,path:"/login",render:function(e){return c?r.a.createElement(p.a,{to:"/"}):r.a.createElement(f,Object.assign({},e,{setAuth:m}))}}),r.a.createElement(p.b,{exact:!0,path:"/signup",render:function(e){return c?r.a.createElement(p.a,{to:"/"}):r.a.createElement(E,Object.assign({},e,{setAuth:m}))}})))))};l.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(j,null)),document.getElementById("root"))}},[[21,1,2]]]);
//# sourceMappingURL=main.1e20b039.chunk.js.map