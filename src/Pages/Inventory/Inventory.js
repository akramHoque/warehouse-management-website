import React, { useEffect, useState } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import './inventory.css';

const Inventory = () => {

    const { itemId } = useParams();
    const [inventory, setInventory] = useState({});
    useEffect(() => {
        const url = `http://localhost:5000/inventory/${itemId}`;
        fetch(url)
            .then(res => res.json())
            .then(data => setInventory(data));
    }, [])

    const decreaseQuantity = event => {
       
        event.preventDefault();

        const newQuantity = parseInt(inventory.quantity ) - 1;
        const quantityFinal = {newQuantity} ;
         console.log(quantityFinal);
        
        fetch(`http://localhost:5000/inventory/${itemId}`,{
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(quantityFinal)
        })
        .then(res => res.json())
        .then(data => {
            console.log('success',data);
            alert('quantity updated !!!')
        })
    }

    return (


        <div>
            <div className='inventory'>
                <img className='w-100' src={inventory?.img} alt="" />
                <p className='id'>{inventory?._id}</p>
                <h4 className='text-secondary'>{inventory?.name}</h4>
                <h5 className='text-secondary'>{inventory?.supplierName}</h5>
                <p>Quantity: {inventory?.quantity}</p>
                <p className='text-danger'>Price: <span>${inventory?.price}</span></p>
                <p><small>{inventory?.shortDescription}</small></p>
            </div>

            <button onClick={decreaseQuantity} className = 'btn btn-warning text-center'>Delivered</button>

            <Link to='/manageInventories' className='text-center'>
                <button className='btn btn-warning'>Manage Inventories</button>
            </Link>
        </div>

    );
};

export default Inventory;