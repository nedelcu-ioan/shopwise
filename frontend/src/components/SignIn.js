import { Facebook, Google, ShoppingBag } from '@mui/icons-material';
import { Button, Card, Checkbox, TextField, Typography, Divider } from '@mui/material';
import React from 'react';
import { NavLink } from 'react-router-dom';

function SignIn() {
    return (
        <div className="flex justify-center min-h-screen bg-gray-100">
            <div className="w-[26rem] h-[35rem] p-6 mt-24 ml-4 mr-4">
                <Typography variant="h5" className="text-center mb-4">Why Choose Us?</Typography>

                <ul className="list-disc pl-6 ml-4 mr-4 space-y-3">
                    <li><strong>Premium Quality:</strong> Carefully sourced and crafted to ensure long-lasting durability and reliability.</li>
                    <li><strong>Exceptional Service:</strong> Tailored experiences designed to meet your unique needs with a focus on customer satisfaction.</li>
                    <li><strong>Trust and Integrity:</strong> We prioritize excellence and integrity, delivering products and services you can count on.</li>
                </ul>
            </div>


            <Card className="w-[26rem] h-[35rem] p-6 mt-24 ml-4 mr-4 shadow-lg rounded-lg">
                <Typography variant="h5" className="text-center mb-4">Sign In</Typography>

                <TextField
                    required
                    label="Email"
                    fullWidth
                    variant="outlined"
                    margin="normal"
                />

                <TextField
                    required
                    label="Password"
                    fullWidth
                    variant="outlined"
                    margin="normal"
                    type="password"
                />

                <div className="flex items-center mt-2">
                    <Checkbox />
                    <Typography variant="body2">Remember me</Typography>
                </div>

                <Button
                    variant="contained"
                    color="primary"
                    fullWidth
                    className="mt-4"
                    size="large"
                >
                    Sign In
                </Button>

                <div className="text-center mt-4">
                    <Typography variant="body2">
                        Don't have an account? <NavLink to="/signup" className="text-blue-600">Sign up</NavLink>
                    </Typography>
                </div>

                <div className="b-2 my-4 flex items-center justify-center">
                    <Typography className="p-2" variant="body2">or</Typography>
                </div>

                <div className="space-y-2">
                    <Button
                        variant="outlined"
                        color="secondary"
                        fullWidth
                        startIcon={<Google />}
                    >
                        Sign in with Google
                    </Button>
                    <Button
                        variant="outlined"
                        color="primary"
                        fullWidth
                        startIcon={<Facebook />}
                    >
                        Sign in with Facebook
                    </Button>
                </div>
            </Card>
        </div>
    );
}

export default SignIn;


