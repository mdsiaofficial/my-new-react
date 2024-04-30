import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
// import {jsx as _jsx} from "react/jsx-runtime";

// const reactEl = {
//   type: "a",
//   props: {
//       href: "https://google.com",
//       target: "_blank",
//   },
//   children: "click me to visit google",
// };

// const anEl = (
//   <a href="https://google.com" target="_blank">
//     click me to visit google
//   </a>
// )

// const neww = " new ";
// const reactEL = React.createElement(
//   "a",
//   { href: "https://google.com", target: "_blank" },
//   "click google",
//   neww
// )
// ReactDOM.render(reactEl, document.getElementById("root")

ReactDOM.createRoot(document.getElementById('root')).render(
    <App></App>
)
