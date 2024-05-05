import Link from 'next/link';
import React from 'react'

function ProductCard(props:any) {
    const products=props.data;
  return (
    <div>
        <div className='d-flex flex-row flex-wrap m-3 gap-3'>
        {
            products?.map((p:any)=>{
                return (
                    <Link href={'/Products/'+p.id} style={{textDecoration:'none'}}>
                         
            <div className="card text-center pb-4" style={{width:240}}>
                <img src={p.image.url} className="card-img-top mt-2" alt="card image" height={200}/>
                <div className="card-body">
                  <h5 className="card-title fw-bold lead">{p.name}</h5>
                   <p className="card-text fw-bold">${p.price.formatted}</p>
                  <button className='btn btn-success' >BUY NOW</button>
                   
                </div>
              </div>
                    </Link>
                )
            })
        }
    </div>
      
    </div>
  )
}

export default ProductCard
