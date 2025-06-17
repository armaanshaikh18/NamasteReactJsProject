import React from "react";
import { useRouteError } from "react-router";

const Error = () => {
  const error = useRouteError();
  return (
    <div>
      <h1>Oops Somethings Went Wrong!!</h1>
      <h3>
        {error?.status}: {error?.statusText}
      </h3>
    </div>
  );
};

export default Error;
