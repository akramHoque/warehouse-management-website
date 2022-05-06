import React from 'react';
import {useNavigate} from 'react-router-dom';
import './item.css' ;

const Item = ({item}) => {
    const { _id , name, img, shortDescription, price, supplierName, quantity} = item ;
    const navigate = useNavigate();
    const handleUpdateBtn = id =>{
        navigate(`/inventory/${id}`)
       
    }
    return (
        <div>
        
            <div className='item'>
            <img className='w-100' src={img} alt="" />
            <h4 className='text-secondary'>{name}</h4>
            <h5 className='text-secondary'>{supplierName}</h5>
             <p>Quantity: {quantity}</p>
            <p className='text-danger'>Price: <span>${price}</span></p>
            <p><small>{shortDescription}</small></p> 
                <div >

                  <button onClick={() => handleUpdateBtn(_id)} className='btn btn-warning w-50 item-btn font-semibold'>Update</button>
                </div> 
        </div>
        </div>
    );
};

export default Item;