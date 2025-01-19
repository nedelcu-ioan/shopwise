import React from 'react';
import { Box, Typography, Button, Grid, Paper } from '@mui/material';
import { motion } from 'framer-motion'; // Install framer-motion for animations
import StorefrontIcon from '@mui/icons-material/Storefront';
import PeopleIcon from '@mui/icons-material/People';
import VerifiedIcon from '@mui/icons-material/Verified';

const AboutUs = () => {
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
          position: 'relative',
        }}
      >
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <Typography variant="h2" sx={{ fontWeight: 700, marginBottom: 2 }}>
            Welcome to ShopWise
          </Typography>
          <Typography
            variant="body1"
            sx={{ fontSize: '1.2rem', color: '#508991', marginBottom: 4 }}
          >
            Your one-stop shop for premium-quality products, tailored to your needs. We’re here to make your shopping experience smarter, easier, and better.
          </Typography>
          <Button
            variant="contained"
            color="primary"
            size="large"
            href="/catalog"
            sx={{ padding: '12px 24px', fontWeight: 600 }}
          >
            Explore Our Store
          </Button>
        </motion.div>
      </Paper>

      {/* Why Choose Us Section */}
      <Box sx={{ marginBottom: 6 }}>
        <Typography
          variant="h4"
          sx={{
            fontWeight: 700,
            textAlign: 'center',
            marginBottom: 4,
            color: '#172a3a',
          }}
        >
          Why Shop with ShopWise?
        </Typography>
        <Grid container spacing={4}>
          {/* Feature 1 */}
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
                <StorefrontIcon
                  sx={{
                    fontSize: '3rem',
                    color: '#74b3ce',
                    marginBottom: 2,
                  }}
                />
                <Typography variant="h6" sx={{ fontWeight: 600 }}>
                  Wide Selection
                </Typography>
                <Typography>
                  Discover an extensive range of products, carefully curated to meet your needs and preferences.
                </Typography>
              </Paper>
            </motion.div>
          </Grid>

          {/* Feature 2 */}
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
                <PeopleIcon
                  sx={{
                    fontSize: '3rem',
                    color: '#508991',
                    marginBottom: 2,
                  }}
                />
                <Typography variant="h6" sx={{ fontWeight: 600 }}>
                  Customer-Centric
                </Typography>
                <Typography>
                  We put our customers first, delivering top-notch service and support every step of the way.
                </Typography>
              </Paper>
            </motion.div>
          </Grid>

          {/* Feature 3 */}
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
                <VerifiedIcon
                  sx={{
                    fontSize: '3rem',
                    color: '#8acb88',
                    marginBottom: 2,
                  }}
                />
                <Typography variant="h6" sx={{ fontWeight: 600 }}>
                  Quality You Can Trust
                </Typography>
                <Typography>
                  Every product is sourced with care to ensure top quality and unmatched durability.
                </Typography>
              </Paper>
            </motion.div>
          </Grid>
        </Grid>
      </Box>

      {/* About Us Story Section */}
      <Box sx={{ marginBottom: 6 }}>
        <Grid container spacing={6} alignItems="center">
          {/* Image */}
          <Grid item xs={12} md={6}>
            <motion.div
              initial={{ x: -50, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 1 }}
            >
              <img
                src="https://images.unsplash.com/photo-1556740772-1a741367b93e?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="About ShopWise"
                style={{
                  width: '100%',
                  borderRadius: '16px',
                  boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
                }}
              />
            </motion.div>
          </Grid>

          {/* Story */}
          <Grid item xs={12} md={6}>
            <motion.div
              initial={{ x: 50, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 1 }}
            >
              <Typography variant="h4" sx={{ fontWeight: 700, marginBottom: 2 }}>
                Our Story
              </Typography>
              <Typography
                variant="body1"
                sx={{ fontSize: '1.1rem', color: '#508991', lineHeight: 1.8 }}
              >
                At ShopWise, we began with a simple mission: to make shopping smarter, more convenient, and enjoyable for everyone. What started as a small venture has grown into a trusted platform for thousands of customers worldwide.
                <br />
                <br />
                From handpicking the best products to ensuring exceptional service, we’re committed to giving you the best shopping experience possible.
              </Typography>
            </motion.div>
          </Grid>
        </Grid>
      </Box>

      {/* Call to Action Section */}
      <Box sx={{ textAlign: 'center', padding: 4, backgroundColor: '#004346', color: '#ffffff', borderRadius: 4 }}>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          <Typography variant="h5" sx={{ marginBottom: 2 }}>
            Ready to Shop Smart?
          </Typography>
          <Button variant="contained" color="secondary" size="large" href="/catalog">
            Start Shopping
          </Button>
        </motion.div>
      </Box>
    </Box>
  );
};

export default AboutUs;
