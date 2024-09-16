import React, { useEffect, useState } from 'react';
import Cookies from 'js-cookie';
import axios from 'axios';
import EditIcon from '@mui/icons-material/Edit';
import { Box, Typography, Grid, Card, CardContent, Button, Modal, TextField } from '@mui/material';
import SimpleImageSlider from 'react-simple-image-slider';

export default function EditProduct() {
    const token = Cookies.get('access_token');
    const [products, setProducts] = useState([]);
    const [open, setOpen] = useState(false);
    const [editFormData, setEditFormData] = useState({ pro_name: '', pro_price: '' });
    const [selectedProduct, setSelectedProduct] = useState(null);

    useEffect(() => {
        token &&
            axios
                .get('http://localhost:3000/products', { headers: { Authorization: `Bearer ${token}` } })
                .then(({ data }) => setProducts(data))
                .catch(console.error);
    }, [token]);

    const handleEditClick = (product) => {
        setSelectedProduct(product);
        setEditFormData({ pro_name: product.pro_name, pro_price: product.pro_price });
        setOpen(true);
    };

    const handleInputChange = ({ target: { name, value } }) =>
        setEditFormData((prev) => ({ ...prev, [name]: value }));


    const handleFormSubmit = async (e) => {
        e.preventDefault();
        try {
            await axios.put(
                `http://localhost:3000/editproduct/${selectedProduct.product_id}`,
                editFormData,
                {
                    headers: {
                        'Content-Type': 'application/json',
                        Authorization: `Bearer ${token}`,
                    },
                }
            );
            setOpen(false);
            alert('Product updated successfully!');
            window.location.reload();
        } catch (error) {
            alert(`Error: ${error.response?.data?.message || error.message}`);
        }
    };

    return (
        <Box>
            <Typography variant="h4" gutterBottom>All Products</Typography>
            <Grid container spacing={3}>
                {products.map((product) => (
                    <Grid item key={product.product_id}>
                        <Card>
                            <SimpleImageSlider
                                width={225}
                                height={150}
                                images={[`http://localhost:3000${product.pro_image}`]}
                                autoPlay autoPlayDelay={2}
                            />
                            <CardContent>
                                <Typography variant="h6">{product.pro_name}</Typography>
                                <Typography color="text.secondary">₹ {Number(product.pro_price).toFixed(2)}</Typography>
                                <Button variant="contained" color="primary" onClick={() => handleEditClick(product)}>
                                    <EditIcon /> Edit Product
                                </Button>
                            </CardContent>
                        </Card>
                    </Grid>
                ))}

            </Grid>

            <Modal open={open} onClose={() => setOpen(false)}>
                <Box sx={{ p: 4, boxShadow: 24, bgcolor: '#3b5d50', width: 400, mx: 'auto', my: '20%', height: '45%', mt: '10%', }}>
                    <Typography variant="h6" style={{ textAlign: 'center', fontWeight: 'bold' }}>Edit Product</Typography>
                    <form onSubmit={handleFormSubmit}>
                        <TextField fullWidth label="Product Name" name="pro_name" value={editFormData.pro_name} onChange={handleInputChange} margin="normal" />
                        <TextField fullWidth label="Product Price" name="pro_price" type="number" value={editFormData.pro_price} onChange={handleInputChange} margin="normal" />
                        <Box sx={{ display: 'flex', justifyContent: 'center', mt: 2 }}>
                            <Button type="submit" variant="contained" color="success">Save Changes</Button>
                        </Box>
                    </form>
                </Box>
            </Modal>
        </Box>
    );
}
