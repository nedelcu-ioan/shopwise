import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from "./components/Header.js";
import Footer from "./components/Footer.js";
import Catalog from './pages/Catalog.js';
import Home from "./pages/Home.js";
import Auth from "./pages/Auth.js";
import { createTheme, ThemeProvider } from '@mui/material/styles';
import AboutUs from './pages/AboutUs.js';
import Contact from './pages/Contact.js';
import Cart from './pages/Cart.js';
import Checkout from './pages/Checkout.js';
import OrderSuccess from './pages/OrderSuccess.js';
import Profile from './pages/Profile.js';

// Define the adjusted custom theme
const theme = createTheme({
    palette: {
      primary: {
        main: '#74b3ce', // Carolina Blue
        contrastText: '#ffffff', // White text for contrast
      },
      secondary: {
        main: '#508991', // Blue Munsell
        contrastText: '#ffffff', // White text
      },
      background: {
        default: '#f0f4f8', // Soft light gray for app background
        paper: '#ffffff', // White for cards/paper elements
      },
      text: {
        primary: '#172a3a', // Prussian Blue for main text
        secondary: '#508991', // Blue Munsell for secondary text
        disabled: '#8acb88', // Pistachio for subtle, disabled text
      },
      action: {
        hover: '#004346', // Midnight Green hover effect
        selected: '#508991', // Selected state
      },
    },
    typography: {
      fontFamily: '"Poppins", "Roboto", "Helvetica", "Arial", sans-serif', // A modern font combo
      h1: {
        fontSize: '2.25rem',
        fontWeight: 700,
        lineHeight: 1.3,
        color: '#172a3a', // Prussian Blue
      },
      h2: {
        fontSize: '1.8rem',
        fontWeight: 600,
        lineHeight: 1.4,
        color: '#172a3a',
      },
      h3: {
        fontSize: '1.5rem',
        fontWeight: 600,
        lineHeight: 1.4,
        color: '#172a3a',
      },
      body1: {
        fontSize: '1rem',
        lineHeight: 1.6,
        color: '#172a3a',
      },
      body2: {
        fontSize: '0.9rem',
        lineHeight: 1.5,
        color: '#508991',
      },
      button: {
        textTransform: 'capitalize', // Avoid uppercase buttons for a modern look
        fontWeight: 600,
      },
    },
    shape: {
      borderRadius: 16, // Softer rounded corners for all components
    },
    components: {
      MuiButton: {
        styleOverrides: {
          root: {
            borderRadius: 24, // Rounded pill-like buttons
            padding: '10px 28px', // Comfortable padding for buttons
            boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)', // Slight elevation
            '&:hover': {
              backgroundColor: '#004346', // Midnight Green on hover
              color: '#ffffff', // White text on hover
            },
          },
          containedPrimary: {
            backgroundColor: '#74b3ce',
            '&:hover': {
              backgroundColor: '#508991', // Blue Munsell for hover
            },
          },
          containedSecondary: {
            backgroundColor: '#508991',
            '&:hover': {
              backgroundColor: '#004346', // Midnight Green for hover
            },
          },
        },
      },
      MuiPaper: {
        styleOverrides: {
          root: {
            borderRadius: 16, // Match shape radius
            padding: '16px',
            boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)', // Subtle card shadow
          },
        },
      },
      MuiAppBar: {
        styleOverrides: {
          root: {
            boxShadow: 'none', // Remove harsh shadows for a cleaner look
          },
        },
      },
      MuiTypography: {
        styleOverrides: {
          root: {
            marginBottom: '8px', // Add space between text blocks
          },
        },
      },
    },
  });
  

function App() {
    return (
        <ThemeProvider theme={theme}>
        <div className="flex flex-col min-h-screen">
            <Header />
            <Router>
                <Routes>
                    <Route path="/catalog" element={<Catalog />} />
                    <Route path="/auth" element={<Auth />} />
                    <Route path="/contact" element={<Contact />} />
                    <Route path="/about" element={<AboutUs />} />
                    <Route path="/cart" element={<Cart />} />
                    <Route path="/checkout" element={<Checkout />} />
                    <Route path="/ordersuccess" element={<OrderSuccess />} />
                    <Route path="/profile" element={<Profile />} />
                    <Route path="/" element={<Home />} />
                </Routes>
            </Router>
            <Footer />
        </div>
        </ThemeProvider>
    );
}

export default App;

