//1) Import the React and RectDOM libraries
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";

//2) Get a reference to the div with ID root
const el = document.getElementById("root");

//3) Tell React to take control of that element
const root = ReactDOM.createRoot(el);

//4) Create a component
// function App() {
//   const inputType = "number";
//   const minValue = 5;
//   const message = "Enter age";
//   // return <input type={inputType} min={minValue} />;
//   return (
//     <input
//       type="number"
//       min={5}
//       max={10}
//       list={[1, 2, 3]}
//       style={{ color: "red" }}
//       alt={message}
//     />
//   );
// return <textarea autoFocus={true} />;
// return <textarea autoFocus />;
// }

//4) Show the component on the screen
root.render(<App />);
