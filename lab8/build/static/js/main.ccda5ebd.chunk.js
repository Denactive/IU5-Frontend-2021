(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{10:function(t,e,n){},12:function(t,e,n){"use strict";n.r(e);var c=n(1),i=n.n(c),s=n(4),a=n.n(s),o=(n(9),n(2)),r=(n(10),i.a.createContext()),u=n(0);function l(t){var e=t.task,n=i.a.useState(e.title),s=Object(o.a)(n,2),a=(s[0],s[1],Object(c.useContext)(r)),l=Object(o.a)(a,3),d=l[0],j=l[1],b=l[2],f=["list-item-field"];return e.done?f.push("done"):f.push("active"),Object(u.jsxs)("div",{className:"list-item",children:[Object(u.jsx)("input",{type:"checkbox",className:"list-checkbox",checked:e.done,onChange:function(){return d(e.id)}}),Object(u.jsx)("input",{className:f.join(" "),type:"text",value:e.title,onChange:function(t){return j(e.id,t.target.value)}}),Object(u.jsx)("button",{className:"list-del-btn",onClick:b.bind(null,e.id),children:"X"})]})}function d(t){var e=t.AddTask,n=Object(c.useState)(""),i=Object(o.a)(n,2),s=i[0],a=i[1];return Object(u.jsxs)("form",{className:"enter-item",onSubmit:function(t){t.preventDefault(),s.trim()&&e(s),a("")},children:[Object(u.jsx)("input",{type:"text",placeholder:"new task",value:s,onChange:function(t){return a(t.target.value)}}),Object(u.jsx)("button",{type:"submit",children:"Add Task"})]})}function j(t){var e=t.tasks;return Object(u.jsxs)("div",{className:"list",children:[Object(u.jsx)("h1",{className:"text-align-center w-100",children:"\u0421\u043f\u0438\u0441\u043e\u043a \u0437\u0430\u0434\u0430\u0447"}),Object(u.jsx)(d,{AddTask:t.AddTask}),e.map((function(t){return Object(u.jsx)(l,{task:t},t.id)}))]})}var b=function(){var t=i.a.useState([]),e=Object(o.a)(t,2),n=e[0],c=e[1];return Object(u.jsx)(r.Provider,{value:[function(t){console.log("crossing out "+t),c(n.map((function(e){return e.id===t&&(e.done=!e.done),e})))},function(t,e){console.log("Renaming "+t),c(n.map((function(n){return n.id===t&&(n.title=e),n})))},function(t){c(n.filter((function(e){return e.id!==t})))}],children:Object(u.jsxs)("div",{className:"bg-img",children:[Object(u.jsx)(j,{tasks:n,AddTask:function(t){c(n.concat([{title:t,id:Date.now(),done:!1}]))}}),Object(u.jsx)("footer",{children:"Turchin Denis IU5-45"})]})})},f=function(t){t&&t instanceof Function&&n.e(3).then(n.bind(null,13)).then((function(e){var n=e.getCLS,c=e.getFID,i=e.getFCP,s=e.getLCP,a=e.getTTFB;n(t),c(t),i(t),s(t),a(t)}))};a.a.render(Object(u.jsx)(i.a.StrictMode,{children:Object(u.jsx)(b,{})}),document.getElementById("root")),f()},9:function(t,e,n){}},[[12,1,2]]]);
//# sourceMappingURL=main.ccda5ebd.chunk.js.map