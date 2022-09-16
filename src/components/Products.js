import {useNavigate} from 'react-router-dom'
import {useSelector, useDispatch} from 'react-redux'
import {sortCart, sortName, sortRank} from '../store'
import Slide from './Slide'
import React, { useState } from 'react'
function Products(){
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const stateData = useSelector( state => state.productData )
    const sortText = ['가격정렬', '이름정렬', '인기정렬']
    const sortFunction = [sortCart,sortName,sortRank]
    const [sortChange,setSortChange] = useState('인기정렬')
    return(
        <>
             <Slide/>
             <div className='sortBox'>
                <h4>{sortChange}</h4>
                <div className='sortBtnBox'>
                {sortText.map( (res,i) => 
                    <React.Fragment key={i}>
                        <button onClick={() => {
                            dispatch( sortFunction[i]() );
                            setSortChange( res );
                             } }>{res}</button>
                    </React.Fragment> )}
                </div>
            </div>
            <div className='productsBox'>
                {stateData.map( productData => 
                    <div className='box' onClick={()=>{navigate(`/about/${productData.id}`)}} key={productData.id}>
                        <img src={productData.image} alt={productData.image} />
                        <h4>{productData.title}</h4>
                        <p>{productData.price.toLocaleString()} 원</p>
                    </div>)}
            </div>
        </>
    )
}
export default Products