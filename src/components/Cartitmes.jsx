

// yahan pe hmlog banane aaye hain cart ka left wala part
// ye cart.jsx me cart ka left wala part bs alag se banane aayein hain 

import React from 'react'
import { RiDeleteBinLine } from "react-icons/ri";
import { useDispatch } from 'react-redux';
import { remove } from '../redux/slices/cartSlice';
import {toast} from 'react-hot-toast';


console.log("this is cartItems section")
const Cartitmes = ({item}) => {
  const dispatch = useDispatch();
  // const cart = useSelector((state)=>state.cart)

   const removeCartItem = () =>{
      dispatch(remove(item.id))
      toast.success("item removed from cart")
  }
  return (
    <div>
    <div className='flex flex-col md:flex-row  md:p-3   items-center p-2 justify-between gap-5'>
      <div className='w-[30%] '>
        <img src={item.image} className='object-cover items-center'/>
      </div>
      <div className='md:ml-10 self-start space-y-5  w-[100%] md:w-[70%]'>
        <h1 className="text-xl text-slate-700 font-semibold">{item.title}</h1>
        <h1 className="text-base text-slate-700 font-medium">{item.description}</h1>
        <div className="font-bold text-lg text-green-600">₹{item.price}</div>
        <button className="text-red-800  bg-red-200 group hover:bg-red-400 transition-transform duration-300 cursor-pointer rounded-full p-3 mr-3" onClick={removeCartItem}> <RiDeleteBinLine/> </button>
       
      </div>

    </div>
   
    </div>
  )
}

export default Cartitmes