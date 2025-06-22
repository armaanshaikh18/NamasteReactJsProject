import React, { useEffect, useState } from "react";

const UserFunction = ({ name, location }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      console.log("Hello Functional Component");
    }, 1000);

    return () => {
      clearInterval(timer);
    };
  }, []);

  return (
    <div className="user-card">
      <h1>Count - {count}</h1>
      <button
        onClick={() => {
          setCount(count + 1);
        }}
      >
        Count Increase
      </button>
      <h2>{name}</h2>
      <h3>{location}</h3>
    </div>
  );
};

export default UserFunction;
