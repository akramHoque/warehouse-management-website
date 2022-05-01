import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Items from './Items/Items';

const Home = () => {
   
    return (
        <div>
            <h2>This is home</h2>
            <Items></Items>
        <Link to = '/manageInventories'>
        <button className='btn btn-warning'>Manage Inventories</button>
        </Link>
        </div>
    );
};

export default Home;