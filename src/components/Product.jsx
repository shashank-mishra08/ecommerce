import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { toast } from "react-hot-toast";
import { add, remove } from '../redux/slices/cartSlice';


// ye post wo hai jimse saare product ka id hai
const Product = ({post}) => {
  const cart = useSelector((state)=>state.cart )
  // function call redux wale case me ham kr skte using dispatch
  const dispatch = useDispatch();
  const addToCart = () =>{
    dispatch(add(post))
    toast.success("item added to cart")
  }
  const removeFromCart = ()=>{
    dispatch(remove(post.id))
    toast.error("item removed from cart")
  }
  return (
    <div className='flex flex-col items-center justify-items-center-safe  gap-3 mt-10 p-4 ml-5 rounded-xl outline hover:scale-110
     transition duration-300 ease-in'>
      <div>
        <p className="text-gray-700 font-semibold text-lg text-left mt-2 w-40 truncate">{post.title}</p>
      </div>

      <div className='text-gray-600 font-normal text-[10px] w-50 '>
        {post.description.split(" ").slice(0,10).join(" ") + "..."}
      </div>

      <div className='h-[180px]'> 
        <img src={post.image} className='h-full w-full'/>
      </div>

      

     <div className='flex justify-between gap-12 items-center w-full mt-5 '>
     <div className=''>
        <p className='text-green-600 font-semibold'> ₹{post.price} </p>
      </div>
      { 
        cart.some((p)=> p.id ==post.id) ? 
        (
          <button className='border-2 border-gray-700 rounded-full font-semibold uppercase text-[12px] px-3 p-1 hover:bg-gray-700
          hover:text-white transition duration-300 ease-in'
           onClick={removeFromCart}>Remove Item</button>
        ):
        (
         <div> <button className='border-2 border-gray-700 rounded-full font-semibold uppercase text-[12px] px-3 p-1 hover:bg-gray-700
          hover:text-white transition duration-300 ease-in'
          onClick={addToCart}  >Add to Cart</button> </div>
        )
      }
     </div>
    
    </div>
  )
}

export default Product