import React from "react";
import ReactDOM from "react-dom/client";

const child= React.createElement("h1",{},"react element");
const root= ReactDOM.createRoot(document.getElementById("root"));
root.render(child);