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
        <div>
            <h2>This is my Items : {item.length}</h2>
        </div>
    );
};

export default MyItems;