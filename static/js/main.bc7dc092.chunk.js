(this.webpackJsonpreactdemo=this.webpackJsonpreactdemo||[]).push([[0],[,,,,,,,,,,function(e,t,n){},,function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var c=n(5),a=n.n(c),s=n(2),r=n(1),i=(n(10),n(0)),l=function(e){var t=e.setTask,n=e.setFilter,c=e.filter,a=Object(r.useState)(""),l=Object(s.a)(a,2),o=l[0],u=l[1];return Object(i.jsx)("div",{className:"form-wrapper",children:Object(i.jsxs)("form",{onSubmit:function(e){e.preventDefault(),""!==o&&(t((function(e){return e.concat({newTask:o,id:1e3*Math.random(),completed:!1})})),u(""))},children:[Object(i.jsx)("input",{className:"Todo-input",type:"text",value:o,placeholder:"Enter new task",onChange:function(e){return u(e.target.value)}}),Object(i.jsx)("button",{type:"submit",className:"create-btn",children:"Add Task"}),Object(i.jsxs)("select",{className:"select",value:c,onChange:function(e){return n(e.target.value)},children:[Object(i.jsx)("option",{value:"all",children:"All"}),Object(i.jsx)("option",{value:"completed",children:"Completed"}),Object(i.jsx)("option",{value:"active",children:"Active"})]})]})})},o=n(3),u=(n(12),function(e){var t=e.task,n=e.setTask,c=e.filter,a=Object(r.useState)(""),l=Object(s.a)(a,2),u=l[0],d=l[1],j=Object(r.useState)(""),b=Object(s.a)(j,2),p=b[0],m=b[1];return Object(i.jsx)("div",{className:"todo-wrapper",children:t.sort((function(e,t){return e.completed-t.completed})).map((function(e){var a=e.id,s=e.completed,r=e.newTask,l=Object(i.jsxs)("div",{className:"task-box-wrapper",children:[Object(i.jsxs)("div",{className:"task-box",children:[Object(i.jsx)("button",{type:"button",className:"done btn",onClick:function(){return function(e){var c=t.map((function(t){return t.id===e?Object(o.a)(Object(o.a)({},t),{},{completed:!t.completed}):t}));n(c)}(a)},children:s?"Undone?":"Done?"}),Object(i.jsx)("p",{className:s?"task-field line-through":"task-field",children:r}),Object(i.jsx)("button",{type:"button",className:"delete btn",onClick:function(){return function(e){var c=t.filter((function(t){return t.id!==e}));n(c)}(a)},children:"Delete"}),Object(i.jsx)("button",{type:"button",className:"edit btn",onClick:function(){d(u===a?"":a)},children:"Edit"})]},a),u===a&&Object(i.jsxs)("form",{className:"edit-box",onSubmit:function(){return function(e){var c=t.map((function(t){return t.id===e?Object(o.a)(Object(o.a)({},t),{},{newTask:p}):t}));n(c),d("")}(a)},children:[Object(i.jsx)("input",{type:"text",className:"edit-input",placeholder:"Edit task here",onChange:function(e){return m(e.target.value)}}),Object(i.jsx)("button",{type:"submit",className:"apply btn",children:"Apply"})]})]});return"all"===c||"active"===c&&!1===s||"completed"===c&&!0===s?l:null}))})}),d=(n(13),function(){var e=Object(r.useState)([]),t=Object(s.a)(e,2),n=t[0],c=t[1],a=Object(r.useState)("all"),o=Object(s.a)(a,2),d=o[0],j=o[1];return Object(i.jsxs)("div",{className:"wrapper",children:[Object(i.jsx)("h1",{className:"heading",children:"ToDo List"}),Object(i.jsx)(l,{setTask:c,setFilter:j,filter:d}),0===n.length?"No task yet!":Object(i.jsx)(u,{task:n,setTask:c,filter:d})]})});n(14);a.a.render(Object(i.jsx)(d,{}),document.getElementById("root"))}],[[15,1,2]]]);
//# sourceMappingURL=main.bc7dc092.chunk.js.map