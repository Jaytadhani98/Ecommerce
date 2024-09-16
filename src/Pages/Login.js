import React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import FormLabel from '@mui/material/FormLabel';
import FormControl from '@mui/material/FormControl';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import Cookies from 'js-cookie';
import './Signup.css';

export default function Login() {
    const navigate = useNavigate();
    const [formValues, setFormValues] = React.useState({
        email: '',
        password: '',
    });

    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormValues((prevValues) => ({ ...prevValues, [name]: value }));
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        axios.post("http://localhost:3000/login", formValues, { withCredentials: true })
            .then((response) => {
                if (response.data.success) {
                    Cookies.set('access_token', response.data.token);
                    alert("Login Successful");
                    window.location.reload();
                    navigate('/dashboard');
                } else {
                    alert("Invalid email or password");
                }
            })
            .catch((error) => {
                console.error("There was an error!", error);
                alert("Error logging in");
            });
    };

    return (
        <div className='bodybackground'>
            <Stack direction="column" justifyContent="center" alignItems="center" className="stackContainer">
                <Typography component="h1" variant="h4" className="heading">
                    Log In
                </Typography>
                <Box component="form" onSubmit={handleSubmit} className="formContainer">
                    <FormControl>
                        <FormLabel htmlFor="email">Email</FormLabel>
                        <TextField
                            required
                            fullWidth
                            id="email"
                            placeholder="your@email.com"
                            name="email"
                            autoComplete="email"
                            variant="outlined"
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
                            variant="outlined"
                            value={formValues.password}
                            onChange={handleChange}
                        />
                    </FormControl>
                    <Button
                        type="submit"
                        fullWidth
                        variant="contained"
                        className="signUpButton">
                        Log In
                    </Button>

                    <Typography className="signInLink">
                        Does not have an account?{' '}
                        <span>
                            <Link to="/signup" variant="body2">
                                Sign Up
                            </Link>
                        </span>
                    </Typography>
                </Box>
                <Box className="socialButtons">
                    <Button
                        fullWidth
                        variant="outlined"
                        onClick={() => alert('Sign up with Google')}
                    >
                        Sign up with Google
                    </Button>
                    <Button
                        fullWidth
                        variant="outlined"
                        onClick={() => alert('Sign up with Facebook')}>
                        Sign up with Facebook
                    </Button>
                </Box>
            </Stack>
        </div>
    );
}
