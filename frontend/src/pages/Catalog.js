import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Card, CardContent, CardMedia, Typography, Grid, Button } from '@mui/material';

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
        <div style={{ padding: '20px' }}>
            <Typography variant="h4" gutterBottom>
                Product Catalog
            </Typography>
            <Grid container spacing={3}>
                {products.map((product) => (
                    <Grid item xs={12} sm={6} md={4} key={product.id}>
                        <Card>
                            <CardMedia
                                component="img"
                                height="140"
                                image={`${product.image}`}
                                alt={product.name}
                            />
                            <CardContent>
                                <Typography variant="h6">{product.name}</Typography>
                                <Typography variant="body2" color="textSecondary">
                                    {product.description}
                                </Typography>
                                <Typography variant="body1" color="primary">
                                    ${product.price}
                                </Typography>
                            </CardContent>
                        </Card>
                    </Grid>
                ))}
            </Grid>
            <div style={{ marginTop: '20px', display: 'flex', justifyContent: 'space-between' }}>
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

