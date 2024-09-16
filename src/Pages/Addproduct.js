import React, { useState } from 'react';
import './Addproduct.css';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import Cookies from 'js-cookie';

export default function Addproduct() {
    const [ProductName, setProductname] = useState('');
    const [Price, setPrice] = useState('');
    const [file, setFile] = useState(null);
    const navigate = useNavigate();

    const token = Cookies.get('access_token');

    const handleSubmit = (event) => {
        event.preventDefault();
        const formData = new FormData();
        formData.append('name', ProductName);
        formData.append('price', Price);
        formData.append('file', file);
        axios.post('http://localhost:3000/addproduct', formData, {
            headers: {
                'Authorization': `Bearer ${token}`,
                'Content-Type': 'multipart/form-data'
            }
        })
            .then((response) => {
                alert("Product Added Successfully")
                navigate('/dashboard');
                window.location.reload();
            })
            .catch((error) => {
                alert("Error Adding Data");
                console.error("Error adding data:", error);
            });
    }

    return (
        <div>
            <h1 style={{ fontFamily: 'initial' }}>Add New Product</h1>
            <form onSubmit={handleSubmit} className='formdiv'>
                <div className='div-label'>
                    <label>Product Name</label>
                    <input
                        type='text'
                        onChange={(e) => setProductname(e.target.value)}
                        value={ProductName}
                    />
                </div>
                <div className='div-label'>
                    <label>Product Price</label>
                    <input
                        type='text'
                        onChange={(e) => setPrice(e.target.value)}
                        value={Price}
                    />
                </div>
                <div className='div-label'>
                    <label>Product Photos</label>
                    <input
                        type='file'
                        onChange={(e) => setFile(e.target.files[0])}
                    />
                </div>
                <button type='submit'>Submit</button>
            </form>
        </div>
    );
}
