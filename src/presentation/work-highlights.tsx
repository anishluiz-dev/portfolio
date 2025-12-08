"use client";

import { motion } from "framer-motion";
import {
  Box,
  Card,
  CardContent,
  CardHeader,
  Typography,
  Grid,
  List,
  ListItem,
} from "@mui/material";

import { Zap, CheckCircle2 } from "lucide-react";

const applications: string[] = [
  "GalleyCloud (private jet catering service)",
  "AirCrew Connect (Recruiting web application)",
  "EstatePro",
  "FragranceFlow",
];

const services: string[] = [
  "Google Maps APIs",
  "Payment Gateways (PayPal, Razorpay, Stripe)",
  "KYC Verification Services",
  "OTP Services",
  "Google Auth, Apple Auth",
  "Push Notification Services",
  "OpenAI APIs",
];

export function WorkHighlights() {
  return (
    <Box id="work" sx={{ py: 12 }}>
      <Box sx={{ maxWidth: 1200, mx: "auto", px: { xs: 3, md: 6 } }}>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          style={{ textAlign: "center", marginBottom: 48 }}
        >
          <Typography variant="h4" sx={{ fontWeight: 700, mb: 2 }}>
            <Box component="span" sx={{ color: "primary.main" }}>
              /
            </Box>{" "}
            Work Highlights
          </Typography>

          <Typography
            variant="body1"
            sx={{ color: "text.secondary", maxWidth: 600, mx: "auto" }}
          >
            A showcase of the diverse applications and complex integrations
            I&apos;ve delivered.
          </Typography>
        </motion.div>

        {/* Content */}
        <Grid container justifyContent={"space-between"} gap={{ xs: "1rem" }}>
          {/* Applications */}
          <Grid sx={{ xs: "12", md: "6" }}>
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <Card
                sx={{
                  minHeight: "32rem",
                  border: "1px solid",
                  borderColor: "primary.main",
                  bgcolor: "background.paper",
                  backdropFilter: "blur(6px)",
                }}
              >
                <CardHeader
                  title={
                    <Box sx={{ display: "flex", alignItems: "center" }}>
                      <Zap
                        size={24}
                        color="#FACC15"
                        style={{ marginRight: 12 }}
                      />
                      <Typography variant="h6" sx={{ fontWeight: 600 }}>
                        Applications Delivered
                      </Typography>
                    </Box>
                  }
                />

                <CardContent>
                  <List disablePadding>
                    {applications.map((app, index) => (
                      <motion.div
                        key={app}
                        initial={{ opacity: 0, x: -10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{
                          duration: 0.3,
                          delay: index * 0.05,
                        }}
                      >
                        <ListItem
                          sx={{
                            display: "flex",
                            alignItems: "center",
                            color: "text.secondary",
                            transition: "0.2s",
                            "&:hover": { color: "text.primary" },
                            py: 0.5,
                          }}
                        >
                          <CheckCircle2
                            size={18}
                            color="#3B82F6"
                            style={{ marginRight: 12 }}
                          />
                          {app}
                        </ListItem>
                      </motion.div>
                    ))}
                  </List>
                </CardContent>
              </Card>
            </motion.div>
          </Grid>

          {/* Services */}
          <Grid sx={{ xs: "12", md: "6" }}>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <Card
                sx={{
                  minHeight: "32rem",
                  border: "1px solid",
                  borderColor: "primary.main",
                  bgcolor: "background.paper",
                  backdropFilter: "blur(6px)",
                }}
              >
                <CardHeader
                  title={
                    <Box sx={{ display: "flex", alignItems: "center" }}>
                      <Zap
                        size={24}
                        color="#3B82F6"
                        style={{ marginRight: 12 }}
                      />
                      <Typography variant="h6" sx={{ fontWeight: 600 }}>
                        External Integrations
                      </Typography>
                    </Box>
                  }
                />

                <CardContent>
                  <List disablePadding>
                    {services.map((service, index) => (
                      <motion.div
                        key={service}
                        initial={{ opacity: 0, x: 10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{
                          duration: 0.3,
                          delay: index * 0.05,
                        }}
                      >
                        <ListItem
                          sx={{
                            display: "flex",
                            alignItems: "center",
                            color: "text.secondary",
                            transition: "0.2s",
                            "&:hover": { color: "text.primary" },
                            py: 0.5,
                          }}
                        >
                          <CheckCircle2
                            size={18}
                            color="#EC4899"
                            style={{ marginRight: 12 }}
                          />
                          {service}
                        </ListItem>
                      </motion.div>
                    ))}
                  </List>
                </CardContent>
              </Card>
            </motion.div>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
}
