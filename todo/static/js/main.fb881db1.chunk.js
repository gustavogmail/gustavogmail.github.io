(this["webpackJsonpreact-todo-list-hooks-ts"]=this["webpackJsonpreact-todo-list-hooks-ts"]||[]).push([[0],{22:function(e,t,o){},23:function(e,t,o){"use strict";o.r(t);var n=o(5),a=o(4),r=o(0),d=o(7),l=o(8),c=o.n(l),i=function(e){var t=r.useRef(null),o=r.useState(""),n=Object(a.a)(o,2),d=n[0],l=n[1];return r.createElement("div",{className:"todo-form"},r.createElement("input",{id:"newTodo",ref:t,type:"text",placeholder:"Enter new todo",onChange:function(e){return function(e){l(e.target.value)}(e)},onKeyPress:function(o){return function(o){if("Enter"===o.key){var n={id:c.a.generate(),text:d,isCompleted:!1};e.handleTodoCreate(n),t&&t.current&&(t.current.value="")}}(o)}}))},u=function(e){return r.createElement("div",{className:"todo-item"},r.createElement("div",{className:"checker",onClick:function(){return e.handleTodoComplete(e.todo.id)}},e.todo.isCompleted?r.createElement("span",{className:"todo-item-checked"},"\u2714"):r.createElement("span",{className:"todo-item-unchecked"})),r.createElement("div",{className:"todo-item-input-wrapper"},r.createElement("input",{className:"todoItemInput",value:e.todo.text,onBlur:e.handleTodoBlur,onChange:function(t){return e.handleTodoUpdate(t,e.todo.id)}})),r.createElement("div",{className:"item-remove",onClick:function(){return e.handleTodoRemove(e.todo.id)}},"\u2a2f"))},s=function(e){return r.createElement("div",{className:"todo-list"},r.createElement("ul",null,e.todos.map((function(t){return r.createElement("li",{key:t.id},r.createElement(u,{todo:t,handleTodoUpdate:e.handleTodoUpdate,handleTodoRemove:e.handleTodoRemove,handleTodoComplete:e.handleTodoComplete,handleTodoBlur:e.handleTodoBlur}))}))))},m=(o(22),function(){var e=r.useState([]),t=Object(a.a)(e,2),o=t[0],d=t[1];return r.createElement("div",{className:"todo-list-app"},r.createElement(i,{todos:o,handleTodoCreate:function(e){var t=Object(n.a)(o);t.push(e),d(t)}}),r.createElement(s,{todos:o,handleTodoUpdate:function(e,t){var a=Object(n.a)(o);a.find((function(e){return e.id===t})).text=e.target.value,d(a)},handleTodoRemove:function(e){var t=o.filter((function(t){return t.id!==e}));d(t)},handleTodoComplete:function(e){var t=Object(n.a)(o);t.find((function(t){return t.id===e})).isCompleted=!t.find((function(t){return t.id===e})).isCompleted,d(t)},handleTodoBlur:function(e){0===e.target.value.length?e.target.classList.add("todo-input-error"):e.target.classList.remove("todo-input-error")}}))}),p=document.getElementById("root");Object(d.render)(r.createElement(m,null),p)},9:function(e,t,o){e.exports=o(23)}},[[9,1,2]]]);
//# sourceMappingURL=main.fb881db1.chunk.js.map