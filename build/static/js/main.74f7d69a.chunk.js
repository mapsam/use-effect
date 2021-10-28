(this["webpackJsonpuse-effect"]=this["webpackJsonpuse-effect"]||[]).push([[0],{11:function(e,t,s){"use strict";s.r(t);var c=s(1),n=s.n(c),a=s(4),r=s.n(a),j=(s(9),s(2)),h=s(0);function i(e){var t=Object(c.useState)(e.name),s=Object(j.a)(t,2),n=s[0],a=(s[1],Object(c.useState)(e.name)),r=Object(j.a)(a,2),i=r[0],o=r[1];return Object(c.useEffect)((function(){o(e.name)}),[e.name]),Object(h.jsxs)("div",{className:"Output",children:[Object(h.jsxs)("h3",{children:["Without ",Object(h.jsx)("code",{children:"useEffect"})]}),Object(h.jsxs)("p",{children:["The initial value is set, but never updates despite ",Object(h.jsx)("code",{children:"props.name"})," updating on changes."]}),Object(h.jsx)("pre",{children:"useState(props.name);"}),Object(h.jsx)("p",{className:"val",children:n}),Object(h.jsxs)("h3",{children:["With ",Object(h.jsx)("code",{children:"useEffect"})]}),Object(h.jsxs)("p",{children:["Now the name value updates because the ",Object(h.jsx)("code",{children:"useEffect"})," function runs on state changes. By calling the setter function, the component re-renders with the updated value."]}),Object(h.jsx)("pre",{children:"useState(props.name);\n\nuseEffect(() => {\n  setName(props.name);\n}, [props.name]);"}),Object(h.jsx)("p",{className:"val",children:i})]})}var o=function(){var e=Object(c.useState)("Welcome to Seattle"),t=Object(j.a)(e,2),s=t[0],n=t[1];return Object(h.jsxs)("div",{className:"App",children:[Object(h.jsxs)("h2",{children:["Why should I use ",Object(h.jsx)("code",{children:"useEffect"}),"?"]}),Object(h.jsxs)("p",{children:["Setting state with the ",Object(h.jsx)("a",{href:"https://reactjs.org/docs/hooks-state.html",children:Object(h.jsx)("code",{children:"useState"})})," hook is great. If the value was set with props initially and your props update, you need to use the ",Object(h.jsx)("a",{href:"https://reactjs.org/docs/hooks-effect.html",children:Object(h.jsx)("code",{children:"useEffect"})})," function to properly re-render the state."]}),Object(h.jsx)("p",{children:"Try editing the text in the field below."}),Object(h.jsx)("input",{type:"text",className:"",value:s,onChange:function(e){return n(e.target.value)}}),Object(h.jsx)(i,{name:s})]})};r.a.render(Object(h.jsx)(n.a.StrictMode,{children:Object(h.jsx)(o,{})}),document.getElementById("root"))},9:function(e,t,s){}},[[11,1,2]]]);
//# sourceMappingURL=main.74f7d69a.chunk.js.map