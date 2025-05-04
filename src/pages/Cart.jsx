import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import CartItems from '../components/Cartitmes';

const Cart = () => {
  const  cart  = useSelector((state) => state.cart); // redux ke store se data laa rahe ho cart ka using useSelector
  console.log("printing items inside the cart which we are calling using useSelector form redux store",cart)
  const [totalAmount, setTotalAmount] = useState(0);

  useEffect(() => {
    let tempAmount = 0;
    for (let i = 0; i < cart.length; i++) {
      tempAmount += cart[i].price;
    }
    setTotalAmount(tempAmount);
  }, [cart]); // Run only when cart changes taki ham price me update kr sake agar item remove ya add hua hoga to

  return (
    <div>
      {cart.length > 0 ? (
        <div>
          {/* Aur iske andar cart ka left and right part dono hai */}
          <div className='max-w-[1200px] mx-auto flex flex-col md:flex-row justify-center'>
            {/* ================== */}
            {/* ye hai cart ka LEFT wala part */}
            <div className='w-[100%] flex flex-col p-2 md:w-[60%]'>
              {cart.map((item, index) => (
                <CartItems key={item.id || index} item={item} />
              ))}
            </div>

            {/* ========================= */}
            {/* Aur ye hai cart ka RIGHT wala part */}
            <div className='w-[100%] flex flex-col mt-5 md:w-[40%]'>
              <div className='flex flex-col gap-5 my-14 justify-between h-[50%]'>
                <div>
                <p className="font-semibold text-xl text-green-800 ">Your Cart</p>
                <p className="font-semibold text-5xl text-green-700  ">Summary</p>
                </div>
                <p className="text-gray-700 font-semibold text-xl">Total Items: {cart.length}</p>
              </div>
              <div className='flex flex-col'>
                <p className="text-xl font-bold"><span className="text-green-700 font-semibold"> Total Amount: </span> ₹{totalAmount}</p>
                <button className="bg-green-700 hover:bg-purple-50 rounded-lg text-white transition duration-300 ease-linear mt-5 border-2 border-green-600 font-bold hover:text-green-700 p-3 text-xl"> Checkout Now </button>
              </div>
            </div>
            {/* ======================== */}
          </div>
        </div>
      ) : (
        <div className='flex flex-col items-center mt-10'>
         <h1 className='font-semibold text-xl mb-2 text-gray-800'> The cart is empty</h1>
          <Link to="/">
            <button className="uppercase bg-green-600 hover:bg-blue-200 rounded-lg text-white transition duration-300
             ease-linear mt-5 border-2 border-green-600 font-semibold hover:text-green-700 p-3 px-10 tracking-wider">Shop Now</button>
          </Link>
        </div>
      )}
    </div>
  );
};

export default Cart;