import React, { useEffect, useState } from 'react';
import Cookies from 'js-cookie';
import axios from 'axios';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import SimpleImageSlider from 'react-simple-image-slider';
import { IconButton } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';


export default function DeleteProduct() {
    const token = Cookies.get('access_token');
    const [products, setProducts] = useState([]);

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


    const deleteProduct = async (product_id) => {
        try {
            const response = await fetch(`http://localhost:3000/products/${product_id}`, {
                method: 'DELETE',
                headers: {
                    'Authorization': `Bearer ${token}`,
                },
            });

            if (response.ok) {
                setProducts(products.filter((product) => product.product_id !== product_id));
                alert('Product deleted successfully.');
            } else {
                console.error('Error deleting product:', response);
            }
        } catch (error) {
            console.error('Error deleting product:', error);
        }
    };


    return (
        <div>
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
                                    <IconButton
                                        color="secondary"
                                        onClick={() => deleteProduct(product.product_id)}
                                    >
                                        <DeleteIcon />
                                    </IconButton>
                                </CardContent>
                            </Card>
                        </Grid>
                    ))}
                </Grid>
            </Box>
        </div>
    )
}
