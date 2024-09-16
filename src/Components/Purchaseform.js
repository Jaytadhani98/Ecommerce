import React, { useState } from 'react';
import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Cookies from 'js-cookie';
import Typography from '@mui/material/Typography';
import { useNavigate } from 'react-router-dom';

const PurchaseFormModal = ({ open, onClose }) => {
    const [name, setName] = useState('');
    const [address, setAddress] = useState('');
    const [phone, setPhone] = useState('');
    const [email, setEmail] = useState('');
    const token = Cookies.get('access_token');
    const navigate = useNavigate();
    const handleSubmit = async (event) => {
        event.preventDefault();

        const purchaseData = {
            name,
            address,
            phone,
            email
        };

        try {
            // Submit purchase form data
            const response = await fetch('http://localhost:3000/cart/clear', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${token}`,
                },
                body: JSON.stringify(purchaseData),
            });

            if (!response.ok) {
                const text = await response.text();
                console.error('Purchase failed:', text);
                return;
            }
            // Notify user and close modal
            alert(' Thankyou For Purchase Product !');
            onClose();
            navigate('/dashboard');
            window.location.reload();
        } catch (error) {
            console.error('Error submitting purchase form:', error);
        }
    };

    return (
        <Modal
            open={open}
            onClose={onClose}
            aria-labelledby="purchase-form-modal"
            aria-describedby="purchase-form-description"
        >
            <Box
                sx={{
                    position: 'absolute',
                    top: '50%',
                    left: '50%',
                    transform: 'translate(-50%, -50%)',
                    width: 400,
                    bgcolor: 'background.paper',
                    borderRadius: 2,
                    boxShadow: 24,
                    p: 4,
                }}
            >
                <Typography variant="h6" component="h2" sx={{ mb: 2 }}>
                    Purchase Form
                </Typography>
                <form onSubmit={handleSubmit}>
                    <TextField
                        fullWidth
                        label="Name"
                        variant="outlined"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        sx={{ mb: 2 }}
                    />
                    <TextField
                        fullWidth
                        label="Address"
                        variant="outlined"
                        value={address}
                        onChange={(e) => setAddress(e.target.value)}
                        sx={{ mb: 2 }}
                    />
                    <TextField
                        fullWidth
                        label="Phone"
                        variant="outlined"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        sx={{ mb: 2 }}
                    />
                    <TextField
                        fullWidth
                        label="Email"
                        variant="outlined"
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        sx={{ mb: 2 }}
                    />
                    <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                        <Button type="submit" variant="contained" color="primary">
                            Submit
                        </Button>
                        <Button variant="outlined" color="secondary" onClick={onClose}>
                            Cancel
                        </Button>
                    </Box>
                </form>
            </Box>
        </Modal>
    );
};

export default PurchaseFormModal;
