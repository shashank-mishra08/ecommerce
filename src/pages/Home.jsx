import React, { useEffect, useState } from 'react'
import Spinner from '../components/Spinner';
import Product from '../components/Product';
const Home = () => {
    const API_URL = "https://fakestoreapi.com/products"
    const[loading, setLoading] = useState(false);
    const[posts, setPosts] = useState([]); // saara ka saara data hmne post naam ke state variable me save kara li hai

    async function fecthProductData() {
      setLoading(true);
      try{
        const res = await fetch(API_URL)
        const data = await res.json()
        setPosts(data);

      }
        catch(error){
          console.log("error aa gaya ji")
          setPosts([])
        }
        setLoading(false)
    }
      useEffect(()=>{
        fecthProductData()
      },[])
    
  return (
    <div>
      {
        loading ? <Spinner/> : posts.length > 0 ?
         (<div className='grid lg:grid-cols-4 sm:grid-cols-2 md:grid-cols-3 mx-auto  min-h-[80vh] space-y-10 space-x-5 p-7 max-w-7xl'>
         {
          posts.map((post)=>{
            return <Product post={post} key={post.id}/>
          })
         }
         </div>) :
          (<div> <p className="flex justify-center items-cente font-bold">No Data Found</p> </div>) 
      }
    </div>
  )


}

export default Home