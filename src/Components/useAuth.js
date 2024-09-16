import { useState, useEffect } from 'react';
import Cookies from 'js-cookie';
import jwt from 'jsonwebtoken';

const useAuth = () => {
    const [userId, setUserId] = useState(null);

    useEffect(() => {
        const token = Cookies.get('access_token');
        if (token) {
            try {
                const decodedToken = jwt.decode(token);
            //   console.log(decodedToken)
                setUserId(decodedToken?.userid);
            } catch (error) {
                console.error('Error decoding token:', error);
            }
        }
    }, []);

    return { userId };
};

export default useAuth;
