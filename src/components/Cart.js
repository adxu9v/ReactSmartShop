import React, { useState } from 'react'
import { useSelector,useDispatch } from 'react-redux'
import { increase, decrease, deleteCart, buy } from '../store'
import { useNavigate } from 'react-router-dom'
function Cart(){
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const stateData = useSelector( state => state.cartData )
  const btnFunction = [increase, decrease, deleteCart]
  const btnText = ['+', '-', '삭제']
  const total = (arr) => {
    return arr.reduce((cal, data) => {
      return cal + data.price * data.count;
    }, 0);
  };
  const [modal,setModal] = useState(false)
  return (
   <>{stateData.length !== 0 ? 
   stateData.map( data => <div key={data.id} className='cartContainer'> 
   <img src={data.image} alt={data.image} onClick={()=>{navigate(`/about/${data.id}`)}}/>
   <h2>{data.name}</h2><p> 수량 : {data.count}</p><p>총 가격 : {(data.price*data.count).toLocaleString()} 원</p>
   {btnFunction.map( (res, i) =>  <React.Fragment key={i}><button onClick={ () => { 
     dispatch(res(data.id)) } }>{btnText[i]}</button></React.Fragment> )}
   </div> ) :<div><h2>아무것도 없습니다. 상품을 장바구니에 추가해 주세요.</h2></div>}
   <div className='buyContainer'>
    <h4>총금액 :{total(stateData).toLocaleString()} 원</h4>
    {stateData.length !== 0 ? <button onClick={()=>{setModal(true)}}>구매하기</button> : null}
    {modal ? <div className='cartModal' > 총금액 : {total(stateData).toLocaleString()} 원 <button onClick={()=>{dispatch(buy()); setModal(false); navigate('/'); window.scrollTo(0,0)}}>구매하시겠습니까?</button><div className='modalClose' onClick={()=>{setModal(false)}}>X</div></div> : null}
   </div>
   </>
  )
}

export default Cart

