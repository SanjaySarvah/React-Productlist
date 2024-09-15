import React, { useState } from 'react';
import ProductList from './ProductList';
import Cart from './Cart';
import '@fortawesome/fontawesome-free/css/all.min.css';

const App = () => {
  const [cartItems, setCartItems] = useState([]); // State to store cart items
  const [isModalOpen, setIsModalOpen] = useState(false); // Modal toggle state

  const addToCart = (product) => {
    if (cartItems.some(item => item.id === product.id)) {
      alert("Item already added to the cart");
      return;
    }
    setCartItems([...cartItems, product]);
  };

  
  const removeFromCart = (product) => {
    setCartItems(cartItems.filter(item => item.id !== product.id));
  };

 
  const openModal = () => {
    setIsModalOpen(true);
  };


  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div>
  
  <nav className="bg-black text-white grid grid-cols-1 md:grid-cols-3 items-center p-4 sticky top-0 z-10">
  <h1 className="text-xl font-bold md:ml-16 lg:ml-32"><span className="text-yellow-300">Captain </span>Black Store</h1>
  
  <div className="marquee-container overflow-hidden col-span-1">
    <div className="marquee whitespace-nowrap animate-marquee">
      
      <p className="text-yellow-300 font-bold">🎉Welcome to Captain Black Store! Happy Diwali Special Offer!🎉</p>
    </div>
  </div>
  
  <button className="cart-button ml-auto md:ml-0" onClick={openModal}>
    <i className="fas fa-shopping-cart"></i> Cart ({cartItems.length})
  </button>
</nav>

    
      <ProductList addToCart={addToCart} />

      {isModalOpen && (
        <Cart 
          cartItems={cartItems} 
          removeFromCart={removeFromCart} 
          closeModal={closeModal} 
        / >
      )}

      
      <h1 className="bg-gray-500 text-white  font-bold flex items-center justify-center p-2">
 <span><i className="fab fa-github "></i></span> <span className='pl-2'>Sanjay-Sharva</span>
</h1>
  
 

    </div>
  );
};

export default App;
