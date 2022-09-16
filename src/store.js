import {configureStore, createSlice} from '@reduxjs/toolkit'
import data from './data'
const productData = createSlice({
    name:'data',
    initialState: data,
    reducers: {
        sortCart(state){
            return state.sort((a, b) => { return a.price - b.price})
        },
        sortName(state){
            return state.sort((a, b) => {
            if(a.title < b.title) return -1;
            if(a.title > b.title) return 1;
            if(a.title === b.title) return 0;
            else return -1;
          })
        },
        sortRank(state){
            return state.sort((a, b)=>{ return a.id - b.id})
        }
    }
})
const cartData = createSlice({
    name:'cartData',
    initialState:[
        {id : 0, name : 'Iphone 13 Pro', count : 2, price : 1499000, image : data[0].image},
        {id : 2, name : 'Galaxy Z Flip 3', count : 1, price : 1254000, image : data[2].image}
      ],
      reducers: {
          add(state,actions){
              if(state.find(item => item.id === actions.payload.id)){alert('이미 있는 상품입니다.')}
              else{state.push({id:actions.payload.id, name:actions.payload.title, count:1, price:actions.payload.price, image:actions.payload.image})}
          },
          increase(state,actions){
        const data = state.find(item => item.id === actions.payload)
        data.count++
          },
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
          deleteCart(state,actions){
              return state.filter(state => state.id !== actions.payload)
          },
          buy(state,actions){
              return state = []
               
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