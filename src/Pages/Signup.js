import * as React from 'react';
import axios from 'axios';
import { Box, Button, Checkbox, FormControlLabel, FormLabel, FormControl, TextField, Typography, Stack } from '@mui/material';
import { Link, useNavigate } from 'react-router-dom';
import './Signup.css';

export default function Signup() {
    const [formValues, setFormValues] = React.useState({ name: '', email: '', password: '' });
    const navigate = useNavigate();

    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormValues((prevValues) => ({ ...prevValues, [name]: value }));
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        axios
            .post("http://localhost:3000/signup", formValues)
            .then(() => {
                alert("Data Added Successfully");
                navigate('/');
            })
            .catch(() => {
                alert("Error Adding Data");
            });
    };

    return (
        <div className='bodybackground'>
            <Stack direction="column" justifyContent="center" alignItems="center" className="stackContainer">
                <Typography component="h1" variant="h4" className="heading">Sign up</Typography>
                <Box component="form" onSubmit={handleSubmit} className="formContainer">
                    <FormControl>
                        <FormLabel htmlFor="name">Full name</FormLabel>
                        <TextField
                            autoComplete="name"
                            name="name"
                            required
                            fullWidth
                            id="name"
                            placeholder="Enter Your Name"
                            value={formValues.name}
                            onChange={handleChange}
                        />
                    </FormControl>
                    <FormControl>
                        <FormLabel htmlFor="email">Email</FormLabel>
                        <TextField
                            required
                            fullWidth
                            id="email"
                            placeholder="your@email.com"
                            name="email"
                            autoComplete="email"
                            value={formValues.email}
                            onChange={handleChange}
                        />
                    </FormControl>
                    <FormControl>
                        <FormLabel htmlFor="password">Password</FormLabel>
                        <TextField
                            required
                            fullWidth
                            name="password"
                            placeholder="••••••"
                            type="password"
                            id="password"
                            autoComplete="new-password"
                            value={formValues.password}
                            onChange={handleChange}
                        />
                    </FormControl>
                    <FormControlLabel control={<Checkbox color="primary" />} label="I want to receive updates via email." />
                    <Button type="submit" fullWidth variant="contained" className="signUpButton">Sign up</Button>
                    <Typography className="signInLink">
                        Already have an account?{' '}
                        <Link to="/login" variant="body2">LogIn</Link>
                    </Typography>
                </Box>
                <Box className="socialButtons">
                    <Button fullWidth variant="outlined" onClick={() => alert('Sign up with Google')}>Sign up with Google</Button>
                    <Button fullWidth variant="outlined" onClick={() => alert('Sign up with Facebook')}>Sign up with Facebook</Button>
                </Box>
            </Stack>
        </div>
    );
}
