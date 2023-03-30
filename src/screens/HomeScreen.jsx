import React from 'react'
import products from '../assets/products'
import Product from '../components/Product'

const HomeScreen = () => {
  return (
    <>
        <h1 className='ml-10 pt-5 text-3xl font-medium'>LATEST PRODUCTS</h1>

        <div className='flex flex-wrap justify-left items-center mx-5 pt-0'>
            { products.map( product => (
                <Product key={product._id} product={product} />
                )) }
        </div>
                
    </>
  )
}

export default HomeScreen