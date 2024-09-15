import React, { useEffect, useState } from 'react';
import '@fortawesome/fontawesome-free/css/all.min.css';

const Cart = ({ cartItems, removeFromCart, closeModal }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [cart, setCart] = useState([]);

  useEffect(() => {
    setIsOpen(true);

    const cartWithQuantities = cartItems.map(item => ({
      ...item,
      quantity: 1, // Start quantity from 1
    }));
    setCart(cartWithQuantities);
  }, [cartItems]);


  const totalPrice = cart.reduce((total, item) => total + item.price * item.quantity, 0);

  const handleIncrement = (index) => {
    const updatedCart = [...cart];
    updatedCart[index].quantity += 1;
    setCart(updatedCart);
  };

  const handleDecrement = (index) => {
    const updatedCart = [...cart];
    if (updatedCart[index].quantity > 1) {
      updatedCart[index].quantity -= 1;
    }
    setCart(updatedCart);
  };

  return (
    <div className="fixed inset-0 bg-gray-800 bg-opacity-50 flex items-center justify-end">
      <div
        className={`bg-white p-6 w-96 transform transition-transform duration-500 ease-in-out ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <h2 className="font-bold text-xl mb-4">Your Cart</h2>

        {cart.length > 0 ? (
          <>
            {cart.map((item, index) => (
              <div key={index} className="justify-between mb-2">
                <table>
                  <tbody>
                    <tr>
                      <th><span>{item.title}</span></th>
                    </tr>
                    <tr>
                      <td>
                        <span>${item.price.toFixed(2)}</span>
                        <div className="flex items-center">
                        
                          <button
                            className="mx-2"
                            onClick={() => handleDecrement(index)}
                          >
                            <i className="fas fa-minus p-1 border border-black rounded-md bg-black hover:bg-gray-100 text-white"></i>
                          </button>
                          
                          <span>{item.quantity}</span>

                   
                          <button
                            className=" mx-2"
                            onClick={() => handleIncrement(index)}
                          >
                            <i className="fas fa-plus p-1 border border-black rounded-md bg-black hover:bg-gray-100 text-white"></i>
                          </button>
                        </div>
                      </td>
                      <td>
                        <button
                          className="ml-2 text-red-500"
                          onClick={() => removeFromCart(item)}
                        >
                          <i className="fas fa-trash"></i>
                        </button>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            ))}

            <div className="mt-4 font-bold text-lg">
              Total Amount: ${totalPrice.toFixed(2)}
            </div>

            <button
              className="mt-4 text-black py-2 px-4 w-full rounded bg-yellow-300" disable
            >
              Proceed to Checkout
            </button>
          </>
        ) : (
          <p>No items in cart</p>
        )}

  
        <button
          onClick={() => {
            setIsOpen(false);
            setTimeout(closeModal, 500); 
          }}
          className="mt-4 bg-black text-white py-2 px-4 rounded w-full"
        >
          Close
        </button>
      </div>
    </div>
  );
};

export default Cart;
