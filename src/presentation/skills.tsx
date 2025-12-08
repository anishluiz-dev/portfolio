"use client";

import React from "react";
import { motion } from "framer-motion";
import { Box, Typography, Paper, Chip } from "@mui/material";
import {
  Server,
  Database,
  Cloud,
  Code,
  Terminal as TerminalIcon,
  Globe,
} from "lucide-react";
import Grid from "@mui/material/Grid";

const skills = [
  {
    category: "Backend",
    icon: <Server size={20} color="#3b82f6" />,
    items: [
      "Node.js",
      "Express",
      "NestJS",
      "GraphQL",
      "REST APIs",
      "Microservices",
    ],
  },
  {
    category: "Database",
    icon: <Database size={20} color="#22c55e" />,
    items: ["MongoDB", "Redis", "MySQL", "Mongoose"],
  },
  {
    category: "Cloud & DevOps",
    icon: <Cloud size={20} color="#06b6d4" />,
    items: ["AWS", "Docker", "Kubernetes", "CI/CD", "Nginx", "Serverless"],
  },
  {
    category: "Languages",
    icon: <Code size={20} color="#facc15" />,
    items: ["JavaScript (ES6+)", "TypeScript", "Python", "SQL", "Bash"],
  },
  {
    category: "Tools",
    icon: <TerminalIcon size={20} color="#a78bfa" />,
    items: ["Git", "VS Code", "Postman", "Linux", "Jira", "Click Up"],
  },
  {
    category: "Frontend Knowledge",
    icon: <Globe size={20} color="#ec4899" />,
    items: ["React", "Next.js", "Tailwind CSS", "HTML5", "CSS3", "Material Ui"],
  },
];

export function Skills() {
  return (
    <Box
      id="skills"
      sx={{
        py: 12,
      }}
    >
      <Box sx={{ maxWidth: "1200px", mx: "auto", px: { xs: 3, md: 6 } }}>
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          style={{ textAlign: "center", marginBottom: "48px" }}
        >
          <Typography variant="h4" sx={{ fontWeight: 700, mb: 2 }}>
            <Box component="span" sx={{ color: "primary.main" }}>
              /
            </Box>{" "}
            Tech Stack
          </Typography>
          <Typography
            variant="body1"
            sx={{ color: "text.secondary", maxWidth: 560, mx: "auto" }}
          >
            My arsenal of tools and technologies for building world-class
            applications.
          </Typography>
        </motion.div>

        {/* Skills Grid */}
        <Grid container spacing={4}>
          {skills.map((skill, index) => (
            <Grid key={skill.category} size={{ xs: 12, md: 6 }}>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Paper
                  elevation={3}
                  sx={{
                    p: 2,
                    minHeight: "10rem",
                    borderRadius: 2,
                    bgcolor: "secondary.main",
                    transition: "0.3s",
                    "&:hover": {
                      borderColor: "primary.main",
                      borderWidth: 1,
                      borderStyle: "solid",
                    },
                  }}
                >
                  {/* Header */}
                  <Box sx={{ display: "flex", alignItems: "center", mb: 1 }}>
                    <Box
                      sx={{
                        mr: 2,
                        p: 1,
                        bgcolor: "grey.200",
                        borderRadius: "50%",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                      }}
                    >
                      {skill.icon}
                    </Box>
                    <Typography variant="h6">{skill.category}</Typography>
                  </Box>

                  {/* Skills Items */}
                  <Box
                    sx={{ display: "flex", flexWrap: "wrap", gap: 1, mt: 1 }}
                  >
                    {skill.items.map((item) => (
                      <Chip
                        key={item}
                        label={item}
                        size="small"
                        sx={{
                          bgcolor: "secondary.main",
                          color: "primary.main",
                          fontWeight: 500,
                          "&:hover": {
                            bgcolor: "primary.main",
                            color: "primary.contrastText",
                          },
                        }}
                      />
                    ))}
                  </Box>
                </Paper>
              </motion.div>
            </Grid>
          ))}
        </Grid>
      </Box>
    </Box>
  );
}
