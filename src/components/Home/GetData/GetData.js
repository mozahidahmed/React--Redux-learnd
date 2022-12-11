import React, { useState , useEffect} from 'react';
import { useSelector } from 'react-redux';
import ProductsCard from './ProductsCard';

const GetData = () => {
    const [products,setProducts]=useState([])

     useEffect (() => {
      fetch('product.json')
      .then((res)=> res.json())
      .then((data)=>setProducts(data))
     
    }, []);

    const state =useSelector((state)=>state)
    console.log(state)



    return (
        <div>
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 max-w-7xl gap-14 mx-auto my-10'>
    {
      products.map((product)=><ProductsCard key={product._id} product={product}></ProductsCard>
      
    )}

    </div>
        </div>
    );
};

export default GetData;