import React, { useState } from 'react'
import {Link} from 'react-router-dom'
import {useSelector} from 'react-redux'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faCartShopping} from '@fortawesome/free-solid-svg-icons'
function Nav(){
    const cart = useSelector((state)=>state.cartData)
  return (
    <>
        {<nav>
            <Link to='/'>
                <h2>Smart <span>Shop</span></h2>
            </Link>
          <div className='cartBox'>
              <Link to='/Cart'>
                <FontAwesomeIcon className='icon' icon={faCartShopping} />
              </Link>
              {cart.length ? <p>{cart.length}</p> : null}
          </div>
        </nav>}
    </>
  )
}

export default Nav