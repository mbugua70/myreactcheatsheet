import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
// import App from './App';
// import AppTwo from "./App2";
// import AppThree from "./App3";
// import AppFour from "./app4";
// import AppFive from "./app5";
// import AppSix from "./app6";
// import AppSeven from "./app7";
import AppEight from "./app8";
import reportWebVitals from "./reportWebVitals";

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// );

// const rootTwo = ReactDOM.createRoot(document.getElementById("root2"));
// rootTwo.render(
//   <React.StrictMode>
//     <AppTwo />
//   </React.StrictMode>
// );

// const rootThree = ReactDOM.createRoot(document.getElementById("root3"));
// rootThree.render(
//   <React.StrictMode>
//     <AppThree />
//   </React.StrictMode>
// );
// const rootFour = ReactDOM.createRoot(document.getElementById("root4"));
// rootFour.render(
//   <React.StrictMode>
//     <AppFour />
//   </React.StrictMode>
// );
// const rootFive = ReactDOM.createRoot(document.getElementById("root5"));
// rootFive.render(
//   <React.StrictMode>
//     <AppFive />
//   </React.StrictMode>
// );
// const rootSix = ReactDOM.createRoot(document.getElementById("root6"));
// rootSix.render(
//   <React.StrictMode>
//     <AppSix />
//   </React.StrictMode>
// );
// const rootSeven = ReactDOM.createRoot(document.getElementById("root7"));
// rootSeven.render(
//   <React.StrictMode>
//     <AppSeven />
//   </React.StrictMode>
// );
const rootEight = ReactDOM.createRoot(document.getElementById("root7"));
rootEight.render(
  <React.Fragment>
    <AppEight />
  </React.Fragment>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
