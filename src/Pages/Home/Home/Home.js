import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Faqs from '../../Faqs/Faqs';
import Banner from '../Home/Banner/Banner' ;
import Items from './Items/Items';

const Home = () => {
   
    return (
        <div>
            <h1 className='text-center mt-5 px-3'>Organic Fruits</h1>
            <h3 className=' text-center'><span className='text-danger'>Fresh and tasty</span></h3>

        <Banner></Banner>

        <Items></Items>

        <Faqs></Faqs>
      
          <div className="container">
          <div className="row d-flex">
              
              <div className="col-md-6 col-sm-12 col-lg-12 px-5">
              <ol className="list-group list-group-numbered w-100">
  <li class="list-group-item d-flex justify-content-between align-items-start">
    <div className="ms-2 me-auto">
      <div className="fw-bold">Subheading</div>
      Content for list item
    </div>
    <span className="badge bg-primary rounded-pill">14</span>
  </li>
  <li className="list-group-item d-flex justify-content-between align-items-start">
    <div className="ms-2 me-auto">
      <div className="fw-bold">Subheading</div>
      Content for list item
    </div>
    <span className="badge bg-primary rounded-pill">14</span>
  </li>
  <li className="list-group-item d-flex justify-content-between align-items-start">
    <div className="ms-2 me-auto">
      <div className="fw-bold">Subheading</div>
      Content for list item
    </div>
    <span className="badge bg-primary rounded-pill">14</span>
  </li>
</ol>
              </div>

              <div className="col-md-6 col-sm-12 col-lg-12">
                <h2>paskfnafna</h2>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. A, repudiandae.</p>
              </div>
          </div>
          </div>
      

        <div className='text-center pb-5'>
        <Link to = '/manageInventories'>
        <button className='btn bg-secondary text-warning'>Manage Inventories</button>
        </Link>
        </div>
    
        </div>
    );
};

export default Home;