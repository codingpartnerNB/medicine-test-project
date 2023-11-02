import React, { useState } from 'react';
import Cart from './components/Cart/Cart';
import Header from './components/Medicines/Header';
import Medicines from './components/Medicines/Medicines';
import CartContextProvider from './store/CartContextProvider';

function App() {
  const [cartIsShown, setCartIsShown] = useState(false);
  const hideCartHandler = ()=>{
    setCartIsShown(false);
  }
  const showCartHandler = ()=>{
    setCartIsShown(true);
  }

  return (
    <CartContextProvider>
      {cartIsShown && <Cart onHideCart={hideCartHandler} />}
      <Header onShowCart={showCartHandler} />
      <main>
        <Medicines />
      </main>
    </CartContextProvider>
  );
}

export default App;
