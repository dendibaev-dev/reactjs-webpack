import React from "react";
import Test from "./components/test";

const App = () => {
  const justFunc = () => console.log("function called");

  return (
    <>
      <Test />
      <button onClick={justFunc}>Just a button</button>
    </>
  );
};
export default App;
