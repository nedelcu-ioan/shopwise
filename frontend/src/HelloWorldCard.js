import React, { useEffect, useState } from 'react';
import axios from 'axios';

const HelloWorldCard = () => {
    const [message, setMessage] = useState('');

    useEffect(() => {
        axios.get('http://localhost:8000/catalog/hello/')
            .then(response => {
                setMessage(response.data.message);
            })
            .catch(error => {
                console.error('Error fetching the message:', error);
            });
    }, []);

    return (
        <div style={{ border: '1px solid #ddd', padding: '16px', borderRadius: '8px', maxWidth: '400px', margin: '20px auto', textAlign: 'center' }}>
            <h1>{message || 'Loading...'}</h1>
        </div>
    );
};

export default HelloWorldCard;
