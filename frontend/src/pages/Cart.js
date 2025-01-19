import React, { useState } from 'react';
import { Box, Typography, Grid, Card, CardMedia, CardContent, CardActions, IconButton, Button, Divider, Stepper, Step, StepLabel } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import { useNavigate } from 'react-router-dom';

const Cart = () => {
    const navigate = useNavigate(); // Hook for navigation

    // Sample cart data
    const [cartItems, setCartItems] = useState([
        {
            id: 1,
            name: 'Wireless Headphones',
            image: 'https://via.placeholder.com/150',
            price: 99.99,
            quantity: 1,
        },
        {
            id: 2,
            name: 'Smart Watch',
            image: 'https://via.placeholder.com/150',
            price: 149.99,
            quantity: 2,
        },
    ]);

    // Steps for progress tracker
    const steps = ['Selecting Products', 'Payment', 'In Delivery'];
    const currentStep = 0; // Set the current step (0 for 'Selecting Products')

    // Function to handle quantity increase
    const handleIncreaseQuantity = (id) => {
        setCartItems((prevItems) =>
            prevItems.map((item) =>
                item.id === id ? { ...item, quantity: item.quantity + 1 } : item
            )
        );
    };

    // Function to handle quantity decrease
    const handleDecreaseQuantity = (id) => {
        setCartItems((prevItems) =>
            prevItems.map((item) =>
                item.id === id && item.quantity > 1
                    ? { ...item, quantity: item.quantity - 1 }
                    : item
            )
        );
    };

    // Function to handle item removal
    const handleRemoveItem = (id) => {
        setCartItems((prevItems) => prevItems.filter((item) => item.id !== id));
    };

    // Calculate total price
    const calculateTotal = () =>
        cartItems.reduce((total, item) => total + item.price * item.quantity, 0).toFixed(2);

    return (
        <div className='bg-[#f0f4f8]'>
        <Box sx={{ maxWidth: '900px', padding: 4, minHeight: '100vh', margin: '0 auto' }}>
            {/* Progress Tracker */}
            <Box sx={{ marginBottom: 4 }}>
                <Stepper activeStep={currentStep} alternativeLabel>
                    {steps.map((label) => (
                        <Step key={label}>
                            <StepLabel>{label}</StepLabel>
                        </Step>
                    ))}
                </Stepper>
            </Box>

            {/* Page Header */}
            <Typography variant="h4" sx={{ fontWeight: 700, marginBottom: 4, textAlign: 'center' }}>
                Your Shopping Cart
            </Typography>

            {/* Cart Items */}
            <Grid container spacing={3}>
                {cartItems.map((item) => (
                    <Grid item xs={12} key={item.id}>
                        <Card sx={{ display: 'flex', alignItems: 'center', padding: 2 }}>
                            <CardMedia
                                component="img"
                                sx={{ width: 100, height: 100, borderRadius: 2 }}
                                image={item.image}
                                alt={item.name}
                            />
                            <CardContent sx={{ flex: 1, paddingLeft: 2 }}>
                                <Typography variant="h6" sx={{ fontWeight: 600 }}>
                                    {item.name}
                                </Typography>
                                <Typography sx={{ color: 'gray' }}>${item.price.toFixed(2)}</Typography>
                            </CardContent>
                            <CardActions>
                                <IconButton onClick={() => handleDecreaseQuantity(item.id)} color="primary">
                                    <RemoveIcon />
                                </IconButton>
                                <Typography sx={{ margin: '0 10px' }}>{item.quantity}</Typography>
                                <IconButton onClick={() => handleIncreaseQuantity(item.id)} color="primary">
                                    <AddIcon />
                                </IconButton>
                            </CardActions>
                            <IconButton onClick={() => handleRemoveItem(item.id)} color="error">
                                <DeleteIcon />
                            </IconButton>
                        </Card>
                    </Grid>
                ))}
            </Grid>

            <Divider sx={{ marginY: 4 }} />

            {/* Summary Section */}
            <Box
                sx={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    padding: 2,
                    backgroundColor: '#ffffff',
                    borderRadius: 2,
                    boxShadow: 1,
                }}
            >
                <Typography variant="h6" sx={{ fontWeight: 700 }}>
                    Total: ${calculateTotal()}
                </Typography>
                <Button
                    variant="contained"
                    color="primary"
                    size="large"
                    sx={{ fontWeight: 600 }}
                    onClick={() => navigate('/checkout')} // Navigate to the checkout page
                >
                    Proceed to Checkout
                </Button>
            </Box>
        </Box>
        </div>
    );
};

export default Cart;
