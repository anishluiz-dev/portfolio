"use client";

import React from "react";
import { Container } from "@mui/material";
import { Navbar } from "../presentation/nav-bar";
import { Footer } from "../presentation/footer";

interface IMainLayOutProps {
  children: React.ReactNode;
}

const MainLayOut: React.FC<IMainLayOutProps> = (props) => {
  const { children } = props;
  return (
    <React.Fragment>
      <Navbar />
      <Container>{children}</Container>
      <Footer />
    </React.Fragment>
  );
};

export { MainLayOut };
