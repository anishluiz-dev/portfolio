"use client";

import { motion } from "framer-motion";
import {
  ArrowRight,
  Database,
  Server,
  Cloud,
  Github,
  Monitor,
  Mail,
} from "lucide-react";
import { Box, Button, Typography, Grid, Paper, Stack } from "@mui/material";
import Link from "next/link";

export function Hero() {
  return (
    <Box
      component="section"
      sx={{
        position: "relative",
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        pt: 14,
        overflow: "hidden",
      }}
    >
      {/* Background Effects */}
      <Box sx={{ position: "absolute", inset: 0, zIndex: -1 }}>
        <Box
          sx={{
            position: "absolute",
            top: 0,
            left: "25%",
            width: 380,
            height: 380,
            bgcolor: "primary.main",
            opacity: 0.2,
            filter: "blur(90px)",
            borderRadius: "50%",
            animation: "pulse 3s infinite ease-in-out",
          }}
        />
        <Box
          sx={{
            position: "absolute",
            bottom: 0,
            right: "25%",
            width: 380,
            height: 380,
            bgcolor: "info.main",
            opacity: 0.2,
            filter: "blur(90px)",
            borderRadius: "50%",
            animation: "pulse 3s infinite ease-in-out",
            animationDelay: "1s",
          }}
        />
        <Box
          sx={{
            position: "absolute",
            inset: 0,
            backgroundImage: "url('/grid.svg')",
            opacity: 0.06,
          }}
        />
      </Box>

      <Grid container spacing={10}>
        {/* Left Content */}
        <Grid>
          <Stack spacing={6}>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              {/* Status Chip */}
              <Box
                sx={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: 1.2,
                  px: 2.2,
                  py: 0.8,
                  borderRadius: 5,
                  border: "1px solid rgba(34,197,94,0.3)",
                  bgcolor: "rgba(34,197,94,0.12)",
                  color: "rgb(34,197,94)",
                  fontSize: 14,
                  fontFamily: "JetBrains Mono, monospace",
                }}
              >
                <Box sx={{ position: "relative", width: 8, height: 8 }}>
                  <Box
                    sx={{
                      position: "absolute",
                      inset: 0,
                      borderRadius: "50%",
                      bgcolor: "rgb(74,222,128)",
                      opacity: 0.7,
                      animation: "ping 1s infinite ease-in-out",
                    }}
                  />
                  <Box
                    sx={{
                      position: "relative",
                      width: 8,
                      height: 8,
                      bgcolor: "rgb(34,197,94)",
                      borderRadius: "50%",
                    }}
                  />
                </Box>
                Grinding FullStack Developer
              </Box>

              {/* Heading */}
              <Typography
                variant="h2"
                sx={{
                  fontWeight: 800,
                  fontSize: { xs: "42px", md: "64px", lg: "72px" },
                  lineHeight: 1.1,
                  mt: 3,
                }}
              >
                FullStack{" "}
                <Box component="span" sx={{ color: "primary.main" }}>
                  Phantom
                </Box>
                <br />
                <Box component="span" sx={{ color: "text.secondary" }}>
                  Cloud Mastery
                </Box>
              </Typography>

              <Typography
                variant="h6"
                sx={{
                  maxWidth: 500,
                  color: "text.secondary",
                  lineHeight: 1.55,
                  mt: 2,
                }}
              >
                I build scalable, high-performance full-stack systems using
                Node.js, Express.js, Nest.js, Next.js, and cloud technologies,
                turning complex logic into elegant code.
              </Typography>
            </motion.div>

            {/* Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <Stack
                direction="row"
                sx={{ gap: { xs: "2rem" } }}
                flexWrap="wrap"
              >
                <Button
                  variant="contained"
                  size="large"
                  component={Link}
                  href="https://github.com/SorisAnish17"
                  target="_blank"
                  startIcon={<Github size={20} />}
                  endIcon={<ArrowRight size={18} />}
                  sx={{
                    textTransform: "none",
                    width: { xs: "13rem", md: "15rem" },
                  }}
                >
                  View GitHub
                </Button>

                <Button
                  variant="outlined"
                  size="large"
                  component={Link}
                  href="mailto:anish.soris@gmail.com"
                  startIcon={<Mail size={20} />}
                  sx={{ textTransform: "none" }}
                >
                  Contact Me
                </Button>
              </Stack>
            </motion.div>

            {/* Skill Icons */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <Stack
                spacing={2}
                direction="row"
                alignItems="center"
                justifyContent="flex-start"
                flexWrap="wrap"
                useFlexGap
                sx={{ color: "text.secondary" }}
              >
                <Stack direction="row" spacing={1} alignItems="center">
                  <Monitor size={22} />
                  <Typography fontSize={14}>Next.js</Typography>
                </Stack>

                <Stack direction="row" spacing={1} alignItems="center">
                  <Server size={22} />
                  <Typography fontSize={14}>Node.js</Typography>
                </Stack>

                <Stack direction="row" spacing={1} alignItems="center">
                  <Database size={22} />
                  <Typography fontSize={14}>Database</Typography>
                </Stack>

                <Stack direction="row" spacing={1} alignItems="center">
                  <Cloud size={22} />
                  <Typography fontSize={14}>Cloud</Typography>
                </Stack>
              </Stack>
            </motion.div>
          </Stack>
        </Grid>

        {/* Terminal Section */}
        <Grid sx={{ display: { xs: "none", lg: "block" } }}>
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            style={{ position: "relative" }}
          >
            <Paper
              elevation={6}
              sx={{
                p: 3,
                bgcolor: "#111",
                border: "1px solid rgba(59,130,246,0.3)",
                fontFamily: "JetBrains Mono, monospace",
                color: "#eee",
                maxWidth: 500,
                mx: "auto",
              }}
            >
              {/* Terminal Title */}
              <Typography
                sx={{
                  mb: 2,
                  fontSize: 14,
                  opacity: 0.8,
                }}
              >
                soris@portfolio:~
              </Typography>

              {/* Terminal Lines */}
              <Box sx={{ fontSize: 14, lineHeight: 1.6 }}>
                <Box sx={{ display: "flex", mb: 1 }}>
                  <Typography color="success.main">➜</Typography>
                  <Typography sx={{ ml: 1 }} color="info.light">
                    ~
                  </Typography>
                  <Typography sx={{ ml: 1 }} color="text.secondary">
                    npm install
                  </Typography>
                  <Typography sx={{ ml: 1 }} color="white">
                    skills
                  </Typography>
                </Box>

                <Box sx={{ ml: 4, color: "text.secondary" }}>
                  <div>+ nodejs@latest</div>
                  <div>+ nestjs@latest</div>
                  <div>+ nextjs@latest</div>
                  <div>+ typescript@5.0</div>
                  <div>+ aws-sdk@3.0</div>
                  <div>+ docker@latest</div>
                  <Typography color="success.main">
                    added 4 packages in 0.5s
                  </Typography>
                </Box>

                <Box sx={{ display: "flex", mt: 2 }}>
                  <Typography color="success.main">➜</Typography>
                  <Typography sx={{ ml: 1 }} color="info.light">
                    ~
                  </Typography>
                  <Typography sx={{ ml: 1 }} color="text.secondary">
                    node
                  </Typography>
                  <Typography sx={{ ml: 1 }} color="white">
                    server.js
                  </Typography>
                </Box>

                <Typography sx={{ ml: 4 }} color="success.main">
                  Server running on port 8080 🚀
                </Typography>

                <Box sx={{ display: "flex", mt: 2 }}>
                  <Typography color="success.main">➜</Typography>
                  <Typography sx={{ ml: 1 }} color="info.light">
                    ~
                  </Typography>
                  <Typography className="animate-pulse">_</Typography>
                </Box>
              </Box>
            </Paper>

            {/* Decorative bubbles */}
            <Box
              sx={{
                position: "absolute",
                top: -30,
                right: -30,
                width: 70,
                height: 70,
                bgcolor: "primary.main",
                opacity: 0.15,
                filter: "blur(20px)",
                borderRadius: "50%",
                animation: "bounce 3s infinite",
              }}
            />
            <Box
              sx={{
                position: "absolute",
                bottom: -20,
                left: -20,
                width: 55,
                height: 55,
                bgcolor: "info.main",
                opacity: 0.15,
                filter: "blur(20px)",
                borderRadius: "50%",
                animation: "bounce 3s infinite",
                animationDelay: "0.7s",
              }}
            />
          </motion.div>
        </Grid>
      </Grid>
    </Box>
  );
}
