import React from 'react'
import {useParams, useNavigate} from 'react-router-dom'
import styled from 'styled-components'
import { useDispatch, useSelector } from 'react-redux'
import {add} from '../store'
import { useEffect } from 'react'
function About(){
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const data = useSelector(state => state.productData)
    const {id} = useParams()
    let findProduct = data.find( x => {
        return x.id === Number(id)
      });
      useEffect(()=>{
        window.scrollTo(0,0)
      },[])
  return (
    <div className='aboutBox'>
    <img src={findProduct.image} alt={findProduct.image} />
    <h2>{findProduct.title}</h2>
    <p>{findProduct.content}</p>
    <p>{findProduct.price.toLocaleString()} 원</p>
    <LedBtn onClick={()=>{dispatch(add(findProduct)); navigate('/cart')}}>장바구니 담기</LedBtn>
    </div>
  )
}
const LedBtn = styled.button`
        padding : 5px 20px;
        margin : 10px 5px;
        background-color : #000;
        color : #fff;
        cursor : pointer;
        border-radius : 15px;
        border : none;
        font-size : 16px
    `

export default About