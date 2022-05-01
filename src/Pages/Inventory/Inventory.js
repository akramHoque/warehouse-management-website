import React, { useEffect, useState } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import './inventory.css';

const Inventory = () => {

    const { itemId } = useParams();
    const navigate = useNavigate();
    const [inventory, setInventory] = useState();
    useEffect(() => {
        const url = `http://localhost:5000/inventory/${itemId}`;
        fetch(url)
            .then(res => res.json())
            .then(data => setInventory(data));
    }, [])

    const decreaseQuantity = () => {
        console.log('decrease quantity');
        const quantity = inventory?.quantity;
        const quantity1 = inventory?.quantity - 1;
        console.log(quantity1);
    }

    return (


        <div>
            <div className='inventory'>
                <img className='w-100' src={inventory?.img} alt="" />
                <p className='id'>{inventory?._id}</p>
                <h4 className='text-secondary'>{inventory?.name}</h4>
                <h5 className='text-secondary'>{inventory?.supplierName}</h5>
                <p>Quantity: {inventory?.quantity}</p>
                <p>Price: <span>${inventory?.price}</span></p>
                <p><small>{inventory?.shortDescription}</small></p>
            </div>

            <button onClick={decreaseQuantity}>Delivered</button>
            <Link to='/manageInventories'>
                <button className='btn btn-warning'>Manage Inventories</button>
            </Link>
        </div>

    );
};

export default Inventory;