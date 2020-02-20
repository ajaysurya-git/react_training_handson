import React, { useRef } from "react";

export default function App() {
  // const input3 = <h1>Hello</h1>;
  const input1 = useRef(null);
  const input2 = useRef(null);
  console.log("Input 1 : ", input1);
  console.log("Input 2 : ", input2);
  const onButtonClick = () => {
    input1.current.focus();
    input2.current.focus();
    console.log(input1);
    console.log(input2);
  };
  return (
    <div>
      <input ref={input1} type="password" />
      <input ref={input2} type="text" />
      <button onClick={onButtonClick}>Focus the input</button>
    </div>
  );
}
