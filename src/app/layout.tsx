"use client";

import { ThemeProvider, CssBaseline } from "@mui/material";
import theme from "../theme/index";
import { MainLayOut } from "../layout/main-layout";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <MainLayOut>{children}</MainLayOut>
        </ThemeProvider>
      </body>
    </html>
  );
}
