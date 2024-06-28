"use client";
import React from "react";
import Error from "next/error";

const CustomError = ({ statusCode }) => {
  return (
    <div>
      <h1>{statusCode} - An error occurred</h1>
      <p>
        {statusCode === 404 ? "Page not found" : "An unexpected error occurred"}
      </p>
    </div>
  );
};

CustomError.getInitialProps = ({ res, err }) => {
  const statusCode = res ? res.statusCode : err ? err.statusCode : 404;
  return { statusCode };
};

export default CustomError;
