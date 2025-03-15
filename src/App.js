import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./Components/Header";
import Body from "./Components/Body";

// const heading = React.createElement('h1',{id : "heading"}, "Hola Amigo")
// const jsxHeading = <h1 id='heading'>Hello From JSX</h1>
// //normal function
// const Heading2 = function(){
//     return <h2>HolaAmigo</h2>
// }
// const Title = () => {return(
//     <h1>Namaste React</h1>
// )}
// const HeadingComponent = () => {
// return (
//     <div id='container'>
//         {/* //component Composisition */}
//     <Title />
//     <h1>hello from headingComponent</h1>
//     <Heading2/>
//     </div>

// )}

const AppLayout = () => {
  return (
    <div className="app">
      <Header />
      <Body />
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout />);
