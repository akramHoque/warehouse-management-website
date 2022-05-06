import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Banner from '../Home/Banner/Banner' ;
import Items from './Items/Items';

const Home = () => {
   
    return (
        <div>
            <h1 className='text-center mt-5 px-3'>Organic Fruits</h1>
            <h3 className=' text-center'><span className='text-danger'>Fresh and tasty</span></h3>

        <Banner></Banner>

        <Items></Items>

        <Link to = '/manageInventories'>
        <button className='btn btn-warning'>Manage Inventories</button>
        </Link>
        </div>
    );
};

export default Home;