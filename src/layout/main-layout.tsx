"use client";

import React from "react";
import { Navbar } from "../presentation/nav-bar";

interface IMainLayOutProps {
  children: React.ReactNode;
}

const MainLayOut: React.FC<IMainLayOutProps> = (props) => {
  const { children } = props;
  return (
    <React.Fragment>
      <Navbar />
      {children}
    </React.Fragment>
  );
};

export { MainLayOut };
