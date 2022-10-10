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
                <h1 className='logo'>Smart <span>Shop</span></h1>
            </Link>
            {/* 카트박스, 클릭 시 카트 페이지로 이동 */}
          <div className='cartBox'>
            {/* 카트아이콘 */}
            <ul>
              <li>검색</li>
              <li>로그인</li>
              <li>
                <Link to='/Cart'>
                  <FontAwesomeIcon className='icon' icon={faCartShopping} />
                  {cart.length ? <p className='cartNumber'>{cart.length}</p> : null}
                </Link>
              </li>
            </ul>
              {/* 카트 컴포넌트 내에 상품이 없으면 표시x, 상품이 있으면 해당 갯수만큼 표시 */}
              
          </div>
        </nav>}
    </>
  )
}

export default Nav