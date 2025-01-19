import React from 'react';
import { Box, Typography, Button } from '@mui/material';
import { motion } from 'framer-motion';
import { LocalShipping } from '@mui/icons-material';

const OrderSuccess = () => {
  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
        backgroundColor: '#f4f7fc',
        textAlign: 'center',
        flexDirection: 'column',
      }}
    >
      {/* Order Success Message */}
      <Typography variant="h4" sx={{ fontWeight: 600, color: '#3f51b5', marginBottom: 3 }}>
        Your Order Has Been Placed Successfully!
      </Typography>
      <Typography variant="h6" sx={{ color: '#616161', marginBottom: 4 }}>
        Thank you for shopping with us! Your order is on its way. We will send you an update once it's on delivery.
      </Typography>

      {/* Delivery Car Animation */}
      <motion.div
        initial={{ opacity: 0, x: -100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1.5 }}
      >
        <LocalShipping color="primary"></LocalShipping>
      </motion.div>

      {/* Button to Go Back */}
      <Button
        variant="contained"
        color="primary"
        size="large"
        sx={{ fontWeight: 600 }}
        onClick={() => window.location.href = '/'} // Redirect to the homepage or another page
      >
        Go to Homepage
      </Button>
    </Box>
  );
};

export default OrderSuccess;
