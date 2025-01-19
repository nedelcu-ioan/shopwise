import React from 'react';
import { AppBar, Toolbar, Typography, IconButton, Button, Box } from '@mui/material';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

const Header = () => {
    return (
        <AppBar position="static" color="">
            <Toolbar>
                <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                    <a href="/about" style={{ textDecoration: 'none', color: 'inherit' }}>
                        ShopWise
                    </a>
                </Typography>
                <Box className="flex gap-2">
                    <Button color="" className="hover:text-white" href="/catalog">Catalog</Button>
                    <Button color="" className="hover:text-white" href="/about">About Us</Button>
                    <Button color="" className="hover:text-white" href="/contact">Contact</Button>
                    <IconButton color="secondary" href="/cart">
                        <ShoppingCartIcon />
                    </IconButton>
                    <IconButton color="secondary" href="/auth">
                        <AccountCircleIcon />
                    </IconButton>
                </Box>
            </Toolbar>
        </AppBar>
    );
};

export default Header;

