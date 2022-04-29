import React from 'react';
import { Link } from 'react-router-dom';
import './item.css' ;

const Item = ({item}) => {
    const { name, img, shortDescription, price, supplierName, quantity} = item ;
    return (
        <div>
        
            <div className='item'>
            <img className='w-100' src={img} alt="" />
            <h4 className='text-secondary'>{name}</h4>
            <h5 className='text-secondary'>{supplierName}</h5>
             <p>Quantity: {quantity}</p>
            <p>Price: <span>${price}</span></p>
            <p><small>{shortDescription}</small></p> 
                <div >
                <Link to = '/inventory'>
                  <button className='btn btn-warning w-50 item-btn'>Update</button>
                </Link>
                </div> 
        </div>
        </div>
    );
};

export default Item;