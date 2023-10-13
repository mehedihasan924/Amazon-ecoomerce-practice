import React from 'react';
import Header from '../Header/Header';
import {Outlet, useNavigate, useNavigation} from 'react-router-dom'
const Home = () => {
    return (
        <div>
            <Header> </Header>
            <Outlet> </Outlet>
        </div>
    );
};

export default Home;