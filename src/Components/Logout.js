import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Cookies from 'js-cookie';

export default function Logout() {
    const navigate = useNavigate();

    useEffect(() => {
        const handleLogout = () => {
            Cookies.remove('access_token', { path: '/' });
            window.location.reload();
            if (!Cookies.get('access_token')) {
                console.log('Token removed from cookies');
                navigate('/');
            } else {
                console.log('Failed to remove token');
            }
        };
        handleLogout();
    }, [navigate]);

    return (
        <div>
            Logging Out...
        </div>
    );
}
