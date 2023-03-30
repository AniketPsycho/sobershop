import React from 'react'
import { Link, NavLink } from 'react-router-dom'

const Header = () => {

  return (
    <div className='bg-[#232B2B] flex h-[10vh] justify-between items-center text-white shadow-lg'>

        <Link to='/' className='font-semibold mx-10 text-md'>SOBER SHOP</Link>

        <div className='flex mr-5 lg:mr-20 text-white/60 font-semibold text-[12px]'>

        <NavLink to='/cart' className={ ({isActive}) => isActive ? 'text-white' : '' } >
            <div className='px-5 py-2'>
                <i className="fa-solid fa-cart-shopping" />
                <span className='pl-2'>CART</span>
            </div>
        </NavLink>

        <NavLink to='/login' className={ ({isActive}) => isActive ? 'text-white' : '' } >
            <div className='px-5 py-2'>
              <i className="fa-solid fa-right-to-bracket" />
                <span className='pl-2'>LOGIN</span>
            </div>
        </NavLink>
        </div>

    </div>
  )
}

export default Header