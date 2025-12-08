"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { Box, Button, IconButton, Typography, Paper } from "@mui/material";
import { Mail, Linkedin, Twitter, Copy, Check } from "lucide-react";
import Link from "next/link";

export function Contact() {
  const [copied, setCopied] = useState(false);
  const email = "anish.soris@gmail.com";

  const handleCopy = () => {
    navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <Box id="contact" sx={{ py: 12, bgcolor: "background.default" }}>
      <Box
        sx={{
          maxWidth: 800,
          mx: "auto",
          px: { xs: 3, md: 6 },
          textAlign: "center",
        }}
      >
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          {/* Heading */}
          <Typography variant="h4" fontWeight={700} mb={2}>
            <Box component="span" sx={{ color: "primary.main" }}>
              /
            </Box>{" "}
            Get In Touch
          </Typography>

          <Typography variant="body1" sx={{ color: "text.secondary", mb: 5 }}>
            Whether you have a question or just want to say hi, I'll try my best
            to get back to you!
          </Typography>

          {/* Email + Copy Box */}
          <Paper
            elevation={0}
            sx={{
              display: "flex",
              alignItems: "center",
              gap: 1,
              px: 3,
              py: 1.5,
              borderRadius: "50px",
              border: "1px solid",
              borderColor: "divider",
              width: "fit-content",
              mx: "auto",
            }}
          >
            <Typography variant="body1" sx={{ color: "text.secondary" }}>
              {email}
            </Typography>

            <IconButton onClick={handleCopy} size="small">
              {copied ? <Check size={18} color="green" /> : <Copy size={18} />}
            </IconButton>
          </Paper>

          {/* Buttons */}
          <Box
            sx={{ display: "flex", justifyContent: "center", gap: 2, mt: 5 }}
          >
            {/* LinkedIn */}
            <IconButton
              component={Link}
              href="https://www.linkedin.com/in/soris-anish/"
              target="_blank"
              sx={{
                border: "1px solid",
                borderColor: "divider",
              }}
            >
              <Linkedin size={22} />
            </IconButton>

            {/* Twitter */}
            <IconButton
              component={Link}
              href="https://twitter.com"
              target="_blank"
              sx={{
                border: "1px solid",
                borderColor: "divider",
              }}
            >
              <Twitter size={22} />
            </IconButton>

            {/* Email Button */}
            <Button
              component={Link}
              href={`mailto:${email}`}
              variant="contained"
              size="large"
              sx={{ textTransform: "none" }}
              endIcon={<Mail size={18} />}
            >
              Say Hello
            </Button>
          </Box>
        </motion.div>
      </Box>
    </Box>
  );
}
