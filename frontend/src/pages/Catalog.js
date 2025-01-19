import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Card, CardContent, CardMedia, Typography, Button } from '@mui/material';
import { PlusOne, ShoppingBasket } from '@mui/icons-material';

const Catalog = () => {
    const [products, setProducts] = useState([]);
    const [page, setPage] = useState(1);
    const [hasNextPage, setHasNextPage] = useState(false);

    const fetchProducts = async (page) => {
        try {
            const response = await axios.get(`http://127.0.0.1:8000/api/catalog/products/?page=${page}`);
            setProducts(response.data.results);
            setHasNextPage(!!response.data.next);
        } catch (error) {
            console.error('Error fetching products:', error);
        }
    };

    useEffect(() => {
        fetchProducts(page);
    }, [page]);

    const handleNextPage = () => setPage((prevPage) => prevPage + 1);
    const handlePreviousPage = () => setPage((prevPage) => Math.max(prevPage - 1, 1));

    return (
        <div className="p-4 bg-gray-100">
            <Typography variant="h4" gutterBottom className="mb-6 text-center">
                Product Catalog
            </Typography>
            
            {/* Responsive Grid with 4 items per row on larger screens, 2 items on smaller screens */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 w-full max-w-screen-xl mx-auto">
                {products.map((product) => (
                    <div key={product.id} className="flex justify-center">
                        <Card className="w-full max-w-xs h-100">
                            <CardMedia
                                component="img"
                                image={product.image}
                                alt={product.name}
                                className="h-48 w-full object-contain"
                            />
                            <CardContent className="p-4">
                                <Typography variant="h6" className="font-semibold text-gray-800">{product.name}</Typography>
                                <Typography variant="body2" color="textSecondary" className="text-gray-600 mt-2">{product.description}</Typography>
                                <Typography variant="body1" color="primary" className="mt-3 font-semibold">${product.price}</Typography>
                            </CardContent>
                            <Button> Add to cart</Button>
                        </Card>
                    </div>
                ))}
            </div>

            <div className="mt-6 flex justify-between items-center">
                <Button disabled={page === 1} onClick={handlePreviousPage}>
                    Previous
                </Button>
                <Button disabled={!hasNextPage} onClick={handleNextPage}>
                    Next
                </Button>
            </div>
        </div>
    );
};

export default Catalog;

