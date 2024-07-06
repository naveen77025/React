import React from "react";
import ReactDOM from "react-dom/client";

const child= React.createElement("h1",{},"react element");

// JSX is like HTML but not the same. It is devloped by Meta to make dev easy. 
const childJSX=(<h1 className="root" tabIndex="5">React element with JSX</h1>);

//Babel is doing  the conversion of JSX to browser compatible JS
const root= ReactDOM.createRoot(document.getElementById("root"));
root.render(childJSX);

// React funtioncal component

const Heading= () =>(
    <div id="container"> 
        <Title/>
        <h1 id="heading_functional">functional component</h1>
    </div>
    )
;

const Title= () => (<h1 id="title">Title</h1>)
const root1= ReactDOM.createRoot(document.getElementById("root1"));


const reactElement1=(
    <div id="re1">
        <h1>this is react element 1</h1>
        <h1>this is part of react element 1</h1>
    </div>
);

const ReactFunctionalComponent1= () => (
    <div id="rfc1">
        {reactElement1}
        <h1>thi is part of react component 1</h1>
    </div>
);

const reactElement2=(
    <div id="re1">
        <h1>this is react element 2</h1>
        <ReactFunctionalComponent1/>
        <h1>this is part of react element 2</h1>
    </div>
);

const ReactFunctionalComponent2= () => (
    <div id="rfc1">
        {reactElement1}
        <h1>thi is part of react component 2</h1>
    </div>
);
root1.render(reactElement2);
