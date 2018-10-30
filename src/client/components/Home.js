import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => (
        <div style={{ textAlign: 'center' }}>
            <h1>Home</h1>
            <div><Link to="/restaurants">Danh sách nhà hàng</Link></div>
        </div>
    );

export default Home;