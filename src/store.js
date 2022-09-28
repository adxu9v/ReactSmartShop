import {configureStore, createSlice} from '@reduxjs/toolkit'
import data from './data'
//프로덕트 컴포넌트
const productData = createSlice({
    name:'data',
    initialState: data,
    reducers: {
        //프로덕트 컴포넌트 상품 정렬(가격)
        sortCart(state){
            return state.sort((a, b) => { return a.price - b.price})
        },
        //프로덕트 컴포넌트 상품 정렬(이름)
        sortName(state){
            return state.sort((a, b) => {
            if(a.title < b.title) return -1;
            if(a.title > b.title) return 1;
            if(a.title === b.title) return 0;
            else return -1;
          })
        },
        //프로덕트 컴포넌트 상품 정렬(랭크, 아이디 기반)
        sortRank(state){
            return state.sort((a, b)=>{ return a.id - b.id})
        }
    }
})
//카트 컴포넌트
const cartData = createSlice({
    name:'cartData',
    //카트 안에 이미 담겨여 있는 데이터
    initialState:[
        {id : 0, name : 'Iphone 13 Pro', count : 2, price : 1499000, image : data[0].image},
        {id : 2, name : 'Galaxy Z Flip 3', count : 1, price : 1254000, image : data[2].image}
      ],
      reducers: {
          //어바웃 컴포넌트 안에서 상품 추가하기 버튼 누를시 발생하는 이벤트
          add(state,actions){
            //이미 있는 상품이라면 '이미 있는 상품입니다.' 문구를 출력
            if(state.find(item => item.id === actions.payload.id)){alert('이미 있는 상품입니다.')}
            //카트 컴포넌트 안에 해당 상품이 없으면 추가를 하고 카트 컴포넌트로 이동
            else{state.push({id:actions.payload.id, name:actions.payload.title, count:1, price:actions.payload.price, image:actions.payload.image})}
          },
          //카트 컴포넌트 안의 상품 갯수 증가 이벤트
          increase(state,actions){
        const data = state.find(item => item.id === actions.payload)
        data.count++
          },
          //카트 컴포넌트 안의 상품 갯수 감소 이벤트
          decrease(state,actions){
            const data = state.find(item => item.id === actions.payload)
            if(data.count <= 1){
                alert('1개 미만의 갯수는 구매가 불가능합니다.')
                data.count = 1
            }
            else{
                data.count--
            }
          },
          //카트 컴포넌트 안의 상품 제거
          deleteCart(state,actions){
              return state.filter(state => state.id !== actions.payload)
          }
      } 
})
export const {sortCart, sortName, sortRank} = productData.actions
export const { add,increase, decrease, deleteCart, buy } = cartData.actions

export default configureStore({
    reducer: {
        productData : productData.reducer,
        cartData : cartData.reducer
    }
})