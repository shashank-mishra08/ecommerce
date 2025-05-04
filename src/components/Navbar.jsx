import React from 'react'
import { TiShoppingCart } from "react-icons/ti";
import { NavLink } from 'react-router-dom';
import slogo from '../assets/image.png'
import { useSelector } from 'react-redux';

const Navbar = () => {
    const cart = useSelector((state)=>state.cart)
  return (
    <div>
        <div className='flex h-20 justify-evenly   items-center mx-auto bg-blue-500'>
            <NavLink to={'/'}>
                <div className='ml-5'>
                <img src={slogo} className='w-20 h-25'/>
                </div>
            </NavLink>
           

            <div className='flex flex-row gap-7 items-center font-medium text-slate-100 mr-5'>
                <NavLink to={'/'}>
                <p>Home</p>
                </NavLink>

            <NavLink to="/cart">
              <div className="relative">
                  <TiShoppingCart className="text-2xl"/>
                  {
                    cart.length > 0 &&
                    <span className="absolute -top-1 -right-2 bg-green-600 text-xs w-5 h-5 flex 
                     justify-center items-center animate-bounce rounded-full text-white" >{cart.length}</span>
                  }
                </div>
            </NavLink>
                
            </div>



        </div>
    </div>
  )
}

export default Navbar