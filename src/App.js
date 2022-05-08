import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './Pages/Home/Home/Home';
import Items from './Pages/Home/Home/Items/Items';
import Header from './Pages/Shared/Header/Header';
import Login from './Pages/Home/Home/Login/Login';
import Register from './Pages/Home/Home/Register/Register';
import Inventory from './Pages/Inventory/Inventory' ;
import RequireAuth from './Pages/RequireAuth/RequireAuth' ;
import ManageInventories from './Pages/ManageInventories/ManageInventories' ;
import AddItem from './Pages/AddItem/AddItem';
import MyItems from './Pages/MyItems/MyItems';
import Footer from './Pages/Shared/Footer/Footer' ;
import NotFound from './Pages/NotFound/NotFound';
import Blogs from './Pages/Blogs/Blogs';



const App = () => {
    return (
        <div>
            <Header></Header>
            <Routes>
                <Route path='/' element={<Home></Home>}></Route>
                <Route path='/home' element={<Home></Home>}></Route>
               <Route path='/blogs' element = {<Blogs></Blogs>}></Route>
               
                <Route path='/login' element = {<Login></Login>}></Route>
                <Route path='/register' element = {<Register></Register>}></Route>
                <Route path='/items' element={
                    <RequireAuth>
                        <Items></Items>
                    </RequireAuth>
                }></Route>
                <Route path = '/inventory/:itemId' element = {
                    <RequireAuth>
                        <Inventory></Inventory>
                    </RequireAuth>
                }></Route>
                <Route path = '/inventory' element = {
                    <RequireAuth>
                        <Inventory></Inventory>
                    </RequireAuth>
                }></Route>
                <Route path = '/manageInventories' element = {
                    <RequireAuth>
                        <ManageInventories></ManageInventories>
                    </RequireAuth>
                }></Route>
                <Route path = '/addItem' element = {
                    <RequireAuth>
                       <AddItem></AddItem>
                    </RequireAuth>
                }></Route>
                <Route path = '/myItems' element = {
                    <RequireAuth>
                       <MyItems></MyItems>
                    </RequireAuth>
                }></Route>
                <Route path = "*" element = {<NotFound></NotFound>}/>
            </Routes>
            
            <Footer></Footer>

        </div>
    );
};

export default App;