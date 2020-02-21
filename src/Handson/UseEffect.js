import React, { useEffect, useState } from "react";

export default function UseEffect() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log("Component Did Mount");
  }, []);
  useEffect(() => {
    console.log("Component Will Update");
  });
  useEffect(() => {
    return console.log("Component Did Unmount");
  });

  const fun = () => {
    setCount(count + 1);
  };

  return (
    <div>
      <h1>COUNT : {count}</h1>
      <button onClick={fun}>Inc</button>
    </div>
  );
}
