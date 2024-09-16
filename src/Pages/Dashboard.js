import React from 'react';
import Box from '@mui/material/Box';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import CategoryIcon from '@mui/icons-material/Category';
import { DashboardLayout, AppProvider } from '@toolpad/core';
import Product from './Product';
import Cart from './Cart';
import LogoutIcon from '@mui/icons-material/Logout';
import AddToPhotosIcon from '@mui/icons-material/AddToPhotos';
import Addproduct from './Addproduct';
import Logout from '../Components/Logout';
import DeleteIcon from '@mui/icons-material/Delete';
import DeleteProduct from '../Components/DeleteProduct';
import EditIcon from '@mui/icons-material/Edit';
import EditProduct from './EditProduct';

const darkTheme = createTheme({
    palette: {
        mode: 'dark',
    },
});

function DemoPageContent({ pathname }) {
    return (
        <Box
            sx={{
                py: 4,
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                textAlign: 'center',
            }}
        >
            {pathname === '/product-list' && <Product />}
            {pathname === '/cart-options' && <Cart />}
            {pathname === '/AddProduct' && <Addproduct />}
            {pathname === '/Edit-Product' && <EditProduct />}
            {pathname === '/Delete-Product' && <DeleteProduct />}
            {pathname === '/logout' && <Logout />}
        </Box>
    );
}

export default function Dashboard() {
    const [pathname, setPathname] = React.useState('/product-list');


    const router = React.useMemo(() => ({
        pathname,
        searchParams: new URLSearchParams(),
        navigate: (path) => setPathname(String(path)),
    }), [pathname]);

    const demoWindow = typeof window !== 'undefined' ? window : undefined;

    const NAVIGATION = [
        {
            segment: 'product-list',
            title: 'Product',
            icon: <CategoryIcon />,
            onclick: () => setPathname('/product-list'),
        },
        {
            segment: 'cart-options',
            title: 'Your Cart',
            icon: <ShoppingCartIcon />,
            onclick: () => setPathname('/cart-options'),
        },
        {
            segment: 'AddProduct',
            title: 'AddProduct',
            icon: < AddToPhotosIcon />,
            onclick: () => setPathname('/addProduct'),
        },
        {
            segment: 'Edit-Product',
            title: 'Edit Product',
            icon: <EditIcon />,
            onclick: () => setPathname('/editproduct'),
        },
        {
            segment: 'Delete-Product',
            title: 'Delete Product',
            icon: <DeleteIcon />,
            onclick: () => setPathname('/deleteproduct'),
        },
        {
            segment: 'logout',
            title: 'Logout',
            icon: <LogoutIcon />,
            onclick: () => setPathname('/logout'),
        },
    ];

    return (
        <ThemeProvider theme={darkTheme}>
            <AppProvider
                navigation={NAVIGATION}
                branding={{
                    logo: <img src="../Assets/logo.png" alt="logo" />,
                    title: 'The Shopping Mart',
                }}
                router={router}
                window={demoWindow}
            >
                <DashboardLayout>
                    <DemoPageContent pathname={pathname} />
                </DashboardLayout>
            </AppProvider>
        </ThemeProvider>
    );
}
