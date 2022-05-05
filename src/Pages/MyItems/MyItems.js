import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';

const MyItems = () => {
    
    const [item, setItem] = useState([]);
    console.log(item)
    const [user] = useAuthState(auth);
    useEffect(() =>{
        const getItem = async() =>{
            const email = user.email
            const url = `http://localhost:5000/order?email=${email}`;
          const {data} =  await axios.get(url);
          setItem(data);
        }
        getItem();

    }, [user])
    return (
       <div className='container'>
            <div className='row'>
            <h2 className='text-center mb-3'><span className='text-secondary'>This is my Items</span></h2>
            <div className='items-container mb-5'>
            {
                item.map(order => 
                    <div className='item' key = {order?._id}>
                        <img className='w-100' src={order.img} alt="" />
                        <h4>{order.name}</h4>
                        <p>{order.price}</p>
                    </div>
                    )
            }
            </div>
           
        </div>
       </div>
    );
};

export default MyItems;