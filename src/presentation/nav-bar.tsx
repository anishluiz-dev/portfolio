"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { Menu, X, Code2 } from "lucide-react";

import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import { useRouter } from "next/navigation";
import { styled } from "@mui/material/styles";

interface NavItem {
  name: string;
  href: string;
}

const navItems: NavItem[] = [
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Experience", href: "#experience" },
  { name: "Work", href: "#work" },
  { name: "Contact", href: "#contact" },
];

const StyledAppBar = styled(AppBar)(({ theme }) => ({
  transition: "all 0.3s ease",
  backdropFilter: "blur(10px)",
}));

export const Navbar: React.FC = () => {
  const router = useRouter();
  const [isOpen, setIsOpen] = React.useState(false);
  const [scrolled, setScrolled] = React.useState(false);

  React.useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.div
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <StyledAppBar
        position="fixed"
        elevation={scrolled ? 3 : 0}
        sx={{
          backgroundColor: scrolled ? "black" : "transparent",
        }}
      >
        <Container maxWidth="lg">
          <Toolbar
            sx={{
              height: 70,
              display: "flex",
              justifyContent: "space-between",
            }}
          >
            {/* Logo */}
            <Box display="flex" alignItems="center">
              <Box
                sx={{
                  p: 1,
                  borderRadius: 2,
                  backgroundColor: "primary.main",
                  mr: 1,
                }}
              >
                <Code2 size={22} color="white" />
              </Box>
              <Typography variant="h6" fontFamily="monospace" fontWeight="bold">
                &lt;Soris /&gt;
              </Typography>
            </Box>

            {/* Desktop Navigation */}
            <Box sx={{ display: { xs: "none", md: "flex" }, gap: 3 }}>
              {navItems.map((item) => (
                <Button
                  key={item.name}
                  component={Link}
                  href={item.href}
                  color="inherit"
                >
                  {item.name}
                </Button>
              ))}

              <Button
                variant="outlined"
                startIcon={<LinkedInIcon />}
                component={Link}
                href="https://www.linkedin.com/in/soris-anish/"
                target="_blank"
              >
                LinkedIn
              </Button>
            </Box>

            {/* Mobile Menu Button */}
            <Box sx={{ display: { xs: "flex", md: "none" } }}>
              <IconButton onClick={() => setIsOpen(true)}>
                <Menu size={28} />
              </IconButton>
            </Box>
          </Toolbar>
        </Container>
      </StyledAppBar>

      <Drawer anchor="right" open={isOpen} onClose={() => setIsOpen(false)}>
        <Box sx={{ width: 250 }}>
          <Box display="flex" justifyContent="flex-end" p={2}>
            <IconButton onClick={() => setIsOpen(false)}>
              <X size={28} />
            </IconButton>
          </Box>

          <Divider />

          <List>
            {navItems.map((item) => (
              <ListItem key={item.name} disablePadding>
                <ListItemButton
                  component={Link}
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                >
                  <ListItemText primary={item.name} />
                </ListItemButton>
              </ListItem>
            ))}
          </List>

          <Box px={2} mt={2}>
            <Button
              fullWidth
              variant="outlined"
              startIcon={<LinkedInIcon />}
              onClick={() => {
                router.push("https://www.linkedin.com/in/soris-anish/");
              }}
            >
              LinkedIn
            </Button>
          </Box>
        </Box>
      </Drawer>
    </motion.div>
  );
};
