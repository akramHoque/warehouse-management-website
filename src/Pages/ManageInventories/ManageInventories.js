import React, { useEffect, useState } from 'react';
import '../Home/Home/Items/Items.css';
import '../Home/Home/Item/item.css';
import { useForm } from "react-hook-form";

const ManageInventories = () => {
    const [inventories, setInventories] = useState([]);

    const handleDeleteItem = id => {
        const proceed = window.confirm('Are you sure to Delete?')
        if (proceed) {
            const url = `http://localhost:5000/manageInventories/${id}`;
            fetch(url, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data);
                    const remaining = inventories.filter(item => item._id !== id);
                    setInventories(remaining);
                })

        }
    }

    const { register, handleSubmit } = useForm();
    const onSubmit = data => {

        console.log(data);

        const url = `http://localhost:5000/items`;
        fetch(url, {
            method: "POST",
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(result => {
                console.log(result);
            })

    }

    useEffect(() => {
        fetch('http://localhost:5000/manageInventories')
            .then(res => res.json())
            .then(data => setInventories(data))
    }, [])


    return (
        <div className='container'>
            <div className="row">
                <h1 className=' text-center mb-3'> <span className='text-danger p-2 '>Items</span></h1>
                <div className="items-container mb-5 ">
                    {
                        inventories.map(item =>
                            <div className='item' key={item?._id}>
                                <img className='w-100' src={item?.img} alt="" />
                                <h4>{item?.name}</h4>
                                <h6>Suplier Name: {item?.supplierName}</h6>
                                <p>Price: ${item?.price}</p>
                                <button onClick={() => handleDeleteItem(item?._id)} className='btn btn-warning'>Delete</button>
                            </div>

                        )
                    }
                </div>

                <div className='w-50 mx-auto pt-3'>
                    <form className='d-flex flex-column ' onSubmit={handleSubmit(onSubmit)}>
                        <input className='mb-2' placeholder='Name' {...register("name", { required: true, maxLength: 20 })} />
                        <textarea className='mb-2' placeholder='Description' {...register("shortDescription")} />
                        <input className='mb-2' placeholder='Price' type="number" {...register("price")} />
                        <input className='mb-2' placeholder='SupplierName' type="text" {...register("supplierName")} />
                        <input className='mb-2' placeholder='photoURL' type="text" {...register("img")} />
                        <input type="submit" value='Add New Item' />
                    </form>
                </div>
            </div>
        </div>
    );
};

export default ManageInventories;