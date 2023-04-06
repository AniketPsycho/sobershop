import React from 'react'
import { Link } from 'react-router-dom'
import Rating from './Rating'

const Product = ({product}) => {
  return (
      <div className='h-[290px] border-2 border-black/25 p-2 m-5'>
            <Link to={`/product/${product._id}`}>
            
            <img src={product.image} alt={product.name} className='h-40 w-52' />

            <div className='pt-2 pl-2'>
                <div className='w-[200px] h-[39px] text-[12px] break-words overflow-hidden'>         
                    <strong>{product.name}</strong>
                </div>

                <div className='pt-1 text-sm font-medium'>
                    <Rating value={product.rating} text={`${product.numReviews} reviews`} />
                </div>

                <div className='py-1 text-lg font-semibold'>
                    ${product.price}
                </div>
            </div>

        </Link>
    </div>

  )
}

export default Product