import {Link} from 'react-router-dom'
import {useSelector} from 'react-redux'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faCartShopping} from '@fortawesome/free-solid-svg-icons'
function Nav(){
    const cart = useSelector((state)=>state.cartData)
  return (
    <>
        {<nav>
          {/* 로고 */}
            <Link to='/'>
                <h1>Smart <span>Shop</span></h1>
            </Link>
            {/* 카트박스, 클릭 시 카트 페이지로 이동 */}
          <div className='cartBox'>
            {/* 카트아이콘 */}
              <Link to='/Cart'>
                <FontAwesomeIcon className='icon' icon={faCartShopping} />
              </Link>
              {/* 카트 컴포넌트 내에 상품이 없으면 표시x, 상품이 있으면 해당 갯수만큼 표시 */}
              {cart.length ? <p>{cart.length}</p> : null}
          </div>
        </nav>}
    </>
  )
}

export default Nav