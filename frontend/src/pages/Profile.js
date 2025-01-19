import React, { useState } from 'react';
import {
  Box,
  Typography,
  TextField,
  Grid,
  Card,
  CardContent,
  Button,
  Divider,
  List,
  ListItem,
  ListItemText,
} from '@mui/material';
import { motion } from 'framer-motion';

const Profile = () => {
  // Example customer data
  const [customerData, setCustomerData] = useState({
    fullName: 'John Doe',
    email: 'john.doe@example.com',
    address: '1234 Elm Street, Springfield, IL',
    phoneNumber: '+1 555-123-4567',
  });

  const orders = [
    {
      orderId: '12345',
      status: 'In Delivery',
      date: 'January 15, 2025',
      total: '$249.98',
    },
    {
      orderId: '12346',
      status: 'Delivered',
      date: 'January 10, 2025',
      total: '$169.99',
    },
    {
      orderId: '12347',
      status: 'Placed',
      date: 'January 5, 2025',
      total: '$89.49',
    },
  ];

  return (
    <Box
      sx={{
        padding: 4,
        maxWidth: '900px',
        margin: '0 auto',
        backgroundColor: '#f4f7fc',
      }}
    >
      {/* Profile Header */}
      <Typography variant="h4" sx={{ fontWeight: 600, marginBottom: 4, textAlign: 'center' }}>
        My Profile
      </Typography>

      {/* Customer Information */}
      <Card sx={{ marginBottom: 4 }}>
        <CardContent>
          <Typography variant="h6" sx={{ marginBottom: 2, fontWeight: 600 }}>
            Customer Information
          </Typography>
          <Grid container spacing={3}>
            <Grid item xs={12} sm={6}>
              <TextField
                label="Full Name"
                value={customerData.fullName}
                fullWidth
                disabled
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField label="Email" value={customerData.email} fullWidth disabled />
            </Grid>
            <Grid item xs={12}>
              <TextField
                label="Address"
                value={customerData.address}
                fullWidth
                disabled
              />
            </Grid>
            <Grid item xs={12}>
              <TextField label="Phone Number" value={customerData.phoneNumber} fullWidth disabled />
            </Grid>
          </Grid>
        </CardContent>
      </Card>

      {/* Order History */}
      <Card>
        <CardContent>
          <Typography variant="h6" sx={{ marginBottom: 2, fontWeight: 600 }}>
            Order History
          </Typography>

          {/* List of past orders */}
          <List>
            {orders.map((order) => (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
                key={order.orderId}
              >
                <ListItem sx={{ padding: 2, marginBottom: 2, borderBottom: '1px solid #ccc' }}>
                  <Grid container spacing={3}>
                    <Grid item xs={12} sm={6}>
                      <ListItemText
                        primary={`Order #${order.orderId}`}
                        secondary={`Date: ${order.date}`}
                      />
                    </Grid>
                    <Grid item xs={12} sm={4}>
                      <ListItemText
                        primary={`Status: ${order.status}`}
                        secondary={`Total: ${order.total}`}
                      />
                    </Grid>
                    <Grid item xs={12} sm={2}>
                      <Button variant="outlined" color="primary">
                        View Details
                      </Button>
                    </Grid>
                  </Grid>
                </ListItem>
              </motion.div>
            ))}
          </List>
        </CardContent>
      </Card>

      {/* Logout Button */}
      <Box sx={{ display: 'flex', justifyContent: 'center', marginTop: 4 }}>
        <Button
          variant="contained"
          color="secondary"
          size="large"
          sx={{ fontWeight: 600 }}
          onClick={() => alert('Logged out successfully!')}
        >
          Logout
        </Button>
      </Box>
    </Box>
  );
};

export default Profile;
