import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

function CategoryFilter() {
  return (
    <div>
      <div className='d-flex flex-column pt-4 mt-5'>
      <span className="fs-5 fw-bold  ps-3 ">Category:</span>
        <div className='col pt-3'>
            <Link href={'/Category/books/cat_RyWOwmv26onEa2'} className='category-link ps-2'>
                <Image alt="category" src={'/catbook.jpg'} width={80} height={50} className='rounded'></Image>  <span style={{fontSize:'medium'}}>Books</span></Link>
        </div>
        <div className='col-12 pt-3'>
            <Link href={'/Category/groceries/cat_DWy4oGRaMw6Jx2'} className='category-link ps-2'>
            <Image alt="category" src={'/catgrocery.jpg'} width={80} height={50} className='rounded'></Image>  <span style={{fontSize:'medium'}}>Groceries</span>
            </Link>
        </div>
        <div className='col-12 pt-3'>
            <Link href={'/Category/kids-fashion/cat_zkK6oL6GVlXn0Q'} className='category-link ps-2'>
            <Image alt="category" src={'/catkids.jpg'} width={80} height={50} className='rounded'></Image>  <span style={{fontSize:'medium'}}>Kids Fashion</span>
            </Link>
        </div>
        <div className='col-12 pt-3'>
            <Link href={'/Category/electronics/cat_4WJvlKELMobYV1'} className='category-link ps-2'>
            <Image alt="category" src={'/catelectronics.jpg'} width={80} height={50} className='rounded'></Image>  <span style={{fontSize:'medium'}}>Electronics</span>
            </Link>
        </div>
      </div>
    </div>
  )
}

export default CategoryFilter
