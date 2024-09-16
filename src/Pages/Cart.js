import React, { useState, useEffect } from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import ListItemText from '@mui/material/ListItemText';
import Cookies from 'js-cookie';
import { Button, CardMedia, IconButton } from '@mui/material';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import DeleteIcon from '@mui/icons-material/Delete';
import PurchaseFormModal from '../Components/Purchaseform';

const Cart = () => {
    const [cartItems, setCartItems] = useState([]);
    const token = Cookies.get('access_token');
    const [isModalOpen, setIsModalOpen] = useState(false);

    useEffect(() => {
        const fetchCart = async () => {
            const response = await fetch('http://localhost:3000/cart/2', {
                headers: {
                    'Authorization': `Bearer ${token}`,
                }
            });
            const data = await response.json();
            setCartItems(data);
        };

        fetchCart();
    }, [token]);

    const totalAmount = cartItems.reduce((total, item) => total + item.pro_price, 0);




    const handleBuyNow = async () => {
        if (cartItems.length === 0) {
            alert('Your cart is empty.');
            return;
        }
        setIsModalOpen(true); // Open the modal
    };




    const handleDeleteItem = async (productId) => {
        try {
            const response = await fetch(`http://localhost:3000/cart/delete/${productId}`, {
                method: 'DELETE',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${token}`,
                },
            });
            if (!response.ok) {
                const text = await response.text();
                console.error('Failed to delete item:', text);
                return;
            }
            setCartItems(cartItems.filter(item => item.product_id !== productId));
            alert('Item deleted from cart.');
        } catch (error) {
            console.error('Error deleting item:', error);
        }
    };

    return (
        <div>
            <Box>
                <Typography variant="h4" gutterBottom>
                    Your Cart
                </Typography>

                {cartItems.length === 0 ? (
                    <Typography variant="subtitle1" color="textSecondary">
                        Your cart is empty.
                    </Typography>
                ) : (
                    <Grid container spacing={2} justifyContent="space-around">
                        {cartItems.map((item) => (
                            <Grid item key={item.product_id} >
                                <Box
                                    sx={{
                                        border: '1px solid #ddd',
                                        borderRadius: 2,
                                        p: 1,
                                        width: '100%',
                                        height: '300px',
                                        justifyContent: 'space-between',
                                        boxSizing: 'border-box'
                                    }}
                                >
                                    <CardMedia
                                        component="img"
                                        sx={{
                                            width: '100%',
                                            height: 150,
                                            objectFit: 'cover',
                                        }}
                                        image={`http://localhost:3000${item.pro_image}`}
                                        alt={item.pro_name}
                                    />
                                    <ListItemText
                                        primary={item.pro_name}
                                        secondary={`Price: ₹${item.pro_price.toFixed(2)}`}
                                        sx={{ textAlign: 'center', mt: 1 }}
                                    />
                                    <IconButton
                                        edge="end"
                                        aria-label="delete"
                                        onClick={() => handleDeleteItem(item.product_id)}
                                        sx={{ mt: 1 }}
                                    >
                                        <DeleteIcon />
                                    </IconButton>
                                </Box>
                            </Grid>
                        ))}
                    </Grid>
                )}

                <Typography variant="h4" sx={{ mt: 2 }}>
                    Total: ₹{totalAmount.toFixed(2)}
                </Typography>

                <Typography variant="h2" sx={{ mt: 2 }}>
                    <Button
                        style={{ backgroundColor: 'blue', color: 'white' }}
                        onClick={handleBuyNow}
                    >
                        <ShoppingCartIcon /> Buy Now
                    </Button>
                </Typography>
            </Box>
            <PurchaseFormModal open={isModalOpen} onClose={() => setIsModalOpen(false)} />
        </div>
    );
};

export default Cart;
