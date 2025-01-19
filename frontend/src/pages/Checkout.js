import React, { useState } from 'react';
import {
    Box,
    Typography,
    Grid,
    TextField,
    FormControl,
    RadioGroup,
    FormControlLabel,
    Radio,
    Button,
    Divider,
    Card,
    CardContent,
    Stepper,
    Step,
    StepLabel,
} from '@mui/material';
import { useNavigate } from 'react-router-dom';

const Checkout = () => {
    const navigate = useNavigate();
    
    // State for form data
    const [formData, setFormData] = useState({
        fullName: '',
        email: '',
        address: '',
        city: '',
        postalCode: '',
        country: '',
        paymentMethod: 'credit',
    });

    const handleInputChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        alert('Checkout Successful! Redirecting to confirmation page...');
    };

    // Steps for progress tracker
    const steps = ['Selecting Products', 'Payment', 'In Delivery'];
    const currentStep = 1; // Set the current step (0 for 'Selecting Products')


    return (
        <div className='bg-[#f0f4f8]'>
            <Box sx={{ padding: 4, maxWidth: '900px', margin: '0 auto' }}>
                {/* Page Header */}
                <Typography variant="h4" sx={{ fontWeight: 700, marginBottom: 4, textAlign: 'center' }}>
                    Checkout
                </Typography>

                <Stepper activeStep={currentStep} alternativeLabel>
                    {steps.map((label) => (
                        <Step key={label}>
                            <StepLabel>{label}</StepLabel>
                        </Step>
                    ))}
                </Stepper>

                <Grid container spacing={4}>
                    {/* Billing and Shipping Information */}
                    <Grid item xs={12} md={8}>
                        <Card sx={{ padding: 4 }}>
                            <Typography variant="h6" sx={{ marginBottom: 2, fontWeight: 600 }}>
                                Billing & Shipping Information
                            </Typography>
                            <form onSubmit={handleSubmit}>
                                <Grid container spacing={3}>
                                    <Grid item xs={12}>
                                        <TextField
                                            label="Full Name"
                                            name="fullName"
                                            value={formData.fullName}
                                            onChange={handleInputChange}
                                            fullWidth
                                            required
                                        />
                                    </Grid>
                                    <Grid item xs={12}>
                                        <TextField
                                            label="Email"
                                            name="email"
                                            type="email"
                                            value={formData.email}
                                            onChange={handleInputChange}
                                            fullWidth
                                            required
                                        />
                                    </Grid>
                                    <Grid item xs={12}>
                                        <TextField
                                            label="Address"
                                            name="address"
                                            value={formData.address}
                                            onChange={handleInputChange}
                                            fullWidth
                                            required
                                        />
                                    </Grid>
                                    <Grid item xs={6}>
                                        <TextField
                                            label="City"
                                            name="city"
                                            value={formData.city}
                                            onChange={handleInputChange}
                                            fullWidth
                                            required
                                        />
                                    </Grid>
                                    <Grid item xs={6}>
                                        <TextField
                                            label="Postal Code"
                                            name="postalCode"
                                            value={formData.postalCode}
                                            onChange={handleInputChange}
                                            fullWidth
                                            required
                                        />
                                    </Grid>
                                    <Grid item xs={12}>
                                        <TextField
                                            label="Country"
                                            name="country"
                                            value={formData.country}
                                            onChange={handleInputChange}
                                            fullWidth
                                            required
                                        />
                                    </Grid>
                                </Grid>
                            </form>
                        </Card>
                    </Grid>

                    {/* Payment Method and Order Summary */}
                    <Grid item xs={12} md={4}>
                        <Card sx={{ padding: 4, marginBottom: 4 }}>
                            <Typography variant="h6" sx={{ marginBottom: 2, fontWeight: 600 }}>
                                Payment Method
                            </Typography>
                            <FormControl>
                                <RadioGroup
                                    name="paymentMethod"
                                    value={formData.paymentMethod}
                                    onChange={handleInputChange}
                                >
                                    <FormControlLabel
                                        value="credit"
                                        control={<Radio />}
                                        label="Credit Card"
                                    />
                                    <FormControlLabel
                                        value="paypal"
                                        control={<Radio />}
                                        label="PayPal"
                                    />
                                    <FormControlLabel
                                        value="cash"
                                        control={<Radio />}
                                        label="Cash on Delivery"
                                    />
                                </RadioGroup>
                            </FormControl>
                        </Card>

                        <Card sx={{ padding: 4 }}>
                            <Typography variant="h6" sx={{ marginBottom: 2, fontWeight: 600 }}>
                                Order Summary
                            </Typography>
                            <Divider sx={{ marginBottom: 2 }} />
                            <CardContent sx={{ paddingY: 2 }}>
                                <Typography>Subtotal: $249.98</Typography>
                                <Typography>Shipping: $20.00</Typography>
                                <Typography variant="h6" sx={{ fontWeight: 700, marginTop: 2 }}>
                                    Total: $269.98
                                </Typography>
                            </CardContent>
                        </Card>
                    </Grid>
                </Grid>

                {/* Checkout Button */}
                <Box
                    sx={{
                        display: 'flex',
                        justifyContent: 'center',
                        marginTop: 4,
                    }}
                >
                    <Button
                        variant="contained"
                        color="primary"
                        size="large"
                        sx={{ fontWeight: 600, paddingX: 6 }}
                        onClick={() => navigate('/ordersuccess')}
                    >
                        Place Order
                    </Button>
                </Box>
            </Box>
        </div>
    );
};

export default Checkout;
