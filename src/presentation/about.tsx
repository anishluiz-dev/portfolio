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
      <Box>
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
          <Grid
            container
            spacing={20}
            alignItems="flex-start"
            sx={{ flexDirection: { xs: "column", md: "row" } }}
          >
            {/* Text Column */}
            <Grid size={{ xs: 12, md: 6 }}>
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
                  Full-Stack Engineer
                </Box>{" "}
                with a passion for building robust, scalable web applications. I
                specialize in creating seamless frontend experiences and
                designing efficient backend systems, delivering end-to-end
                solutions.
              </Typography>

              <Typography
                sx={{
                  color: "text.secondary",
                  lineHeight: 1.7,
                }}
              >
                With over <strong>2 years</strong> of experience, I have
                successfully delivered applications, including an admin
                dashboard for managing private flight catering systems.
              </Typography>
            </Grid>

            {/* Terminal Column */}
            <Grid size={{ xs: 12, md: 6 }}>
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
  "name": "Soris Anish",
  "role": "Full-Stack Engineer",
  "experience": "2+ years",
  "company": "AirCrew Connect, Dubai",
  "focus": [
    "Frontend Architecture",
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
