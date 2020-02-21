import React, { useRef, useState } from "react";

export default function UseRef() {
  // const input3 = <h1>Hello</h1>;
  const input1 = useRef(null);
  const input2 = useRef(null);
  console.log("Input 1 : ", input1);
  console.log("Input 2 : ", input2);
  const [count, setCount] = useState(0);
  const onButtonClick = () => {
    if (count === 0) {
      input1.current.focus();
      setCount(1);
    } else {
      input2.current.focus();
      setCount(0);
    }

    console.log(input1);
    console.log(input2);
    console.log(count);
  };
  return (
    <div>
      <input ref={input1} type="password" />
      <input ref={input2} type="text" />
      <button onClick={onButtonClick}>Focus the input</button>
    </div>
  );
}
