"use client";

import React from "react";
import { Container } from "@mui/material";
import { Navbar } from "../presentation/nav-bar";

interface IMainLayOutProps {
  children: React.ReactNode;
}

const MainLayOut: React.FC<IMainLayOutProps> = (props) => {
  const { children } = props;
  return (
    <React.Fragment>
      <Navbar />
      <Container>{children}</Container>
    </React.Fragment>
  );
};

export { MainLayOut };
