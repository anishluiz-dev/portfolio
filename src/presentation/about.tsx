"use client";

import { motion } from "framer-motion";
import { Box, Typography, Paper } from "@mui/material";
import Grid from "@mui/material/Grid";

export function About() {
  return (
    <Box
      id="about"
      sx={{
        py: 12,
        bgcolor: "background.default",
      }}
    >
      <Box sx={{ maxWidth: "900px", mx: "auto", px: { xs: 3, md: 6 } }}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          {/* Heading */}
          <Typography
            variant="h4"
            align="center"
            sx={{
              fontWeight: 700,
              mb: 6,
            }}
          >
            <Box component="span" sx={{ color: "primary.main" }}>
              /
            </Box>{" "}
            About Me
          </Typography>

          {/* Content + Terminal */}
          <Grid container spacing={4} alignItems="flex-start">
            {/* Text Column */}
            <Grid size={6}>
              <Typography
                sx={{
                  color: "text.secondary",
                  lineHeight: 1.7,
                  mb: 2,
                }}
              >
                I'm a dedicated{" "}
                <Box
                  component="span"
                  sx={{ color: "text.primary", fontWeight: 600 }}
                >
                  Node.js Engineer
                </Box>{" "}
                with a passion for building robust, scalable backend systems. My
                expertise lies in architecting cloud-native solutions and
                optimizing server performance.
              </Typography>

              <Typography
                sx={{
                  color: "text.secondary",
                  lineHeight: 1.7,
                }}
              >
                With over <strong>2 years</strong> of experience, I've
                successfully delivered applications ranging from CRM platforms
                to advanced financial systems.
              </Typography>
            </Grid>

            {/* Terminal Column */}
            <Grid size={6}>
              <Paper
                elevation={6}
                sx={{
                  p: 2,
                  bgcolor: "#111",
                  borderRadius: 2,
                  overflowX: "auto",
                  color: "#4ade80",
                  fontFamily: "JetBrains Mono, monospace",
                }}
              >
                <Typography
                  sx={{
                    fontSize: 14,
                    mb: 1,
                    color: "#999",
                  }}
                >
                  bio.json
                </Typography>

                <pre
                  style={{
                    margin: 0,
                    fontSize: "0.85rem",
                    whiteSpace: "pre-wrap",
                  }}
                >
                  {`{
  "name": "Prince",
  "role": "Node.js Engineer",
  "experience": "2+ Years",
  "company": "ITboomi Innovations",
  "focus": [
    "Backend Architecture",
    "Scalable Systems",
    "API Development"
  ]
}`}
                </pre>
              </Paper>
            </Grid>
          </Grid>
        </motion.div>
      </Box>
    </Box>
  );
}
