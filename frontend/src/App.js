import React from 'react';
import HelloWorldCard from './HelloWorldCard';
import Header from "./components/Header.js";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Catalog from './pages/Catalog.js';

function App() {
    return (
       <Router>
            <Header />
            <Routes>
                <Route path="/catalog" element={<Catalog />} />
            </Routes>
        </Router>
    );
}

export default App;
