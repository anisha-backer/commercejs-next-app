import React from 'react'
import { ProductServices } from '../Services/Product-Services'
import ProductCard from '../Components/ProductCard/ProductCard';

async function Products() {
    const data =await ProductServices.getProducts();
  return (
    <div>
       <div className='row'>
      <div className='col'>
        
      </div>
      <div className='col-11'>
        <ProductCard data={data}/>
      </div>
    </div>
    </div>
  )
}

export default Products
