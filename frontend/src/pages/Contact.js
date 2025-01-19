import React from 'react';
import { Box, Typography, Grid, TextField, Button, Paper } from '@mui/material';
import { motion } from 'framer-motion'; // For animations
import EmailIcon from '@mui/icons-material/Email';
import PhoneIcon from '@mui/icons-material/Phone';
import LocationOnIcon from '@mui/icons-material/LocationOn';

const Contact = () => {
  return (
    <Box
      sx={{
        backgroundColor: '#f0f4f8',
        minHeight: '100vh',
        padding: 4,
      }}
    >
      {/* Hero Section */}
      <Paper
        elevation={3}
        sx={{
          backgroundColor: '#ffffff',
          borderRadius: 4,
          padding: 6,
          textAlign: 'center',
          marginBottom: 6,
        }}
      >
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <Typography variant="h3" sx={{ fontWeight: 700, marginBottom: 2 }}>
            Get in Touch with Us
          </Typography>
          <Typography
            variant="body1"
            sx={{ fontSize: '1.2rem', color: '#508991', marginBottom: 4 }}
          >
            Have questions, feedback, or need assistance? We’re here to help. Contact us today!
          </Typography>
        </motion.div>
      </Paper>

      {/* Contact Information */}
      <Box sx={{ marginBottom: 6 }}>
        <Grid container spacing={4}>
          {/* Email */}
          <Grid item xs={12} md={4}>
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
            >
              <Paper
                elevation={3}
                sx={{
                  padding: 4,
                  textAlign: 'center',
                  borderRadius: 4,
                  backgroundColor: '#ffffff',
                }}
              >
                <EmailIcon
                  sx={{
                    fontSize: '3rem',
                    color: '#508991',
                    marginBottom: 2,
                  }}
                />
                <Typography variant="h6" sx={{ fontWeight: 600 }}>
                  Email Us
                </Typography>
                <Typography>
                  support@shopwise.com
                </Typography>
              </Paper>
            </motion.div>
          </Grid>

          {/* Phone */}
          <Grid item xs={12} md={4}>
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <Paper
                elevation={3}
                sx={{
                  padding: 4,
                  textAlign: 'center',
                  borderRadius: 4,
                  backgroundColor: '#ffffff',
                }}
              >
                <PhoneIcon
                  sx={{
                    fontSize: '3rem',
                    color: '#8acb88',
                    marginBottom: 2,
                  }}
                />
                <Typography variant="h6" sx={{ fontWeight: 600 }}>
                  Call Us
                </Typography>
                <Typography>
                  +1 234 567 890
                </Typography>
              </Paper>
            </motion.div>
          </Grid>

          {/* Location */}
          <Grid item xs={12} md={4}>
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <Paper
                elevation={3}
                sx={{
                  padding: 4,
                  textAlign: 'center',
                  borderRadius: 4,
                  backgroundColor: '#ffffff',
                }}
              >
                <LocationOnIcon
                  sx={{
                    fontSize: '3rem',
                    color: '#74b3ce',
                    marginBottom: 2,
                  }}
                />
                <Typography variant="h6" sx={{ fontWeight: 600 }}>
                  Visit Us
                </Typography>
                <Typography>
                  123 Main Street, ShopCity, SC 56789
                </Typography>
              </Paper>
            </motion.div>
          </Grid>
        </Grid>
      </Box>

      {/* Contact Form */}
      <Box>
        <Typography
          variant="h4"
          sx={{
            fontWeight: 700,
            textAlign: 'center',
            marginBottom: 4,
            color: '#172a3a',
          }}
        >
          Drop Us a Message
        </Typography>
        <Grid container spacing={4} justifyContent="center">
          <Grid item xs={12} md={6}>
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
            >
              <Paper
                elevation={3}
                sx={{
                  padding: 4,
                  borderRadius: 4,
                  backgroundColor: '#ffffff',
                }}
              >
                <TextField
                  label="Your Name"
                  variant="outlined"
                  fullWidth
                  sx={{ marginBottom: 3 }}
                />
                <TextField
                  label="Your Email"
                  variant="outlined"
                  fullWidth
                  sx={{ marginBottom: 3 }}
                />
                <TextField
                  label="Your Message"
                  variant="outlined"
                  multiline
                  rows={4}
                  fullWidth
                  sx={{ marginBottom: 3 }}
                />
                <Button
                  variant="contained"
                  color="primary"
                  size="large"
                  fullWidth
                >
                  Send Message
                </Button>
              </Paper>
            </motion.div>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
};

export default Contact;
