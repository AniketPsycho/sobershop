import React from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import Rating from "../components/Rating"

import products from "../assets/products" 

const ProductScreen = () => {

  const navigate = useNavigate();

  const {id} = useParams();
  const product = products.find( prod => prod._id === id)

  return (
    <div className='mx-10 my-12'>
      <button className='text-[#373535] lg:ml-10 my-5' onClick={ () => navigate(-1) }>Go Back</button>

      <div className='flex flex-wrap lg:mx-10'>

        <div className='border-2 border-black/5 shadow-md'>
          <img className='object-contain h-[400px] w-[400px]' src={product.image} alt={product.name} />
        </div>


        <div className='flex flex-col w-[350px] mx-10'>

          <h1 className='px-5 my-5 font-bold'>{product.name}</h1>

          <div className='flex flex-row px-5 py-2 border-y-2 border-black/10 text-black/60 text-sm'>
            <Rating className='' value={product.rating} text={`${product.numReviews} reviews`} />
          </div>

          <strong className='px-5 py-2 border-b-2 border-black/10 font-normal text-black/60 text-sm'>Price: ${product.price}</strong>

          <p className='break-words px-5 py-5 text-[13px] text-black/60'>Description : {product.description}</p>

        </div>


        <div className='flex flex-col text-[13px] text-black/80'>

          <div className='border-2 border-black-10 p-3 pl-5 pr-10'>
              <strong className='font-normal'>Price</strong>
              <strong className='font-normal ml-20'>${product.price}</strong>
          </div>

          <div className='border-2 border-t-0 border-black-10 p-3 pl-5 pr-10'>
            <strong className='font-normal'>Status</strong>
            <strong className='font-normal ml-20'>{ product.countInStock > 0 ? 'In Stock' : 'Out Of Stock' }</strong>
          </div>

          <div className='border-2 border-t-0 border-black-10 p-3 px-5'>
            <button className={`p-2 py-3 bg-black text-white w-full ${product.countInStock > 0 ? 'bg-black' : 'bg-black/50 cursor-default'} `}>ADD TO CART</button>
          </div>


        </div>


      </div>
    </div>
  )
}

export default ProductScreen