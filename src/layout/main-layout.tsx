"use client";

import React from "react";
import { Container } from "@mui/material";
import { ThemeProvider, CssBaseline } from "@mui/material";
import { Navbar } from "../presentation/nav-bar";
import { Footer } from "../presentation/footer";
import theme from "../theme/index";

interface IMainLayOutProps {
  children: React.ReactNode;
}

const MainLayOut: React.FC<IMainLayOutProps> = (props) => {
  const { children } = props;
  return (
    <React.Fragment>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Navbar />
        <Container>{children}</Container>
        <Footer />
      </ThemeProvider>
    </React.Fragment>
  );
};

export { MainLayOut };
