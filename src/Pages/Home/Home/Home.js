import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Faqs from '../../Faqs/Faqs';
import PriceList from '../../PriceList/PriceList';
import Banner from '../Home/Banner/Banner' ;
import Items from './Items/Items';

const Home = () => {
   
    return (
        <div>
            <h1 className='text-center mt-5 px-3'>Organic Fruits Wearehouse</h1>
            <h3 className=' text-center'><span className='text-danger'>Fresh and tasty</span></h3>

        <Banner></Banner>

        <Items></Items>

        <PriceList></PriceList>

        <Faqs></Faqs>
      
         
      

        <div className='text-center pb-5'>
        <Link to = '/manageInventories'>
        <button className='btn bg-secondary text-warning'>Manage Inventories</button>
        </Link>
        </div>
    
        </div>
    );
};

export default Home;