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
root1.render(<Heading/>);

