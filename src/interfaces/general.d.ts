import React from "react";

export type jsxComponent = React.ReactElement<
  any,
  string | React.JSXElementConstructor<any>
>;

export type voidFunc = () => void;
