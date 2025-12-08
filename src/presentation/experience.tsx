"use client";

import { motion } from "framer-motion";
import { Box, Typography, Chip, Paper } from "@mui/material";
import { Briefcase, Calendar } from "lucide-react";

interface ExperienceItem {
  id: number;
  role: string;
  company: string;
  period: string;
  description: string;
  tech: string[];
}

const experiences: ExperienceItem[] = [
  {
    id: 1,
    role: "Software Engineer",
    company: "AirCrew Connect",
    period: "2+ Years",
    description:
      "At Matrix Aviation, I helped build the GalleyCloud platform, developing admin panels, customer interfaces, and delivery apps using React.js, Next.js, Node.js, Nest.js, Socket.io, MongoDB, and cloud platforms like Vercel, Google Cloud, and AWS",
    tech: [
      "Next js",
      "Node js",
      "Nest js",
      "Express",
      "MongoDB",
      "AWS",
      "Socket.io",
    ],
  },
  {
    id: 2,
    role: "FullStack Engineer",
    company: "Skill Safari",
    period: "8 Months",
    description:
      "At Skill Safari, I helped build a scalable e-learning platform, developing interactive learning modules and management dashboards using React.js, Node.js, Express.js, and MongoDB, while optimizing backend architecture and ensuring a smooth, seamless user experience",
    tech: ["Next js", "Node js", "Express", "MongoDB"],
  },
  {
    id: 3,
    role: "Software Engineer Intern",
    company: "Vision Group",
    period: "6 Months",
    description:
      "At Vision Group, I gained hands-on experience with image recognition technologies and enhanced my software engineering skills by assisting the team with query development and monitoring image data using their internal tools",
    tech: ["Python", "MongoDB"],
  },
];

export function Experience() {
  return (
    <Box
      id="experience"
      sx={{
        py: 12,
        bgcolor: "background.default",
      }}
    >
      <Box sx={{ maxWidth: 1200, mx: "auto", px: { xs: 3, md: 6 } }}>
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          style={{ textAlign: "center", marginBottom: 64 }}
        >
          <Typography variant="h4" sx={{ fontWeight: 700, mb: 2 }}>
            <Box component="span" sx={{ color: "primary.main" }}>
              /
            </Box>{" "}
            Experience
          </Typography>
          <Typography
            variant="body1"
            sx={{ color: "text.secondary", maxWidth: 560, mx: "auto" }}
          >
            My professional journey and the value I&apos;ve delivered along the
            way.
          </Typography>
        </motion.div>

        {/* Timeline */}
        <Box sx={{ position: "relative", width: { xs: "300px", md: "800px" } }}>
          {/* Vertical line for desktop */}
          <Box
            sx={{
              position: "absolute",
              left: "50%",
              top: 0,
              bottom: 0,
              width: 2,
              bgcolor: "divider",
              transform: "translateX(-50%)",
              display: { xs: "none", md: "block" },
            }}
          />

          <Box sx={{ display: "flex", flexDirection: "column", gap: 12 }}>
            {experiences.map((exp, index) => {
              const isLeft = index % 2 === 0;
              return (
                <motion.div
                  key={exp.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  style={{
                    display: "flex",
                    // flexDirection: {
                    // //   xs: "column",
                    // //   md: isLeft ? "row-reverse" : "row",
                    // },
                    gap: 32,
                    position: "relative",
                  }}
                >
                  {/* Timeline dot */}
                  <Box
                    sx={{
                      position: "absolute",
                      left: "50%",
                      top: 16,
                      width: 16,
                      height: 16,
                      bgcolor: "primary.main",
                      borderRadius: "50%",
                      transform: "translateX(-50%)",
                      display: { xs: "none", md: "block" },
                      border: "4px solid",
                      borderColor: "background.default",
                    }}
                  />

                  {/* Experience Content */}
                  <Box sx={{ flex: 1, maxWidth: "100%" }}>
                    <Box
                      sx={{
                        display: "flex",
                        flexDirection: "column",
                        alignItems: {
                          xs: "flex-start",
                          md: isLeft ? "flex-start" : "flex-end",
                        },
                        textAlign: {
                          xs: "left",
                          md: isLeft ? "left" : "right",
                        },
                      }}
                    >
                      <Box
                        sx={{
                          display: "flex",
                          alignItems: "center",
                          color: "text.secondary",
                          mb: 1,
                        }}
                      >
                        <Calendar size={16} style={{ marginRight: 8 }} />
                        {exp.period}
                      </Box>

                      <Typography variant="h6" sx={{ fontWeight: 700 }}>
                        {exp.role}
                      </Typography>

                      <Box
                        sx={{
                          display: "flex",
                          alignItems: "center",
                          color: "primary.main",
                          fontWeight: 500,
                          mb: 2,
                        }}
                      >
                        <Briefcase size={16} style={{ marginRight: 8 }} />
                        {exp.company}
                      </Box>

                      <Typography
                        variant="body2"
                        sx={{ color: "text.secondary", mb: 2 }}
                      >
                        {exp.description}
                      </Typography>

                      <Box sx={{ display: "flex", flexWrap: "wrap", gap: 1 }}>
                        {exp.tech.map((tech) => (
                          <Chip
                            key={tech}
                            label={tech}
                            size="small"
                            sx={{
                              border: "1px solid",
                              borderColor: "divider",
                              bgcolor: "background.paper",
                              fontWeight: 500,
                            }}
                          />
                        ))}
                      </Box>
                    </Box>
                  </Box>

                  {/* Spacer for other side */}
                  <Box sx={{ flex: 1, display: { xs: "none", md: "block" } }} />
                </motion.div>
              );
            })}
          </Box>
        </Box>
      </Box>
    </Box>
  );
}
