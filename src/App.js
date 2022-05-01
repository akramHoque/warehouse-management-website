import { Route, Routes } from 'react-router-dom';
import './App.css';
import AddNewItem from './Pages/AddNewItem/AddNewItem';
import Home from './Pages/Home/Home/Home';
import Items from './Pages/Home/Home/Items/Items';
import Inventory from './Pages/Inventory/Inventory';
import ManageInventories from './Pages/ManageInventories/ManageInventories';
import Footer from './Pages/Shared/Footer/Footer';
import Header from './Pages/Shared/Header/Header';


function App() {
  return (
    <div >
      <Header></Header>
      <Routes>
        <Route path='/' element = {<Home></Home>}></Route>
        <Route path='/home' element = {<Home></Home>}></Route>
        <Route path='/items' element = {<Items></Items>}></Route>
        <Route path='/inventory/:itemId' element = {<Inventory></Inventory>}></Route>
        <Route path='/manageInventories' element = {<ManageInventories></ManageInventories>}></Route>
      <Route path='/addItem' element = {<AddNewItem></AddNewItem>}></Route>
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
