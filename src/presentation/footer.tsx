"use client";

import React from "react";
import { Box, Container, Typography } from "@mui/material";

export const Footer: React.FC = () => {
  return (
    <Box
      component="footer"
      sx={{
        py: 3,
        borderTop: 1,
        borderColor: "divider",
        backgroundColor: "background.default",
      }}
    >
      <Container
        maxWidth="lg"
        sx={{
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
          justifyContent: "space-between",
          alignItems: "center",
          gap: 2,
        }}
      >
        <Typography variant="body2" color="text.secondary">
          © {new Date().getFullYear()} Soris. All rights reserved.
        </Typography>

        <Typography
          variant="body2"
          color="text.secondary"
          sx={{ fontFamily: "monospace" }}
        >
          Built with Next.js, MUI & Framer Motion
        </Typography>
      </Container>
    </Box>
  );
};
