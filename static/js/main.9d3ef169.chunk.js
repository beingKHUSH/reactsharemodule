(this.webpackJsonpreactsharemodule=this.webpackJsonpreactsharemodule||[]).push([[0],[,,,,function(e,a,t){e.exports=t(11)},,,,,function(e,a,t){},function(e,a,t){},function(e,a,t){"use strict";t.r(a);var n=t(0),l=t.n(n),i=t(3),r=t.n(i),m=(t(9),t(10),t(1)),c=function(e){var a=e.user;e.deleteMember;return l.a.createElement("div",{className:"user_profile"},l.a.createElement("div",{class:"user_img"}),l.a.createElement("div",{class:"user_details"},l.a.createElement("p",null,a.name),l.a.createElement("p",null,a.email)),!0===a.isMember?l.a.createElement("div",null,l.a.createElement("span",{className:"close"},"\xd7")):"")},s=function(e){var a=e.results;return l.a.createElement("div",{className:"suggestion"},a.map((function(e){return l.a.createElement(c,{key:"".concat(e.id,"-").concat(e.name),user:e,id:e.id})})))},o=function(e){var a=e.isShowing,t=e.hide,i=[{id:1,name:"Adrianna",email:"adrianna@gmail.com",isOwner:!0},{id:2,name:"Judd",email:"judd@live.in",isMember:!0},{id:3,name:"Anna",email:"anna@example.in",isMember:!1},{id:4,name:"Reta",email:"reta@example.in",isMember:!0},{id:5,name:"Toney",email:"toney@live.in",isMember:!1},{id:6,name:"Alene",email:"alene@live.in",isMember:!0},{id:7,name:"Ivah",email:"ivah@live.in",isMember:!0},{id:8,name:"Alda",email:"alda@example.in",isMember:!1},{id:9,name:"Courtney",email:"courtney@live.in",isMember:!1},{id:10,name:"Cynthia",email:"cynthia@example.in",isMember:!1},{id:11,name:"Elda",email:"elda@example.in",isMember:!1},{id:12,name:"Kamron",email:"kamron@live.in",isMember:!1}],r=i.filter((function(e){return!0===e.isMember})),o=i.filter((function(e){return!1===e.isMember})),u=Object(n.useState)(i),d=Object(m.a)(u,2),E=d[0],v=(d[1],Object(n.useState)([])),b=Object(m.a)(v,2),p=b[0],f=b[1],h=Object(n.useState)(r),g=Object(m.a)(h,2),M=g[0],N=(g[1],Object(n.useState)(o)),S=Object(m.a)(N,2),w=S[0],O=(S[1],E.filter((function(e){return!0===e.isOwner})));return l.a.createElement("div",{className:a?"modal show":"modal"},l.a.createElement("div",{className:"modal_section"},l.a.createElement("div",{className:"modal_header"},l.a.createElement("div",{className:"modal_title_section"},l.a.createElement("span",null,"Sharing Settings"),l.a.createElement("span",{className:"close",onClick:t},"\xd7")),l.a.createElement("form",null,l.a.createElement("div",{className:"form_label"},l.a.createElement("label",{for:"user"},"Add Member")),l.a.createElement("div",{style:{position:"relative"}},l.a.createElement("input",{type:"text",id:"user",name:"user",placeholder:"Enter name or registered email id",onChange:function(e){if(""===e.target.value)f([]);else{var a=w.filter((function(a){return a.name.toLowerCase().includes(e.target.value.toLowerCase())}));f(a)}}}),l.a.createElement(s,{results:p})))),l.a.createElement("div",{className:"modal_content"},l.a.createElement("div",{className:"owner_section"},l.a.createElement("span",null,"Owner"),l.a.createElement(c,{user:O[0]})),l.a.createElement("div",{className:"member_section"},l.a.createElement("span",null,"Members"),M.map((function(e){return l.a.createElement(c,{key:"".concat(e.id,"-").concat(e.name),user:e,id:e.id})})))),l.a.createElement("div",{className:"model_footer"},l.a.createElement("button",null,"Done"))))},u=function(){var e=Object(n.useState)(!1),a=Object(m.a)(e,2),t=a[0],l=a[1];return{isShowing:t,toggle:function(){l(!t)}}},d=function(){var e=u(),a=e.isShowing,t=e.toggle;return l.a.createElement("div",{className:"App"},l.a.createElement("div",{className:"share_page"},l.a.createElement("h2",null,"Share Files"),l.a.createElement("button",{onClick:t},"Share")),l.a.createElement(o,{isShowing:a,hide:t}))};r.a.render(l.a.createElement(l.a.StrictMode,null,l.a.createElement(d,null)),document.getElementById("root"))}],[[4,1,2]]]);
//# sourceMappingURL=main.9d3ef169.chunk.js.map