import React from 'react'
import { Link } from 'react-router-dom'
import Rating from './Rating'

const Product = ({product}) => {
  return (
      <div className='h-[310px] border-2 border-black/25 p-2 m-5'>
            <Link to={`/product/${product._id}`}>
            
            <img src={product.image} alt={product.name} className='h-40 w-52' />

            <div className='w-[150px] text-[12px] break-words overflow-hidden p-2 pl-3'>         
                <strong>{product.name}</strong>
            </div>

            <div className='py-0 px-5 text-sm font-medium'>
                <Rating value={product.rating} text={`${product.numReviews} reviews`} />
            </div>

            <div className='py-1 px-5 text-lg font-semibold'>
                ${product.price}
            </div>

        </Link>
    </div>

  )
}

export default Product