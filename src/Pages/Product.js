import React, { useState, useEffect } from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import SimpleImageSlider from 'react-simple-image-slider';
import { Button } from '@mui/material';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import axios from 'axios';
import Cookies from 'js-cookie';
import { toast } from 'react-toastify';

const Product = () => {
    const [products, setProducts] = useState([]);
    const token = Cookies.get('access_token');

    useEffect(() => {
        if (token) {
            axios.get('http://localhost:3000/products', {
                headers: { Authorization: `Bearer ${token}` }
            })
                .then((response) => {
                    setProducts(response.data);
                })
                .catch((error) => {
                    console.error('Error fetching products:', error);
                });
        }
    }, [token]);



    const addToCart = async (product_id) => {
        try {
            const response = await fetch('http://localhost:3000/cart', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${token}`,
                },
                body: JSON.stringify({ product_id: product_id }),
            });

            if (response.ok) {
                const data = await response.json();
                if (data.success) {
                    // alert('Your item was added to the cart.');
                    toast.success('Thank you for shopping!');
                }
            } else {
                const errorData = await response.json();
                if (errorData.message === "Product already in your cart.") {
                    alert('Product already added to your cart.');
                } else {
                    console.error('Error adding product to cart:', errorData);
                }
            }
        } catch (error) {
            console.error('Error adding product to cart:', error);
        }
    };




    return (
        <Box>
            <Typography variant="h4" gutterBottom>
                All Product
            </Typography>
            <Grid container spacing={3}>
                {products.map((product) => (
                    <Grid item key={product.product_id}>
                        <Card>
                            <SimpleImageSlider
                                width={225}
                                height={150}
                                images={[`http://localhost:3000${product.pro_image}`]}
                                autoPlay={true}
                                autoPlayDelay={2}
                            />
                            <CardContent>
                                <Typography variant="h6">{product.pro_name}</Typography>
                                <Typography variant="body2" color="text.secondary">
                                    ₹ {product.pro_price ? product.pro_price.toFixed(2) : 'N/A'}
                                </Typography>

                                <Button
                                    variant="contained"
                                    color="primary"
                                    onClick={() => addToCart(product.product_id)}
                                >
                                    <AddShoppingCartIcon />
                                    Add to Cart
                                </Button>
                            </CardContent>
                        </Card>
                    </Grid>
                ))}
            </Grid>
        </Box>
    );
};

export default Product;
