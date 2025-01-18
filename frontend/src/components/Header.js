import React from 'react';
import { AppBar, Toolbar, Typography, IconButton, Button } from '@mui/material';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

const Header = () => {
    return (
        <AppBar position="static" color="primary">
            <Toolbar>
                <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                    <a href="/" style={{ textDecoration: 'none', color: 'inherit' }}>
                        E-Commerce
                    </a>
                </Typography>
                <Button color="inherit" href="/catalog">Catalog</Button>
                <Button color="inherit" href="/categories">Categories</Button>
                <Button color="inherit" href="/about">About Us</Button>
                <Button color="inherit" href="/contact">Contact</Button>
                <IconButton color="inherit" href="/cart">
                    <ShoppingCartIcon />
                </IconButton>
                <IconButton color="inherit" href="/profile">
                    <AccountCircleIcon />
                </IconButton>
            </Toolbar>
        </AppBar>
    );
};

export default Header;

