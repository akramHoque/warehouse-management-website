// import React from 'react';
// import '../Home/Home/Item/item.css';

// const ManageInventory = ({ inventory }) => {
//     console.log(inventory);
//     const { _id, name, img, shortDescription, price, supplierName, quantity } = inventory;


//     const handleDeleteItem = id =>{
//         const proceed = window.confirm('Are you sure to Delete?')
//         if(proceed){
//            const url = `http://localhost:5000/manageInventories/${id}` ;
//            fetch(url, {
//                method: 'DELETE'
//            })
//            .then(res => res.json())
//            .then(data => {
//                console.log(data);
//            })

//         }
//     }
//     return (
//         <div>

//             <div className='item'>
//                 <img className='w-100' src={img} alt="" />
//                 <p>Id: {_id}</p>
//                 <h4 className='text-secondary'>{name}</h4>
//                 <h5 className='text-secondary'>{supplierName}</h5>
//                 <p>Quantity: {quantity}</p>
//                 <p>Price: <span>${price}</span></p>
//                 <p><small>{shortDescription}</small></p>
//                 <button onClick = {() => handleDeleteItem(_id)} className = 'btn btn-warning'>Delete</button>
//             </div>
//         </div>
//     );
// };

// export default ManageInventory;