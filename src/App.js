import './App.css';
import Header from './components/Header/Header';
import ItemContainer from './components/ItemContainer/ItemContainer';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import { CartProvider } from './components/context/cartContext';
import Cart from './components/Cart/Cart.js';


function App() {

  return (

    <div className="App">
      <CartProvider>
        <BrowserRouter>
          <Header />
          <Routes>
            <Route path='/' element={<ItemContainer greeting='Lulú' />} />
            <Route path='/categories/:categoryID' element={<ItemContainer greeting='Lulú' />} />
            <Route path='/detail/:productID' element={<ItemDetailContainer />} />
            <Route path='/cart' element={<Cart />} />
          </Routes>
        </BrowserRouter>
      </CartProvider>
    </div>
  );
}

export default App;
