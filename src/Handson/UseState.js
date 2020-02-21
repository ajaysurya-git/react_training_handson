import React, { useState } from "react";

export default function UseState() {
  let [count, setCount] = useState(0);

  const fun = () => {
    fun1();
    fun2();
    fun3();
  };

  const fun1 = () => {
    console.log("Count Before : ", count);
  };
  const fun2 = () => {
    setCount(count + 1);
  };
  const fun3 = () => {
    console.log("Count After : ", count);
  };

  return (
    <div>
      <h1>COUNT : {count}</h1>
      <button onClick={fun}>Increament</button>
    </div>
  );
}
