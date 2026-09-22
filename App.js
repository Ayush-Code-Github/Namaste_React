/* <div id='parent'>

<div id='child'>
    <h1>I am h1 tag</h1>
    <h1>I am h2 tag</h1>

</div>
<div id='child2'>
    <h1>I am h1 tag</h1>
    <h1>I am h2 tag</h1>

</div>

</div> */

// ***********************************************************
// const heading = React.createElement(
//   "h1",

//   { id: "heading", xyz: "abc" }, // props & attributes
//   "welcome to React Ayush",
// ); //children

// console.log(heading);

// ****************************************************************


import React from "react";
import ReactDOM from "react-dom/client"

const parent = React.createElement("div", { id: "parent" }, [
  React.createElement("div", { id: "child1" }, [
    React.createElement("h1", {}, "I am h1 tag"),
    React.createElement("h1", {}, "I am h2 tag"),
  ]),

  React.createElement("div", { id: "child2" }, [
    React.createElement("h1", {}, "I am h1 tag"),
    React.createElement("h1", {}, "I am h2 tag"),
  ]),
]);

console.log(parent);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(parent);
